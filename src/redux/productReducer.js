import { Product_List, Set_Product_List } from "./constant";


export const productData = (data = [], action) => {

    // if(action.type === Add_To_Cart)
    // {
    //     console.warn("reducer called", action)
    //     return action.data
    // } else {
    //     return "no action matched"
    // }

    switch (action.type) {
        
        case Set_Product_List:
            //add to cart logic
            console.warn("Set Product List condition", action)
            return [...action.data]

        default:
            //no case matched
            return data;

    }

}