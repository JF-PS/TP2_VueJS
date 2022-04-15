import { createWebHistory, createRouter } from "vue-router";
// import TodoListStore from "../components/TodoListStore.vue";
import TodoDetails from "../components/TodoDetails.vue";
import TodoView from "../views/TodoView.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: TodoView,
  },
  {
    name: "todo",
    path: "/todo/:id",
    component: TodoDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
