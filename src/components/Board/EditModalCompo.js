import React, { useState } from 'react';
import { Form, Input, Upload, Button, Modal } from 'antd';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import { storage } from '../../firebase/firebase';

import axios from 'axios';

const EditModalCompo = ({ fixdata, index, setData }) => {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [antPics, setAntPics] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    title: '',
    content: '',
    url: '',
    writer: '팀13',
    id: '',
    date: '',
  });

  const { url } = inputValue;
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    putWirte();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleAnt = e => {
    setAntPics(e.file.originFileObj);
    firebasGet();
  };

  const handleWrite = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
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
          url: url,
          date: fixdata.date,
          id: fixdata.id,
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
      .then(res => setData(res.data));

    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        수정
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: !url || url.includes('Fundefined?'),
        }}
      >
        <WriteBox>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 18 }}
            layout="horizontal"
            onChange={e => {
              handleWrite(e);
            }}
          >
            <Form.Item label="제목">
              <Input
                placeholder="제목을 입력하세요"
                name="title"
                defaultValue={fixdata.title}
              />
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
                defaultValue={fixdata.content}
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
            </Form.Item>
          </Form>
        </WriteBox>
      </Modal>
    </>
  );
};
export default EditModalCompo;
const WriteBox = styled.div`
  max-width: 1200px;
`;
