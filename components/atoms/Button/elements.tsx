import styled from 'styled-components'
import { colors } from '../../../constants';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  background: ${colors.BLACK};
  color: ${colors.WHITE};
  padding: 10px 15px;
  margin: 0 auto 10px;
  text-transform: uppercase;
  border: 1px solid ${colors.BLACK};
  font-weight: bold;
  font-size: 16px;
  ${props => props.styles}
`

export {
    Button
}
