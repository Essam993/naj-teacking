import { Col, Divider, Flex, Row, Tag } from 'antd';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import Map from '../../components/Map';
import { CustomTitle, CustomTruckDetail, StyledTruckDetailsWrapper } from './trucksStyles';
import Cars from '../Cars';
import { CustomPageHeader } from '../../styles/global';

const TrucksDetails = () => {
  const location = useLocation();
  const record = location.state;

  console.log(record)
  return (

    <Flex vertical>
      <CustomPageHeader>Truck <Tag color='blue'>(#{record.truckId})</Tag></CustomPageHeader>

      <Row justify="space-between">
        <Col md={12} sm={24} xs={24}>
          <StyledTruckDetailsWrapper>
            <Col span={23}>
              <CustomTruckDetail>
                <span className='title'>Truck Id:</span> <span className='value'><Tag color='pink'>{record.truckId}</Tag></span>
              </CustomTruckDetail>
            </Col>
            <Col span={23}>
              <CustomTruckDetail>
                <span className='title'>Model:</span> <span className='value'>{record.model}</span>
              </CustomTruckDetail>
            </Col>
            <Col span={23}>
              <CustomTruckDetail>
                <span className='title'>Capacity:</span> <span className='value'>{record.capacity}</span>
              </CustomTruckDetail>
            </Col>
            <Col span={23}>
              <CustomTruckDetail>
                <span className='title'>Duration:</span> <span className='value'>{record.duration}</span>
              </CustomTruckDetail>
            </Col>
            <Col span={23}>
              <CustomTruckDetail>
                <span className='title'>Starting Time:</span> <span className='value'>{record.startingTime}</span>
              </CustomTruckDetail>
            </Col>
            <Col span={23}>
              <CustomTruckDetail>
                <span className='title'>Arriving Time:</span> <span className='value'>{record.arrivingTime}</span>
              </CustomTruckDetail>
            </Col>
            <Col span={23}>
              <CustomTruckDetail>
                <span className='title'>Duration:</span> <span className='value'>{record.duration}</span>
              </CustomTruckDetail>
            </Col>
          </StyledTruckDetailsWrapper>
        </Col>
        <Col md={12} sm={24} xs={24}>
          <Map />
        </Col>
        <Col md={24} sm={24} xs={24} style={{ marginTop: '20px' }}>
          <Cars />
        </Col>
      </Row>
    </Flex>
  );
};

export default TrucksDetails;