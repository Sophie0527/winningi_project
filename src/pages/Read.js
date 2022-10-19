import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Descriptions, PageHeader } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EditModalCompo from '../components/Board/EditModalCompo';

const Read = () => {
  const params = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://winningi-default-rtdb.asia-southeast1.firebasedatabase.app/board/${params.id}.json`
      )
      .then(res => setData(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { title, content, date, url, writer } = data;
  return (
    <Container>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={false}
          onBack={() => window.history.back()}
          title={title}
        >
          <Descriptions size="large" column={1}>
            <Descriptions.Item label="작성자">{writer}</Descriptions.Item>

            <Descriptions.Item label="작성시간">{date}</Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </div>
      <ContentBox>
        <img src={url} width="100%" alt="사진" />
        <p>{content}</p>
      </ContentBox>
      <EditModalCompo fixdata={data} index={params.id} setData={setData} />
    </Container>
  );
};

export default Read;

const Container = styled.div`
  max-width: 1100px;
  border: 2px solid #eee;
`;
const ContentBox = styled.div`
  width: 100%;
  padding: 25px 24px;
  border-top: 2px dashed #eee;
  img {
    padding: 20px;
    border: 1px solid #eee;
    margin-bottom: 30px;
  }
  p {
    font-size: 17px;
    line-height: 25px;
    margin-bottom: 20px;
  }
`;
