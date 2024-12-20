import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { colors } from '@/styles/colors';
import { css } from '@emotion/react';
import { isConsumptionByMember } from '@/util/typeGaurd';
import { colorList } from '@/util/chartCategoryList';
import { getCategoryImageAndColor } from '@/util/chartCategoryList';

const titleStyle=css`
    font-family:'regular';
    font-size:15px;
    color: ${colors.strongGray};
    text-align:end;
    padding-right:10px;
`;

const RechartContainerStyle=css`
  width:100%;
  height:100%;
  .recharts-surface {
    /* width:100px; */
  }
`;

const emptyChartStyle=css`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  color:${colors.strongGray};
`;

const layoutStyle=css`
  width:100%;
  height:60px;
`;

// 차트에 쓰일 데이터로 변환
function transformChart(data : (ConsumptionProportionByCategory[] | ConsumptionProportionByMember[])) {

  const transformedData = data.reduce((acc, item) => {

    if (isConsumptionByMember(item)) {
      acc[item.participantInfo.memberName] = item.proportion==='NaN' ? 0.0 : Number(item.proportion);
    } else {
      acc[item.categoryName] = Number(item.proportion);
    }

    return acc;
  }, {} as Record<string, number>); // key가 문자열이고 값이 숫자임을 명시.

  return [{name:'소비비율', ...transformedData}]
}

interface HorizonBarGraphProps {
  data?: ConsumptionProportionByCategory[] | ConsumptionProportionByMember[];
  isEmpty:boolean;
}

interface ChartDataProps {
  [key:string] : number | string;
}

export default function HorizonBarGraph({data = [], isEmpty}: HorizonBarGraphProps) {

  // 차트만들 데이터로 변환.
  const chartData :ChartDataProps[]  = transformChart(data)


  // 0인 순간 마지막 인덱스
  const keys = Object.keys(chartData[0]).filter((key) => key != 'name');
  const zeroIndex = keys.findIndex((key) => chartData[0][key]===0); // 0이 없으면 -1반환.
  const endIndex = zeroIndex !== -1? zeroIndex : keys.length

  return (
    <div css={layoutStyle}> 
        <div css={titleStyle}>
            {isEmpty ? 
              '' :
              isConsumptionByMember(data[0]) 
              ? '멤버별 소비 비율(100%기준)' : 
              '카테고리별 소비 비율(100%기준)'
            }
        </div>
      <ResponsiveContainer css={RechartContainerStyle}> 
       {isEmpty ? 
        <div css={emptyChartStyle}>
          {'소비하면 그래프를 보여줄게요!'}
        </div>
       :
      <BarChart
        layout="vertical"
          data={chartData}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }} 
          barGap={0} // 막대 그룹 간 간격 조정
        >
          <XAxis 
          type="number" 
          domain={[0, 100]} 
          tick={false}  
          axisLine={false} 
          tickLine={false} 
          height={0}
          />
          <YAxis 
          type="category" 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={false} 
          width={0}
          />
          {/* <Tooltip /> */}
          {chartData.length > 0 && Object.keys(chartData[0])
            .filter((key) => key !== 'name') // 'name' 키는 제외
            .map((key, index, arr) => (
              <Bar 
              key={key} 
              dataKey={key} 
              stackId="a" 
              fill={ isConsumptionByMember(data[0]) ? colorList[index] : getCategoryImageAndColor(key).color}  
              radius={ arr.length===1 ? [20, 20, 20, 20] : index===0 ? [20, 0, 0, 20] : index===endIndex-1 ? [0, 20, 20, 0] : undefined} 
              />
            ))}
        </BarChart>}
      </ResponsiveContainer>
    </div>
  );
}
