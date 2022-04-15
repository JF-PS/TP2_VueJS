<template>
  <h1 id="title">My Current List :</h1>

  <div v-for="(todo, idx) in todos" :key="idx">
    {{ todo.task }} - {{ todo.hours }} - {{ todo.manager }}
    <button class="button" v-on:click="onEditTodo(todo)">Edit</button>
    <button class="button" v-on:click="onDeleteTodo(todo.id)">Delete</button>
    <router-link :to="{ name: 'todo', params: { id: todo.id } }" class="movie">
      voir
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TodoListStore",
  computed: {
    todos() {
      return this.$store.getters.getAll("todo");
    },
  },
  methods: {
    onEditTodo(editTodo) {
      this.$store.commit("setCurrentTodo", editTodo);
    },
    onDeleteTodo(id) {
      this.$store.commit("delete", { id });
    },
  },
};
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: auto;
  border-radius: 8px;
  padding: 32px;
  width: 610px;
  left: 40px;
  top: 40px;
  background: #f4f4f4;
}

#title {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  color: #000000;
}
</style>
