import React from 'react';

import dynamic from 'next/dynamic';
import Router from 'next/router';

import axios from 'axios';
import moment from 'moment';
import { Collapse, Descriptions, Table, Divider } from 'antd';
import pstyles from '../page.module.css';

const { Panel } = Collapse;

class NoticePage extends React.Component {
    componentDidMount() {
        this.readData();
    }
    readData = () => {
        const { isNoticeList, SetNoticeList } = this.props;
        if (!isNoticeList)
            axios
                .get('/web/get_notice_list')
                .then((response) => {
                    SetNoticeList(response.data);
                })
                .catch((e) => {
                    if (e.response.status == 401) Router.push('web/login');
                });
    };

    ListData = () => {
        const { NoticeList } = this.props;

        let list = [];

        NoticeList.forEach((i, index) => {
            list.push(
                <Panel header={i.notice_title} key={index}>
                    <Descriptions bordered>
                        <Descriptions.Item label="작성일">{moment(i.create_date).format('YYYY-MM-DD')}</Descriptions.Item>
                        <Descriptions.Item label="작성자">{i.admin_name}</Descriptions.Item>
                        <Descriptions.Item label="조회수">{0}</Descriptions.Item>
                        <Descriptions.Item label="내용">{i.notice_decs}</Descriptions.Item>
                    </Descriptions>
                </Panel>
            );
        });
        return list;
    };

    render() {
        const { NoticeList } = this.props;

        return <Table dataSource={NoticeList} columns={notice_columns} />;
    }
}

export default NoticePage;

const notice_columns = [
    {
        key: 'notice_title',
        dataIndex: 'notice_title',
        title: '제목',
    },
    {
        key: 'notice_decs',
        dataIndex: 'notice_decs',
        title: '내용',
    },
    {
        key: 'admin_name',
        dataIndex: 'admin_name',
        title: '작성자',
    },
    {
        key: 'create_date',
        dataIndex: 'create_date',
        title: '등록일',
    },
];
