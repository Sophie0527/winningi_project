import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS } from 'chart.js/auto';
import MonthlyVisitorsChart from '../components/MainPage/MonthlyVisitorsChart';
import UserAgeChart from '../components/MainPage/UserAgeChart';
import MonthlyPostsChart from '../components/MainPage/MonthlyPostsChart';

const Main = () => {
  return (
    <Layout>
      <Container>
        <LeftBox>
          <AgeChartBox>
            <UserAgeChart />
          </AgeChartBox>
        </LeftBox>
        <RightBox>
          <VisitorsChartBox>
            <MonthlyVisitorsChart />
          </VisitorsChartBox>
          <PostsChartBox>
            <MonthlyPostsChart />
          </PostsChartBox>
        </RightBox>
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
const LeftBox = styled.div`
  padding: 10px;
  margin: 5px;
`;
const RightBox = styled.div`
  padding: 10px;
  margin: 5px;
  display: flex;
  justify-content: center;
`;
const AgeChartBox = styled.div`
  padding: 20px;
  background-color: white;
`;

const VisitorsChartBox = styled.div`
  padding: 20px;
  background-color: white;
`;
const PostsChartBox = styled.div`
  padding: 20px;
  background-color: white;
`;
