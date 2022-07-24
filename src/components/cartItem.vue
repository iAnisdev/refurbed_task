<template>
  <div style="width: 100%">
    <div class="ml-4 flex-1  sm:ml-6 flex justify-between ">
      <div>
        <h3 class="text-sm">
          {{ product.name }}
        </h3>
        <p class="mt-1 text-sm font-medium text-gray-400">{{ product.price }} x {{ product.quantity }}</p>

      </div>
    </div>
    <div class="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
      <div class="absolute -mt-6 right-0">
        <button type="button" class="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
          <span class="sr-only">Remove</span>
          <svg style="color: red" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
            class="bi bi-x-circle-fill" viewBox="0 0 16 16">
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"
              fill="red"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  props: {
    product: {
      type: Object,
      required: true
    },
    currency: {
      type: String,
      default: '€'
    },
  },
}
</script>