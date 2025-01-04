import React from 'react';
import Map from '../../components/Map';
import { EyeOutlined, FileSearchOutlined, SearchOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import { StyledDashboard } from './dashboard.styles';
import DynamicDrawer from '../../components/DynamicDrawer';
import DeliveryCard from './components/OrdersListSearch';

const MainContent: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  
  return (
    <StyledDashboard>
      <FloatButton.Group shape="circle" placement='left' style={{ insetInlineEnd: 24 }}>
        <FloatButton icon={<EyeOutlined />} />
        <FloatButton icon={<SearchOutlined />} />
        <FloatButton icon={<FileSearchOutlined />} onClick={() => setOpen(true)} />
      </FloatButton.Group>
      <Map />
    <DynamicDrawer  open={open} onClose={() => setOpen(false)} title="Track Orders" fields={<DeliveryCard />}/>

    </StyledDashboard>
  );
};

export default MainContent;