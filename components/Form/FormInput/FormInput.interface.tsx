export interface FormInputInterface {
    className?: string,
    name?: string,
    id?: string,
    type: inputType,
    placeholder?: string,
    label?: string,
    disabled?: boolean,
    handleChange?: () => any,
    value?: string,
    readOnly?: boolean,
    error: any,
    inputRef?: any
}

type inputType = 'text' | 'password' | 'email' | 'tel'
