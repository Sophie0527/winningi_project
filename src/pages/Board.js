import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Write from '../components/Board/Write';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const Board = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = record => record.key === editingKey;
  const fatchData = () => {
    axios
      .get(
        'https://winningi-default-rtdb.asia-southeast1.firebasedatabase.app/board.json'
      )
      .then(res => {
        setData(Object.values(res.data));
      });
  };
  console.log(data);
  useEffect(() => {
    fatchData();
  }, []);

  const cancel = () => {
    setEditingKey('');
  };

  const columns = [
    {
      title: 'No',
      dataIndex: 'id',
      width: '5%',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      width: '70%',
    },

    {
      title: '작성자',
      dataIndex: 'writer',
      width: '10%',
    },
    {
      title: '작성시간',
      dataIndex: 'date',
      width: '10%',
    },
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
      <Write index={data.length} />
    </Form>
  );
};
export default Board;
