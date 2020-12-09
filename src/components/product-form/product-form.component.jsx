import React from 'react';

const ProductForm = () => {
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <h1>Add Product</h1>
            <TextField
                className={classes.textField}
                error={hasError('displayName')}
                fullWidth
                helperText={
                    hasError('displayName')
                        ? formState.errors.displayName[0]
                        : null
                }
                label="Display name"
                name="displayName"
                onChange={handleChange}
                type="text"
                value={formState.values.displayName || ''}
                variant="outlined"
            />
            <TextField
                className={classes.textField}
                error={hasError('email')}
                fullWidth
                helperText={
                    hasError('email') ? formState.errors.email[0] : null
                }
                label="Email address"
                name="email"
                onChange={handleChange}
                type="text"
                value={formState.values.email || ''}
                variant="outlined"
                required={true}
            />
            <TextField
                className={classes.textField}
                error={hasError('password')}
                fullWidth
                helperText={
                    hasError('password') ? formState.errors.password[0] : null
                }
                label="Password"
                name="password"
                onChange={handleChange}
                type="password"
                value={formState.values.password || ''}
                variant="outlined"
                required={true}
            />
            <TextField
                className={classes.textField}
                fullWidth
                helperText={
                    hasError('password') ? formState.errors.password[0] : null
                }
                variant="outlined"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                required={true}
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
                Sign up now
            </Button>
        </form>
    );
};

export default ProductForm;