import React from "react";
import { List, Avatar, Icon, Table, Button, Input, Tag } from "antd";
import Highlighter from 'react-highlight-words';

const IconText = ({ type, text }) => (
  <span>
    <Icon
      type={type}
      style={{
        marginRight: 8
      }}
    />
    {text}
  </span>
);


const Articles = props => {


  return (
    <Table columns={[
      {
        title: 'Номер заказа',
        dataIndex: 'id',
        key: 'name',
        width: '30%',
      },
      {
        title: 'Название',
        dataIndex: 'content',
        key: 'adrress',
      },
      {
        title: 'Статус',
        key: 'tags',
        dataIndex: 'title',
      },
    ]} pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }} dataSource={props.data} />
  );
}

export default Articles;
