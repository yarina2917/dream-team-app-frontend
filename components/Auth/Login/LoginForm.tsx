import React from "react";
import { useForm } from "react-hook-form";

import Button from "../../Button";
import { FormInput } from '../elements';

import { Props } from './Login.interface';

const LoginForm: React.FC<Props> = ({ errorMessage, loginUser, clearError }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (values) => {
        loginUser(values)
    };

    return (
        <>
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
        </>
    )
};

export default LoginForm
