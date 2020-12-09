import React from 'react';

import {
    Grid,
    Container
} from '@material-ui/core';

import ProductAdd from '../../components/product-add/product-add.component';

const ProductAddPage = () => (
    <Container>
        <Grid container>
            <Grid item xs={12} sm={8}>
                <ProductAdd />
            </Grid>
        </Grid>
    </Container>
);

export default ProductAddPage;