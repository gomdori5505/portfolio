<template>
  <section id="aboutMe">
    <div class="py-12"></div>
    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">ABOUT ME</h2>
        <v-responsive
          class="mx-auto mb-8"
          width="56"
        >
          <v-divider class="mb-1"></v-divider>
          <v-divider></v-divider>
        </v-responsive>

        <v-responsive
          class="mx-auto title font-weight-light mb-10"
          max-width="720"
        >
          다시 도전하는 Front-End 개발자 이승경 입니다.<br>
          2016년 처음 PHP 개발을 시작으로 프로덕트 매니저를 거쳐<br>
          현재는 Front-End 개발 분야로 배움의 폭을 넓혀가고 있습니다.<br><br>
          Javascript가 가지고 있는 다양성 및 가능성에 관심이 많으며,<br>
          특히 Vue.js를 이용한 Front-End 개발에 집중하고있습니다.<br><br>
          프로덕트 매니저 업무 경험을 바탕으로 Front-end 개발자로서<br>
          사용자로부터 서비스 경험에 대한 긍정적인 부분까지<br>
          이끌어낼 수 있도록 하는 개발자를 지향합니다.
        </v-responsive>
        <div class="text-center mb-10">
          <v-avatar
            size="190"
          >
            <img
              src="@/assets/img/lsk.jpg"
              alt="lsk"
            >
          </v-avatar>
        </div>
        <v-btn
          color="grey"
          @click="goToLink(pageLink)"
          outlined
          large
        >
          <span class="grey--text text--darken-1 font-weight-bold">
            이력서 보러가기
          </span>
        </v-btn>
    </v-container>
    <div class="py-12"></div>
  </section>
</template>

<script>
import { link } from '@/mixins/link'
export default {
  data() {
    return {
      pageLink: "https://drive.google.com/file/d/1y8N3worDSnIoF9UCUqrWcr_f4acpFLc6/view?usp=sharing"
    }
  },
  mixins: [link]
}
</script>