<template>
  <Head>
    <Title>SMB Matric Gallery | {{ id }}</Title>
  </Head>
  <HeroPage
    :heroData="{
      title: id,
    }"
  />

  <v-container class="pt-12 pb-12" style="max-width: 1200px">
    <v-breadcrumbs
      :items="items"
      divider="-"
      :to="items.to"
      bg-color="blue-grey-darken-3"
    ></v-breadcrumbs>

    <v-row class="pt-6">
      <v-col cols="12" sm="6" md="4" lg="3" v-for="index in count" :key="index">
        <v-card flat>
          <a
            :href="baseUrl + id.split(' ').join('') + '-' + index + '.webp'"
            target="_blank"
            ><v-img
              class="gallery-image"
              :src="baseUrl + id.split(' ').join('') + '-' + index + '.webp'"
              cover
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="blue-grey-darken-3"
                  ></v-progress-circular>
                </v-row>
              </template> </v-img
          ></a>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const { id } = useRoute().params;

const baseUrl = "https://smbmatricschool.com/wp-content/uploads/2023/10/";

const items = ref([
  {
    title: "Gallery",
    disabled: false,
    to: "/gallery",
  },
  {
    title: id,
    disabled: false,
    to: "",
  },
]);

const count = getCount(id);
</script>

<style scoped></style>
