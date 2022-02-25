<template>

  <v-card
    class="mx-auto mb-3"
    max-width="344"
    variant="outlined"
    draggable="true"
  >
    <v-card-title>
        {{ title }}
    </v-card-title>
    <v-card-subtitle>
        subject
    </v-card-subtitle>
    <v-card-text>
        <p>{{ description }}</p>
    </v-card-text>
  </v-card>
</template>
<script>

 //import { VCard, VCardText, VCardTitle, VCardSubtitle} from '../../node_modules/vuetify/lib/components'

  export default {
      props: ['title', 'description'],
      methods: {
          fun() {
            alert("hello world");
          }
      },
      mounted(){

          this.$el.addEventListener('dragstart', () => {
              console.log("dragstart")
              this.$emit("dragableTodo", this);
          })
           this.$el.addEventListener('dragend', () => {
              console.log("dragend")
              this.$emit("dragableTodo", null);
          })
      } 
  }
</script>

<style scoped>
    .v-card:hover {
        cursor: pointer;
    }

    .mb-3 {
        margin-bottom: 1.3rem;
    }

</style>