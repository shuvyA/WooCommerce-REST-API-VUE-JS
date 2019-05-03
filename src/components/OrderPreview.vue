<template>
   <div class= "order-preview" >


<!-- <h2>preview order</h2>

<div>First name: {{order.billing.first_name}}</div>
<div>Last name: {{order.billing.last_name}}</div>
<div>adress: {{order.billing.adress_1}}</div>
<div>{{order.billing.city}}</div>
<div>{{order.billing.email}}</div>
<div>{{order.billing.phone}}</div>
<div>{{order.billing.postcode}}</div> -->

      <div class="col col-1" data-label="Job Id">42235</div>
      <div class="col col-2" data-label="Customer Name">John Doe</div>
      <div class="col col-3" data-label="Amount">$350</div>
      <div class="col col-4" data-label="Payment Status">Pending</div>






   </div>
</template>

<script>
export default {
  name: "OrderPreview",
  props: ["order"]
};
</script>

<style scoped>
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
