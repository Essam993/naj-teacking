import { Button, Collapse, DatePicker, Input, Row, Select, message, Upload, notification } from 'antd';
import { PlusSquareOutlined, InboxOutlined, ExceptionOutlined } from '@ant-design/icons';
import { StyledInputWrapper } from '../../components/DynamicDrawer/drawer.styles';
import { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import type { UploadProps } from 'antd';


const OrderForm = () => {
    const [filterValues, setFilterValues] = useState<{ [key: string]: string | number }>({});

    const { Dragger } = Upload;

    const props: UploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
    };

    const handleFilterChange = (label: string, value: string | number) => {
        setFilterValues((prevValues) => ({ ...prevValues, [label]: value }));
    };

    const OrderDetailsData = () => {
        return (
            <Row>
                <StyledInputWrapper span={12}>
                    <label>Name</label>
                    <Input placeholder="Name" type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Internal ID</label>
                    <Input placeholder="NJ-5134165454" disabled type='text' />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Schadule</label>
                    <DatePicker
                        value={filterValues['schedule']}
                        onChange={(value) => handleFilterChange('schedule', value)}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Customer</label>
                    <Select
                        placeholder={'Customer'}
                        value={filterValues['Customer']}
                        onChange={(value) => handleFilterChange('Customer', value)}
                        options={[{ value: 'Ahmed Essam', label: 'Ahmed Essam' }, { value: 'user 2', label: 'user 2' }, { value: 'user 3', label: 'user 3' }]}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper span={24}>
                    <label>Service Provider</label>
                    <Select
                        placeholder={'Service Provider'}
                        value={filterValues['Service Provider']}
                        onChange={(value) => handleFilterChange('Service Provider', value)}
                        options={[{ value: 'Provider 1', label: 'Provider 1' }, { value: 'Provider 2', label: 'Provider 2' }, { value: 'Provider 3', label: 'Provider 3' }]}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper>
                    <label> Dispatch Immediatly</label>
                    <Input type='checkbox' />
                </StyledInputWrapper>
                <StyledInputWrapper>
                    <label>Require Proof Delivery</label>
                    <Input type='checkbox' />
                </StyledInputWrapper>
            </Row>
        )
    }
    const RouteData = () => {
        return (
            <Row align={'middle'} justify={'space-between'}>
                <StyledInputWrapper span={12}>
                    <label>Pickup</label>
                    <Select
                        placeholder={'Pickup'}
                        value={filterValues['Pickup']}
                        onChange={(value) => handleFilterChange('Pickup', value)}
                        options={[{ value: 'Pickup 1', label: 'Pickup 1' }, { value: 'Pickup 2', label: 'Pickup 2' }, { value: 'Pickup 3', label: 'Pickup 3' }]}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Dropoff</label>
                    <Select
                        placeholder={'Dropoff'}
                        value={filterValues['Dropoff']}
                        onChange={(value) => handleFilterChange('Dropoff', value)}
                        options={[{ value: 'Dropoff 1', label: 'Dropoff 1' }, { value: 'Dropoff 2', label: 'Dropoff 2' }, { value: 'Dropoff 3', label: 'Dropoff 3' }]}
                    />
                </StyledInputWrapper>
            </Row>
        )
    }

    const DriverData = () => {
        return (
            <Row align={'middle'} justify={'space-between'}>
                <StyledInputWrapper span={12}>
                    <label>Driver</label>
                    <Select
                        placeholder={'Driver'}
                        value={filterValues['Driver']}
                        onChange={(value) => handleFilterChange('Driver', value)}
                        options={[{ value: 'Driver 1', label: 'Driver 1' }, { value: 'Driver 2', label: 'Driver 2' }, { value: 'Driver 3', label: 'Driver 3' }]}
                    />
                </StyledInputWrapper>
                <StyledInputWrapper span={12}>
                    <label>Vehicle</label>
                    <Select
                        placeholder={'Vehicle'}
                        value={filterValues['Vehicle']}
                        onChange={(value) => handleFilterChange('Vehicle', value)}
                        options={[{ value: 'Vehicle 1', label: 'Vehicle 1' }, { value: 'Vehicle 2', label: 'Vehicle 2' }, { value: 'Vehicle 3', label: 'Vehicle 3' }]}
                    />
                </StyledInputWrapper>
            </Row>
        )
    }

    const Note = () => {
        return (
            <Row>
                <StyledInputWrapper span={24}>
                    <TextArea
                        rows={3}
                        placeholder='Enter order notes here ...'
                        value={filterValues['Note']}
                        onChange={(event) => handleFilterChange('Note', event.target.value)}
                    />
                </StyledInputWrapper>
            </Row>
        )
    }


    const Documents = () => {
        return (
            <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Upload Documents & Files</p>
                <p className="ant-upload-hint">
                    Drag and drop files onto this dropzone
                </p>
            </Dragger>
        )
    }

    const Payload = () => {
        return (
            <Button style={{ width: '150px' }}><PlusSquareOutlined />Add Item</Button>
        )
    }
    return (
        <>
            <Collapse
                style={{ marginBottom: 20 }}
                activeKey={['1']}
                items={[{ key: '1', label: 'Details', children: <OrderDetailsData /> }]}
            />

            <Collapse
                style={{ marginBottom: 20 }}
                activeKey={['2']}
                items={[{ key: '2', label: 'Setup', children: <RouteData /> }]}
            />

            <Collapse
                style={{ marginBottom: 20 }}
                activeKey={['3']}
                items={[{ key: '3', label: 'Payload', children: <Payload /> }]}
            />

            <Collapse
                style={{ marginBottom: 20 }}
                activeKey={['4']}
                items={[{ key: '4', label: 'Assign Car & Driver', children: <DriverData /> }]}
            />

            <Collapse
                style={{ marginBottom: 20 }}
                activeKey={['5']}
                items={[{ key: '5', label: 'Note', children: <Note /> }]}
            />

            <Collapse
                style={{ marginBottom: 20 }}
                activeKey={['6']}
                items={[{ key: '6', label: 'Document', children: <Documents /> }]}
            />

            <Button type="primary" style={{ width: '100%', margin: 0 }}
                onClick={() => {
                    notification.success({
                        message: 'Order Added Successfully',
                    });
                }}
            >
                <ExceptionOutlined /> Save Order
            </Button>
        </>
    )
}

export default OrderForm