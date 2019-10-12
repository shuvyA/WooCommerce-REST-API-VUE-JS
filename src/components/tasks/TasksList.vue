<template>
  <div>
    <div v-if="tasks">
      <div v-for="task in tasks" :key="task._id">
        {{task.title}}
        <!-- <TaskPreview task="task"/> -->
      </div>
    </div>
  </div>
</template>

<script>
// import TaskPreview from "/TaskPreview.vue";
// import TaskPreview from "@/components/tasks/TaskPreview";

export default {
  name: "TaskList",
  props: ["tasks"]
  // components: {
  //   TaskPreview
  // }
};
</script>

<style>
</style>
