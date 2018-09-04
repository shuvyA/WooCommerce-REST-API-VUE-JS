<template>
  <div class="products">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1> my store</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <!-- {{sayResult}} -->
    <div v-if="products">
      {{products}}
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import WooService from "@/services/WooService.js";

export default {
  name: "home",
  data() {
    return {
      products: null
    };
  },
  created(){
    this.loadProducts()
  },

  computed: {
    sayResult() {
      return WooService.products().then(res => (this.products = res));
    }
  },
  methods:{
        loadProducts() {
            return WooService.products().then(res => (this.products = res))

            // return UserService.query({ name: userName })
            //     .then(users => this.user = users[0]);
        },

  },

  components: {
    HelloWorld
  }
};
</script>
