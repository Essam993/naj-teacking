import DynamicTable from '../../components/DynamicTable';
import { TableTypes } from '../../types/table.types';
import { Button, Tag } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import DriverForm from './DriverForm';

// Fields definition for forms
const fields = [
  {
    label: 'Name',
    type: 'text',
  },
  {
    label: 'ID',
    type: 'text',
  },
  {
    label: 'Internal ID',
    type: 'text',
  },
  {
    label: 'Vendor License',
    type: 'text',
  },
  {
    label: 'Phone',
    type: 'text',
  },
  {
    label: 'Country',
    type: 'select',
    options: [
      { value: 'USA', label: 'USA' },
      { value: 'Canada', label: 'Canada' },
      { value: 'UK', label: 'UK' },
    ],
  },
  {
    label: 'Status',
    type: 'select',
    options: [
      { value: 'Active', label: 'Active' },
      { value: 'Pending', label: 'Pending' },
    ],
  },
  {
    label: 'Created At',
    type: 'date',
  },
];

// Columns for the table
const columns: TableTypes[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Internal ID',
    dataIndex: 'internalId',
    key: 'internalId',
  },
  {
    title: 'License',
    dataIndex: 'vendorLicense',
    key: 'vendorLicense',
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <Tag color={status === 'Active' ? 'green' : 'orange'}>{status}</Tag>
    ),
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '',
    key: 'action',
    render: (text: any, record: any) => (
        <Button
            type='text'
            icon={<EllipsisOutlined />}
        >
        </Button>
    ),
},
];

// Sample data for the table
const data = [
  {
    key: '1',
    name: 'John Doe',
    id: '123',
    internalId: 'INT-001',
    vendorLicense: 'VL-12345',
    phone: '123-456-7890',
    country: 'USA',
    status: 'Active',
    createdAt: '2023-11-30',
  },
  {
    key: '2',
    name: 'Jane Smith',
    id: '456',
    internalId: 'INT-002',
    vendorLicense: 'VL-67890',
    phone: '987-654-3210',
    country: 'Canada',
    status: 'Pending',
    createdAt: '2023-11-29',
  },
  {
    key: '3',
    name: 'Bob Johnson',
    id: '789',
    internalId: 'INT-003',
    vendorLicense: 'VL-11223',
    phone: '555-123-4567',
    country: 'UK',
    status: 'Active',
    createdAt: '2023-11-28',
  },
];

const Drivers = () => {
  return (
      <DynamicTable
        columns={columns as []}
        data={data}
        pagination={{
          current: 1,
          pageSize: 10,
        }}
        form={<DriverForm />}
        fields={fields} title={'Drivers'}
      />
  );
};

export default Drivers;