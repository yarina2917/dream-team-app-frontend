import React from "react";
import { useForm } from "react-hook-form";

import Button from "../../../atoms/Button";
import { FormInput, AuthFormContainer } from '../elements';

import { Props } from './Registration.interface';
import Link from "next/link";

const RegistrationForm: React.FC<Props> = ({ errorMessage, createUser, clearError }) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (values) => {
        createUser(values);
    };

    return (
        <AuthFormContainer>
            <h1>Registration</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <FormInput
                        id="email-field"
                        name="email"
                        type="text"
                        placeholder="Email"
                        label="Email"
                        error={errors.email}
                        inputRef={register({
                            required: 'This field is required',
                        })}
                    />
                </div>
                <div>
                    <FormInput
                        id="name-field"
                        name="name"
                        type="text"
                        placeholder="Name"
                        label="Name"
                        error={errors.name}
                        inputRef={register({
                            required: 'This field is required',
                        })}
                    />
                </div>
                <div>
                    <FormInput
                        id="surname-field"
                        name="surname"
                        type="text"
                        placeholder="Surname"
                        label="Surname"
                        error={errors.surname}
                        inputRef={register({
                            required: 'This field is required',
                        })}
                    />
                </div>
                <div>
                    <FormInput
                        id="address-field"
                        name="address"
                        type="text"
                        placeholder="Address"
                        label="Address"
                        error={errors.address}
                        inputRef={register({
                            required: 'This field is required',
                        })}
                    />
                </div>
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

                <Button>Registration</Button>
            </form>

            {errorMessage && <p>{errorMessage}</p>}

            <Link href={'/login'}><a>Go to login</a></Link>
        </AuthFormContainer>
    )
};

export default RegistrationForm
