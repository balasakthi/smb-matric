<template>
  <HeroPage
    :heroData="{
      title: 'Facilities',
    }"
  />

  <MessageItem
    class="mt-6"
    :messageData="{
      title: 'Infrastructure',
      quote: null,
      message:
        'A vast expanse of 3 acres provides a perfect ambience for an aesthetically chartered school building. The lung space, the open lawns are marked with a colourful bonanza of fresh floral bounty. <br/><br/> An awe inspiring well planned infrastructure comprising of  well ventilated classrooms, Science, Maths and Language laboratories with interactive smart boards highly attract the students to involve in their learning through presentations. The reference library, which is fully computerized with a plentiful number of books, is a treasure trove of information that has been built assiduously over a span of more than 4 decades and continues to grow each year. To take care of minor exigencies, the school is equipped with separate first aid room.<br/><br/>To aid the process of learning we have a sound proof auditorium, state of art recording studio, an Art lab, a resource centre for teachers, a sports field, a place to facilitate physical fitness and indoor games, a discovery room to enhance the  creative flair of the students.',

      imageUrl: 'images/school.webp',
      imageWidth: 400,
    }"
  />

  <!-- <v-container style="max-width: 1200px" class="pt-6 pb-12">
    <v-row class="pt-6">
      <v-col
        cols="12"
        sm="6"
        md="4"
        lg="3"
        v-for="(gallery, index) in facilitiesPhoto"
        :key="index"
      >
        <v-card flat v-for="photo in gallery.url">
          <v-img class="gallery-image" :src="baseUrl + photo" cover>
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="blue-grey-darken-3"
                ></v-progress-circular>
              </v-row> </template
          ></v-img>

          <v-card-title>{{ gallery.title }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container> -->
</template>

<script setup>
import { ref } from "vue";
const baseUrl = "https://i.ibb.co/";

const facilitiesPhoto = ref([
  {
    title: "Physics Lab",
    category: "facilities",
    url: [
      "5LQhhmN/physicslab1.webp",
      // "bP14p5B/physicslab2.webp",
      "4pc9TZC/physicslab3.webp",
      "chD2N8F/physicslab4.webp",
    ],
  },
  {
    title: "Chemistry Lab",
    category: "facilities",
    url: [
      "DKwKk1t/chemistrylab1.webp",
      "939DWtm/chemistrylab2.webp",
      "mRq6dmY/chemistrylab3.webp",
      // "YD2mrfq/chemistrylab4.webp",
      // "2gpgGFX/chemistrylab5.webp",
    ],
  },
  {
    title: "Computer Lab",
    category: "facilities",
    url: [
      "d0nnG0T/computerlab1.webp",
      "nrvn9WX/computerlab2.webp",
      "y6xWngR/computerlab3.webp",
    ],
  },
  {
    title: "Others",
    category: "facilities",
    url: [
      // "1K2NVWV/school1.webp",
      // "W02Jcc5/school2.webp",
      "3CVcfxz/biologylab.webp",
      "hgVVfzt/classroom.webp",
      "kSQftJB/library.webp",
      // "5vrtVsM/smbmatric1.webp",
      // "syLR3LS/smbmatric2.webp",
      // "mH8mF5C/smbmatric3.webp",
      // "Hx17NtH/smbmatric4.webp",
      // "DWpv06t/smbmatric5.webp",
      // "FmPV0Pg/smbmatric6.webp",
    ],
  },
]);
</script>

<style scoped></style>
