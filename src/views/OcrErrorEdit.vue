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
            <img :src="$apiUrl +  '/image/' + timeStamp + '.png'" />
            <!--            <img v-for="(i, n) in webtoonList" :src="i.preViewUrl" :key="n">-->
          </div>
        </div>
        <div class="text-list-wrap list-wrap">
          <div class="text-list">
            <input v-for="(i, n) in ocrResult" :key="n" v-model="i.text" :placeholder="i.text" />
          </div>
        </div>
      </main>

      <button @click="next">확인</button>
    </div>
  </div>
  <LoadingModal v-if="loading" title="업로드 중" />
</template>

<script>
import axios from "axios";
import LoadingModal from "@/conponent/LoadingModal";

export default {
  name: "OcrErrorEdit",
  data() {
    return {
      loading: false
    };
  },
  mounted() {
    console.log(this.ocrResult);
  },
  methods: {
    async next() {
      this.loading = true;

      console.log(this.ocrResult);

      await axios.post(this.$apiUrl + "/translate", {
        "time_stamp": this.timeStamp,
        "ocr": this.ocrResult
      }).then(res => {
        this.loading = false;
        console.log(res.data);
      })
        .catch(e => {
          this.loading = false;
          alert("에러 유감ㅠ");
        });

    }
  },
  computed: {
    webtoonList: {
      get() {
        return this.$store.state.uploadWebtoonList;
      },
      set(value) {
        this.$store.commit("setUploadWebtoonList", value);
      }
    },
    ocrResult: {
      get() {
        return this.$store.state.ocrResult;
      },
      set(value) {
        this.$store.commit("setOcrResult", value);
      }
    },
    timeStamp: {
      get() {
        return this.$store.state.ocrTimeStamp;
      }
    }
  },
  components: {
    LoadingModal
  }
};
</script>

<style scoped src="./../style/ocrErrorEdit.css"></style>