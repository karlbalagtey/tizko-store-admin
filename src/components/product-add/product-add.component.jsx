import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import validate from 'validate.js';

import { productAddStart } from '../../redux/product/product.actions';

import { makeStyles } from '@material-ui/core/styles';

const schema = {
    name: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 32,
        },
    },
    description: {
        presence: { allowEmpty: false, message: 'is required' },
    },
    price: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 64,
        },
    },
    stock: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
            maximum: 128,
        },
    },
};

const useStyles = makeStyles((theme) => ({
    textField: {
        marginTop: theme.spacing(2),
    },
    signUpButton: {
        margin: theme.spacing(2, 0),
    },
}));

const ProductAdd = ({ createNewProduct }) => {
    const classes = useStyles();
    const history = useHistory();

    const [productCredentials, setProductCredentials] = useState({
        name: '',
        description: '',
        price: '',
        stock: '',
        weight: 'Default',
        category: 'Default',
        sku: null,
    });

    const { name, description, price, stock, weight, category, sku } = productCredentials;

    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {},
    });

    useEffect(() => {
        const errors = validate(formState.values, schema);

        setFormState((formState) => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {},
        }));
    }, [formState.values]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'checkbox'
                        ? event.target.checked
                        : event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));

        createNewProduct({ name, description, price, stock, weight, category, sku }, history);
    };

    const handleChange = (event) => {
        event.persist();

        const { name, value } = event.target;

        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'checkbox'
                        ? event.target.checked
                        : event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }));

        setProductCredentials({ ...productCredentials, [name]: value });
    };

    const hasError = (field) =>
        formState.touched[field] && formState.errors[field] ? true : false;

    return (
        <form onSubmit={handleSubmit}>
            <h1>Add product</h1>
            <TextField
                className={classes.textField}
                error={hasError('name')}
                fullWidth
                helperText={hasError('name') ? formState.errors.name[0] : null}
                label="Product name"
                name="name"
                onChange={handleChange}
                type="text"
                value={formState.values.name || ''}
                variant="outlined"
                required={true}
            />
            <TextField
                className={classes.textField}
                error={hasError('description')}
                fullWidth
                helperText={
                    hasError('description')
                        ? formState.errors.description[0]
                        : null
                }
                label="Short description"
                name="description"
                onChange={handleChange}
                type="text"
                value={formState.values.description || ''}
                variant="outlined"
                required={true}
            />
            <TextField
                className={classes.textField}
                error={hasError('price')}
                fullWidth
                helperText={
                    hasError('price') ? formState.errors.price[0] : null
                }
                label="Price"
                name="price"
                onChange={handleChange}
                type="number"
                value={formState.values.price || ''}
                variant="outlined"
                required={true}
            />
            <TextField
                className={classes.textField}
                error={hasError('stock')}
                fullWidth
                helperText={
                    hasError('stock') ? formState.errors.stock[0] : null
                }
                label="No of Stock"
                name="stock"
                onChange={handleChange}
                type="number"
                value={formState.values.stock || ''}
                variant="outlined"
                required={true}
            />
            <TextField
                className={classes.textField}
                error={hasError('weight')}
                fullWidth
                helperText={
                    hasError('weight') ? formState.errors.weight[0] : null
                }
                label="Weight"
                name="weight"
                onChange={handleChange}
                type="number"
                value={formState.values.weight || ''}
                variant="outlined"
            />
            <TextField
                className={classes.textField}
                error={hasError('category')}
                fullWidth
                helperText={
                    hasError('category') ? formState.errors.category[0] : null
                }
                label="Category"
                name="category"
                onChange={handleChange}
                type="text"
                value={formState.values.category || ''}
                variant="outlined"
            />
            <TextField
                className={classes.textField}
                error={hasError('sku')}
                fullWidth
                helperText={
                    hasError('sku') ? formState.errors.sku[0] : null
                }
                label="SKU"
                name="sku"
                onChange={handleChange}
                type="number"
                value={formState.values.sku || ''}
                variant="outlined"
            />
            <Button
                className={classes.signUpButton}
                color="primary"
                disabled={!formState.isValid}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
            >
                Add Product
            </Button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => ({
    createNewProduct: (productCredentials, history) =>
        dispatch(productAddStart(productCredentials, history)),
});

export default connect(null, mapDispatchToProps)(ProductAdd);
