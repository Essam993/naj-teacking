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

const CustomerForm = () => {
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

    const CustomerDetailsData = () => {
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
            </Row>
        )
    }

    const AddressDetails = () => {
        return (
            <Row>
                <StyledInputWrapper span={24}>
                    <label>Street 1</label>
                    <Input placeholder="Street 1" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={24}>
                    <label>Street 2</label>
                    <Input placeholder="Street 2" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={8}>
                    <label>Neighborhood</label>
                    <Input placeholder="Neighborhood" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={8}>
                    <label>Building</label>
                    <Input placeholder="Building" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={8}>
                    <label>Security Access Code</label>
                    <Input placeholder="Security Access Code" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={8}>
                    <label>Postal Code</label>
                    <Input placeholder="Postal Code" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={8}>
                    <label>City</label>
                    <Input placeholder="City" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={8}>
                    <label>State</label>
                    <Input placeholder="State" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={24}>
                    <label>Country</label>
                    <Select
                        placeholder={'Country'}
                        value={'UAE'}
                        onChange={(value) => { }}
                        options={[{ value: 'UAE', label: 'UAE' }, { value: 'KSA', label: 'KSA' }, { value: 'Qatar', label: 'Qatar' }]}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Latitude</label>
                    <Input placeholder="Latitude" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Longtude</label>
                    <Input placeholder="Longtude" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={24}>
                    <label>Phone</label>
                    <Input placeholder="Phone" type='text' />
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
                            items={[{ key: '1', label: 'User Details', children: <CustomerDetailsData /> }]}
                        />

                        <Collapse
                            style={{ marginBottom: 20 }}
                            activeKey={['2']}
                            items={[{ key: '2', label: 'Address Details', children: <AddressDetails /> }]}
                        />
                        <Button
                            type="primary"
                            style={{ width: '100%', margin: 0 }}
                            onClick={() => {
                                notification.success({
                                    message: 'Customer Added Successfully',
                                });
                            }}
                        >
                            <SaveOutlined /> Save Customer
                        </Button>

                    </div>
                </Flex>
            </StyledUploadWrapper>
        </>
    )
}

export default CustomerForm