import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { DataGrid } from '@material-ui/data-grid';
import { Container } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import { fetchOrdersStart } from '../../redux/shop/shop.actions';

const columns = [
    { field: 'order', headerName: 'Order', width: 250 },
    { field: 'date', headerName: 'Date', width: 250 },
    {
        field: 'customer',
        headerName: 'Customer',
        width: 150,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 150,
    },
    {
        field: 'fullfillmentStatus',
        headerName: 'Fullfillment status',
        width: 150,
    },
    {
        field: 'total',
        headerName: 'Total',
        width: 150,
    }
];

let list = [];
let rows = [];

const OrderPage = ({ orders, fetchOrders }) => {
    useEffect(() => {
        fetchOrders();
    }, []);

    if (orders !== null) {
        list.push(orders);
        // console.log(orders);
        rows = [...list[0]];
        console.log(rows);
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
            <h1>Orders</h1>
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
                    loading={orders ? false : true}
                />
            </div>
        </Container>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchOrders: () => dispatch(fetchOrdersStart()),
});

const mapStateToProps = (state) => ({
    orders: state.shop.orders,
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
