<template>
  <v-container style="max-width: 1200px">
    <v-row class="pt-6">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(gallery, index) in galleryData"
        :key="index"
      >
        <v-card flat>
          <NuxtLink :to="`/gallery/${gallery.title}`">
            <v-img class="gallery-image" :src="gallery.url" cover>
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="blue-grey-darken-3"
                  ></v-progress-circular>
                </v-row> </template
            ></v-img>
          </NuxtLink>
          <v-card-title>{{ gallery.title }} </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { galleryData } = defineProps(["galleryData"]);
</script>

<style scoped></style>
