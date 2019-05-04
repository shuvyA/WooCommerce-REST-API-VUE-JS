<template>
<div>
  <h1>hello tasks</h1>
</div>
  <TasksList tasks="tasks"></TasksList>



</template>

<script>
import TasksList from "@/compnent/tasks/TasksList"
export default {
  name: "Tasks",
  components:{TasksList},
  data() {
    return {
      tasks: { 
        _id: 1,
        title: 'one task',
        assignment:'',
        timestemp:'',
        status:''
            }
    };
  }
};
</script>
<style>
</style>
