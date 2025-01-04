import { useNavigate } from 'react-router-dom';
import DynamicTable from '../../components/DynamicTable';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import { Button } from 'antd';
import { TableTypes } from '../../types/table.types';
const Cars = () => {
    const navigate = useNavigate()

    const fields = [
        {
            label: 'Name',
            type: 'text',
        },
        {
            label: 'Vin',
            type: 'text',
        },
        {
            label: 'Company',
            type: 'select',
            options: [
                { value: 'Tesla', label: 'Tesla' },
                { value: 'Toyota', label: 'Toyota' },
                { value: 'Honda', label: 'Honda' },
                { value: 'Ford', label: 'Ford' },
            ],
        },
        {
            label: 'Color',
            type: 'select',
            options: [
                { value: 'Red', label: 'Red' },
                { value: 'Blue', label: 'Blue' },
                { value: 'Green', label: 'Green' },
                { value: 'Yellow', label: 'Yellow' },
            ],
        },
        {
            label: 'Added At',
            type: 'date'
        }
    ];

    const columns: TableTypes[] = [
        {
            title: 'Vehicle Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'VIN',
            dataIndex: 'vin',
            key: 'vin',
        },
        {
            title: 'Color',
            dataIndex: 'color',
            key: 'color',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            render: (text: any, record: any) => (
                <div>
                    <img src={record.logo} alt={record.company} style={{ width: 20, height: 20, marginRight: 10 }} />
                    {text}
                </div>
            ),
        },
        {
            title: 'Port',
            dataIndex: 'port',
            key: 'port',
        },
        {
            title: 'Added At',
            dataIndex: 'addedAt',
            key: 'addedAt'
        },
        {
            title: 'Details',
            key: 'action',
            render: (text: any, record: any) => (
                <Button
                    onClick={() => navigate(`/cars/${record.name}`, { state: record })}
                >
                    <EyeOutlined />
                </Button>
            ),
        },
    ];

    const data = [
        {
          id: 1,
          name: "Toyota Camry",
          vin: "1HGCM82633A123456",
          color: "Silver",
          company: "Toyota",
          logo: "https://image.similarpng.com/very-thumbnail/2020/09/Toyota-logo-icon-on-transparent--PNG.png",
          port: "Port of Los Angeles",
          added_date: "2024-12-01",
        },
        {
          id: 2,
          name: "Ford Mustang",
          vin: "1FAFP404XWF123457",
          color: "Red",
          company: "Ford",
          logo: "https://www.hatchwise.com/wp-content/uploads/2023/07/image-27.png",
          port: "Port of New York",
          added_date: "2024-12-02",
        },
        {
          id: 3,
          name: "Chevrolet Malibu",
          vin: "1G1ZD5ST5HF123458",
          color: "Blue",
          company: "Chevrolet",
          logo: "https://w7.pngwing.com/pngs/506/225/png-transparent-2011-chevrolet-cruze-car-chevrolet-impala-logo-chevrolet-emblem-truck-desktop-wallpaper-thumbnail.png",
          port: "Port of Houston",
          added_date: "2024-12-03",
        },
        {
          id: 4,
          name: "Honda Accord",
          vin: "1HGCV1F31JA123459",
          color: "Black",
          company: "Honda",
          logo: "https://wallpapers.com/images/hd/silver-honda-logo-3ue41s7ervwlcmte.jpg",
          port: "Port of Miami",
          added_date: "2024-12-04",
        },
        {
          id: 5,
          name: "Nissan Altima",
          vin: "1N4AL3AP5JC123460",
          color: "White",
          company: "Nissan",
          logo: "https://e7.pngegg.com/pngimages/132/969/png-clipart-nissan-car-logo-automotive-industry-brand-nissan-emblem-trademark.png",
          port: "Port of Savannah",
          added_date: "2024-12-05",
        },
        {
          id: 6,
          name: "BMW 3 Series",
          vin: "WBA8E9G58GNU123461",
          color: "Grey",
          company: "BMW",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/768px-BMW.svg.png",
          port: "Port of Baltimore",
          added_date: "2024-12-06",
        },
        {
          id: 7,
          name: "Mercedes-Benz C-Class",
          vin: "WDDWF4KB7JR123462",
          color: "Silver",
          company: "Mercedes-Benz",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/768px-Mercedes-Logo.svg.png",
          port: "Port of Charleston",
          added_date: "2024-12-07",
        },
        {
          id: 8,
          name: "Audi A4",
          vin: "WAUFFAFL9GN123463",
          color: "Blue",
          company: "Audi",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jLdiRIffyVvYjJSgZqFzc73YJSfqcRbR6Q&s",
          port: "Port of Seattle",
          added_date: "2024-12-08",
        },
        {
          id: 9,
          name: "Lexus RX",
          vin: "2T2ZZMCA3HC123464",
          color: "White",
          company: "Lexus",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWhUDoSoS0TWD27O-j_wssH7Da83CQd3K4Mg&s",
          port: "Port of Tacoma",
          added_date: "2024-12-09",
        },
        {
          id: 10,
          name: "Tesla Model 3",
          vin: "5YJ3E1EA8KF123465",
          color: "Black",
          company: "Tesla",
          logo: "https://www.svgrepo.com/show/342292/tesla.svg",
          port: "Port of Oakland",
          added_date: "2024-12-10",
        },
        {
          id: 11,
          name: "Hyundai Sonata",
          vin: "5NPE24AF6HH123466",
          color: "Blue",
          company: "Hyundai",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqMGRlQ0mQCEZiaK0B9CqH3u8i2FOC2-XTNA&s",
          port: "Port of Los Angeles",
          added_date: "2024-12-11",
        },
        {
          id: 12,
          name: "Kia Optima",
          vin: "5XXGU4L34JG123467",
          color: "Red",
          company: "Kia",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo8gTUCq9PQr6fmhC_-HZkac1hhpjcqmauoQ&s",
          port: "Port of New York",
          added_date: "2024-12-12",
        },
        {
          id: 13,
          name: "Volkswagen Passat",
          vin: "1VWAS7A30JC123468",
          color: "White",
          company: "Volkswagen",
          logo: "https://1000logos.net/wp-content/uploads/2021/04/Volkswagen-logo.png",
          port: "Port of Houston",
          added_date: "2024-12-13",
        },
        {
          id: 14,
          name: "Subaru Outback",
          vin: "4S4BSAAC4H3123469",
          color: "Green",
          company: "Subaru",
          logo: "https://w7.pngwing.com/pngs/391/838/png-transparent-supra-hd-logo-thumbnail.png",
          port: "Port of Miami",
          added_date: "2024-12-14",
        },
        {
          id: 15,
          name: "Mazda CX-5",
          vin: "JM3KFADL4J0123470",
          color: "Grey",
          company: "Mazda",
          logo: "https://pngimg.com/d/mazda_PNG86.png",
          port: "Port of Savannah",
          added_date: "2024-12-15",
        },
      ];
      
      

    return (
        <DynamicTable
            columns={columns as []}
            data={data}
            fields={fields} title={'Cars'}
        />
    );
};

export default Cars;