import React from 'react'
import {Button as ButtonElement} from "./elements";

const Button = ({ handleClick, children }: any) => {
    return (
        <ButtonElement onClick={handleClick}>
            {children}
        </ButtonElement>
    )
};

export default Button
