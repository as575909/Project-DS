import { Add_To_Cart, Remove_From_Cart, Clear_From_Cart } from "./constant";

export const addToCart = (data) => {

    console.warn("action called", data)
    return {
        type: Add_To_Cart,
        data: data
    }
}

export const removeFromCart = (data) => {

    console.warn("action remove called", data)
    return {
        type: Remove_From_Cart,
        data: data
    }
}

export const clearFromCart = () => {

    console.warn("action clear called")
    return {
        type: Clear_From_Cart,
    }
}