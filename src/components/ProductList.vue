<template>
   <div class= "product-list" >
<ul class="clean-list flex space-around align-center flex-wrap">
    <li v-if="products" v-for="product in products" :key="product.id">
    <product-preview :product="product"/>
    </li>
</ul>



   </div>
</template>

<script>
import ProductPreview from "@/components/ProductPreview.vue";
export default {
  name: "ProductList",
  props: [ "products" ],
  components: {
    ProductPreview
  }
};
</script>

<style>
</style>
