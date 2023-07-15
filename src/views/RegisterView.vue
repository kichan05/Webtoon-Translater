<template>
  <h1>대회 지원</h1>
  <div>
    <label>
      학번 :
      <input type="text" v-model="studentNumber" />
    </label>

    <label>
      이름 :
      <input type="text" v-model="name" />
    </label>

    <label>
      팀 :
      <input type="text" v-model="teamName" />
    </label>

    <label>
      포트폴리오 :
      <input type="file" @change="selectPortfolio" />
    </label>

    <button @click="submit">지원하기</button>
  </div>
</template>

<script>
import { db, storage } from "@/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import moment from "moment";
import router from "@/router";

export default {
  name: "RegisterView",
  data() {
    return {
      studentNumber: "",
      name: "",
      teamName: "",
      portfolio: null
    };
  },
  methods: {
    selectPortfolio(e) {
      this.portfolio = e.target.files[0];
    },
    async submit() {
      const timeStamp = moment().format("YYYY-MM-DDThh:mm:ss");
      const filenameExtension = this.portfolio.name.split(".").slice(-1)[0];
      const fileName = `[${this.teamName}] ${this.studentNumber} ${this.name} - ${timeStamp}.${filenameExtension}`;

      const fileRef = ref(storage, `/portfolio/${fileName}`);
      const fileSnapshot = await uploadBytes(fileRef, this.portfolio);

      const portfolioUrl = await getDownloadURL(fileRef);

      const studentData = {
        studentId: this.studentNumber,
        name: this.name,
        team: this.teamName,
        portfolioUrl
      };

      const storageSnashot = await setDoc(doc(db, `user`, `${this.studentNumber} ${this.name}`), studentData);

      alert("완료");
      router.push({ name: "main" });
    }
  }
};
</script>

<style>

</style>