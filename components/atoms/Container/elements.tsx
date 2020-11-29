import styled from 'styled-components'

const Container = styled.div`
  width: ${props => props.fullWidth ? '100%;' : props.width};
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  margin-bottom: ${props => props.marginBottom}px;
  ${props => props.styles}
`

export {
    Container
}
