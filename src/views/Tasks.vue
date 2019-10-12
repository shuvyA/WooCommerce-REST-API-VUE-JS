<template>
<div>
  <MainHeader/>
  <h1>hello tasks</h1>
  <TasksList :tasks="mockTasks"/>
</div>



</template>

<script>
import TasksList from "@/components/tasks/TasksList";
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "Tasks",
  components:{TasksList, MainHeader},
  data() {
    return {
      mockTasks:[
        { 
          _id: 1,
        title: 'one task',
        assignment:'',
        timestemp:'',
        status:''
            },{ 
              _id: 2,
        title: 'two task',
        assignment:'',
        timestemp:'',
        status:''
            },{ 
              _id: 3,
        title: '3 task',
        assignment:'',
        timestemp:'',
        status:''
            }
      ]
    };
  }
};
</script>
<style>
</style>
