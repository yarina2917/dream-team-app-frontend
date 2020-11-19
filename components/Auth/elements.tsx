import styled from 'styled-components'
import FormControlInput from "../Form/FormInput/FormControlInput";
import Container from "../Container";

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
