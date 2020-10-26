import React, { useCallback, useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import { checkIfObjectIsEmpty } from '../helpers/common'

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
}))

export default function Form({ fields, onSubmit, variant, label, validate }) {
    const classes = useStyles()
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState([])

    const thereAreErrors = !checkIfObjectIsEmpty(errors);
    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = validate(form);
        if(thereAreErrors) {
            setErrors(errors)
            return;
        }
        onSubmit(form)
    }

    const onChange = (e) => {
        const { value, name } = e.target;
        setErrors((errors) => ({ ...errors, [name]: false }))
        setForm((form) => ({ ...form, [name]: value }))
    }

    return (
        <form
            className={classes.root}
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
        >
            <Typography variant="h5">{label}</Typography>

            {fields.map((field) => {
                const { name } = field;
                const error = errors[name];
                return (
                    <TextField
                        error={error}
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
                Submit
            </Button>
        </form>
    )
}
