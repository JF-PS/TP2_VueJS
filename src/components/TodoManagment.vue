<template>
  <div class="hello">
    <h1 id="title">{{ title }}</h1>
    <TodoField
      :managers="managers"
      :currentTodo="currentTodo.data"
      @onAddTodo="addTodo"
      @onUpdateTodo="updateTodo"
    />
    <br />
    <TodoList :list="list" @onEditTodo="editTodo" @onDeleteTodo="deleteTodo" />
  </div>
</template>

<script>
import TodoField from "./TodoField.vue";
import TodoList from "./TodoList.vue";

export default {
  name: "TodoManagment",
  components: {
    TodoField,
    TodoList,
  },
  props: {
    title: String,
  },
  methods: {
    addTodo(newTodo) {
      console.log("add");
      const { manager, hours: currentHours } = newTodo;
      const todoManager = this.list.filter((todo) => todo.manager === manager);
      let nbHours = currentHours;
      todoManager.map((todo) => {
        const { hours } = todo;
        nbHours = nbHours + hours;
        return todo;
      });

      if (todoManager.length <= 2 && nbHours <= 10) this.list.push(newTodo);
      else {
        if (nbHours > 10) alert(`${manager} ne peux pas dépasser 10 h`);
        else
          alert(`${manager} ne peux pas être assigner à plus de trois tâches.`);
      }
    },
    editTodo(editTodo) {
      const { data, index } = editTodo;
      this.currentTodo = { data, index };
    },
    updateTodo(updateTodo) {
      const { index } = this.currentTodo;
      this.list[index] = updateTodo;
    },
    deleteTodo(index) {
      this.list.splice(index);
    },
  },
  data() {
    return {
      managers: ["Morgane", "Mathias", "Momo", "Frédérique", "Romain", "JF"],
      currentTodo: {},
      list: [],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  /* identical to box height, or 24px */

  color: #000000;
}
</style>
