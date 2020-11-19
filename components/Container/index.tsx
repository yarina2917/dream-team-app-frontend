import React from 'react'

import {Container as ContainerElement} from './elements'
import {ContainerInterface} from "./Container.interface";

const Container = ({
       as = 'div',
       className,
       children,
       fullWidth = false,
       justify = 'flex-start',
       align = 'flex-start',
       direction = 'row',
       wrap = 'nowrap',
       marginBottom = 0,
       handleClick,
       rootRef,
       ...props
   }: ContainerInterface) => (
    <ContainerElement
        className={className}
        as={as}
        justify={justify}
        align={align}
        direction={direction}
        wrap={wrap}
        marginBottom={marginBottom}
        fullWidth={fullWidth}
        onClick={handleClick}
        ref={rootRef}
        {...props}
    >
        {children}
    </ContainerElement>
);

export default Container
