<template>
  <v-app>
    <v-app-bar app color="indigo" dark >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
        <h1 class="text-xl-h4">{{$store.state.appName}}</h1>

      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="/"
        text
      >
        <span class="mr-2">ANASAYFA</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
        href="/"
        text
      >
        <span class="mr-2">GİRİŞ</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn
        href="/"
        text
      >
        <span class="mr-2">ÜYELİK</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>

      <v-container>
        <v-col>
          <router-view/>
        </v-col>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/common/Footer";



export default {
  name: "App",

  components: {
    Footer
  },

  data: () => ({
    //
  })
};
</script>

<style media="screen">
  body,*{
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
  }
  .v-main{
    background: #1c2f44 !important;
  }
</style>
