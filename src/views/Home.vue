<template>
  <div class="grid grid-cols-2 gap-4 p-4 mb-4">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Product v-for="product in products" :key="product.id" :product="product" :currency="country.sign" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Product from './../components/product.vue'
export default {
  name: "Home",
  components: {
    Product
  },
  computed: {
    ...mapGetters({
      products: 'getProducts',
      vat_rate: 'getVatRate',
      exchange_rate: 'getExchangeRate',
      country: 'getCountry'
    })
  }
};
</script>