import React from "react";
import { useForm } from "react-hook-form";

import Button from "../../../atoms/Button";
import {AuthFormContainer, FormInput} from '../elements';

import { Props } from './Login.interface';
import Link from "next/link";

const LoginForm: React.FC<Props> = ({ errorMessage, loginUser, clearError }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (values) => {
        loginUser(values)
    };

    return (
        <AuthFormContainer>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <FormInput
                        id="username-field"
                        name="username"
                        type="text"
                        placeholder="Username"
                        label="Username"
                        error={errors.username}
                        inputRef={register({
                            required: 'This field is required',
                        })}
                    />
                </div>
                <div>
                    <FormInput
                        id="password-field"
                        name="password"
                        type="password"
                        placeholder="Password"
                        label="Password"
                        error={errors.password}
                        inputRef={register({
                            required: 'This field is required',
                            minLength: {
                                value: 6,
                                message:
                                    'Password must exceed 5 characters',
                            }
                        })}
                    />
                </div>

                <Button>Login</Button>
            </form>

            {errorMessage && <p>{errorMessage}</p>}

            <Link href={'/registration'}><a>Go to registration</a></Link>
        </AuthFormContainer>
    )
};

export default LoginForm
