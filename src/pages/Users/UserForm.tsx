import { useState } from 'react';
import { LoadingOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Collapse, Flex, Input, message, notification, Row, Select, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import { StyledInputWrapper, StyledUploadWrapper } from '../../components/DynamicDrawer/drawer.styles';
import Search from 'antd/es/transfer/search';
import { TableTypes } from '../../types/table.types';
import { StyledTable } from '../../components/DynamicTable/table.styles';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];


const getBase64 = (img: FileType, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};

const beforeUpload = (file: FileType) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};

const UserForm = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

    const handleChange: UploadProps['onChange'] = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj as FileType, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };

    const uploadButton = (
        <button style={{ border: 0, background: 'none' }} type="button">
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </button>
    );

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
                <StyledInputWrapper span={12}>
                    <label>Name</label>
                    <Input placeholder="Name" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Email</label>
                    <Input placeholder="Email" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Phone</label>
                    <Input placeholder="Phone" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Country</label>
                    <Select
                        placeholder={'Country'}
                        value={'Select Country'}
                        onChange={(value) => { }}
                        options={[{ value: 'UAE', label: 'UAE' }, { value: 'KSA', label: 'KSA' }]}
                    />
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
            <StyledUploadWrapper align='center' justify='space-between'>
                <Flex justify={'center'} align={'start'} gap={15}>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                    </Upload>

                    <div>
                        <Collapse style={{ marginBottom: 20 }}
                            activeKey={['1']}
                            items={[{ key: '1', label: 'User Details', children: <UserDetailsData /> }]}
                        />

                        <Collapse
                            style={{ marginBottom: 20 }}
                            activeKey={['2']}
                            items={[{ key: '2', label: 'Permissions', children: <Permissions /> }]}
                        />
                        <Button type="primary" style={{ width: '100%', margin: 0 }}
                            onClick={() => {
                                notification.success({
                                    message: 'User Added Successfully',
                                });
                            }}
                        >
                            <SaveOutlined /> Save User
                        </Button>
                    </div>
                </Flex>
            </StyledUploadWrapper>
        </>
    )
}

export default UserForm