import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.REACT_APP_LOCAL_SERVER_PORT_BASE_URL,
});
