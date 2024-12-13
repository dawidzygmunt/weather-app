import axios from 'axios'

const createAxiosInstance = (baseURL: string) => {
  return axios.create({
    baseURL,
    withCredentials: true,
  })
}

const axiosInstance = createAxiosInstance('http://localhost:3000')

export default axiosInstance
