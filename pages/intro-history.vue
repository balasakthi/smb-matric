<template>
  <HeroPage
    :heroData="{
      title: 'Introduction and History',
    }"
  />

  <MessageItem
    class="mt-6"
    :messageData="{
      title: 'Our History',
      quote: 'அடக்கம், பணிவு, உழைப்பு, எழுச்சி, குறிக்கோள்.',
      message:
        'Keeping these above words as their aphorism, Dindigul Nadar Uravinmurai was founded in the year 1964. <br /><br />Through the co-ordinated efforts, with the widened scope for enhancing its prestigious influence on the society, Dindigul Nadar Uravinmurai has been active in the field of Education throughout Dindigul, since its origin with the unstoppable service of Mr. D. Shankaralingam, the President, Dr. P. Santhosh, the Vice President, Mr. R. Chandra Sekaran, the Secretary, Mr. S.M. Veera Mani, the Joint Secretary, Mr. A. Sankara Narayanan, the Treasurer and the honorary advisers of Uravinmurai.<br /><br />Like both sides of a coin and both parallel lines of railway tracks, DNU treats Educational Enrichment and Social welfare of the people as its twin eyes of the Uravinmurai. <br /><br /> Thus, DNU exhibited nexus between Uravinmurai and the Educational Society on finding its EDUCATIONAL TRUST in Dindigul.',

      imageUrl: 'images/school.webp',
      imageWidth: 400,
    }"
  />

  <v-container style="max-width: 600px">
    <h4 class="text-h6 font-weight-bold mb-8">
      Our DNU has founded four reputed schools
    </h4>
    <v-timeline align="start">
      <v-timeline-item
        v-for="(school, i) in schools"
        :key="i"
        :dot-color="teal"
      >
        <template v-slot:icon>
          <v-avatar :image="school.logo" size="x-large"></v-avatar>
        </template>
        <template v-slot:opposite>
          <div
            class="pt-1 headline font-weight-bold text-teal"
            v-text="school.year"
          ></div>
        </template>

        <div>
          <a
            :href="school.web"
            class="text-decoration-none text-black"
            target="_blank"
            >{{ school.name }}</a
          >
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
  <v-container>
    <v-divider class="my-6" />
  </v-container>

  <v-container style="max-width: 1200px">
    <p class="mb-8">
      These institutions are the part of DNU’s effort to share multifarious
      welfare activities. DNU aims at the integral, personal formation of the
      students. To accomplish this, a special intention has been made in all the
      DNU institutions and it always aims at making its own contributions
      towards a transformation of the present-day social condition.
      <br />
      <br />
      This longings never put a full stop to the Uravinmurai’s journey, and it
      aims to set an another milestone to serve the youth.
    </p>
  </v-container>

  <Quote
    :quoteData="{
      quote:
        'Keep Learning <br/> Keep Trying <br/> Keep Accomplishing <br/> and Keep Venturing!!!',
    }"
  />
</template>

<script setup>
import { ref } from "vue";

const schools = ref([
  {
    name: "DINDIGUL NADAR URAVINMURAI SMBM. NATIONAL PUBLIC SCHOOL (CBSE).",
    year: 2017,
    logo: "/images/logo/smbm-cbse-logo.webp",
    web: "https://www.smbcbseschool.com/",
  },
  {
    name: "DINDIGUL NADAR URAVINMURAI K.K.A.G. MATRICULATION SCHOOL.",
    year: 2001,
    logo: "/images/logo/kkag-logo.webp",
    web: "http://www.kkagmschool.com/",
  },
  {
    name: "DINDIGUL NADAR URAVINMURAI SMBM. MATRIC. HIGHER SECONDARY SCHOOL.",
    year: 1980,
    logo: "/images/logo/smbmatriclogo.webp",
    web: "https://smbmatricschool.com/",
  },
  {
    name: "M.S.P. SOLAI NADAR MEMORIAL HIGHER SECONDARY SCHOOL.",
    year: 1966,
    logo: "/images/logo/msp-logo.webp",
    web: "http://www.mspschool.edu.in/",
  },
]);
</script>
