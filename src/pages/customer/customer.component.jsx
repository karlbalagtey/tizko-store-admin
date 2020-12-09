import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { DataGrid } from '@material-ui/data-grid';
import { Container } from '@material-ui/core';

import { fetchCustomersStart } from '../../redux/shop/shop.actions';

const columns = [
    { field: 'firstName', headerName: 'First name', width: 150 },
    { field: 'lastName', headerName: 'Last name', width: 150 },
    {
        field: 'email',
        headerName: 'Email',
        width: 200,
    },
    {
        field: 'contactNumber',
        headerName: 'Contact No',
        width: 200,
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

const CustomerPage = ({ customers, fetchCustomers }) => {
    useEffect(() => {
        fetchCustomers();
    }, []);

    if (customers !== null) {
        list.push(customers);
        rows = [...list[0]];
        console.log(rows);
    }

    const sortModel = [
        {
            field: 'created',
            sort: 'desc',
        },
    ];

    return (
        <Container>
            <h1>Customers</h1>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                    autoPageSize={true}
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    sortModel={sortModel}
                    loading={customers ? false : true}
                />
            </div>
        </Container>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetchCustomers: () => dispatch(fetchCustomersStart()),
});

const mapStateToProps = state => ({
    customers: state.shop.customers,
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
