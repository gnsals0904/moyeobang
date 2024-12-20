import React from "react";
import { css } from "@emotion/react";
import { colors } from "@/styles/colors";
import {format} from 'date-fns';
import {ko} from 'date-fns/locale';

export interface TransactionDetailDefaultCardProps {
    paymentName:PaymentName;
    money:Money;
    createdAt:CreatedAt;
    acceptedNumber:AcceptedNumber; // 승인번호
    adress:Adress;
}

const placeStyle = css`
    font-family: 'semibold';
    font-size:24px;
    color: ${colors.fifth};
`;

const layoutStyle = css`
    padding: 20px 5px 0 5px;
    display:flex;
    flex-direction:column;
    gap:22px;
    border-top: solid 3px ${colors.lightGray};
`;

const boxStyle = css`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
`;

const labelStyle = css`
    font-family:'semibold';
    font-size: 20px;
`;

const textStyle = css`
    font-family:'regular';
    font-size: 16px;
`;

const adressStyle=css`
    font-family:'regular';
    font-size: 16px;
    width:240px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align:right;
`;

export default function TransactionDetailDefaultCard({
    paymentName,
    money,
    createdAt,
    adress,
    acceptedNumber
    } : TransactionDetailDefaultCardProps) {

    return (
        <>
            <div css={placeStyle} >{paymentName}</div>
            <div css={layoutStyle}>
                <div css={boxStyle}>
                    <div css={labelStyle} >금액</div>
                    <div css={textStyle}>{money.toLocaleString()}원</div>
                </div>
                <div css={boxStyle}>
                    <div css={labelStyle}>승인번호</div>
                    <div css={textStyle}>{acceptedNumber.slice(0,13)}</div>
                </div>
                <div css={boxStyle}>
                    <div css={labelStyle}>일시</div>
                    <div css={textStyle}>{format(createdAt,'yyyy-MM-dd HH:mm', {locale: ko})}</div>
                </div>
                <div css={boxStyle}>
                    <div css={labelStyle}>주소</div>
                    <div css={adressStyle}>{adress}</div>
                </div>
            </div>
        
       </>
    )
}