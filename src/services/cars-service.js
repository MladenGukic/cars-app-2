import axios from 'axios';

export default class CarService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }

    getAll() {
        return axios.get("cars")
    }

    get(id) {
        return axios.get(`cars/${id}`)
    }

    delete(id) {
        return axios.delete(`cars/${id}`)
    }
}

export const  carService = new CarService()

