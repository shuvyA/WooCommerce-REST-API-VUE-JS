<template>
  <div class="products">
    <main-header/>
    <div class="container"  v-if="products">
    <h1> API Woo</h1>
      <product-list :products="products"/>
    </div>
    <div v-else>Loading</div>
  </div>
  
</template>

<script>
import WooService from "@/services/WooService.js";
import MainHeader from "@/components/MainHeader.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "products",
  data() {
    return {
      products: null
    };
  },
  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      return WooService.products().then(res => (this.products = res));
    }
  },

  components: {
    MainHeader,
    ProductList
  }
};
</script>
