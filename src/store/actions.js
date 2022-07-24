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

export const changeVatRate = ({ commit }, code) => {
    var requestURL = "https://api.exchangerate.host/vat_rates";
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        var response = request.response;
        commit('UPDATE_VAT_RATE', response.rates[code].standard_rate)
    };
}

export const changeExchangeRate = ({ commit }, { from, to }) => {
    var requestURL = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        var response = request.response;
        commit('UPDATE_EXCHANGE_RATE', response.info.rate)
    };
}
