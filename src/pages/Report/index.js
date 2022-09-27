import { GlobalWrapper } from '../../components/Wrapper';
import React from 'react';
import { Table } from 'antd';

const Report = () => {

    const column = [
        {
            title: '#',
            dataIndex: '#',
            key: '#',
        },
        {
            title: 'Floor',
            dataIndex: 'floor',
            key: 'floor',
        },
        {
            title: 'Unit',
            dataIndex: 'unit',
            key: 'unit',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Rental Price',
            dataIndex: 'rentalPrice',
            key: 'rentalPrice',
        },
        {
            title: 'Rental Schema',
            dataIndex: 'rentalSchema',
            key: 'rentalSchema',
        },
        {
            title: 'Details',
            dataIndex: 'details',
            key: 'details',
        },
        {
            title: 'Action',
            dataIndex: 'details',
            key: 'details',
        },
    ]

    return (
        <GlobalWrapper>
            <Table 
                columns={column}
            />
        </GlobalWrapper>
    );
};

export default Report;