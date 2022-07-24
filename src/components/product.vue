<template>
    <div>
        <div class="relative">
            <div class="relative w-full h-72 rounded-lg overflow-hidden">
                <img :src="product.picture" :alt="product.picture" class="w-full h-full object-center" />
            </div>
            <div class="relative mt-4">
                <h3 class="text-sm font-medium text-gray-900">{{ product.name }}</h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.stock }} available</p>

            </div>
            <div class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
                <div aria-hidden="true"
                    class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
                <p class="relative text-lg font-semibold text-white">{{ currency }} {{ product.price }}</p>
            </div>
        </div>
        <div class="mt-6">
            <button type="submit" @click="addToCart(product)" :disabled="product.stock <= 0"
                class="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add
                to bag</button>
        </div>
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
                    picture: product.picture,
                    quantity: 1
                }];
                this.updateCart(updated_cart);
                this.updateProductStock(product.id);
            }
        }
    }
}

</script>