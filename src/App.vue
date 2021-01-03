<template>
  <v-app>
    <v-main>
      <Hero />
      <AboutMe />
      <Skill />
      <Project />
      <Contact />
    </v-main>

    <v-footer
      class="justify-center"
      color="#292929"
      height="100"
    >
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} — Vuetify, LLC — Made with 💜 by John Leider
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';


export default {
  name: 'App',

  components: {
    Hero,
    AboutMe,
    Skill,
    Project,
    Contact,
  }
};
</script>
