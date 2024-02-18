import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/', // Set the base URL for requests
    // You can also add other default configurations here, such as headers
    headers: {
        // Add any headers you need
        // Example:
        // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
    }
});

export default axiosInstance;
