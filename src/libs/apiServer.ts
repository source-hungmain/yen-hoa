import axios from "axios";

const createApiServer = (baseUrl = "") => {
    return axios.create({
        baseURL: baseUrl !== "" ? baseUrl : process.env.NEXT_PUBLIC_API,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        timeout: 10000,
    });
};

export default createApiServer;
