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
            </li>
          </template>
        </draggable>
      </ul>

      <button @click="next">확인</button>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "SortView",
  data() {
    return {
      enabled: true,
      dragging: false
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
  methods: {
    checkMove: function(e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
    },
    submit: function(e) {
      for (const i of this.webtoonList) {
        console.log(i.id);
      }
    },
    next : function() {
      this.$router.push({"name" : "OcrErrorEdit"})
    }
  },
  components: {
    draggable
  }
};
</script>

<style scoped src="./../style/sort.css"></style>