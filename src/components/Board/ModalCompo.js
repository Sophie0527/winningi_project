import React, { useState } from 'react';
import { Form, Input, Upload, Button, Modal } from 'antd';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import { storage } from '../../firebase/firebase';
import moment from 'moment/moment';
import axios from 'axios';

const ModalCompo = ({ fatchData, index, isModalOpen, setIsModalOpen }) => {
  const { TextArea } = Input;
  const writeTime = moment().format('MM/DD hh:mm');
  const [antPics, setAntPics] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    id: '',
    title: '',
    content: '',
    date: '',
    url: '',
    writer: '팀13',
  });

  const { title, content, url } = inputValue;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    putWirte();
  };
  const handleCancel = () => {
    setInputValue({ title: '', content: '' });
    setIsModalOpen(false);
  };

  const handleWrite = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const handleAnt = e => {
    setAntPics(e.file.originFileObj);
    firebasGet();
  };

  const firebasGet = async () => {
    setLoading(true);
    await storage
      .ref('images/' + antPics.name)
      .put(antPics)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();
      })
      .then(url => {
        setInputValue({
          ...inputValue,
          id: index + 1,
          url: url,
          date: writeTime,
        });
        setLoading(false);
      });
  };

  const putWirte = () => {
    axios
      .put(
        `https://winningi-default-rtdb.asia-southeast1.firebasedatabase.app/board/${index}.json`,
        { ...inputValue }
      )
      .then(res => {
        res.status === 200 && fatchData();
      });

    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        글쓰기
      </Button>
      <Modal
        title="게시물을 입력하세요"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled:
            !title.length ||
            !content.length ||
            !url ||
            url.includes('Fundefined?'),
        }}
      >
        <WriteBox>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18 }}
            layout="horizontal"
            onChange={handleWrite}
          >
            <Form.Item label="제목">
              <Input placeholder="제목을 입력하세요" name="title" />
            </Form.Item>
            <Form.Item label="내용">
              <TextArea
                showCount
                maxLength={1000}
                style={{
                  height: 300,
                }}
                placeholder="내용을 추가하세요"
                name="content"
              />
            </Form.Item>
          </Form>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
          >
            <Form.Item label="이미지추가" valuePropName="fileList">
              <Upload
                listType="picture-card"
                onChange={handleAnt}
                maxCount="1"
                accept="jpeg"
              >
                <div style={{ margin: '0 auto' }}>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
              <Notice>
                *파일이 완전히 업로드되면 버튼이 활성화 됩니다.
                <br />
                *이미지파일만 가능합니다.
              </Notice>
            </Form.Item>
          </Form>
        </WriteBox>
      </Modal>
    </>
  );
};

export default ModalCompo;
const WriteBox = styled.div`
  max-width: 1200px;
`;
const Notice = styled.span`
  color: red;
  font-size: 13px;
`;
