import API from "../plugins/API"
export const updateCart = ({ commit }, cart) => {
    commit('SET_CART', cart)
}

export const removeItemFromCart = ({ state, commit }, id) => {
    const updated_cart = state.cart.filter(item => item.id !== id)
    commit('SET_CART', updated_cart)
}

export const updateProductStock = ({ state, commit }, id) => {
    let updated_products = state.products.map(item => {
        if (item.id === id) {
            item.stock = item.stock - 1
        }
        return item
    })
    commit('UPDATE_PRODUCTS', updated_products)
}

export const updateStorePrices = ({ state, commit }, exchange_rate) => {
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

export const changeCountry = ({ commit }, country) => {
    commit('UPDATE_COUNTRY', country)
}

export const changeVatRate = async ({ commit }, code) => {
    let response =await API().get('/vat_rates')
    commit('UPDATE_VAT_RATE',  response.data.rates[code].standard_rate)
}

export const changeExchangeRate = async ({ commit }, { from, to }) => {
    let response = await API().get(`/convert?from=${from}&to=${to}`)
    commit('UPDATE_EXCHANGE_RATE', response.data.info.rate)
}
