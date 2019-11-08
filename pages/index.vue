<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <p class="display-2 py-md-5">
          {{ $t('message.title') }}
        </p>
      </div>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  head () {
    return {
      link: [
        { rel: 'stylesheet', href: '/css/main.css' }
      ]
    } 
  }
}
</script>
