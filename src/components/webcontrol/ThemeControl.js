/**
 * Created by hao.cheng on 2017/5/3.
 */
import React from 'react';
import {Card, Table, Divider, Tag, Input, Button, Icon} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import './ThemeControl.less';


class Themecontrol extends React.Component {
    state = {
      searchText: '',
    };

    handleSearch = (selectedKeys, confirm) => () => {
      confirm();
      this.setState({ searchText: selectedKeys[0] });
    }

    handleReset = clearFilters => () => {
      clearFilters();
      this.setState({ searchText: '' });
    }

    render() {
        const columns = [{
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
              <div className="custom-filter-dropdown">
                <Input
                  ref={ele => this.searchInput = ele}
                  placeholder="Search name"
                  value={selectedKeys[0]}
                  onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                  onPressEnter={this.handleSearch(selectedKeys, confirm)}
                />
                <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)}>Search</Button>
                <Button onClick={this.handleReset(clearFilters)}>Reset</Button>
              </div>
            ),
            filterIcon: filtered => <Icon type="smile-o" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
            onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
            onFilterDropdownVisibleChange: (visible) => {
              if (visible) {
                setTimeout(() => {
                  this.searchInput.focus();
                });
              }
            },
            render: (text) => {
              const { searchText } = this.state;
              return searchText ? (
                <span>
                  {text.split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i')).map((fragment, i) => (
                    fragment.toLowerCase() === searchText.toLowerCase()
                      ? <span key={i} className="highlight">{fragment}</span> : fragment // eslint-disable-line
                  ))}
                </span>
              ) : text;
            },
          }, {
            title: '状态',
            dataIndex: 'flag',
            key: 'age',
          }, {
            title: '排序',
            dataIndex: 'sort',
            key: 'address',
          },
          {
            title: '操作',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="javascript:;">修改</a>
                <Divider type="vertical" />
                <a href="javascript:;">删除</a>
                <Divider type="vertical" />
                <a href="javascript:;">专题内容管理</a>
              </span>
            ),
          }];
          
          const data = [{
            key: '1',
            name: '鱼阅专题',
            flag: '启用',
            sort: '4',
          }, {
            key: '2',
            name: '文艺小说',
            flag: '启用',
            sort: '3',
          }, {
            key: '3',
            name: '青少年专题',
            flag: '禁用',
            sort: '2',
          }];
          // console.log('styles',styles.pannel)
        return (
            <div className="">
                <BreadcrumbCustom first="网站管理" second="专题管理"/>
                专题管理
                <Card
                    title="专题管理"
                    // extra={<a href="#">More</a>}
                    // style={{ width: 300 }}
                >
                   <Table className="themecontrol-table" columns={columns} dataSource={data} />
                </Card>
            </div>
        )
    }
}

export default Themecontrol;