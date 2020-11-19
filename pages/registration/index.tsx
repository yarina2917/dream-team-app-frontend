import React from 'react';
import Link from "next/link";

import RegistrationFormContainer from '../../components/Auth/Registration/RegistrationContainer';
import { AuthFormContainer } from "../../components/Auth/elements";

export default function Login() {
    return (
        <AuthFormContainer>
            <h1>Registration</h1>
            <RegistrationFormContainer/>
            <Link href={'/login'}><a>Go to login</a></Link>
        </AuthFormContainer>
    )
}
