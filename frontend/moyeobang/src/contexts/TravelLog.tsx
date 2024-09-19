import React, {createContext, useContext, useState} from 'react';

// Context 생성
const TravelLogContext = createContext<any>(null);

// Provider 컴포넌트 생성
export const TravelLogProvider = ({children}: {children: React.ReactNode}) => {
  const initialtravelSchedules: TravelLog = [
    [
      {
        scheduleId: 67890,
        scheduleTitle: '도쿄 타워 방문',
        scheduleLocation: '도쿄 타워',
        scheduleTime: '2024-10-01T10:00:00',
        predictedBudget: 50000,
        completion: 'completed',
        memo: '도쿄 타워가서 누구보다 신나게 놀아야지',
        matchedTransaction: {
          transactionId: 78901,
          amount: 50000,
          paymentTime: '2024-10-01T12:15:00',
          details: '도쿄 타워 입장료 결제',
        },
      },
      {
        transactionId: 78902,
        amount: 25000,
        paymentTime: '2024-10-01T16:00:00',
        details: '신주쿠 카페 결제',
      },
    ],
    [
      {
        scheduleId: 67891,
        scheduleTitle: '시부야 거리 탐방',
        scheduleLocation: '시부야',
        scheduleTime: '2024-10-01T13:00:00',
        predictedBudget: 30000,
        completion: 'pending',
        memo: '',
        matchedTransaction: null,
      },
    ],
  ];

  const [travelSchedules, setTravelSchedules] = useState<TravelLog>(
    initialtravelSchedules
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <TravelLogContext.Provider
      value={{
        travelSchedules,
        currentIndex,
        setCurrentIndex,
        setTravelSchedules,
      }}
    >
      {children}
    </TravelLogContext.Provider>
  );
};

// Context 사용을 위한 custom hook 생성
export const useTravelLogContext = () => {
  return useContext(TravelLogContext);
};
