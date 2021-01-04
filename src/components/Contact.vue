<template>
<v-sheet
    id="contact"
    color="#333333"
    dark
    tag="section"
    tile
  >
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Contact Me</h2>

      <v-responsive
        class="mx-auto mb-12"
        width="56"
      >
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
      <v-row>
        <v-col>aa</v-col>
        <v-col>
          <v-theme-provider light>
            <v-form @submit.prevent="submit">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    :error-messages="nameErrors"
                    :counter="10"
                    flat
                    label="Name*"
                    name="name"
                    v-model="name"
                    required
                    solo
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    :error-messages="emailErrors"
                    flat
                    label="Email*"
                    name="email"
                    v-model="email"
                    required
                    solo
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    :error-messages="messageErrors"
                    flat
                    label="Message*"
                    name="message"
                    v-model="message"
                    required
                    solo
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                  ></v-textarea>
                </v-col>

                <v-col
                  class="mx-auto"
                  cols="auto"
                >
                  <v-btn
                    color="accent"
                    x-large
                    type="submit"
                  >
                    보내기
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-theme-provider>
        </v-col>
      </v-row>
    </v-container>
    <div class="py-12"></div>
  </v-sheet>
</template>

<script>
import emailjs from 'emailjs-com';
import { required, maxLength, email } from 'vuelidate/lib/validators'

export default {
  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    message: { required }
  },

  data: () => ({
    name: '',
    email: '',
    message: '',
    serviceId: 'service_3mlzt69',
    templateId: 'template_ch82n08',
    userId: 'user_HikCziUGITuc0gljgBzeW'
  }),

  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('이름은 10자 이하여야 합니다.')
      !this.$v.name.required && errors.push('이름은 필수입니다.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('이메일이 유효하지 않습니다.')
      !this.$v.email.required && errors.push('이메일은 필수입니다.')
      return errors
    },
    messageErrors () {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push('메세지는 필수입니다.')
      return errors
    }
  },

  methods: {
    submit (e) {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        console.log("error")
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        console.log("pending")
        setTimeout(() => {
          this.submitStatus = 'OK'
          console.log("ok")
          this.sendEmail(e, this.serviceId, this.templateId, this.userId);
        }, 500)
      }
    },

    sendEmail: (e, serviceId, templateId, userId) => {
      emailjs.sendForm(serviceId, templateId, e.target, userId)
        .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
          alert("메세지를 성공적으로 전송하였습니다.")
        }, (error) => {
          console.log('FAILED...', error);
          alert("메세지 전송에 실패하였습니다.")
        });
    }
  },
}
</script>