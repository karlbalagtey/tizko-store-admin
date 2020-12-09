import axios from "axios";
import jwtDecode from 'jwt-decode';

export const tizkoCreateNewSubscriber = ({ userCredentials }) => {

};

export const tizkoSignIn = (email, password) => {
    const URL = process.env.REACT_APP_API_URL+'auth/login';

    return axios.post(URL, {
        email: email,
        password: password
    }, { withCredentials: true });
};

export const tizkoRefreshToken = () => {
    const URL = process.env.REACT_APP_API_URL+'auth/refresh-token';

    return axios.post(URL, {
        role: 'Admin'
    }, { withCredentials: true });
};

export const tizkoForgotPassword = (email) => {
    const URL = process.env.REACT_APP_API_URL+'auth/forgot-password';
    console.log(email);

    return axios.post(URL, {
        email: email
    }, { withCredentials: true });
};

export const tizkoResetPassword = (token, password, confirmPassword) => {
    const URL = process.env.REACT_APP_API_URL+'auth/reset-password';
    console.log(token, password, confirmPassword);

    return axios.post(URL, {
        token: token,
        password: password,
        confirmPassword: confirmPassword
    }, { withCredentials: true });
};

export const tizkoValidateResetToken = (token) => {
    console.log(token);
};

export const tizkoRevokeToken = (token) => {
    const URL = process.env.REACT_APP_API_URL+'auth/revoke-token';

    return axios.post(URL, {}, { 
        headers: {
            'Authorization': 'Bearer ' + token
        },
        withCredentials: true }
    );
};

export const tizkoUpdateUserProfile = (user) => {
    const URL = process.env.REACT_APP_API_URL+'auth/register';

    return axios.post(URL, {
        email: user.email
    }, {
        headers: {
            'Authorization': 'Bearer ' + user.jwtToken
        },
        withCredentials: true }
    );
};

export const tizkoCreateNewClient = () => {

};

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        let user = JSON.parse(localStorage.getItem('user'));

        console.log(user);

        if (user) {
            const tokenExpiryDate = jwtDecode(user.jwtToken);
            const now = Date.now().valueOf() / 1000;

            console.log(tokenExpiryDate.exp, now);

            if (tokenExpiryDate.exp < now) {
                const userPromise = tizkoRefreshToken().then(user => user.data);
                return resolve(userPromise.then(res => res));
                // return resolve(user.data); 
            }

            return resolve(user);
        } else {
            return reject(new Error('Welcome to Tizko'));
        }
    })
}
