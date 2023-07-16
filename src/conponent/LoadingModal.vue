<template>
  <div class="loading-wrap">
    <div class="loading-model">
      <h1>{{title}}</h1>

      <h2>잠시만 기다려주세요</h2>

      <div class="lds-dual-ring"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoadingModal",
  props : {
    title : String
  }
};
</script>

<style scoped src="../style/loading_modal.css"></style>
