import { Row } from "antd"
import styled from "styled-components"

export const StyledOrderDetails = styled(Row)`
    .map-container{
        height: 80vh !important;

        .leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{
            height: 100% !important;
        }
    }

    .ant-col{
        padding: 10px;
    }

    :where(.css-dev-only-do-not-override-1a0j4fr).ant-collapse .ant-collapse-content>.ant-collapse-content-box {
        padding: 0px 16px;
    }
`