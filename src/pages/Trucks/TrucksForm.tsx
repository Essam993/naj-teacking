import { useState } from 'react';
import { LoadingOutlined, PlusOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Col, Collapse, Divider, Flex, Input, message, notification, Row, Select, Tag, Upload } from 'antd';
import type { GetProp, UploadProps } from 'antd';
import { StyledInputWrapper, StyledUploadWrapper } from '../../components/DynamicDrawer/drawer.styles';

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

const TrucksForm = () => {
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

    const TruckDetailsData = () => {
        return (
            <Row>
                <StyledInputWrapper span={12}>
                    <label>Internal ID</label>
                    <Input placeholder="Internal ID" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Plate Number</label>
                    <Input placeholder="Plate Number" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>VIN Number</label>
                    <Input placeholder="VIN Number" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Make</label>
                    <Input placeholder="Make" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Model</label>
                    <Input placeholder="Model" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Year</label>
                    <Input placeholder="Year" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Driver Assigned</label>
                    <Select
                        placeholder={'Driver Assigned'}
                        value={'Ahmed Essam'}
                        onChange={(value) => { }}
                        options={[{ value: 'Driver 1', label: 'Driver 1' }, { value: 'Driver 2', label: 'Driver 2' }]}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Status</label>
                    <Select
                        placeholder={'Status'}
                        value={'Active'}
                        onChange={(value) => { }}
                        options={[{ value: 'Active', label: 'Active' }, { value: 'Pending', label: 'Pending' }]}
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
            </Row>
        )
    }

    const AvatarData = () => {
        return (
            <Row>
                <Col span={16}>
                    <StyledInputWrapper span={12}>
                        <label>Selected Map Avatar</label>
                        <Select
                            style={{ width: '100%' }}
                            placeholder={'Truck Driver'}
                            value={'Truck Driver'}
                            onChange={(value) => { }}
                            options={[{ value: 'Truck Driver', label: 'Truck Driver' }]}
                        />
                    </StyledInputWrapper>
                </Col>
                <Col span={8}>
                    <img width={'100%'} src="https://t4.ftcdn.net/jpg/02/13/57/85/360_F_213578592_9RAQr6xu7vPbSyfClutfxWVXeK6wGBVF.jpg" alt="" />
                </Col>
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
                        <h3>New Truck</h3>
                        <span>No Driver Assigned</span>
                    </div>
                </Flex>
                <Flex vertical justify={'center'} align={'center'} gap={10}>
                    <Tag color={'green'}>
                        Active
                    </Tag>
                    <Button type="primary"
                        onClick={() => {
                            notification.success({
                                message: 'Truck Added Successfully',
                            });
                        }}
                    >
                        <SaveOutlined /> Save Truck
                    </Button>
                </Flex>
            </StyledUploadWrapper>
            <Divider />

            <Collapse
                style={{ marginBottom: 20 }}
                activeKey={['1']}
                items={[{ key: '1', label: 'Details', children: <TruckDetailsData /> }]}
            />

            <Collapse
                style={{ marginBottom: 20 }}
                activeKey={['2']}
                items={[{ key: '2', label: 'Avatar', children: <AvatarData /> }]}
            />
        </>
    )
}

export default TrucksForm