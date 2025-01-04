import { Button, Col, Collapse, Input, notification, Row, Select, } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';
import { StyledInputWrapper } from '../../components/DynamicDrawer/drawer.styles';


const PlacesForm = () => {

    const PlaceDetailsData = () => {
        return (
            <Row>
                <StyledInputWrapper span={24}>
                    <label>Name</label>
                    <Input placeholder="Name" type='text' />
                </StyledInputWrapper>
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
    const AvatarData = () => {
        return (
            <Row align={'middle'} justify={'space-between'}>
                <StyledInputWrapper span={18}>
                    <label>Avatar</label>
                    <Select
                        style={{ width: '100%' }}
                        placeholder={'Avatar'}
                        value={'Avatar'}
                        onChange={(value) => { }}
                        options={[{ value: 'Company', label: 'Company' }]}
                    />
                </StyledInputWrapper>
                <Col span={6}>
                    <img src="https://img.freepik.com/premium-vector/silhouette-company-office-corporate-firm-building_184560-370.jpg" style={{ width: '150px' }} alt="" />
                </Col>
            </Row>
        )
    }

    return (
        <>
            <Collapse
                style={{ marginBottom: 20 }}
                activeKey={['1']}
                items={[{ key: '1', label: 'Place Details', children: <PlaceDetailsData /> }]}
            />

            <Collapse
                style={{ marginBottom: 20 }}
                activeKey={['2']}
                items={[{ key: '2', label: 'Setup', children: <AvatarData /> }]}
            />

            <Button type="primary" style={{ width: '100%', margin: 0 }}
                onClick={() => {
                    notification.success({
                        message: 'Place Added Successfully',
                    });
                }}
            >
                <EnvironmentOutlined /> Save Place
            </Button>
        </>
    )
}

export default PlacesForm