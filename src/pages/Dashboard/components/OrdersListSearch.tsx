import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Collapse } from 'antd';
import { CaretRightOutlined, TruckOutlined } from '@ant-design/icons';

const DeliveryList: React.FC = () => {
    const deliveries = [
        {
            id: 'NEJ3436751060SG',
            pickupLocation: 'DOWNTOWN CORE, SINGAPORE',
            dropoffLocation: '25 NORTH BRIDGE ROAD - SINGAPORE',
            customerName: 'Nejoum Al Jazeera',
            customerPhone: 'No Phone',
            driverAssigned: 'John Doe',
            status: 'Created',
            pickupCoords: [1.2834, 103.8476], // Example coordinates for pickup location
            dropoffCoords: [1.2857, 103.8502], // Example coordinates for dropoff location
        },
        {
            id: 'NEJ3436751061SG',
            pickupLocation: 'SOMEWHERE IN THE CITY',
            dropoffLocation: 'SOME OTHER PLACE',
            customerName: 'Jane Doe',
            customerPhone: '+65 91234567',
            driverAssigned: 'Sarah Lee',
            status: 'Undefined',
            pickupCoords: [1.2931, 103.8499],
            dropoffCoords: [1.3000, 103.8520],
        },
        {
            id: 'NEJ3436751061SG',
            pickupLocation: 'SOMEWHERE IN THE CITY',
            dropoffLocation: 'SOME OTHER PLACE',
            customerName: 'Jane Doe',
            customerPhone: '+65 91234567',
            driverAssigned: 'Sarah Lee',
            status: 'Undefined',
            pickupCoords: [1.2931, 103.8499],
            dropoffCoords: [1.3000, 103.8520],
        },
        {
            id: 'NEJ3436751062SG',
            pickupLocation: 'CITY CENTER, SINGAPORE',
            dropoffLocation: 'SOMEPLACE ELSE',
            customerName: 'No Customer',
            customerPhone: 'No Phone',
            driverAssigned: 'No Driver',
            status: 'Undefined',
            pickupCoords: [1.2931, 103.8499],
            dropoffCoords: [1.3000, 103.8520],
        },
        {
            id: 'NEJ3436751063SG',
            pickupLocation: 'WEST COAST ROAD, SINGAPORE',
            dropoffLocation: 'EAST COAST PARK - SINGAPORE',
            customerName: 'Mohammed Ali',
            customerPhone: '+65 98765432',
            driverAssigned: 'Daniel Wong',
            status: 'Created',
            pickupCoords: [1.2931, 103.8499],
            dropoffCoords: [1.3000, 103.8520],
        },
        {
            id: 'NEJ3436751064SG',
            pickupLocation: 'TANJONG PAGAR, SINGAPORE',
            dropoffLocation: 'CHANGI AIRPORT - SINGAPORE',
            customerName: 'Ali Hassan',
            customerPhone: '+65 99887766',
            driverAssigned: 'Mandy Chan',
            status: 'Created',
            pickupCoords: [1.2931, 103.8499],
            dropoffCoords: [1.3000, 103.8520],
        },
        {
            id: 'NEJ3436751065SG',
            pickupLocation: 'WOODLANDS, SINGAPORE',
            dropoffLocation: 'BUKIT TIMAH - SINGAPORE',
            customerName: 'Hassan Ahmed',
            customerPhone: 'No Phone',
            driverAssigned: 'No Driver',
            status: 'Undefined',
            pickupCoords: [1.2931, 103.8499],
            dropoffCoords: [1.3000, 103.8520],
        },
        {
            id: 'NEJ3436751066SG',
            pickupLocation: 'CLEMENTI, SINGAPORE',
            dropoffLocation: 'MARINA BAY SANDS - SINGAPORE',
            customerName: 'David Lee',
            customerPhone: '+65 87654321',
            driverAssigned: 'Michael Tan',
            status: 'Created',
            pickupCoords: [1.2931, 103.8499],
            dropoffCoords: [1.3000, 103.8520],
        },
    ];

    const [currentPosition, setCurrentPosition] = useState(0);

    useEffect(() => {
        // Simulate the truck moving along the route with a timer
        const interval = setInterval(() => {
            setCurrentPosition((prev) => (prev < 100 ? prev + 1 : 0)); // Move truck from 0 to 100
        }, 50);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (
        <Row gutter={16}>
            <Col span={24}>
                <Collapse
                    bordered={false}
                    expandIconPosition="right"
                    defaultActiveKey={[deliveries[0].id]} // Set the default active key to the first delivery's id
                >
                    {deliveries.map((delivery) => (
                        <Collapse.Panel
                            header={`Order: ${delivery.id}`}
                            key={delivery.id}
                            extra={<CaretRightOutlined />}
                        >
                            <Card bordered={false}>
                                <p><strong>Pickup:</strong> {delivery.pickupLocation}</p>
                                <p><strong>Dropoff:</strong> {delivery.dropoffLocation}</p>
                                <p><strong>Customer:</strong> {delivery.customerName}</p>
                                <p><strong>Customer Phone:</strong> {delivery.customerPhone}</p>
                                <p><strong>Driver Assigned:</strong> {delivery.driverAssigned}</p>
                                <p><strong>Status:</strong> {delivery.status}</p>

                                {/* Line and truck animation */}
                                <div className="line">

                                    {/* Green Ball at Start */}
                                    <div className="ball start-ball"></div>

                                    {/* Red Ball at End */}
                                    <div className="ball end-ball"></div>
                                    <div
                                        className="truck-icon"

                                    >
                                        <TruckOutlined />
                                    </div>
                                </div>
                            </Card>
                        </Collapse.Panel>
                    ))}
                </Collapse>
            </Col>
        </Row>
    );
};

export default DeliveryList;
