<template>
  <v-container class="pa-0" fluid>
    <v-sheet
      class="d-flex align-center"
      color="blue-grey-darken-2"
      height="400"
    >
      <v-container class="text-center">
        <h1
          class="text-h4 text-sm-h3 text-lg-h2 text-white font-weight-bold"
          v-show="true"
        >
          {{ heroData.title }}
        </h1>
        <v-breadcrumbs :items="items" class="text-white justify-center">
          <template v-slot:divider>
            <v-icon icon="mdi-circle-medium"></v-icon>
          </template>
        </v-breadcrumbs>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const { heroData } = defineProps(["heroData"]);

const items = ref([
  {
    title: "Home",
    disabled: false,
    to: "/",
  },
  {
    title: heroData.title,
    disabled: false,
    to: "",
  },
]);
</script>

<style scoped>
.bg {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='400' preserveAspectRatio='none' viewBox='0 0 1440 400'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1003%26quot%3b)' fill='none'%3e%3crect width='1440' height='400' x='0' y='0' fill='rgba(155%2c 46%2c 72%2c 1)'%3e%3c/rect%3e%3cpath d='M1440 0L996.97 0L1440 177.14z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M996.97 0L1440 177.14L1440 297.09L927.88 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M927.88 0L1440 297.09L1440 332.59L463.81 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M463.80999999999995 0L1440 332.59L1440 348.76L429.16999999999996 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M0 400L485.02 400L0 360.95z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M0 360.95L485.02 400L703.9399999999999 400L0 296.2z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M0 296.2L703.9399999999999 400L928.9799999999999 400L0 176.89999999999998z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M0 176.9L928.9799999999999 400L1288.3999999999999 400L0 123.27000000000001z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1003'%3e%3crect width='1440' height='400' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
