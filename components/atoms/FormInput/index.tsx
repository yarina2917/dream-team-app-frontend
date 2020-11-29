import React from 'react'

import {
    InputField,
    InputLabel,
    InputContainer,
    ErrorMessage,
} from './elements'
import {IFormInput} from "./FormInput.interface";

const Index = ({
      className,
      id = '',
      error,
      name = '',
      type = 'text',
      placeholder = null,
      label = null,
      disabled = false,
      readOnly,
      inputRef,
      handleChange
}: IFormInput) => (

    <InputContainer
        className={className}
        direction='column'
        disabled={disabled}
    >
        {label && (
            <InputLabel labelFor={id}>
                {label}
            </InputLabel>
        )}

        <InputField
            id={id}
            name={name}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            onChange={handleChange}
            readOnly={readOnly}
            ref={inputRef}
        />

        {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </InputContainer>
);

export default Index
