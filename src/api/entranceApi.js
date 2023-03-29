import axios from "axios";
import { getEnvVariables } from "../helpers";

const { VITE_API_URL } = getEnvVariables()

const entranceApi = axios.create({
    baseURL: VITE_API_URL
});

// const entranceApiWithToken = axios.create({
//     baseURL: VITE_API_URL
// })

entranceApi.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
},
error => {
    return Promise.reject(error);
});

export default entranceApi;