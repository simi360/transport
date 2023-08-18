import { Fragment } from "react"

import {
            Group,
            Input,
            TextArea,
            FormLabel
        } from './form-input.styles'

const FormInput = ({label, textArea, ...otherProps}) => {
    return (
        <Fragment>
            <Group>
                {
                    textArea ?
                     <TextArea {...otherProps} /> :
                     <Input {...otherProps} />
                }
                {
                    label && <FormLabel shrink={otherProps.value.length}>
                        {label}
                    </FormLabel>
                }
            </Group>
        </Fragment>
    )
}

export default FormInput;