import React from 'react';
import { 
    Dashboard as DashboardIcon,
    People as PeopleIcon,
    PersonAdd as PersonAddIcon,
    Person as PersonIcon,
    Settings as SettingsIcon,
    RecentActors as RecentActorsIcon,
    Ballot as ProductIcon,
    PostAdd as ProductAddIcon
} from '@material-ui/icons';

const INITIAL_STATE = {
    menu: [
        {
            title: "Dashboard",
            icon: <DashboardIcon />,
            id: 1,
            link: "/dashboard"
        },
        {
            title: "Customers",
            icon: <PeopleIcon />,
            id: 2,
            link: "/dashboard/customers"
        },
        {
            title: "Products",
            icon: <ProductIcon />,
            id: 3,
            link: "/dashboard/products"
        },
        {
            title: "Add Product",
            icon: <ProductAddIcon />,
            id: 4,
            link: "/dashboard/add-product"
        },
        {
            title: 'Account',
            icon: <PersonIcon />,
            id: 5,
            link: "/dashboard/account"
        },
        {
            title: 'Settings',
            icon: <SettingsIcon />,
            id: 6,
            link: '/dashboard/settings'
        }
    ]
};

const menuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default menuReducer;
