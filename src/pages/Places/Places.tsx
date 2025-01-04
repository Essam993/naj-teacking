import { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import DynamicTable from '../../components/DynamicTable';
import Map from '../../components/Map';
import { Button, Modal } from 'antd';
import { TableTypes } from '../../types/table.types';
import PlacesForm from './PlacesForm';

const Places = () => {
    const [open, setOpen] = useState(false);

    const openMapModule = () => {
        setOpen(true);
    };

    const fields = [
        { label: 'Name', type: 'text' },
        { label: 'Street', type: 'text' },
        { label: 'Street 2', type: 'text' },
        { label: 'Neighbourhood', type: 'text' },
        { label: 'Building', type: 'text' },
        { label: 'Security Access Code', type: 'text' },
        { label: 'Postal Code', type: 'text' },
        { label: 'City', type: 'text' },
        { label: 'State', type: 'text' },
        {
            label: 'Country',
            type: 'select',
            options: [
                { value: 'United Arab Emirates', label: 'United Arab Emirates' },
                { value: 'Saudi Arabia', label: 'Saudi Arabia' },
                { value: 'Oman', label: 'Oman' },
                { value: 'Qatar', label: 'Qatar' },
            ],
        },
        { label: 'Latitude', type: 'number' },
        { label: 'Longitude', type: 'number' },
    ];

    const placesData = [
        {
            name: 'Port of Dubai',
            id: 'AEDUB001',
            address: 'Sheikh Zayed Road',
            city: 'Dubai',
            country: 'United Arab Emirates',
            state: 'Dubai',
            postalCode: '12345',
            latitude: 25.276987,
            longitude: 55.296249,
        },
        {
            name: 'Port of Abu Dhabi',
            id: 'AEAUH002',
            address: 'Corniche Street',
            city: 'Abu Dhabi',
            country: 'United Arab Emirates',
            state: 'Abu Dhabi',
            postalCode: '54321',
            latitude: 24.453884,
            longitude: 54.377344,
        },
    ];

    const tableColumns: TableTypes[] = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
        { title: 'ID', dataIndex: 'id', key: 'id' },
        { title: 'City', dataIndex: 'city', key: 'city' },
        { title: 'Country', dataIndex: 'country', key: 'country' },
        { title: 'State', dataIndex: 'state', key: 'state' },
        { title: 'Postal Code', dataIndex: 'postalCode', key: 'postalCode' },
        {
            title: '',
            key: 'actions',
            render: (text: any, record: any) => (
                <Button
                    type="text"
                    onClick={() => openMapModule()}
                    icon={<EllipsisOutlined />}
                >
                </Button>
            ),
        },
    ];

    return (
        <div>
            <Modal
                title="Map"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
            >
                <Map />
            </Modal>
            <DynamicTable columns={tableColumns as []} data={placesData} form={<PlacesForm />} fields={fields} title={'Places'} />
        </div>
    );
};

export default Places;
