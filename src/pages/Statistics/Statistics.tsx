import React from 'react';
import LineChart from './LineChart';
import { Col, Row } from 'antd';
import PolarChart from './PolarChart';
import ArcChart from './ArcChart';
import { StyledChartWrapper } from './statistics.styles';
import DeliveryTimeSection from './AverageDelivery';
import TimeDelayChart from './TimeDelay';

const Statistics = () => {


  return (
    <Row>
      <Col span={12}>
        <StyledChartWrapper>
          <LineChart />
        </StyledChartWrapper>
      </Col>
      <Col span={6}>
        <StyledChartWrapper>
          <PolarChart />
        </StyledChartWrapper>
      </Col>
      <Col span={6}>
        <StyledChartWrapper>
          <ArcChart />
        </StyledChartWrapper>
      </Col>
      <Col span={12} style={{ marginTop: '20px' }}>
        <StyledChartWrapper>
          <DeliveryTimeSection />
        </StyledChartWrapper>
      </Col>
      <Col span={12} style={{ marginTop: '20px' }}>
        <StyledChartWrapper>
          <TimeDelayChart />
        </StyledChartWrapper>
      </Col>
    </Row>
  );
};

export default Statistics;
