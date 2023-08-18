import { Fragment } from "react"

import {
            Group,
            Input,
            FormLabel
        } from './form-input.styles'

const FormInput = ({label, ...otherProps}) => {
    return (
        <Fragment>
            <Group>
                <Input {...otherProps} />
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