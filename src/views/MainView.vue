<template>
  <div class="main-wrap">
    <main>
      <div class="title">
        <h1>인공지능 웹툰 번역기</h1>
        <h2>인공지능이 웹툰의 대사를 인식하고 직접 번역까지 해줍니다.</h2>
      </div>
      <div class="start-wrap">
        <label class="start btn" for="get-webtoon-image">시작하기</label>
        <input type="file" name="webtoon-image" id="get-webtoon-image" @change="getFile" multiple accept="image/*">
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "MainView",
  data() {
    return {

    };
  },
  methods: {
    getFile(event) {
      let webtoonFiles = Array.from(event.target.files)
      let result = []

      for (let i = 0; i < webtoonFiles.length; i++) {
        result.push({
          id : i,
          preViewUrl : URL.createObjectURL(webtoonFiles[i]),
          file : webtoonFiles[i]
        })
      }

      this.$store.commit("setUploadWebtoonList", result)
      this.$router.push({"name" : "sort"})
    }
  }
};
</script>

<style scoped src="./../style/main.css"></style>