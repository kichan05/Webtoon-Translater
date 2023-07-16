<template>
  <div class="content-wrap">
    <div class="content">
      <div class="title-wrap">
        <h1>웹툰 번역 완료</h1>
        <h2>Ai가 대사를 인식하고 번역까지 완료 했어요.</h2>
      </div>

      <main>
        <div class="img-wrap">
          <h3>원본</h3>
          <img :src="`${$apiUrl}/image/${timeStamp}.png`" />
        </div>
        <div class="img-wrap">
          <h3>번역</h3>
          <img :src="`${$apiUrl}/translate/${timeStamp}.png`" />
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

.img-wrap {
  padding: 8px;
}

.img-wrap h3 {
  font-size: 24px;
  text-align: center;
}

.img-wrap img {
  width: 100%;

  margin-top: 12px;

  border: 1px solid #c2c2c2;
  border-radius: 12px;
}
</style>