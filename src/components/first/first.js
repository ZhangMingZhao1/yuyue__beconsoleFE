import React from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom.jsx';

export default () => {
    console.log('首页');
    return (
        <div>
            <BreadcrumbCustom />
            我是首页
        </div>
    )
}
   
