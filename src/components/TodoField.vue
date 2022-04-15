<template>
  <div id="container">
    <input type="text" name="task" v-model="myTodo.task" class="field" />
    <input
      type="number"
      name="hours"
      min="1"
      max="10"
      v-model="myTodo.hours"
      class="field"
    />

    <select name="mangers" v-model="myTodo.manager" class="field">
      <template v-for="manager in managers" :key="manager">
        <option :value="manager">{{ manager }}</option>
      </template>
    </select>

    <button v-on:click="onSubmit()" class="button">
      {{ !isUpdate ? "Add" : "Update" }}
    </button>
  </div>
</template>

<script>
import { isEmpty } from "lodash";
export default {
  name: "TodoField",
  props: {
    managers: {
      type: Array,
      required: true,
    },
    currentTodo: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      myTodo: {},
      isUpdate: false,
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    onSubmit: function () {
      if (this.myTodo.task === "") {
        alert("Un des champs est vide !!!");
      } else {
        const name = !this.isUpdate ? "onAddTodo" : "onUpdateTodo";
        this.$emit(name, this.myTodo);
        this.clearTodo();
      }
    },
    initData() {
      if (!isEmpty(this.currentTodo)) {
        this.myTodo = { ...this.currentTodo };
        this.isUpdate = true;
      } else {
        this.clearTodo();
      }
    },
    clearTodo() {
      this.myTodo = { task: "", hours: 1, manager: "Morgane" };
      this.isUpdate = false;
    },
  },
  watch: {
    currentTodo() {
      this.initData();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.field {
  background: #ffffff;
  border: 1px solid #ced4da;
  box-sizing: border-box;
  border-radius: 8px;
  height: 40px;
  width: 30%;
}
.button {
  width: 63px;
  height: 40px;
  background-color: #0024f9;
  border-radius: 8px;
  color: "white";
}

#container {
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  width: 1610px;
  left: 40px;
  top: 40px;

  /* Neutrals/100 */

  background: #f4f4f4;
  border-radius: 8px;
}
</style>
