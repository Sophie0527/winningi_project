import { Form, Input, Upload, Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import { storage } from '../../firebase/firebase';
import moment from 'moment/moment';
import axios from 'axios';

const Write = ({ index }) => {
  const { TextArea } = Input;
  const nowTime = moment().format('YYMMDDhhmmss');
  const writeTime = moment().format('YY/MM/DD hh:mm');
  const [antPics, setAntPics] = useState([]);
  const [inputValue, setInputValue] = useState({
    id: '',
    title: '',
    content: '',
    date: '',
    url: '',
  });
  console.log(inputValue);

  const handleWrite = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const handleAnt = e => {
    setAntPics(e.file.originFileObj);
  };

  const firebasGet = () => {
    storage
      .ref('images/' + antPics.name)
      .put(antPics)
      .then(snapshot => {
        return snapshot.ref.getDownloadURL();
      })
      .then(url => {
        setInputValue({
          ...inputValue,
          id: index,
          url: url + 1,
          date: writeTime,
        });
        setTimeout(
          axios.put(
            `https://winningi-default-rtdb.asia-southeast1.firebasedatabase.app/board/${index}.json`,
            { ...inputValue }
          ),
          5000
        );
      });
  };
  console.log(inputValue);

  return (
    <WriteBox>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onChange={handleWrite}
      >
        <Form.Item label="제목">
          <Input placeholder="제목을 입력하세요" name="title" />
        </Form.Item>
        <Form.Item label="내용">
          <TextArea
            showCount
            maxLength={100}
            style={{
              height: 120,
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
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              firebasGet();
            }}
          >
            1
          </Button>
        </Form.Item>
      </Form>
    </WriteBox>
  );
};
export default Write;
const WriteBox = styled.div`
  max-width: 1100px;
`;
