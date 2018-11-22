import React from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom.jsx';

export default () => (
    <div>
        <BreadcrumbCustom first="会员管理" second="信息管理" />
        我是信息管理
    </div>
)