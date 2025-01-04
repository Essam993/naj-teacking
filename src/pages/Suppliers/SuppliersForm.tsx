import { useState } from 'react';
import { EditOutlined, LoadingOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Collapse, Divider, Flex, Input, message, notification, Row, Select, Tag, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import { StyledDrawer, StyledInputWrapper, StyledUploadWrapper } from '../../components/DynamicDrawer/drawer.styles';
import PlacesForm from '../Places/PlacesForm';

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

const SuppliersForm = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [openAddressForm, setOpenAddressForm] = useState(false);

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

    const SupplierDetailsData = () => {
        return (
            <Row>
                <StyledInputWrapper span={24}>
                    <label>Name</label>
                    <Input placeholder="Name" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={24}>
                    <label>Email</label>
                    <Input placeholder="Email" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={24}>
                    <label>Phone</label>
                    <Input placeholder="Phone" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={24}>
                    <label>Website</label>
                    <Input placeholder="Website" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={24}>
                    <label>Driver Assigned</label>
                    <Select
                        placeholder={'Driver Assigned'}
                        value={'Ahmed Essam'}
                        onChange={(value) => { }}
                        options={[{ value: 'Driver 1', label: 'Driver 1' }, { value: 'Driver 2', label: 'Driver 2' }]}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper span={24}>
                    <label>Type</label>
                    <Select
                        placeholder={'Select Suppliers Types'}
                        value={'Carrier Trucking Company'}
                        onChange={(value) => { }}
                        options={[{ value: 'Carrier Trucking Company', label: 'Carrier Trucking Company' }, { value: 'Carrier Shipping Line', label: 'Carrier Shipping Line' }]}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper span={24}>
                    <label>Status</label>
                    <Select
                        placeholder={'Status'}
                        value={'Active'}
                        onChange={(value) => { }}
                        options={[{ value: 'Active', label: 'Active' }, { value: 'Pending', label: 'Pending' }]}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper span={24}>
                    <Flex justify={'space-between'} align={'center'} style={{ marginBottom: '5px' }}>
                        <label>Address</label>
                        <Button style={{ width: '150px', margin: 0 }} onClick={() => setOpenAddressForm(true)}>
                            <EditOutlined />
                            New Address
                        </Button>
                    </Flex>
                    <Select
                        placeholder={'Select Address'}
                        value={'Nejoum AL Jazeera'}
                        onChange={(value) => { }}
                        options={[{ value: 'Nejoum AL Jazeera', label: 'Nejoum AL Jazeera' }, { value: 'Dubai Port', label: 'Dubai Port' }]}
                    />
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
            </Row>
        )
    }

    const AvatarData = () => {
        return (
            <Row>
                <StyledInputWrapper span={24}>
                    <label>Selected Map Avatar</label>
                    <Select
                        style={{ width: '100%' }}
                        placeholder={'Create Custom Supplier'}
                        value={'Create Custom Supplier'}
                        onChange={(value) => { }}
                        options={[{ value: 'Create Custom Supplier', label: 'Create Custom Supplier' }]}
                    />
                </StyledInputWrapper>
            </Row>
        )
    }

    return (
        <>
            <StyledUploadWrapper align='center' justify='space-between'>
                <Flex justify={'center'} align={'center'} gap={10}>
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
                    <div className="upload-data">
                        <h3>New Supplier</h3>
                        <span> - - - </span>
                    </div>
                </Flex>
                <Flex vertical justify={'center'} align={'center'} gap={10}>
                    <Tag color={'green'}>
                        Active
                    </Tag>
                    <Button type="primary"
                        onClick={() => {
                            notification.success({
                                message: 'Supplier Added Successfully',
                            });
                        }}
                    >
                        <SaveOutlined /> Save Supplier
                    </Button>
                </Flex>
            </StyledUploadWrapper>
            <Divider />

            <Collapse
                style={{ marginBottom: 20 }}
                activeKey={['2']}
                items={[{ key: '2', label: 'Setup', children: <AvatarData /> }]}
            />

            <Collapse
                style={{ marginBottom: 20 }}
                activeKey={['1']}
                items={[{ key: '1', label: 'Vendor Details', children: <SupplierDetailsData /> }]}
            />

            <StyledDrawer
                title={'Add Address'}
                onClose={() => setOpenAddressForm(false)}
                open={openAddressForm}
                size="large"
            >
                <PlacesForm />
            </StyledDrawer>
        </>
    )
}

export default SuppliersForm