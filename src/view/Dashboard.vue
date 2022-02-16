<template>
  <v-container>
    <v-row>
      <v-col class="lg-6 status">
        <h2>Unschedule</h2>

        <v-dialog transition="dialog-bottom-transition">
          <template v-slot:activator="{ props }">
            <v-btn flat color="secondary" v-bind="props" class="mb-3"
              >New</v-btn
            >
          </template>
          <template v-slot:default="{ isActive  }">
            <v-card>
              <v-form class="w-550 p-5">
                <v-text-field v-model="title" label="Subject" required>
                </v-text-field>

                <v-textarea v-model="description" label="Description" required>
                </v-textarea>

                <v-btn submit color="primary" @click="submit()">
                    Click to Add
                </v-btn>
              </v-form>

              <v-card-actions class="justify-end">
                  <v-btn text @click="isActive.value = false">Close</v-btn>
              </v-card-actions>

              <!-- <v-card-text>
                  <div class="text-h2 pa-12">Hello world!</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="isActive.value = false">Close</v-btn>
                </v-card-actions> -->
            </v-card>
          </template>
        </v-dialog>

        <template v-for="todo in toDos" :key="todo.id">
          <Card
            :title="todo.title"
            :description="todo.description"
            @dragableTodo="setTodo"
          />
        </template>
      </v-col>
      <v-col class="lg-6 status">
        <h2>Completed</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  VRow,
  VCol,
  VContainer,
  VBtn,
  VCardText,
  VCardActions,
  VCard,
  VDialog,
  VForm,
  VTextField,
  VTextarea,
} from "../../node_modules/vuetify/lib/components";
import Card from "../components/Card.vue";

export default {
  components: {
    VRow,
    VCol,
    VContainer,
    Card,
    VBtn,
    VCardText,
    VCardActions,
    VCard,
    VDialog,
    VForm,
    VTextField,
    VTextarea,
  },
  data() {
    return {
      dragableTodo: null,
      toDos: [
        { id: 1, title: "First", description: "lorem5lllllsdf" },
        { id: 2, title: "Second", description: "lorem5" },
      ],
      title: null,
      description: null,
    };
  },
  mounted() {
    let status = this.$el.querySelectorAll(".status");

    status.forEach((node) => {
      console.log();

      node.addEventListener("dragover", (e) => {
        e.preventDefault();
      });

      node.addEventListener("dragenter", () => {
        console.log("dragEnter");
      });

      node.addEventListener("dragleave", () => {
        console.log("dragleave");
      });

      node.addEventListener("drop", () => {
        node.appendChild(this.dragableTodo.$el);
        // console.log(this.dragableTodo.$el);
        console.log("dragdrop");
      });
    });
  },
  methods: {
    setTodo(todo) {
      this.dragableTodo = todo;
    },
    fun() {
      alert("hello");
    },
    submit() {
        this.toDos.push({
            id: Math.random() * 1000,
            title: this.title,
            description: this.description
        });

        this.title = null;
        this.description = null;
    }
  },
};
</script>