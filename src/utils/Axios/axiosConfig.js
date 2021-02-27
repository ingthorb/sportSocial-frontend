import axios from "axios";
const axiosConfig = axios.create({
	baseURL: process.env.REACT_APP_BASEURL,
	xsrfCookieName: "csrftoken",
	xsrfHeaderName: "X-CSRFTOKEN"
});

axiosConfig.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default axiosConfig;
