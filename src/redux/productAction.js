import { Product_List, Set_Product_List } from "./constant";

export const productList = () => {
    
    return {
        type: Product_List,
        
    }
}

// export const setProductList = (data) => {
//     console.warn("set product list is called");
//     return {
//         type: Set_Product_List,
//         data: data
//     }
// }