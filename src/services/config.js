import axios from 'axios'

export const products = axios.create({
    baseURL: 'https://private-3efa8-products123.apiary-mock.com/products'
})