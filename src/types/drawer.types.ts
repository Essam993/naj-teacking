export interface ICustomDrawer<T> {
    fields?: React.ReactNode
    title: string
    open: boolean
    onClose: () => void
}