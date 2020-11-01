import React, { useCallback, useEffect, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import { checkIfObjectIsEmpty } from '../helpers/common'
import { v4 } from 'uuid'
import { FormHelperText } from '@material-ui/core'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'grid',
        width: '50%',
        maxWidth: 400,
        margin: '0 auto',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    buttonLoading: {
        position: 'absolute',
        left: '1rem',
    },
}))

export default function Form({
    fields,
    onSubmit,
    variant,
    label,
    validate,
    error,
    loading,
}) {
    const classes = useStyles()
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const thereAreErrors = !checkIfObjectIsEmpty(errors)
    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validate(form)
        if (thereAreErrors) {
            setErrors(errors)
            return
        }
        onSubmit(form)
    }

    useEffect(() => {
        setForm({})
    }, [fields])

    const onChange = (e) => {
        const { value, name } = e.target
        setForm((prev) => {
            prev[name] = value
            return prev
        })
        setErrors((errors) => {
            errors[name] = ''
            return errors
        })
    }

    return (
        <form
            className={classes.root}
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
        >
            <Typography variant="h5">{label}</Typography>

            <FormHelperText>{error || ' '}</FormHelperText>
            {fields.map((field) => {
                const { name } = field
                const error = errors[name]
                return (
                    <TextField
                        key={v4()}
                        error={Boolean(error)}
                        required
                        type={field.type}
                        id={field.id}
                        label={field.label}
                        inputProps={{
                            name: name,
                        }}
                        value={form[name]}
                        onChange={onChange}
                        variant={variant}
                        helperText={error}
                    />
                )
            })}
            <Button type="submit" variant="contained" color="primary">
                {loading && (
                    <CircularProgress
                        size={'1.4rem'}
                        style={{ color: '#ffff'}}
                        className={classes.buttonLoading}
                    />
                )}{' '}
                Submit
            </Button>
        </form>
    )
}
