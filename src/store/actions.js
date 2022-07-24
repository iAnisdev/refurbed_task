export const updateCart = ({ commit }, cart) => {
    commit('SET_CART', cart)
}
export const updateProductStock = ({ state , commit }, id) => {
    let updated_products = state.products.map(item => {
        if (item.id === id) {
            item.stock = item.stock - 1
        }
        return item
    })
    commit('UPDATE_PRODUCTS', updated_products)
}

export const updateStorePrices = ({ state , commit }, exchange_rate) => {
    let updated_products = state.products.map(item => {
        item.price = Number((item.price * exchange_rate).toFixed(2))
        return item
    })
    commit('UPDATE_PRODUCTS', updated_products)
    let updated_cart = state.cart.map(item => {
        item.price = Number((item.price * exchange_rate).toFixed(2))
        return item
    })
    commit('SET_CART', updated_cart)
}