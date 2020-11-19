import React from 'react';
import Link from "next/link";

import LoginFormContainer from "../../components/Auth/Login/LoginContainer";
import { AuthFormContainer } from "../../components/Auth/elements";

export default function Login() {
    return (
        <AuthFormContainer>
            <h1>Login</h1>
            <LoginFormContainer/>
            <Link href={'/registration'}><a>Go to registration</a></Link>
        </AuthFormContainer>
    )
}

