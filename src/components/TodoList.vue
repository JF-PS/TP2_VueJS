<template>
  <div>
    <h1 id="title">My Current List :</h1>

    <ul v-for="(todo, index) in list" :key="todo">
      <li>
        {{ todo.task }} - {{ todo.hours }} - {{ todo.manager }}
        <button class="button" v-on:click="onEditTodo(todo, index)">
          Edit
        </button>
        <button class="button" v-on:click="onDeleteTodo(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    list: Array,
  },
  methods: {
    onEditTodo(editTodo, index) {
      this.$emit("onEditTodo", { data: editTodo, index });
    },
    onDeleteTodo(index) {
      this.$emit("onDeleteTodo", index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
