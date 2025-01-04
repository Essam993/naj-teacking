import React from 'react'
import DynamicTable from '../../components/DynamicTable'
import { TableTypes } from '../../types/table.types'
import CustomerForm from './CustomerForm'

const Warehouse = () => {

    const fields = [
        { label: 'Name', type: 'text' },
        { label: 'Email', type: 'text' },
        { label: 'Phone', type: 'text' },
        { label: 'Address', type: 'text' },
        { label: 'City', type: 'text' },
        { label: 'State', type: 'text' },
        { label: 'Country', type: 'text' },
        { label: 'Postal Code', type: 'text' },
        { label: 'Latitude', type: 'number' },
        { label: 'Longitude', type: 'number' }
    ]

    const columns: TableTypes[] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address'
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city'
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state'
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country'
        },
        {
            title: 'Postal Code',
            dataIndex: 'postalCode',
            key: 'postalCode'
        },
    ]

    const data = [
        {
            key: '1',
            name: 'Warehouse x',
            email: 'WY2Hd@example.com',
            phone: '123-456-7890',
            address: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            country: 'USA',
            postalCode: '12345'
        }, {
            key: '2',
            name: 'Warehouse x',
            email: 'WY2Hd@example.com',
            phone: '123-456-7890',
            address: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            country: 'USA',
            postalCode: '12345'
        }, {
            key: '3',
            name: 'Warehouse x',
            email: 'WY2Hd@example.com',
            phone: '123-456-7890',
            address: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            country: 'USA',
            postalCode: '12345'
        }, {
            key: '4',
            name: 'Warehouse x',
            email: 'WY2Hd@example.com',
            phone: '123-456-7890',
            address: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            country: 'USA',
            postalCode: '12345'
        }, {
            key: '5',
            name: 'Warehouse x',
            email: 'WY2Hd@example.com',
            phone: '123-456-7890',
            address: '123 Main St',
            city: 'Anytown',
            state: 'CA',
            country: 'USA',
            postalCode: '12345'
        }
    ]
    return (
        <DynamicTable fields={fields} columns={columns as []} data={data} form={<CustomerForm />} title={'Warehouse'} />
    )
}

export default Warehouse