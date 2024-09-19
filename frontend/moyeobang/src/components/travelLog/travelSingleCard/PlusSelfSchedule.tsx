/** @jsxImportSource @emotion/react */
import React, {useState} from 'react';
import {css} from '@emotion/react';
import {colors} from '@/styles/colors';
import {useTravelLogContext} from '@/contexts/TravelLog';
import blueBlankCheck from '@/assets/icons/blueBlankCheck.png';
import blueCheck from '@/assets/icons/blueCheck.png';
import hamburgerBtn from '@/assets/icons/hamburgerButton.png';
import informationBtn from '@/assets/icons/information.png';
import doubleDown from '@/assets/icons/doubleDown.png';
import MessagePopup from '@/components/common/messagePopup/MessagePopup';
import SettleDetail from './SettleDetail';

const scheduleCardLayout = css`
  height: 140px;
  width: 390px;
  display: flex;
  align-items: center;
`;

const checkBoxStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 60px;
  margin: 5px;
  background-color: ${colors.white};
  position: relative;
  z-index: 5;
`;

const scheduleLetterLayout = css`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: 'semibold';
`;

const oneLineStyle = css`
  display: flex;
  gap: 10px;
`;

const scheduleLetterStyle = css`
  width: 286px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const memoStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  max-width: 230px;
`;

const budgetInputStyle = css`
  height: 30px;
  width: 125px;
  border-radius: 45px;
  border: 2px solid ${colors.third};
  font-size: 20px;
  font-family: 'semibold';
  color: ${colors.strongGray};
  text-align: center;

  &:focus {
    border-color: ${colors.second};
    outline: none;
  }
