import { Button, Tag } from 'antd';
import { useNavigate } from 'react-router-dom';
import EllipsisOutlined from '@ant-design/icons/EllipsisOutlined';
import DynamicTable from '../../components/DynamicTable';
import { TableTypes } from '../../types/table.types';
import TrucksForm from './TrucksForm';
const Trucks = () => {
    const navigate = useNavigate();

    // Fields for filtering/searching forms
    const fields = [
        { label: 'Name', type: 'text' },
        { label: 'Plate Number', type: 'text' },
        {
            label: 'Make',
            type: 'select',
            options: [
                { value: 'Tesla', label: 'Tesla', key: 'Tesla' },
                { value: 'Toyota', label: 'Toyota', key: 'Toyota' },
                { value: 'Honda', label: 'Honda', key: 'Honda' },
                { value: 'Ford', label: 'Ford', key: 'Ford' },
            ],
        },
    ];
    

    // Table columns
    const columns: TableTypes[] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Plate Number',
            dataIndex: 'plateNumber',
            key: 'plateNumber',
        },
        {
            title: 'Assigned Driver',
            dataIndex: 'assignedDriver',
            key: 'assignedDriver',
        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Make',
            dataIndex: 'make',
            key: 'make',
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag color={status === 'Active' ? 'green' : status === 'Pending' ? 'orange' : 'red'}>
                    {status}
                </Tag>
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
                    onClick={() => {}}
                    icon={<EllipsisOutlined />}
                >
                </Button>
            ),
        },
    ];

    // Sample data
    const data = [
        {
            key: 'V001', // Added key field
            id: 'V001',
            name: 'Truck 1',
            plateNumber: 'XYZ-123',
            assignedDriver: 'John Doe',
            make: 'Toyota',
            model: 'Tundra',
            year: '2022',
            status: 'Active',
            createdAt: '2024-02-20',
        },
        {
            key: 'V002',
            id: 'V002',
            name: 'Truck 2',
            plateNumber: 'ABC-789',
            assignedDriver: 'Jane Smith',
            make: 'Ford',
            model: 'F-150',
            year: '2021',
            status: 'Pending',
            createdAt: '2024-02-19',
        },
        {
            key: 'V003',
            id: 'V003',
            name: 'Truck 3',
            plateNumber: 'LMN-456',
            assignedDriver: 'Bob Johnson',
            make: 'Honda',
            model: 'Ridgeline',
            year: '2023',
            status: 'Inactive',
            createdAt: '2024-02-18',
        },
    ];
    

    return (
        <DynamicTable columns={columns as []} data={data} form={<TrucksForm />} fields={fields} title={'Trucks'} />
    );
};

export default Trucks;