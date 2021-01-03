<template>
  <section id="hero">
    <v-row no-gutters>
      <v-img
      gradient="to top right, rgba(0,0,0,.6), rgba(0,0,0,.6)"
      :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      src="@/assets/img/laptop.jpg"
      >
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
            >              
              <v-col
                class="white--text text-center"
                cols="12"
                tag="h1"
              >
                <span
                  :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                >
                  <typing-animation 
                    :typingText="['소통을 중요시 하는', '배움을 두려워하지 않는', '항상 긍정적으로 생각하는', '서로 협력하며 일하는것을 좋아하는']"
                    :props-color="'white'"
                    :props-font-size="'50px'"
                    :props-cursor-color="'white'"
                    :props-cursor-width="'4px'"
                    :props-cursor-height="'45px'"
                  />
                  프론트엔드 개발자 이승경 입니다.
                </span>
              </v-col>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>
</template>