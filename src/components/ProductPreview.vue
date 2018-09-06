<template>
   <div class= "product-preview" >


<div class="card">
  <img :src="product.images[0].src" alt="Avatar" >
  <div class="container-card">
    <h3>{{product.name}}</h3>
    <p>price: {{product.price}} ₪ </p> 
    <a :href="product.permalink">LInk to product</a>
  </div>
</div>


   </div>
</template>

<script>
export default {
  name: "ProductPreview",
  props: ["product"]
};
</script>

<style <style scoped>
h3 {
  border-bottom: 1px solid #ccc;
}
img {
  max-height: 200px;
  max-width: 100%;
}
.card {
  text-align: center;
  margin-top: 20px;
  padding: 10px;
  width: 230px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container-card {
  padding: 2px 16px;
}
</style>
