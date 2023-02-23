import { Product_List } from "./constant";

export const productList = () => {
let data = 'hello'
    console.warn("action called", data)
    return {
        type: Product_List,
        data: data
    }
}