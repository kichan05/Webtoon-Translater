<template>
  <div class="content-wrap">
    <div class="content">
      <div class="title-wrap">
        <h1>이미지 오타 수정</h1>
        <h2>Ai가 인식한 잘못된 대사를 수정해주세요.</h2>
      </div>

      <main>
        <div class="webtoon-list-wrap list-wrap">
          <div class="webtoon-list">
            <img v-for="(i, n) in webtoonList" :src="i.preViewUrl" :key="n">
          </div>
        </div>

        <div class="text-list-wrap list-wrap">
          <div class="text-list">
            <h1 v-for="i in 1000" :key="i">Hello World</h1>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "OcrErrorEdit",
  data() {
    return {
      text: ["안녕하세요.", "안녕하세요.", "안녕하세요.", "안녕하세요."]
    };
  },
  computed: {
    webtoonList: {
      get() {
        return this.$store.state.uploadWebtoonList;
      },
      set(value) {
        this.$store.commit("setUploadWebtoonList", value);
      }
    }
  }
};
</script>

<style scoped src="./../style/ocrErrorEdit.css"></style>