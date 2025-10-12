
import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: `http://localhost:4000`, // no trailing slash needed
});

const useAxiosSecure = () => {

  // Attach token to every request
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.authorization = `Bearer ${token}`; // ✅ FIXED spacing
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Handle errors globally
  axiosSecure.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        // maybe redirect to login or logout
        console.warn('Unauthorized or Forbidden');
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
