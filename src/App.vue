<template>
      <v-app>
       <Dashboard />
      </v-app>
</template>

<script>

import { VApp } from 'vuetify/components/VApp';

import Dashboard from './view/Dashboard.vue';

export default {

  components: {
    VApp,
    Dashboard
  },

  methods: {
    fun() {
      console.log("Hoo");
    }
  }

}
</script>