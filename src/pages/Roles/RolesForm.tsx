import { SaveOutlined } from '@ant-design/icons';
import { Button, Collapse, Input, notification, Row, Select } from 'antd';
import { StyledInputWrapper, StyledUploadWrapper } from '../../components/DynamicDrawer/drawer.styles';
import Search from 'antd/es/transfer/search';
import { TableTypes } from '../../types/table.types';
import { StyledTable } from '../../components/DynamicTable/table.styles';


const RolesForm = () => {

    const columns: TableTypes[] = [
        {
            title: 'Permission',
            dataIndex: 'Permission',
            key: 'Permission',
        },
        {
            title: 'Description',
            dataIndex: 'Description',
            key: 'Description',
        }
    ];

    const data = [
        {
            key: '1',
            Permission: 'developer',
            Description: 'Permission to develop and manage applications',
        },
        {
            key: '2',
            Permission: 'admin',
            Description: 'Permission to manage users and roles',
        },
        {
            key: '3',
            Permission: 'user',
            Description: 'Permission to view and use applications',
        },
        {
            key: '4',
            Permission: 'read',
            Description: 'Permission to view applications',
        }
    ];

    const UserDetailsData = () => {
        return (
            <Row>
                <StyledInputWrapper span={24}>
                    <label>Role Name</label>
                    <Input placeholder="Role Name" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={24}>
                    <label>Role Description</label>
                    <Input placeholder="Role Description" type='text' />
                </StyledInputWrapper>
            </Row>
        )
    }

    const Permissions = () => {
        return (
            <Row>
                <StyledInputWrapper span={24}>
                    <label>Role</label>
                    <Select
                        placeholder={'Select Role'}
                        value={'Select Role'}
                        onChange={(value) => { }}
                        options={[{ value: 'Admin', label: 'Admin' }, { value: 'User', label: 'User' }]}
                    />
                </StyledInputWrapper>

                <StyledInputWrapper span={24}>
                    <label>Attached Policy</label>
                    <Select
                        placeholder={'Attached Policy'}
                        value={'Attached Policy'}
                        onChange={(value) => { }}
                        options={[{ value: 'DeveloperFullAccess', label: 'DeveloperFullAccess' }, { value: 'AdminFullAccess', label: 'AdminFullAccess' }, { value: 'UserFullAccess', label: 'UserFullAccess' }]}
                    />
                </StyledInputWrapper>

                <StyledInputWrapper span={24}>
                    <label>Select Permission</label>
                    <Search placeholder="Search Permission by Keywords" />
                    <StyledTable columns={columns} dataSource={data} pagination={false} style={{ marginTop: '10px', border: '1px solid #d9d9d9', borderRadius: '5px' }} />
                </StyledInputWrapper>
            </Row>
        )
    }

    return (
        <>
            <StyledUploadWrapper vertical align='center' justify='space-between'>

                <Collapse style={{ marginBottom: 20, width: '100%' }}
                    activeKey={['1']}
                    items={[{ key: '1', label: 'Role Data', children: <UserDetailsData /> }]}
                />

                <Collapse
                    style={{ marginBottom: 20 }}
                    activeKey={['2']}
                    items={[{ key: '2', label: 'Permissions', children: <Permissions /> }]}
                />
                <Button type="primary" style={{ width: '100%', margin: 0 }}
                    onClick={() => {
                        notification.success({
                            message: 'Role Added Successfully',
                        });
                    }}
                >
                    <SaveOutlined /> Save Role
                </Button>
            </StyledUploadWrapper>
        </>
    )
}

export default RolesForm