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
          src: require('@/assets/projectGif/ev-charging.png'),
          title: '전기차 충전소 찾기',
          text: 'VueJS 기반으로 전기차 충전소 공공 데이터를 받아와 다음 맵에 뿌려주고 상세정보를 보여주는 사이트 입니다. (미완성, 로그인, 즐겨찾기 및 게시판 추가 예정)',
          people: '개인',
          period: '2021-01-08 ~ 진행중',
          skills: ['VueJS', 'Vuetify', 'Firebase'],
          githubLink: 'https://github.com/gomdori5505/ev-charging',
          pageLink: ''
        },
        {
          src: require('@/assets/projectGif/portfolio.gif'),
          title: '포트폴리오 웹사이트',
          text: 'VueJS로 개발한 포트폴리오 사이트 입니다.',
          people: '개인',
          period: '2021-01-02 ~ 2021-01-04 (3일)',
          skills: ['VueJS', 'Vuetify'],
          githubLink: 'https://github.com/gomdori5505/portfolio',
          pageLink: 'https://gomdori5505.github.io/portfolio/'
        },
        {
          src: require('@/assets/projectGif/vueJsBoard.gif'),
          title: 'VueJS 게시판',
          text: 'VueJS를 기반으로 Firebase(NoSQL)를 연동하여 데이터를 저장하고 뿌려주는 게시판 입니다.',
          people: '개인',
          period: '2020-12-29 ~ 2020-12-31 (3일)',
          skills: ['VueJS', 'Vuetify', 'Firebase'],
          githubLink: 'https://github.com/gomdori5505/vuejs_board',
          pageLink: 'https://gomdori5505.github.io/vuejs_board/'
        },
        {
          src: require('@/assets/projectGif/jsBoard.gif'),
          title: 'Javascript 게시판',
          text: 'Javascript를 기반으로 Firebase(NoSQL)를 연동하여 rest api를 통해 데이터를 저장하고 뿌려주는 게시판 입니다.',
          people: '개인',
          period: '2020-12-21 ~ 2020-12-24 (4일)',
          skills: ['JavaScript', 'Firebase'],
          githubLink: 'https://github.com/gomdori5505/JS_board',
          pageLink: 'https://gomdori5505.github.io/JS_board/'
        },
        {
          src: require('@/assets/projectGif/movieBox.gif'),
          title: 'Movie Box',
          text: 'Javascript를 기반으로 박스오피스API를 활용하여 local storage에 영화를 담을 수 있는 Movie Box 입니다.',
          people: '개인',
          period: '2020-12-07 ~ 2020-12-10 (4일)',
          skills: ['JavaScript'],
          githubLink: 'https://github.com/gomdori5505/js_project',
          pageLink: 'https://gomdori5505.github.io/js_project/movie_box/'
        },
        {
          src: require('@/assets/projectGif/todoList.gif'),
          title: 'TODO List',
          text: 'Javascript를 기반으로 local storage에서 데이터를 저장하고 뿌려주는 TODO List 입니다.',
          people: '개인',
          period: '2020-12-01 ~ 2020-12-03 (4일)',
          skills: ['JavaScript'],
          githubLink: 'https://github.com/gomdori5505/js_project',
          pageLink: 'https://gomdori5505.github.io/js_project/todo_list/'
        },
      ],
    }
  },
  mixins: [link]
}
</script>