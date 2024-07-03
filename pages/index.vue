<template>
  <Carousels />

  <Quote
    :quoteData="{
      quote:
        'எண்ணென்ப ஏனை எழுத்தென்ப இவ்விரண்டும்<br/>கண்ணென்ப வாழும் உயிர்க்கு.',
      author: 'குறள் எண்: 392',
    }"
  />

  <MessageItem
    class="mt-6"
    :messageData="{
      title: 'Welcome to SMB Matric.',
      message:
        'Schooling is not all about books and classes, it\'s about creating educated human beings and developing civilised, social, literates and successful citizens of the future. D.N.U. SMBM Matric School has been pursuing since its establishment. </br> </br>We endure to provide a stimulating academic programme to emphasize individual conscientiousness and respect individuality in its creative inference. Our School has a particular ethos, a rare quality of its own, which has been kept alive, over time by many people. We instill in all students, the ability to communicate freely and confidently.</br></br>With utmost enthusiasm and sincerity, we invest to set a trend of specialised education to enable them to strive and survive in the advanced and competitive world of tomorrow by creating the tech-savvies of today to create an environment where the students can explore themselves and put forth a valiant effort.',
      userName: 'M.K. Paramasivam',
      userTitle: 'Yours Correspondent',
      imageUrl: 'images/management/smb-correspondent.webp',
      imageWidth: 400,
    }"
  />

  <h2 class="text-center mb-5">Tremendous Result of 2022 - 2023</h2>
  <v-tabs v-model="tab" color="#E07A5F" align-tabs="center" show-arrows>
    <v-tab :value="1" class="text-capitalize">XII Standard </v-tab>
    <v-tab :value="2" class="text-capitalize">XI Standard</v-tab>
    <v-tab :value="3" class="text-capitalize">X Standard</v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item :value="1"> <Topper :toppers="toppersXII" /></v-window-item>
    <v-window-item :value="2"> <Topper :toppers="toppersXI" /></v-window-item>
    <v-window-item :value="3"> <Topper :toppers="toppersX" /></v-window-item>
  </v-window>
</template>

<script setup>
import { ref } from "vue";

const tab = ref(null);

const toppersXII = ref([
  {
    name: "Siva Dharshini C",
    std: "XII",
    subjects: [
      {
        title: "தமிழ்",
        marks: 95,
      },
      { title: "English", marks: 97 },
      { title: "Maths", marks: 100 },
      { title: "Physics", marks: 98 },
      { title: "Chemistry", marks: 100 },
      { title: "Biology", marks: 100 },
    ],
    place: "I Mark",
    photo: "/images/toppers/XII/sivadarshini.webp",
    totalScore: 590,
  },

  {
    name: "Swathi S",
    std: "XII",
    subjects: [
      {
        title: "தமிழ்",
        marks: 96,
      },
      { title: "English", marks: 96 },
      { title: "Economics", marks: 99 },
      { title: "Commerce", marks: 100 },
      { title: "Accountancy", marks: 99 },
      { title: "B.M.", marks: 100 },
    ],
    place: "I Mark",
    photo: "/images/toppers/XII/swathi.webp",
    totalScore: 590,
  },
  {
    name: "Sairam D",
    std: "XII",
    subjects: [
      {
        title: "தமிழ்",
        marks: 89,
      },
      { title: "English", marks: 94 },
      { title: "Maths", marks: 100 },
      { title: "Physics", marks: 100 },
      { title: "Chemistry", marks: 100 },
      { title: "Com. Science", marks: 100 },
    ],
    place: "II Mark",
    photo: "/images/toppers/XII/sairam.webp",
    totalScore: 583,
  },
  {
    name: "Sri Vidhya S",
    std: "XII",
    subjects: [
      {
        title: "தமிழ்",
        marks: 95,
      },
      { title: "English", marks: 93 },
      { title: "Economics", marks: 100 },
      { title: "Commerce", marks: 100 },
      { title: "Accountancy", marks: 98 },
      { title: "Com. App.", marks: 97 },
    ],
    place: "II Mark",
    photo: "/images/toppers/XII/srividhya.webp",
    totalScore: 583,
  },
  {
    name: "Vidhya Devi M",
    std: "XII",
    subjects: [
      {
        title: "தமிழ்",
        marks: 95,
      },
      { title: "English", marks: 90 },
      { title: "Economics", marks: 99 },
      { title: "Commerce", marks: 100 },
      { title: "Accountancy", marks: 99 },
      { title: "B.M.", marks: 100 },
    ],
    place: "II Mark",
    photo: "/images/toppers/XII/vidhyadevi.webp",
    totalScore: 583,
  },
  {
    name: "Mithul Krishna S",
    std: "XII",
    subjects: [
      {
        title: "French",
        marks: 97,
      },
      { title: "English", marks: 87 },
      { title: "Economics", marks: 99 },
      { title: "Commerce", marks: 100 },
      { title: "Accountancy", marks: 100 },
      { title: "B.M.", marks: 99 },
    ],
    place: "III Mark",
    photo: "/images/toppers/XII/mithulkrishna.webp",
    totalScore: 582,
  },
]);

const toppersXI = ref([
  {
    name: "Imman Lazar E",
    std: "XI",
    subjects: [],
    place: "I Mark",
    photo: "/images/toppers/XI/immanlazar.webp",
    totalScore: 571,
  },
  {
    name: "Nithish S",
    std: "XI",
    subjects: [],
    place: "II Mark",
    photo: "/images/toppers/XI/nithish.webp",
    totalScore: 566,
  },
  {
    name: "Shivani K",
    std: "XI",
    subjects: [],
    place: "III Mark",
    photo: "/images/toppers/XI/shivani.webp",
    totalScore: 560,
  },
  {
    name: "Sandeep Kumar S",
    std: "XI",
    subjects: [],
    place: "IV Mark",
    photo: "/images/toppers/XI/sandeepkumar.webp",
    totalScore: 571,
  },
  {
    name: "Satheeshwaran S",
    std: "XI",
    subjects: [],
    place: "V Mark",
    photo: "/images/toppers/XI/satheeshwaran.webp",
    totalScore: 551,
  },
  {
    name: "Karthik R",
    std: "XI",
    subjects: [],
    place: "V Mark",
    photo: "/images/toppers/XI/karthik.webp",
    totalScore: 551,
  },
]);

const toppersX = ref([
  {
    name: "Pavithraa RV",
    std: "X",
    subjects: [],
    place: "I Mark",
    photo: "/images/toppers/X/pavithraa.webp",
    totalScore: 495,
  },
  {
    name: "Lavanya S",
    std: "X",
    subjects: [],
    place: "II Mark",
    photo: "/images/toppers/X/lavanya.webp",
    totalScore: 475,
  },
  {
    name: "Dhivya Sri SK",
    std: "X",
    subjects: [],
    place: "III Mark",
    photo: "/images/toppers/X/dhivyasri.webp",
    totalScore: 473,
  },
  {
    name: "Sentamil <br/> Pavendhan TV",
    std: "X",
    subjects: [],
    place: "IV Mark",
    photo: "/images/toppers/X/sentamil.webp",
    totalScore: 464,
  },
  {
    name: "Karishma V",
    std: "X",
    subjects: [],
    place: "IV Mark",
    photo: "/images/toppers/X/karishma.webp",
    totalScore: 464,
  },
]);
</script>

<style scoped></style>
