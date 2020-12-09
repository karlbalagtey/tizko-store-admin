import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import { Container } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import { fetchProductsStart } from '../../redux/shop/shop.actions';

const columns = [
    { field: 'name', headerName: 'Product', width: 250 },
    { field: 'description', headerName: 'Description', width: 350 },
    {
        field: 'price',
        headerName: 'Price',
        width: 150,
    },
    {
        field: 'category',
        headerName: 'Category',
        width: 150,
    },
    {
        field: 'stock',
        headerName: 'Stock',
        width: 150,
    },
    {
        field: 'inStock',
        headerName: 'In Stock',
        width: 150,
    },
    {
        field: 'created',
        headerName: 'Created',
        width: 150,
    },
    {
        field: 'updated',
        headerName: 'Last updated',
        width: 150,
    },
];

let list = [];
let rows = [];

const ProductPage = ({ products, fetchProducts }) => {
    useEffect(() => {
        fetchProducts();
    }, []);

    if (products !== null) {
        list.push(products);
        rows = [...list[0]];
    }

    const sortModel = [
        {
            field: 'created',
            sort: 'desc',
        },
    ];
    const useStyles = makeStyles({
        root: {
            display: 'flex',
        },
    });

    function CustomPagination(props) {
        const { paginationProps } = props;
        const classes = useStyles();

        return (
            <Pagination
                className={classes.root}
                color="primary"
                page={paginationProps.page}
                count={paginationProps.pageCount}
                onChange={(event, value) => paginationProps.setPage(value)}
            />
        );
    }

    CustomPagination.propTypes = {
        /**
         * The object containing all pagination details in [[PaginationProps]].
         */
        paginationProps: PropTypes.shape({
            page: PropTypes.number.isRequired,
            pageCount: PropTypes.number.isRequired,
            pageSize: PropTypes.number.isRequired,
            rowCount: PropTypes.number.isRequired,
            setPage: PropTypes.func.isRequired,
            setPageSize: PropTypes.func.isRequired,
        }).isRequired,
    };

    return (
        <Container>
            <h1>Products</h1>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    pagination
                    autoPageSize={true}
                    components={{
                        pagination: CustomPagination,
                    }}
                    rowHeight={25}
                    rows={rows}
                    columns={columns}
                    sortModel={sortModel}
                    loading={products ? false : true}
                />
            </div>
        </Container>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchProducts: () => dispatch(fetchProductsStart()),
});

const mapStateToProps = (state) => ({
    products: state.shop.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
