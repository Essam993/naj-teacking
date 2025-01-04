import React, { useState } from 'react';
import { Button, Col, DatePicker, Input, InputNumber, Modal, Row, Select } from 'antd';

interface Field {
    type: string;
    label: string;
    options?: { value: string; label: string }[];
    defaultValue?: string | number;
}

const ModalForm = ({ fields }: { fields: Field[] }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filterValues, setFilterValues] = useState<{ [key: string]: string | number }>({});

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleFilterChange = (label: string, value: string | number) => {
        setFilterValues((prevValues) => ({ ...prevValues, [label]: value }));
    };
    

    const renderFilterField = (field: Field) => {
        switch (field.type) {
            case 'select':
                return (
                    <Select
                        placeholder={field.label}
                        value={filterValues[field.label]}
                        onChange={(value) => handleFilterChange(field.label, value)}
                        options={field.options}
                    />
                );
            case 'number':
                return (
                    <InputNumber
                        placeholder={field.label}
                        value={filterValues[field.label]}
                        onChange={(value) => handleFilterChange(field.label, value as number)}
                    />
                );
            case 'date':
                return (
                    <DatePicker
                        value={filterValues[field.label]}
                        onChange={(value) => handleFilterChange(field.label, value)}
                    />
                );
            default:
                return (
                    <Input
                        placeholder={field.label}
                        value={filterValues[field.label]}
                        onChange={(e) => handleFilterChange(field.label, e.target.value)}
                    />
                );
        }
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal
                title="Basic Modal"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={800}
            >
                <Row>
                    {fields?.map((field, index) => (
                        <Col span={6} key={index}>
                            {renderFilterField(field)}
                        </Col>
                    ))}
                </Row>
            </Modal>
        </>
    );
};

export default ModalForm;