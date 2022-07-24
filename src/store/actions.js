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