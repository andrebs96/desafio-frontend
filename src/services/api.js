import {
    products
} from "./config";

export default {

    getProducts: () => {
        return products.get()
    },

}