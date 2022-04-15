<template>
  <div class="hello">
    <h1 id="title">{{ title }}</h1>
    <TodoFieldStore />
    <br />
    <TodoListStore />
  </div>
</template>

<script>
import TodoFieldStore from "../components/TodoFieldStore.vue";
import TodoListStore from "../components/TodoListStore.vue";

export default {
  name: "TodoView",
  components: {
    TodoFieldStore,
    TodoListStore,
  },
};
</script>

<style scoped></style>
