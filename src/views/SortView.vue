<template>
  <div class="content-wrap">
    <div class="content">
      <div class="title-wrap">
        <h1>웹툰 이미지 순서 변경</h1>
        <h2>드래그를 통해서 이미지의 순서를 변경해주세요.</h2>
      </div>

      <ul class="webtoon-list">
        <draggable
          :v-model="webtoonList"
          :list="webtoonList"
          :disabled="!enabled"
          item-key="name"
          class="list-group"
          ghost-class="ghost"
          :move="checkMove"
          @start="dragging = true"
          @end="dragging = false"
        >
          <template #item="{ element }">
            <li class="webtoon-list-item" :class="{ 'not-draggable': !enabled }">
              <div class="webtoon-img" v-bind:style="{backgroundImage : `url(${element.preViewUrl})`}" />
              <h3>{{ element.file.name }}</h3>
            </li>
          </template>
        </draggable>
      </ul>

      <button @click="next">확인</button>
    </div>
  </div>
  <LoadingModal v-if="uploading" title="업로드 중" />
</template>

<script>
import draggable from "vuedraggable";
import axios from "axios";
import LoadingModal from "@/conponent/LoadingModal";

export default {
  name: "SortView",
  data() {
    return {
      enabled: true,
      dragging: false,
      uploading: false
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
  },
  mounted() {
    console.log(this.webtoonList);
  },
  methods: {
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
    next: async function() {
      const header = { "Content-Type": "multipart/form-data" };
      const formData = new FormData();

      for (let i = 0; i < this.$store.state.uploadWebtoonList.length; i++) {
        formData.append("fileList", this.$store.state.uploadWebtoonList[i].file);
      }

      this.uploading = true;
      const res = await axios.post(
        `${this.$apiUrl}/imageOcr`,
        formData,
        header
      ).then(res => {
        console.log(res.data);

        this.uploading = false;
        this.$store.commit("setOcrResult", res.data.ocr);
        this.$store.commit("setOcrTimeStamp", res.data.timeStamp);
        this.$router.push({ name: "OcrErrorEdit" });
      })
        .catch(e => {
          alert("에러 유감 ㅠ")
          console.log(e);
        });
    }
  },
  components: {
    LoadingModal,
    draggable
  }
};
</script>

<style scoped src="./../style/sort.css"></style>