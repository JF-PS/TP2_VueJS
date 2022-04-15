import { createStore } from "vuex";
import { uniqueId } from "lodash";

const store = createStore({
  state: {
    manager: {
      allIds: [1, 2, 3],
      byId: {
        1: { id: 1, name: "Roger" },
        2: { id: 2, name: "Fred" },
        3: { id: 3, name: "Victor" },
      },
    },
    todo: {
      currentTodo: {},
      allIds: [
        // 1, 2, 3
      ],
      byId: {
        // 1: { id: 1, task: "myTask1", hours: 4, manager: 1 },
        // 2: { id: 2, task: "myTask1", hours: 2, manager: 2 },
        // 3: { id: 3, task: "myTask1", hours: 8, manager: 3 },
      },
    },
  },
  getters: {
    getAll: (state) => (key) => {
      const { byId } = state[key];
      return Object.values(byId);
    },
    getById: (state) => (id, key) => {
      const { byId } = state[key];
      return byId[id];
    },
    getValue: (state) => (payload) => {
      const { key, value = null } = payload;
      if (value) return state[key][value];
      return state[key];
    },
  },
  mutations: {
    createOrUpdate(state, payload) {
      const { value, key } = payload;
      const { id = uniqueId() } = value;
      const { byId, allIds } = state[key];
      state[key] = {
        byId: { ...byId, [id]: { ...value, id } },
        allIds: [...allIds, id],
      };
    },
    delete(state, payload) {
      const { byId, allIds, currentTodo } = { ...state.todo };
      const { id } = payload;
      delete byId[id];
      allIds.filter((_todoId) => _todoId !== id);
      state.todo = { byId, allIds, currentTodo };
    },
    setCurrentTodo(state, payload) {
      state.todo.currentTodo = { ...payload };
    },
  },
});

export default store;
