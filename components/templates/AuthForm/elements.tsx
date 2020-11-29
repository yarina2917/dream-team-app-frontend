import styled from 'styled-components'
import FormControlInput from "../../atoms/FormInput";
import Container from "../../atoms/Container";

const FormInput = styled(FormControlInput)``;

const AuthFormContainer = styled(Container)`
    display: block;
    width: 300px;
    margin: 0 auto;
    text-align: center;
`

export {
    FormInput,
    AuthFormContainer
}
