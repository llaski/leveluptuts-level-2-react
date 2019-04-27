import styled from 'styled-components'
import { elevation, transition, colors } from 'Utilities'

export const Card = styled.div`
    background: white;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    padding: 15px;
    color: ${colors.black};
    ${elevation[2]};
    ${transition({
        length: '2s'
    })};

    &:hover {
        ${elevation[5]};
    }
`