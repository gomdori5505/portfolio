<template>
<section id="project">
  <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Project</h2>

      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col
          v-for="({ src, text, title, people, period, skills, githubLink, pageLink }, i) in articles"
          :key="i"
          cols="12"
          md="4"
        >
          <v-img
            :src="src"
            class="mb-4"
            height="275"
            max-width="100%"
          ></v-img>

          <h3
            class="font-weight-black mb-4"
            v-text="title"
          ></h3>

          <div
            class="title font-weight-light mb-5"
            v-text="text"
          ></div>

          <div
            class="subtitle font-weight-light mb-2"
          >
            <v-icon
            class="mr-1"
              color="black"
            >
              mdi-account
            </v-icon>
          {{ people }}
          </div>

          <div
            class="subtitle font-weight-light mb-2"
          >
            <v-icon
            class="mr-1"
              color="black"
            >
              mdi-calendar
            </v-icon>
          {{ period }}
          </div>

          <div
            class="subtitle font-weight-light mb-2"
          >
            <v-icon
              class="mr-1"
              color="black"
            >
              mdi-code-tags
            </v-icon>
            <span
              v-for="skill in skills"
              :key="skill"
              v-text="'#' + skill"
              class="mr-2"
            ></span>
          </div>
          
          <div>
            <v-btn
              class="ml-n4 font-weight-black"
              text
              @click="goToLink(githubLink)"
            >
              Github
            </v-btn>
          </div>
          
          <div>
            <v-btn
              class="ml-n4 font-weight-black"
              text
              @click="goToLink(pageLink)"
            >
              View page
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>

<script>
import { link } from '@/mixins/link'
export default {
  data() {
    return {
      articles: [
        {
          src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: '포트폴리오 웹사이트',
          text: 'VueJS로 개발한 포트폴리오 사이트 입니다.',
          people: '개인',
          period: '2021-01-02 ~ 2020-01-00 (0일)',
          skills: ['JavaScript', 'VueJS', 'Vuetify'],
          githubLink: 'https://github.com/gomdori5505/portfolio',
          pageLink: '#'
        },
        {
          src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
          title: 'Think outside the box',
          text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
          people: '개인',
          period: '2021-01-02 ~ 2020-01-00 (0일)',
          skills: ['JavaScript', 'VueJS', 'Vuetify'],
          githubLink: 'https://github.com/gomdori5505/portfolio',
          pageLink: '#'
        },
        {
          src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
          title: 'Small changes, big difference',
          text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
          people: '개인',
          period: '2021-01-02 ~ 2020-01-00 (0일)',
          skills: ['JavaScript', 'VueJS', 'Vuetify'],
          githubLink: 'https://github.com/gomdori5505/portfolio',
          pageLink: '#'
        },
      ],
    }
  },
  mixins: [link]
}
</script>