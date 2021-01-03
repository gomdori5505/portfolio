<template>
  <v-app>
    <v-main>
      <Hero />
      <AboutMe />
      <Skill />
      <Project />
      <Contact />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default {
  name: 'App',

  components: {
    Hero,
    AboutMe,
    Skill,
    Project,
    Contact,
    Footer
  }
};
</script>
