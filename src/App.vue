<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import "./assets/font/font.css";
 ::-webkit-scrollbar {
     width: 0 !important;
   }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
.ant-row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.ant-input-lg {
  height: 60px;
  font-size: 30px;
}
.ant-btn-lg {
  height: 60px;
  font-size: 30px;
  background: #004176;
  border-color: #004176;
}
.mid .gutter-row {
  height: 100%;
}
.s2r {
  height: 100vh;
}
.ant-input::placeholder {
  color: #000;
}
p {
  display: block;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  margin-bottom: 0!important;
}
.gutter-row {
  padding: 0px !important;
}
@media screen and (max-width: 750px) {
  .ant-input-lg {
    height: 40px;
    font-size: 16px;
  }
  .ant-btn-lg {
    height: 40px;
    font-size: 14px;
    background: #004176;
    border-color: #004176;
  }
}
</style>
