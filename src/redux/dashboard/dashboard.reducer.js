const INITIAL_STATE = {
    menu: [
        {
            title: "products",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            id: 1,
            linkUrl: "/products"
        },
        {
            title: "clients",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            id: 2,
            linkUrl: "/client"
        },
        {
            title: "settings",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            id: 3,
            linkUrl: "/settings"
        },
        {
            title: "analytics",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            id: 4,
            linkUrl: "/analytics"
        }
    ],
    totals: [
        {
            totalSales: '120,200',
            totalClients: '200',
            totalCities: '4'
        }
    ]
};

const dashboardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default dashboardReducer;
