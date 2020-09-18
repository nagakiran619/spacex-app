import axios from "axios";
import { RECORD_LIMIT } from "../../src/shared/constants";
const axiosInstance = axios.create({
  baseURL: `https://api.spaceXdata.com/v3/launches?limit=${RECORD_LIMIT}`,
});

axios.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return err;
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return err;
  }
);

export default axiosInstance;
