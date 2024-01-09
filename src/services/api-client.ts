import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0f4a9ae82a7749319aa98f063035238c'
    }
})