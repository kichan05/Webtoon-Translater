<template>
  <div class="content-wrap">
    <div class="content">
      <div class="title-wrap">
        <h1>웹툰 번역 완료</h1>
        <h2>Ai가 대사를 인식하고 번역까지 완료 했어요.</h2>
      </div>

      <main>
        <div class="img-wrap">
          <img :src="`${$apiUrl}/translate/2023-07-16 23.16.22.png`" />
        </div>
<!--        <div class="button-wrap">-->
<!--          <button class="download">저장</button>-->
<!--        </div>-->
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultView",
  mounted() {
    console.log(this.$route.params.url);
  },
  data() {
    return {};
  },
  computed: {
    timeStamp: {
      get() {
        return this.$store.state.ocrTimeStamp;
      }
    }
  }
};
</script>

<style scoped>
.content {

}

main {
  margin-top: 20px;

  display: flex;
  justify-content: center;
}

main > * {
  width: 50%;

  display: inline-block;
}

img {
  width: 100%;
}

.download {
}
</style>