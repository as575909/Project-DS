import { Add_To_Cart, Remove_From_Cart, Clear_From_Cart } from "./constant";
export const cartData = (data = [], action) => {

    // if(action.type === Add_To_Cart)
    // {
    //     console.warn("reducer called", action)
    //     return action.data
    // } else {
    //     return "no action matched"
    // }

    switch (action.type) {
        case Add_To_Cart:
            //add to cart logic
            console.warn("Add to Cart called", action)
            return [action.data, ...data]
        case Remove_From_Cart:
            //add to cart logic
            console.warn("Remove from Cart called", action)
            data.length = data.length ? data.length - 1:[]; 
            return [...data]
        case Clear_From_Cart:
            //add to cart logic
            console.warn("Clear from Cart called", action)
            data = []
            return [...data]
        default:
            //no case matched
            return data;

    }

}