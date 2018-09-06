<template>
  <div class="orders">
    <main-header/>
    <div class="container"  v-if="orders">
    <h1> order</h1>
      <orders-list :orders="orders"/>
    </div>
    <div v-else>Loading</div>
  </div>
  
</template>

<script>
import WooService from "@/services/WooService.js";
import MainHeader from "@/components/MainHeader.vue";
import OrdersList from "@/components/OrdersList.vue";

export default {
  name: "orders",
  data() {
    return {
      orders: null
    };
  },
  created() {
    this.loadOrders();
  },
  methods: {
    loadOrders() {
      return WooService.orders().then(res => (this.orders = res));
    }
  },

  components: {
    MainHeader,
    OrdersList
  }
};
</script>
