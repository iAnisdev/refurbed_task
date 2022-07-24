<template>
    <div class="bg-white rounded-xl p-4 shadow-md">
        <img class="w-32" :src="product.picture" />
        <h3 class="text-xl mb-2">{{ product.name }}</h3>
        <p class="mb-2">{{currency}} {{ product.price }}</p>
        <button class="
            py-2
            px-4
            bg-blue-500
            hover:bg-blue-700
            text-white
            rounded-lg
            shadow-md
            float-right
          " @click="addToCart(product)" :disabled="product.stock == 0">
            Add to cart
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Product',
    props: {
        product: {
            type: Object,
            required: true
        },
        currency: {
            type: String,
            default: 'EUR'
        }
    },
    computed: {
        ...mapGetters({
            cart: 'getCart'
        }),
        inCart() {
            return this.cart.find(item => item.id === this.product.id);
        }
    },
    methods: {
        ...mapActions({
            updateCart: 'updateCart',
            updateProductStock: 'updateProductStock'
        }),
        addToCart(product) {
            if (this.inCart) {
                let updated_cart = this.cart.map(item => {
                    if (item.id === product.id) {
                        item.quantity++;
                    }
                    return item;
                });
                this.updateCart(updated_cart);
                this.updateProductStock(product.id);
            } else {
                let updated_cart = [...this.cart, {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1
                }];
                this.updateCart(updated_cart);
                this.updateProductStock(product.id);
            }
        }
    }
}

</script>