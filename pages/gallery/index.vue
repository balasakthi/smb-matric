<template>
  <HeroPage
    :heroData="{
      title: 'Our Gallery',
    }"
  />
  <v-container class="pt-12">
    <v-card flat>
      <v-tabs
        v-model="tab"
        color="blue-grey-darken-3"
        align-tabs="center"
        show-arrows
      >
        <v-tab class="text-capitalize" :value="1">Academic Activities</v-tab>
        <v-tab class="text-capitalize" :value="2"
          >Events and Celebrations</v-tab
        >
        <v-tab class="text-capitalize" :value="3">Sports and Athletics</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item :value="1">
          <!-- Render Academic Gallery Here -->
          <GalleryItem :galleryData="galleryAcademic" />
        </v-window-item>
        <v-window-item :value="2">
          <!-- Render Events Gallery Here -->
          <GalleryItem :galleryData="galleryEvents" />
        </v-window-item>
        <v-window-item :value="3">
          <!-- Render Sports Gallery Here -->
          <GalleryItem :galleryData="gallerySports" />
        </v-window-item> </v-window
    ></v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

const tab = ref(null);

const galleryAcademic = getGallery("academic");
const galleryEvents = getGallery("events");
const gallerySports = getGallery("sports");
</script>

<style scoped></style>
