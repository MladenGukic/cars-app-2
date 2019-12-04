import axios from 'axios';

export default class CarService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }

    getCars() {
        return axios.get("cars")
    }
}

export const  carService = new CarService()

