import axios from "axios";

const axiosPublic = axios.create({
  baseURL: 'https://ir-server-site-1.onrender.com',
});

const useAxiosPublic = () => axiosPublic;

export default useAxiosPublic;
