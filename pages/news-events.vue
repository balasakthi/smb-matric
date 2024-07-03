<template>
  <HeroPage
    :heroData="{
      title: 'News and Events',
    }"
  />

  <Quote
    :quoteData="{
      quote: 'It is not just about ideas. It is about making ideas happen.',
    }"
  />

  <MessageItem
    class="mt-6"
    :messageData="{
      title: 'News and Events',
      quote: 'It’s the place for Educational Talk.',
      message:
        'Our school conducted many webinar programmes to enrich the knowledge of students as well as teachers. <br/> <br/> Our staff excelled with their teaching. At the same time, they enhanced themselves in webinars, which was specially named STEP. (SMBM Teachers Empowerment Programme) <br/><br/> Through this platform teachers clarified their doubts in handling today’s generation and mould themselves as a good felicitator in teaching- learning process.',
      userName: '',
      userTitle: '',
      imageUrl: 'images/illustration/news_events.svg',
      imageWidth: 300,
    }"
  />

  <v-container style="max-width: 1200px">
    <h2 class="text-h5 text-sm-h4 font-weight-bold">Prayer for students</h2>
    <v-row>
      <v-col v-for="prayer in prayers">
        <v-card class="mx-auto my-12" max-width="" flat>
          <v-card-item>
            <v-card-title class="text-center font-weight-bold"
              >{{ prayer.title }}
            </v-card-title>
          </v-card-item>

          <v-divider class="mx-4 mb-1"></v-divider>
          <v-card-text>
            <p class="text-center" v-html="prayer.prayer"></p>
          </v-card-text> </v-card
      ></v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const prayers = ref([
  {
    title: "Morning Prayer",
    prayer:
      "OH GOD! <br /><br/>THE ORIGIN OF KNOWLEDGE, <br /> BLESS OUR STUDIES, <br />ENLIGHTEN OUR MINDS, <br />STRENGTHEN OUR MEMORY <br /> AND DIRECT OUR WILL TOWARDS <br />WHAT IS RIGHT, <br /> <br/> GRANT US, THE GRACE TO SEEK <br /> TRUTH ALWAYS AND MAKE US <br /> <br/>TRULY WISE. <br />GIVE US THE GIFT OF <br /> KNOWLEDGE AND THE GRACE TO <br/><br />USE IT WISELY.",
  },
  {
    title: "Evening Prayer",
    prayer:
      "OH GOD! <br/><br/>SOURCE OF ALL WISDOM AND KNOWLEDGE, <br/> <br/>GRANT THAT WE REMEMBER <br/> WHAT WE HAVE LEARNT <br/> AND RECALL IT WHEN NECESSARY. <br/> <br/> WE OFFER THEE,<br/><br/>OUR WORK AND OUR ENDEAVOURS,<br/>OUR FAILURES AND SUCCESS.<br/> FORGIVE OUR FAULTS<br/> AND GIVE US COURAGE TO FOLLOW <br/> THE HOLY WILL IN ALL THINGS.",
  },
  {
    title: "Loyalty Pledge",
    prayer:
      "INDIA IS MY COUNTRY. <br/><br/> ALL INDIANS ARE MY BROTHERS AND SISTERS.<br/><br/>I LOVE MY COUNTRY<br/>AND I’M PROUD OF ITS<br/>RICH AND VARIED HERITAGE.<br/>I SHALL ALWAYS<br/>STRIVE TO BE WORTHY OF IT.<br/><br/>I SHALL GIVE MY PARENTS, TEACHERS AND ALL ELDERS<br/>RESPECT AND TREAT EVERYONE WITH COURTESY.<br/><br/>TO MY COUNTRY AND MY PEOPLE,<br/><br/>I PLEDGE MY DEVOTION.<br/>IN THEIR WELL BEING<br/><br/>AND PROSPERITY ALONE LIES MY HAPPINESS.",
  },
]);
</script>
