import { getApi } from '../genericServices';



const getCars = async () => {
    return getApi('car_of_sale')
}


export {
    getCars
}