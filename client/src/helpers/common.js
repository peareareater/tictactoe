import { v4 } from 'uuid'
import { fieldIsRequiredString } from '../constants'

export function capitalize(value) {
    return value[0].toUpperCase() + value.slice(1, value.length)
}

export const normalize = (string) =>
    string
        .split('_')
        .map((substr) => capitalize(substr))
        .join(' ')

export const getFormConfig = (fields) =>
    fields.map((field) => ({
        ...field,
        label: normalize(field.name),
        id: v4(),
    }))

export function validateFields(values, fields) {
    return fields.reduce((acc, val) => {
        if (!(values[val] && values[val].trim())) {
            acc[val] = fieldIsRequiredString
        }
        return acc
    }, {})
}

export function checkIfObjectIsEmpty(object) {
    return Object.keys(object).length === 0
}
