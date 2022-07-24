export const getProducts =  state => state.products
export const getCart =  state => state.cart
export const getCartPrice = state => {
    let total = 0
    state.cart.forEach(item => {
        total += item.price * item.quantity
    }) 
    return total
}