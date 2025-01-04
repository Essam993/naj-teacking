import { TablePaginationConfig } from "antd"

export interface ICustomTable<T> {
    columns:
    | {
        key: string
        title: string
        dataIndex: string
    }[]
    | undefined
    data: { [key: string]: T }[] | undefined
    pagination?: TablePaginationConfig
    fields?: { label: string; type: string }[]
    title: string
    form?: React.ReactNode
}
export interface TableTypes {
    key: string
    title: string
    dataIndex?: string
    render?: (text: string, record: any) => React.ReactNode
}