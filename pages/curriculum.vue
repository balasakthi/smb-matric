<template>
  <HeroPage
    :heroData="{
      title: 'Curriculum',
    }"
  />

  <MessageItem
    class="mt-6"
    :messageData="{
      title: 'Curriculum',
      quote: null,
      message:
        'Our SMBM is a Co- educational school affiliated to the Matriculation state Board syllabus.<br/><br/>We have been facilitating learning through key notes. We provide to the students from all classes to lay emphasis on easy learning, which goes well with K.G. Theatre, Art and Digital Labs, Smart Class, Physical Education, Computer Science, G.K., Hindi and Spoken English<br/><br/>ECA is given to the SMBM Students to foster and channelize their talents in a protective way. SMBM moulds many young children with talents. Every year students pass out from this great institution with a wonderful percentage of result with poise.<br/><br/>Our Comprehensive curriculum empowers the teachers and engages the students. The components like audiovisuals, simulations and hands-on activities, delight the learners and take them to float in the world of knowledge.',

      imageUrl: 'images/illustration/curriculum.svg',
      imageWidth: 300,
    }"
  />

  <MessageItem
    class="mt-6"
    :messageData="{
      title: 'Teaching Methodology',
      quote: null,
      message:
        '<ul><li>Student-centric approach.</li><li>Innovative teaching methodologies integrate and weave in the schools<br>philosophy</li><li>Experiential Learning and Project Based Learning form the foundation of<br>the learning system.</li><li>Healthy student-teacher ratio available to optimize teaching-learning<br>process.</li><li>Use of themes and projects to develop higher order thinking that stimulate<br>creativity.</li><li>Use of modern and conventional tools and methods of teaching and<br>learning.</li><li>Large number of Co-scholastic activities that provide wide and varied<br>exposure.</li></ul>',

      imageUrl: 'images/illustration/teaching.svg',
      imageWidth: 300,
      isReverse: true,
    }"
  />
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped></style>
