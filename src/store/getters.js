export const getProducts = state => state.products
export const getCart = state => state.cart
export const getCartPrice = state => {
    let total = 0
    state.cart.forEach(item => {
        total += item.price * item.quantity
    })
    return total
}
export const getCartQuantity = state => {
    let total = 0
    state.cart.forEach(item => {
        total += item.quantity
    })
    return total
}
export const getCountry = state => state.country
export const getVatRate = state => state.vat_rate
export const getExchangeRate = state => state.exchange_rate