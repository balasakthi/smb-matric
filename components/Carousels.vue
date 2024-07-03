<template>
  <v-carousel hide-delimiters show-arrows="hover" height="600" cycle>
    <v-carousel-item
      v-for="(item, index) in carouselImages"
      :key="index"
      :src="item.src"
      cover
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
import { ref } from "vue";
const carouselImages = ref([
  { src: "images/carousel/carousel-1.webp" },
  { src: "images/carousel/carousel-2.webp" },
  { src: "images/carousel/carousel-3.webp" },
  { src: "images/carousel/carousel-4.webp" },
  { src: "images/carousel/carousel-5.webp" },
  { src: "images/carousel/carousel-6.webp" },
]);
</script>

<style scoped></style>
