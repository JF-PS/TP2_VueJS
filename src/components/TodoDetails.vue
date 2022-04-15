<template>
  <div>
    {{ JSON.stringify(todo) }}
  </div>
</template>

<script>
export default {
  name: "TodoDetails",
  props: ["id"],
  computed: {
    todo: function () {
      return this.$store.getters.getById(this.id, "todo");
    },
  },
};
</script>

<style scoped></style>
