import DynamicTable from '../../components/DynamicTable';
import { Space, Tag } from 'antd';
import { TableTypes } from '../../types/table.types';
import RolesForm from './RolesForm';

const Roles = () => {
    const columns: TableTypes[] = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <Tag color="blue">{text}</Tag>,
        },
        {
            title: 'Permissions',
            dataIndex: 'permissions',
            key: 'permissions',
            render: (text: string, record: any) => (
                <Space>
                    {record.permissions.map((permission: string) => (
                        <Tag key={permission} color={permission === 'read' ? 'green' : 'purple'}>
                            {permission}
                        </Tag>
                    ))}
                </Space>
            ),
        },
    ];

    const data = [
        {
            id: 1,
            name: 'Admin',
            permissions: ['create', 'read', 'update', 'delete'],
        },
        {
            id: 2,
            name: 'Moderator',
            permissions: ['read', 'update'],
        },
        {
            id: 3,
            name: 'User',
            permissions: ['read'],
        },
        {
            id: 4,
            name: 'Guest',
            permissions: [],
        },
        {
            id: 5,
            name: 'Editor',
            permissions: ['create', 'read', 'update'],
        },
        {
            id: 6,
            name: 'Reviewer',
            permissions: ['read', 'update'],
        },
        {
            id: 7,
            name: 'Contributor',
            permissions: ['create', 'read'],
        },
        {
            id: 8,
            name: 'Subscriber',
            permissions: ['read'],
        },
        {
            id: 9,
            name: 'Author',
            permissions: ['create', 'read', 'update'],
        },
        {
            id: 10,
            name: 'Maintainer',
            permissions: ['create', 'read', 'update', 'delete'],
        },
    ];

    const fields = [
        {
            label: 'Name',
            type: 'text',
        }, {
            label: 'Permissions',
            type: 'select',
            options: [
                { value: 'create', label: 'create' },
                { value: 'read', label: 'read' },
                { value: 'update', label: 'update' },
                { value: 'delete', label: 'delete' },
            ],
        }
    ]
    return (
            <DynamicTable columns={columns as []} data={data} fields={fields} title={'Roles'} form={<RolesForm />}/>
    );
};

export default Roles;