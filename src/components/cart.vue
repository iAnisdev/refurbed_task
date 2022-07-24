<template>
    <div class="p-4 m-4 bg-white shadow-md">
        <h2 class="text-2xl mb-2">Cart</h2>
        <hr />
        <table class="min-w-full divide-y divide-gray-300">
            <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Product</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Quantity</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Total</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="product in cart" :key="product.id">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{
                            product.name
                    }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ product.quantity }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ product.price }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ product.quantity * product.price }}
                    </td>
                </tr>
            </tbody>
        </table>
        <hr />
        <div class="mt-5 border-t border-gray-200 px-5">
            <dl class="divide-y divide-gray-200">
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Net</dt>
                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex-grow"></span>
                        <span class="ml-4 flex-shrink-0">
                            0
                        </span>
                    </dd>
                </div>
            </dl>
            <dl class="divide-y divide-gray-200">
                <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt class="text-sm font-medium text-gray-500">Vat</dt>
                    <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <span class="flex-grow"></span>
                        <span class="ml-4 flex-shrink-0">
                            0
                        </span>
                    </dd>
                </div>
                <dl class="divide-y divide-gray-200">
                    <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                        <dt class="text-sm font-medium text-gray-500">Total</dt>
                        <dd class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <span class="flex-grow"></span>
                            <span class="ml-4 flex-shrink-0">
                                {{ total }}
                            </span>
                        </dd>
                    </div>
                </dl>
            </dl>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Cart',
    computed: {
        ...mapGetters({
            cart: 'getCart',
            total: 'getCartPrice'
        })
    },

}
</script>