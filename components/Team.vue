<template>
  <v-container style="max-width: 1200px">
    <v-row class="pt-6">
      <v-col
        cols="12"
        lg="4"
        sm="6"
        v-for="(team, index) in teamData"
        :key="index"
      >
        <v-card class="mx-auto my-12" max-width="344">
          <v-img cover :src="team.imageUrl" height="350px"></v-img>

          <v-card-item>
            <v-card-title>{{ team.userName }}</v-card-title>

            <v-card-subtitle>
              <span class="me-1">{{ team.userTitle }}</span>
            </v-card-subtitle>
          </v-card-item>

          <v-divider class="mx-4 mb-1"></v-divider>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { teamData } = defineProps(["teamData"]);
</script>

<style scoped></style>
