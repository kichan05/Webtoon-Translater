import { createStore } from "vuex";

export default createStore({
  state: {
    uploadWebtoonList : null,
    ocrResult : null,
    ocrTimeStamp : null,
  },
  getters: {
    getUploadWebtoonList(state) {
      return state.uploadWebtoonList
    },
    getOcrResult(state) {
      return state.ocrResult
    },
    getOcrTimeStamp(state) {
      return state.ocrTimeStamp
    },
  },
  mutations: {
    setUploadWebtoonList(state, value) {
      state.uploadWebtoonList = value
    },
    setOcrResult(state, value) {
      state.ocrResult = value
    },
    setOcrTimeStamp(state, value) {
      state.ocrTimeStamp = value
    },
  },
  actions: {},
  modules: {},
});
