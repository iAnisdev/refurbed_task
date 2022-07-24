export const SET_PRODUCTS = (state, updated_products) => {
    state.products = updated_products
}

export const SET_CART = (state, updated_cart) => {
    state.cart = updated_cart
}
export const RESET_CART = (state)  =>{
    state.cart = []
}