import axios from "axios";

export const baseUrl = "http://neteasecloudmusicapi.zhaoboy.com";

const axiosInstance = axios.create({
    baseURL: baseUrl
})

export { axiosInstance }