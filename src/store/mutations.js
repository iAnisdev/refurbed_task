export const UPDATE_PRODUCTS = (state, updated_products) => {
    state.products = updated_products
}

export const SET_CART = (state, updated_cart) => {
    state.cart = updated_cart
}
export const RESET_CART = (state) => {
    state.cart = []
}

export const UPDATE_COUNTRY = (state, country) => {
    state.country = country
}

export const UPDATE_VAT_RATE = (state, vat_rate) => {
    state.vat_rate = vat_rate
}

export const UPDATE_EXCHANGE_RATE = (state, exchange_rate) => {
    state.exchange_rate = exchange_rate
}