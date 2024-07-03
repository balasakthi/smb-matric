<template>
  <HeroPage
    :heroData="{
      title: 'Our Management',
    }"
  />

  <Team :teamData="team" />
</template>

<script setup>
import { ref } from "vue";

const team = ref([
  {
    userName: "Mr. S. Anbu Selvan",
    userTitle: "President",
    imageUrl: "images/management/smb-president.webp",
  },
  {
    userName: "Mr. M. K. Paramasivam",
    userTitle: "Correspondent & Secretary",
    imageUrl: "images/management/smb-correspondent.webp",
  },
  {
    userName: "Mr. S. Saravanan",
    userTitle: "Treasurer",
    imageUrl: "images/management/smb-treasurer.webp",
  },
  {
    userName: "Mr. T. Leo Pradeep",
    userTitle: "Vice President",
    imageUrl: "images/management/smb-vice-president.webp",
  },
  {
    userName: "Mr. G. Jeyaraj Engineer",
    userTitle: "Assistant Secretary",
    imageUrl: "images/management/smb-assistant-secretary.webp",
  },
]);
</script>

<style scoped></style>
