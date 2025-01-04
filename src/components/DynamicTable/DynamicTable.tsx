import React, { useState } from 'react';
import { Button, Col, Flex, TableProps, Tooltip, Menu } from 'antd';
import { DownloadOutlined, FilterOutlined, PlusOutlined, ReloadOutlined, UploadOutlined } from '@ant-design/icons';
import { StyledTable, StyledTableTopBar } from './table.styles';
import { ICustomTable } from '../../types/table.types';
import Search from 'antd/es/input/Search';
import Filter from '../../components/UnifiedFilter';
import DynamicDrawer from '../DynamicDrawer';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

const DynamicTable = <T extends {}>({ columns, data, pagination, fields = [], title, form }: ICustomTable<T>) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
    const [filteredData, setFilteredData] = useState(data);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<any> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const toggleFilterMenu = () => {
        setIsFilterMenuOpen(!isFilterMenuOpen);
    };

    const handleApplyFilters = (filterValues: { [key: string]: string | number }) => {
        console.log('Filter values:', filterValues);
        const filtered = data?.filter((item) => {
            return Object.entries(filterValues).every(([key, value]) => {
                if (!value) return true;
                return String(item[key] ?? '').toLowerCase().includes(String(value).toLowerCase());
            });
        });
        console.log('Filtered data:', filtered);
        setFilteredData(filtered);
    };
    
    

    return (
        <>
            <StyledTableTopBar>
                <Col span={12}>
                    <span className="table-title">{title}</span>
                    <Search placeholder="Search" allowClear onSearch={() => { }} style={{ width: 300 }} />
                </Col>
                <Col span={12}>
                    <Flex gap={10} justify="flex-end">
                        <Tooltip title="Reload Data">
                            <Button>
                                <ReloadOutlined />
                            </Button>
                        </Tooltip>
                        <Button onClick={toggleFilterMenu}>
                            <FilterOutlined /> Filter
                        </Button>
                        {isFilterMenuOpen && (
                            <Menu
                                style={{
                                    position: 'absolute',
                                    top: '60px',
                                    right: '20px',
                                    zIndex: 1000,
                                    padding: '10px',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                                    background: '#fff',
                                }}
                                onClick={() => setIsFilterMenuOpen(false)}
                            >
                                <Filter fields={fields} onApplyFilters={handleApplyFilters} />
                            </Menu>
                        )}
                        <Button type="primary" onClick={() => setOpenDrawer(true)}>
                            <PlusOutlined /> New
                        </Button>
                        <Button>
                            <UploadOutlined /> Import
                        </Button>
                        <Button>
                            <DownloadOutlined /> Export
                        </Button>
                    </Flex>
                </Col>
            </StyledTableTopBar>
            <StyledTable columns={columns} dataSource={filteredData} rowSelection={rowSelection} pagination={pagination} id="table-content" />
            <DynamicDrawer
                fields={form}
                title={title}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            />
        </>
    );
};


export default DynamicTable;
