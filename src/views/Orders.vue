<template>
  <div class="orders">
    <main-header/>
    <div class="container"  v-if="orders">
    <h1> API Woo</h1>
      <!-- <product-list :orders="orders"/> -->
      {{orders}}
    </div>
    <div v-else>Loading</div>
  </div>
  
</template>

<script>
import WooService from "@/services/WooService.js";
import MainHeader from "@/components/MainHeader.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "orders",
  data() {
    return {
      orders: null
    };
  },
  created(){
    this.loadOrders()
  },
  methods:{
        loadOrders() {
            return WooService.orders().then(res => (this.orders = res))
        },

  },

  components: {
    MainHeader, ProductList
  }
};
</script>
