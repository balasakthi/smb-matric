<template>
  <HeroPage
    :heroData="{
      title: 'Contact',
    }"
  />
  <v-container class="pa-0" fluid>
    <v-row
      ><v-col class="pl-6 pr-6">
        <v-img
          src="/images/school.webp"
          class="img mx-auto"
          cover
        ></v-img> </v-col
    ></v-row>
  </v-container>
  <v-container style="max-width: 1200px">
    <v-row class="mb-12">
      <v-col cols="12" md="4" class="text-center">
        <v-icon size="40" icon="mdi-map-marker"></v-icon>
        <p class="text-h6 mt-2 mb-2 font-weight-bold">Location</p>
        <p class="text-subtitle-1 mt-2">
          No. 35, G.T.N. Salai, <br />
          Dindigul - 624 001.
        </p>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon size="40" icon="mdi-phone"></v-icon>
        <p class="text-h6 mt-2 mb-2 font-weight-bold">Call</p>
        <a
          class="text-subtitle-1 mt-2 text-decoration-none text-black"
          href="tel:+91 7397776771"
          >+91 73977 76771</a
        >
        <div>
          <a
            class="text-subtitle-1 mt-2 text-decoration-none text-black"
            href="tel:+91 4512426771"
            >0451 2426771</a
          >,
          <a
            class="text-subtitle-1 mt-2 text-decoration-none text-black"
            href="tel:+91 4512426772"
            >0451 2426772</a
          >
        </div>
        <div class="text-gray">Mon - Fri, 8am - 4pm</div>
      </v-col>
      <v-col cols="12" md="4" class="text-center">
        <v-icon size="40" icon="mdi-email"></v-icon>
        <p class="text-h6 mt-2 mb-2 font-weight-bold">Email</p>
        <a
          class="text-subtitle-1 mt-2 text-decoration-none text-black"
          href="mailto:smbmatricschooldgl@gmail.com"
          >smbmatricschooldgl@gmail.com</a
        >
      </v-col>
    </v-row>
    <v-row class="pt-12 pb-12">
      <v-col
        ><iframe
          class="google-map"
          src="https://maps.google.com/maps?q=DNU%20S.M.B.M.%20MATRIC.%20HIGHER%20SECONDARY%20SCHOOL%2C%20DGL.&t=m&z=17&output=embed&iwloc=near"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe></v-col
    ></v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped>
iframe {
  border-radius: 1em;
}

.google-map {
  height: 500px;
  width: 100%;
  border: 0;
}

.img {
  border-radius: 1em;
  margin-top: -6rem;
  width: 900px;
  height: 500px;
}
</style>
