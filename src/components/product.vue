<template>
    <div class="bg-white rounded-xl p-4 shadow-md">
        <img class="w-32" :src="product.picture" />
        <h3 class="text-xl mb-2">{{ product.name }}</h3>
        <p class="mb-2">{{ product.price }}</p>
        <button class="
            py-2
            px-4
            bg-blue-500
            hover:bg-blue-700
            text-white
            rounded-lg
            shadow-md
            float-right
          " @click="addToCart(product)" :disabled="product.stock < 0">
            Add to cart
        </button>
    </div>
</template>

<script>
export default {
    name: 'Product',
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}

</script>