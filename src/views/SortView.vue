<template>
  <ul>
    <li v-for="i, n in $store.state.uploadWebtoonList">
      <img :src="i.preViewUrl">
      <h2>{{ i.name }}</h2>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SortView",
  mounted() {
    console.log(this.$store.state.uploadWebtoonList);
  }
};
</script>

<style scoped>

</style>