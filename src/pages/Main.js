import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS } from 'chart.js/auto';
import MonthlyVisitorsChart from '../components/MainPage/MonthlyVisitorsChart';
import MonthlyPostsChart from '../components/MainPage/MonthlyPostsChart';
import AgeChart from '../components/MainPage/AgeChart';
import MainFooter from '../components/MainPage/MainFooter';

const Main = () => {
  const Data = [
    { '1월': { visitor: 12, writer: 20 } },
    { '2월': { visitor: 133, writer: 20 } },
    { '3월': { visitor: 1042, writer: 10 } },
    { '4월': { visitor: 103, writer: 201 } },
    { '5월': { visitor: 104, writer: 201 } },
    { '6월': { visitor: 104, writer: 20 } },
    { '7월': { visitor: 104, writer: 210 } },
    { '8월': { visitor: 104, writer: 20 } },
    { '9월': { visitor: 10, writer: 210 } },
    { '10월': { visitor: 110, writer: 210 } },
    { '11월': { visitor: 10, writer: 201 } },
    { '12월': { visitor: 110, writer: 210 } },
  ];

  return (
    <Layout>
      <Container>
        <MonthlyBox>
          <div>
            <h3>월별 방문자 추이</h3>
            <MonthlyVisitorsChart Data={Data} />
          </div>
          <div>
            <h3>월별 게시글 등록수</h3>
            <MonthlyPostsChart Data={Data} />
          </div>
        </MonthlyBox>
        <DividingLine />
        <PercentageBox>
          <div>
            <h3>연령대별 사용자수</h3>
            <AgeChart />
          </div>
        </PercentageBox>
        <DividingLine />
        <MainFooter />
      </Container>
    </Layout>
  );
};
export default Main;

const Layout = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const MonthlyBox = styled.div`
  padding: 10px;
  margin: 5px 5px 10px;
  display: flex;
  justify-content: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 540px) {
    padding: 0px;
  }
  div {
    text-align: center;
    margin: 10px 30px;
    width: 550px;
    @media (max-width: 1280px) {
      margin: 10px;
      width: 500px;
    }
    @media (max-width: 1024px) {
      width: 550px;
      margin: 20px 0;
    }
    @media (max-width: 768px) {
      width: 500px;
    }
    @media (max-width: 540px) {
      width: 300px;
    }
    @media (max-width: 393px) {
      width: 250px;
    }
    h3 {
      font-size: 20px;
      font-weight: 600;
      background-color: whitesmoke;
      padding: 10px 0;
    }
  }
`;
const DividingLine = styled.div`
  border-bottom: 1px solid #f0f2f5;
  width: 100%;
`;
const PercentageBox = styled.div`
  margin: 10px 5px 5px;
  display: flex;
  justify-content: center;
  width: 100%;
  div {
    text-align: center;
    h3 {
      font-size: 20px;
      font-weight: 600;
      margin: 30px 0 -50px;
      background-color: whitesmoke;
      padding: 10px 0;
    }
  }
`;
