import React from 'react';
import { StyledTable, StyledTableWrapper, StyledTop } from './CarDetails.styles';
import { Badge, Button, Carousel, Col, Descriptions, DescriptionsProps, Flex, Row } from 'antd';
import HeartFilled from '@ant-design/icons/HeartFilled';
import { useLocation } from 'react-router-dom';
import { CarOutlined, DashboardOutlined, ShopOutlined } from '@ant-design/icons';


const contentStyle: React.CSSProperties = {
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
};

const CarDetails: React.FC = () => {

    const location = useLocation();
    const record = location.state;
    console.log(record)

    const columns = [
        {
            title: '',
            dataIndex: 'key',
            key: 'key',
            render: (text: string, record: any) => <strong>{record.key}</strong>,
        },
        {
            title: 'Value',
            dataIndex: 'value',
            key: 'value',
        },
    ];

    const data = [
        {
            key: 'Sales Price',
            value: '$10,000',
        },
        {
            key: 'Total Fees',
            value: '$1,000',
        },
        {
            key: 'Warranty',
            value: '$500',
        },
        {
            key: 'GPS',
            value: '$200',
        },
        {
            key: 'Cash Price',
            value: '$9,000',
        },
        {
            key: 'Net Trade',
            value: '$8,000',
        },
        {
            key: 'Down Payment',
            value: '$2,000',
        },
        {
            key: 'Loan Balance',
            value: '$7,000',
        },
    ];

    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Name',
            children: record.name,
        },
        {
            key: '2',
            label: 'Company',
            children: record.company,
        },
        {
            key: '3',
            label: 'Vin',
            children: record.vin,
            span: 2,
        },
        {
            key: '4',
            label: 'Port',
            children: record.port,
        },
        {
            key: '5',
            label: 'Color',
            children: record.color,
            span: 1,
        },
        {
            key: '6',
            label: 'Status',
            children: <Badge status="processing" text="Running" />,
            span: 1,
        },
        {
            key: '8',
            label: 'Added At',
            children: record.addedAt,
        },
        {
            key: '7',
            label: 'Logo',
            children: <img src={record.logo} width={100} alt="" />,
        }
    ];

    return (
        <>
            <StyledTop>
                <Col span={8}>
                    <span>Used</span>
                    <h3>{record.name} <HeartFilled style={{ color: 'red' }} /></h3>
                </Col>
                <Col span={8}>
                    <Row>
                        <Col span={8}>
                            <h5> <DashboardOutlined /> Mileage</h5>
                            <span>10000</span>
                        </Col>
                        <Col span={8}>
                            <h5> <CarOutlined />Transmission</h5>
                            <span>Automatic</span>
                        </Col>
                        <Col span={8}>
                            <h5> <ShopOutlined /> Fuel</h5>
                            <span>Gas</span>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Flex gap={10} justify='end' align='center'>
                        <>
                            <span>Price :</span> <span className="price">65256 AED</span>
                        </>
                        <Button type="primary">Edit Info</Button>
                    </Flex>
                </Col>
            </StyledTop>
            <Row align={'middle'} justify={'space-between'}>
                <Col span={12}>
                    <Carousel dotPosition={'right'}>
                        <div>
                            <h3 style={contentStyle}><img width={'100%'} src="https://cdn.photo-motion.com/images/PudmJIAS-FhZOSpV/6e076794-a597-43e1-9da5-1119028c5426/09b027e9-5b01-4006-8acc-77c96b04d375.720" alt="" /></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}><img width={'100%'} src="https://cdn.photo-motion.com/images/PudmJIAS-FhZOSpV/6e076794-a597-43e1-9da5-1119028c5426/09b027e9-5b01-4006-8acc-77c96b04d375.720" alt="" /></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}><img width={'100%'} src="https://cdn.photo-motion.com/images/PudmJIAS-FhZOSpV/6e076794-a597-43e1-9da5-1119028c5426/09b027e9-5b01-4006-8acc-77c96b04d375.720" alt="" /></h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}><img width={'100%'} src="https://cdn.photo-motion.com/images/PudmJIAS-FhZOSpV/6e076794-a597-43e1-9da5-1119028c5426/09b027e9-5b01-4006-8acc-77c96b04d375.720" alt="" /></h3>
                        </div>
                    </Carousel>
                </Col>
                <StyledTableWrapper span={12}>
                    <div className="table">
                        <StyledTable columns={columns} dataSource={data} pagination={false} />
                    </div>
                </StyledTableWrapper>
                <Col span={24}>
                    <Descriptions title="Specifications :" bordered items={items} />
                </Col>
            </Row>
        </>
    );
};

export default CarDetails;
