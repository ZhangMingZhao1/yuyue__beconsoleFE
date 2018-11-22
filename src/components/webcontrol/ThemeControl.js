/**
 * Created by hao.cheng on 2017/5/3.
 */
import React from 'react';
import {Card, Table, Divider, Tag} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';



class Themecontrol extends React.Component {
    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="javascript:;">{text}</a>,
          }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          }, {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
              <span>
                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
              </span>
            ),
          }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="javascript:;">Invite {record.name}</a>
                <Divider type="vertical" />
                <a href="javascript:;">Delete</a>
              </span>
            ),
          }];
          
          const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }];

        return (
            <div className="">
                <BreadcrumbCustom first="网站管理" second="专题管理"/>
                专题管理
                <Card
                    title="专题管理"
                    // extra={<a href="#">More</a>}
                    // style={{ width: 300 }}
                >
                   <Table columns={columns} dataSource={data} />
                </Card>
            </div>
        )
    }
}

export default Themecontrol;