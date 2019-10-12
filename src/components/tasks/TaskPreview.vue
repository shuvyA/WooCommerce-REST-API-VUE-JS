<template>
    <div>
      {{task}}
    </div>
</template>

<script>
// import OrderPreview from "@/components/OrderPreview.vue";
export default {
  name: "TaskPreview",
  props: ["task"],
  components: {
    TaskPreview
  }
};
</script>

<style>

</style>
