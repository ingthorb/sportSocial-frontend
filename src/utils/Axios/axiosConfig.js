import axios from "axios";
const axiosConfig = axios.create({
	baseURL: "http://127.0.0.1:8000/",
	xsrfCookieName: "csrftoken",
	xsrfHeaderName: "X-CSRFTOKEN"
});

axiosConfig.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default axiosConfig;
