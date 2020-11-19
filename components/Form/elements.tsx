import styled from 'styled-components'

import { colors } from '../../constants';
import Container from "../Container";

// Input
const InputContainer = styled(Container)`
  width: 300px;
  margin-bottom: 30px;
  position: relative;

  &[disabled] {
    input {
      opacity: 0.5;
      background: ${colors.INPUT_DISABLED_BACKGROUND};
    }
  }
`

const InputField = styled.input`
  width: 100%;
  height: 38px;
  background: ${colors.GRAY_LIGHT};
  border: 1px solid ${colors.GRAY};
  padding: 2px 5px;
  font-size: 17px;
  font-weight: 400;
  color: #000;
  -webkit-appearance: none;
  border-radius: 0;
  outline: none;
`

const InputLabel = styled.label`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 5px;
`

const ErrorMessage = styled.p`
  color: ${colors.RED};
  position: ${props => props.position || 'absolute'};
  top: ${props => props.top || 50}px;
  left: 0;
  font-size: 13px;
`

export {
  InputContainer,
  InputField,
  InputLabel,
  ErrorMessage
}