`;

export default function Schedule({
  schedule,
  scheduleNum,
  dragHandleProps,
  dayNum,
}: {
  schedule: PlusSelfSchedule;
  scheduleNum: number;
  dragHandleProps: any;
  dayNum: number;
}) {
  const getTimeFromSchedule = (scheduleTime: string) => {
    return scheduleTime.split('T')[1].slice(0, 5); // "T" 이후의 시간 부분에서 앞 5글자만 추출 ("HH:MM")
  };

  const [budget, setBudget] = useState<number | string>(
    schedule.predictedBudget
  ); // 초기값을 schedule의 predictedBudget으로 설정

  const handleBudgetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedBudget = parseInt(e.target.value, 10);
    setBudget(updatedBudget);
  };

  const handleBudgetFocus = () => {
    setBudget(''); // 클릭 시 값 비우기
  };

  const handleBudgetBlur = () => {
    if (budget === '') {
      setBudget(schedule.predictedBudget);
    }
    console.log('전송할 예산:', budget);
  };

  // 완료 여부
  const {travelSchedules, setTravelSchedules} = useTravelLogContext();
  // 로컬 상태 제거, 전역 상태로 관리
  const toggleCompletion = () => {
    // 새로운 일정 리스트를 생성하고 completion을 토글
    const updatedSchedules = travelSchedules.map(
      (day: Schedules, index: number) => {
        if (index + 1 === dayNum) {
          return day.map((item: PlusSelfSchedule | PaidAutoSchedule) => {
            // 'item'이 PlusSelfSchedule 타입인지 확인 (scheduleId가 있는지 확인)
            if ('scheduleId' in item) {
              return {
                ...item,
                completion:
                  item.completion === 'completed' ? 'pending' : 'completed',
              };
            }
            return item;
          });
        }
        return day;
      }
    );

    setTravelSchedules(updatedSchedules);
    // [todo] 이때 완료 상태로 변경된 일정 목록 api로 전달
  };

  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<JSX.Element | string | null>(
    null
  );

  const difference = schedule.matchedTransaction
    ? schedule.predictedBudget - schedule.matchedTransaction.amount
    : 0;
  const differenceColor = difference < 0 ? colors.customRed : colors.customBlue;

  const handleInfoClick = () => {
    let message = null;

    if (schedule.matchedTransaction) {
      message = (
        <div>
          예상비용보다{' '}
          <span style={{color: differenceColor}}>{Math.abs(difference)}원</span>{' '}
          사용했나방
        </div>
      );
    } else {
      message = (
        <div>
          여기서는 N명이서 평균 <br />
          <span style={{color: colors.customBlue}}>
            {schedule.predictedBudget}원
          </span>{' '}
          사용했나방
        </div>
      );
    }

    setPopupMessage(message);
    setShowPopup(prev => !prev);
  };

  return (
    <div css={scheduleCardLayout}>
      {/* 체크리스트 완료 여부 */}
      <div css={checkBoxStyle}>
        <img
          src={schedule.completion === 'completed' ? blueCheck : blueBlankCheck}
          alt="체크리스트"
          style={{width: '30px', height: '30px', margin: '5px'}}
          onClick={toggleCompletion}
        />
        <span
          style={{
            fontSize: '12px',
            marginBottom: '5px',
            color: colors.lightBlack,
          }}
        >
          {schedule.matchedTransaction?.paymentTime
            ? getTimeFromSchedule(schedule.matchedTransaction.paymentTime)
            : getTimeFromSchedule(schedule.scheduleTime)}
        </span>
      </div>

      {/* 일정 카드 */}
      <div css={scheduleLetterLayout}>
        <div css={scheduleLetterStyle}>
          <div style={{fontFamily: 'semibold', fontSize: '24px'}}>
            {scheduleNum}. {schedule.scheduleTitle}
          </div>

          {/* 결제 비용인지 예상 비용인지 보여줌 */}
          {schedule.matchedTransaction?.amount ? (
            <div css={oneLineStyle}>
              <span>결제 비용</span>
              <span style={{color: colors.fifth}}>
                {schedule.matchedTransaction.amount.toLocaleString()}원
              </span>
              <div style={{position: 'relative'}}>
                <img
                  src={informationBtn}
                  alt="information"
                  onClick={handleInfoClick}
                  style={{width: '18px', height: '18px', cursor: 'pointer'}}
                />
                {showPopup && popupMessage && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '120%',
                      left: '50%',
                      transform: 'translateX(-80%)', // 팝업을 중앙 정렬
                      width: 'max-content', // 텍스트에 맞게 너비 조정
                    }}
                  >
                    <MessagePopup>{popupMessage}</MessagePopup>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div css={oneLineStyle} style={{alignItems: 'center'}}>
              <span>예상 비용</span>
              <span>
                <input
                  style={{marginRight: '5px'}}
                  type="text"
                  value={budget}
                  onChange={handleBudgetChange}
                  onFocus={handleBudgetFocus}
                  onBlur={handleBudgetBlur}
                  css={budgetInputStyle}
                />
                원
              </span>
              <div style={{position: 'relative'}}>
                <img
                  src={informationBtn}
                  alt="information"
                  onClick={handleInfoClick}
                  style={{width: '18px', height: '18px', cursor: 'pointer'}}
                />
                {showPopup && popupMessage && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '120%',
                      left: '50%',
                      transform: 'translateX(-80%)', // 팝업을 중앙 정렬
                      width: 'max-content', // 텍스트에 맞게 너비 조정
                    }}
                  >
                    <MessagePopup>{popupMessage}</MessagePopup>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 메모 */}
          <div css={oneLineStyle}>
            <span>메모</span> <span css={memoStyle}>{schedule.memo}</span>
          </div>

          {/* 아래로 당기기 표시 */}
          {schedule.matchedTransaction?.amount ? (
            <>
              <SettleDetail></SettleDetail>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={doubleDown} alt="아래로 당기기" />
              </div>
            </>
          ) : null}
        </div>

        {/* 카드 이동 */}
        <div style={{width: '34px', textAlign: 'center'}}>
          <img
            src={hamburgerBtn}
            alt="일정 카드 이동"
            style={{width: '16px'}}
            {...dragHandleProps}
          />
        </div>
      </div>
    </div>
  );
}
