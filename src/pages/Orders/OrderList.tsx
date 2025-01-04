import { useState } from 'react';
import { TableTypes } from '../../types/table.types';
import { CheckCircleOutlined, CloseCircleOutlined, EllipsisOutlined, PhoneOutlined } from '@ant-design/icons';
import DynamicTable from '../../components/DynamicTable';
import OrderForm from './OrderForm';
import { Tag, Button, Modal, Col, Collapse, Select, Input, Space, notification } from 'antd';
import Map from '../../components/Map';
import { StyledOrderDetails } from './order.styles';

const { TextArea } = Input;

const OrderList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [driver, setDriver] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [rejectionReason, setRejectionReason] = useState('');

  const fields = [
    {
      label: "Customer",
      type: "text",
    },
    {
      label: 'Order Id',
      type: 'text',
    },
    {
      label: "Status",
      type: "select",
      options: [
        { value: "Pending", label: "Pending" },
        { value: "On Progress", label: "On Progress" },
        { value: "Delivered", label: "Delivered" },
      ]
    },
    {
      label: "Created At",
      type: "date",
    },
    {
      label: "Updated At",
      type: "date",
    }
  ];

  const [data, setData] = useState([
    {
      key: "1",
      customer: "Warehouse 1",
      orderId: "12345",
      status: "Pending",
      containers: '10',
      booking: '354654646545',
      createdAt: "2022-01-01",
      updatedAt: "2022-01-01",
      reasons: [] as string[],
    },
    {
      key: "2",
      customer: "Warehouse 2",
      orderId: "54346",
      status: "Pending",
      containers: '10',
      booking: '354654646545',
      createdAt: "2022-01-02",
      updatedAt: "2022-01-02",
      reasons: [] as string[],
    },
  ]);

  const drivers = [{ value: 'Driver 1' }, { value: 'Driver 2' }];
  const vehicles = [{ value: 'Vehicle 1' }, { value: 'Vehicle 2' }];

  const handleOpenModal = (record: any) => {
    setSelectedOrder(record);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const updateOrderStatus = (orderId: string, newStatus: string, reason?: string, driver?: string, vehicle?: string) => {
    setData(prevData =>
      prevData.map(order =>
        order.orderId === orderId
          ? {
            ...order,
            status: newStatus,
            updatedAt: new Date().toISOString(),
            reasons: reason ? [...order.reasons, reason] : order.reasons,
            driver: driver || (order as unknown as { driver: string }).driver,
            vehicle: vehicle || (order as unknown as { vehicle: string }).vehicle,
          }
          : order
      )
    );
  };


  const handleRejectOrder = () => {
    setIsRejectModalOpen(true);
  };

  const handleSubmitRejection = () => {
    const updatedStatus = 'Rejected';
    updateOrderStatus(selectedOrder.orderId, updatedStatus, rejectionReason);

    // Refresh selected order data
    setSelectedOrder((prev: { reasons: any; }) => ({
      ...prev,
      status: updatedStatus,
      reasons: [...prev.reasons, rejectionReason],
      updatedAt: new Date().toISOString(),
    }));

    notification.error({
      message: 'Order Rejected',
      description: `Reason: ${rejectionReason}`,
    });

    setRejectionReason('');
    setIsRejectModalOpen(false);
  };


  const handleConfirmOrder = () => {
    setIsConfirmModalOpen(true);
  };

  const handleAssignDriver = () => {
    const updatedStatus = 'Confirmed';
    updateOrderStatus(selectedOrder.orderId, updatedStatus, undefined, driver, vehicle);

    // Refresh selected order data
    setSelectedOrder((prev: any) => ({
      ...prev,
      status: updatedStatus,
      driver,
      vehicle,
      updatedAt: new Date().toISOString(),
    }));

    notification.success({
      message: 'Order Confirmed',
      description: `Driver ${driver} and Vehicle ${vehicle} assigned.`,
    });

    setDriver('');
    setVehicle('');
    setIsConfirmModalOpen(false);
  };



  const columns: TableTypes[] = [
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Order Id',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text: string) => {
        const color = text === 'Pending' ? 'warning' : text === 'On Progress' ? 'blue' : text === 'Rejected' ? 'red' : 'green';
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Button type="text" onClick={() => handleOpenModal(record)}>
          <EllipsisOutlined />
        </Button>
      ),
    },
  ];

  return (
    <>
      <DynamicTable columns={columns as []} data={data} pagination={{ current: 1, pageSize: 10 }} form={<OrderForm />} fields={fields} title="Orders" />

      {/* Reject Order Modal */}
      <Modal title="Reject Order" open={isRejectModalOpen} onCancel={() => setIsRejectModalOpen(false)} onOk={handleSubmitRejection}>
        <TextArea placeholder="Enter rejection reason..." onChange={(e) => setRejectionReason(e.target.value)} />
      </Modal>

      {/* Confirm Order Modal */}
      <Modal title="Confirm Order" open={isConfirmModalOpen} onCancel={() => setIsConfirmModalOpen(false)} onOk={handleAssignDriver}>
        <Select placeholder="Select Driver" onChange={(value) => setDriver(value)} options={drivers} style={{ width: '100%', marginBottom: 10 }} />
        <Select placeholder="Select Vehicle" onChange={(value) => setVehicle(value)} options={vehicles} style={{ width: '100%' }} />
      </Modal>

      {/* Order Details Modal */}
      <Modal title="Order Details" open={isModalOpen} onCancel={handleCloseModal} footer={null} width={'90%'}>
        <StyledOrderDetails>
          <Col span={12}>
            {selectedOrder && (
              <>
                <Collapse
                  style={{ marginBottom: 20 }}
                  activeKey={['1']}
                  items={[{ key: '1', label: 'Customer', children: <p>{selectedOrder.customer}</p> }]}
                />

                <Collapse
                  style={{ marginBottom: 20 }}
                  activeKey={['2']}
                  items={[{ key: '2', label: 'Order Id', children: <p>{selectedOrder.orderId}</p> }]}
                />

                <Collapse
                  style={{ marginBottom: 20 }}
                  activeKey={['3']}
                  items={[{ key: '3', label: 'Number of Containers', children: <p>{selectedOrder.containers}</p> }]}
                />

                <Collapse
                  style={{ marginBottom: 20 }}
                  activeKey={['4']}
                  items={[{ key: '4', label: 'Booking Number', children: <p>{selectedOrder.booking}</p> }]}
                />

                <Collapse
                  style={{ marginBottom: 20 }}
                  activeKey={['5']}
                  items={[{ key: '5', label: 'Status', children: <p>{selectedOrder.status}</p> }]}
                />

                <Collapse
                  style={{ marginBottom: 20 }}
                  activeKey={['6']}
                  items={[{ key: '6', label: 'Created At', children: <p>{selectedOrder.createdAt}</p> }]}
                />

                <Collapse
                  style={{ marginBottom: 20 }}
                  activeKey={['7']}
                  items={[{ key: '7', label: 'Updated At', children: <p>{selectedOrder.updatedAt}</p> }]}
                />


                {selectedOrder.reasons.map((reason: string, index: number) => (
                  <Collapse key={index} style={{ marginBottom: 20 }} items={[{ key: `${index + 7}`, label: `Rejection Reason ${index + 1}`, children: <p>{reason}</p> }]} activeKey={[`${index + 7}`]} />
                ))}

                {selectedOrder && selectedOrder.status === 'Confirmed' && (
                  <>
                    <Collapse
                      style={{ marginBottom: 20 }}
                      items={[{ key: '6', label: 'Driver', children: <p>{selectedOrder.driver}</p> }]}
                      activeKey={['6']}
                    />
                    <Collapse
                      style={{ marginBottom: 20 }}
                      items={[{ key: '7', label: 'Vehicle', children: <p>{selectedOrder.vehicle}</p> }]}
                      activeKey={['7']}
                    />

                  </>
                )}
              </>
            )}
          </Col>
          <Col span={12}>
            <Map />
          </Col>
          <Col span={24}>
            <Space>
              <Button type="primary" onClick={handleConfirmOrder}><CheckCircleOutlined /> Confirm</Button>
              <Button danger onClick={handleRejectOrder}><CloseCircleOutlined /> Reject</Button>
              {selectedOrder && selectedOrder.status === 'Confirmed' && (
                <Button type="primary" onClick={() => notification.info({ message: `Calling ${selectedOrder.driver}` })}>
                  <PhoneOutlined /> Call Driver
                </Button>
              )}
            </Space>
          </Col>
        </StyledOrderDetails>
      </Modal>
    </>
  );
};

export default OrderList;
