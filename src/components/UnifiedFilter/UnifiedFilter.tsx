import { useState } from 'react';
import { Select, InputNumber, DatePicker, Input, Col, Flex, Button } from 'antd';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { CustomFilterItemWrapper, StyledFilterRow } from './UnifiedFilter.styles';

interface Field {
  type: string;
  label: string;
  options?: { value: string; label: string }[];
  defaultValue?: string | number;
}

// Helper function to convert string to camelCase
const toCamelCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '');
};

const Filter = ({
  fields,
  onApplyFilters,
}: {
  fields: Field[];
  onApplyFilters: (values: { [key: string]: string | number }) => void;
}) => {
  const [filterValues, setFilterValues] = useState<{ [key: string]: string | number }>({});

  const handleFilterChange = (label: string, value: string | number) => {
    const camelCaseLabel = toCamelCase(label);
    setFilterValues((prevValues) => ({ ...prevValues, [camelCaseLabel]: value }));
  };

  const handleApply = () => {
    console.log('Applying filters with values:', filterValues);
    onApplyFilters(filterValues);
  };

  const handleClear = () => {
    setFilterValues({});
    onApplyFilters({});
  };

  const renderFilterField = (field: Field) => {
    const camelCaseLabel = toCamelCase(field.label);
    switch (field.type) {
      case 'select':
        return (
          <Select
            placeholder={field.label.toLowerCase()}
            value={filterValues[camelCaseLabel]}
            onChange={(value) => handleFilterChange(field.label, value)}
            options={field.options}
          />
        );
      case 'number':
        return (
          <InputNumber
            placeholder={field.label.toLowerCase()}
            value={filterValues[camelCaseLabel]}
            onChange={(value) => handleFilterChange(field.label, value as number)}
          />
        );
      case 'date':
        return (
          <DatePicker
            format="YYYY-MM-DD"
            value={filterValues[camelCaseLabel]}
            onChange={(value) => handleFilterChange(field.label, value)}
          />
        );
      default:
        return (
          <Input
            placeholder={field.label.toLowerCase()}
            value={filterValues[camelCaseLabel]}
            onChange={(e) => handleFilterChange(field.label, e.target.value)}
          />
        );
    }
  };

  return (
    <StyledFilterRow>
      <Col span={24}>
        <h3 className="card-header">Filter</h3>
      </Col>
      <Col span={24}>
        <StyledFilterRow>
          {fields?.map((field, index) => (
            <CustomFilterItemWrapper span={8} key={index}>
              {/* <label>{field.label.toLowerCase()}</label> */}
              {renderFilterField(field)}
            </CustomFilterItemWrapper>
          ))}
        </StyledFilterRow>
      </Col>
      <Col span={24}>
        <Flex className="card-footer" gap={10}>
          <Button onClick={handleClear}>
            <DeleteOutlined /> Clear
          </Button>
          <Button type="primary" onClick={handleApply}>
            <CheckOutlined /> Apply
          </Button>
        </Flex>
      </Col>
    </StyledFilterRow>
  );
};

export default Filter;
