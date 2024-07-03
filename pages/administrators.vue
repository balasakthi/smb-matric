<template>
  <HeroPage
    :heroData="{
      title: 'Academic Administrators',
    }"
  />

  <Team :teamData="team" />
</template>

<script setup>
import { ref } from "vue";

const team = ref([
  {
    userName: "Mrs. M. Kamatchi",
    userTitle: "Co-ordinator Secondary Section",
    imageUrl: "images/management/smb-secondary.webp",
  },
  {
    userName: "Mrs. K. Vetriselvi",
    userTitle: "Co-ordinator Middle Section",
    imageUrl: "images/management/smb-middle.webp",
  },
  {
    userName: "Mrs. F. Jubaitha Beevi",
    userTitle: "Co-ordinator Primary Section",
    imageUrl: "images/management/smb-primary.webp",
  },
]);
</script>

<style scoped></style>
