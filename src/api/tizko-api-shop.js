import axios from "axios";
import jwtDecode from 'jwt-decode';

export const tizkoFetchCustomers = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    const URL = process.env.REACT_APP_API_URL+'stores/'+user.store+'/'+user.id+'/customers';

    return axios.get(URL, {            
            headers: {
                'Authorization': 'Bearer ' + user.jwtToken
            }, 
        }, { 
            withCredentials: true 
        }
    );
};

export const tizkoFetchProducts = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const URL = process.env.REACT_APP_API_URL+'stores/'+user.store;

    return axios.get(URL, 
        {            
            headers: {
                'Authorization': 'Bearer ' + user.jwtToken
            }, 
        }, { 
            withCredentials: true 
        }
    );
};

export const tizkoAddProduct = (name, description, price, weight, category, stock, sku) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const URL = process.env.REACT_APP_API_URL+'stores/'+user.store+'/products';

    return axios.post(URL, 
        {
            name, description, price, weight, category, stock, sku
        }, {
            headers: {
                'Authorization': 'Bearer ' + user.jwtToken
            },
            withCredentials: true
        }
    );
}