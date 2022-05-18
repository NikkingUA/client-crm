import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
})


export async function getApi(resourse) {
    return (
        axiosInstance.get(resourse)
            .then(response => {
                return {
                    data: response?.data,
                    status: response?.status
                }
            })
            .catch(error => {
                return {
                    error: error?.error,
                    status: error?.status
                }
            })
    )
}