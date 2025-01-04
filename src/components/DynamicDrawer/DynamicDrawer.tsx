import { ICustomDrawer } from '../../types/drawer.types';
import { StyledDrawer } from './drawer.styles';

const DynamicDrawer = <T extends {}>({ fields, title, open, onClose }: ICustomDrawer<T>) => {

    return (
        <StyledDrawer
            title={title}
            onClose={onClose}
            open={open}
            size="large"
        >
            {fields}
        </StyledDrawer>
    );
};

export default DynamicDrawer;
