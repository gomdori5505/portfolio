<template>
  <section
    id="skill"
    class="grey lighten-3"
  >
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase">Skill</h2>

        <v-responsive
          class="mx-auto mb-12"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col
              v-for="({ type, prefix, icon, title }, i) in features"
              :key="i"
              cols="12"
              md="2"
          >
            <v-card
              v-if="type === 'fontawesome'"
              class="py-5 px-4"
              color="grey lighten-3"
              flat
            >
              <v-theme-provider dark>
                <div>
                  <font-awesome-icon :icon="[prefix, icon]" size="4x" />
                </div>
              </v-theme-provider>

              <v-card-title
                class="justify-center"
                v-text="title"
              ></v-card-title>

            </v-card>
            <v-card
              v-else-if="type === 'mdi'"
              class="py-5 px-4"
              color="grey lighten-3"
              flat
            >
              <v-theme-provider dark>
                <div>
                  <v-icon
                    size="55"
                    color="black"
                  >{{ icon }}
                  </v-icon>
                </div>
              </v-theme-provider>

              <v-card-title
                class="justify-center"
                v-text="title"
              ></v-card-title>

            </v-card>
          </v-col>
        </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          type: 'fontawesome',
          prefix: 'fab',
          icon: 'html5',
          title: 'HTML5'
        },
        {
          type: 'fontawesome',
          prefix: 'fab',
          icon: 'css3',
          title: 'CSS3',
        },
        {
          type: 'fontawesome',
          prefix: 'fab',
          icon: 'sass',
          title: 'SASS',
        },
        {
          type: 'fontawesome',
          prefix: 'fab',
          icon: 'bootstrap',
          title: 'Bootstrap',
        },
        {
          type: 'mdi',
          icon: 'mdi-jquery',
          title: 'jQuery'
        },
        {
          type: 'mdi',
          icon: 'mdi-vuetify',
          title: 'Vuetify'
        },
        {
          type: 'fontawesome',
          prefix: 'fab',
          icon: 'js',
          title: 'JavaScript(ES6)',
        },
        {
          type: 'fontawesome',
          prefix: 'fab',
          icon: 'vuejs',
          title: 'VueJS',
        },
        {
          type: 'fontawesome',
          prefix: 'fab',
          icon: 'php',
          title: 'PHP',
        },
        {
          type: 'mdi',
          icon: 'mdi-database',
          title: 'MYSQL'
        },
        {
          type: 'mdi',
          icon: 'mdi-firebase',
          title: 'Firebase'
        },
      ],
    }
  }
}
</script>