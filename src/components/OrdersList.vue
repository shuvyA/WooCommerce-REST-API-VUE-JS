<template>
   <div class= "order-list" >
    <h2>list</h2>
<ul class="clean-list flex space-around align-center flex-wrap">
    <li v-if="orders" v-for="order in orders" :key="order.id">
    <order-preview :order="order"/>
    </li>
</ul>



   </div>
</template>

<script>
import OrderPreview from "@/components/OrderPreview.vue";
export default {
  name: "OrdersList",
  props: ["orders"],
  components: {
    OrderPreview
  }
};
</script>

<style>
</style>
