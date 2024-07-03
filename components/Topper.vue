<template>
  <v-container style="max-width: 1200px">
    <v-row class="pt-6 pb-12">
      <v-col cols="12" lg="4" sm="6" v-for="topper in toppers" :key="topper.id">
        <v-card class="mx-auto my-6" max-width="345">
          <v-img :src="topper.photo" height="200" contain></v-img>

          <v-card-title class="text-h6 mt-2">
            <span v-html="topper.name"></span>
            <v-chip
              color="#E07A5F"
              label
              class="ml-3 font-weight-bold text-subtitle-2"
            >
              {{ topper.place }}
            </v-chip>
          </v-card-title>

          <v-card-subtitle class="text-subtitle-2">
            Total Score: {{ topper.totalScore }}
          </v-card-subtitle>

          <v-card-text>
            <v-table density="compact" v-if="topper.subjects">
              <tbody>
                <tr v-for="(subject, index) in topper.subjects" :key="index">
                  <td>{{ subject.title }}</td>
                  <td class="text-right">{{ subject.marks }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { toppers } = defineProps(["toppers"]);
</script>

<style scoped></style>
