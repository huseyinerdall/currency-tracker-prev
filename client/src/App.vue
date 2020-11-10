<template>
  <v-app>
    <v-app-bar app color="indigo" dark class="hidden-sm-and-down">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
        <h1 class="text-xl-h4 d-none d-lg-flex d-xl-none">{{$store.state.appName}}</h1>

      </div>

      <v-spacer></v-spacer>
      <v-btn
          v-if="isAuthenticated"
          href="/wallet"
          text
      >
        <span class="mr-2">VARLIKLARIM</span>
        <v-icon>mdi-wallet-outline</v-icon>
      </v-btn>
      <v-btn
        href="/"
        text
      >
        <span class="mr-2">ANASAYFA</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        href="/login"
        text
      >
        <span class="mr-2">GİRİŞ</span>
        <v-icon>mdi-account-arrow-right-outline</v-icon>
      </v-btn>
      <v-btn
        href="/register"
        text
      >
        <span class="mr-2">ÜYELİK</span>
        <v-icon>mdi-account-multiple-plus-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-app-bar app dark color="indigo" class="hidden-sm-and-up">
        <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="./assets/logo.png"
            transition="scale-transition"
            width="40"
        />
        <h3 class="text-xl-h4 ml-2">{{$store.state.appName}}</h3>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon dark @click="dialog = true" style="margin-right: -10px;">
          <v-icon>mdi-menu</v-icon>
        </v-app-bar-nav-icon>

      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">

        <v-card>
          <v-toolbar color="indigo">
            <v-toolbar-title>
              <v-img
                  alt="Vuetify Logo"
                  class="shrink mr-2"
                  contain
                  src="./assets/logo.png"
                  transition="scale-transition"
                  width="40"
              />
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.native="dialog = false">
              <v-icon color="white">mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-list-item-group>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-wallet-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content v-if="isAuthenticated" >
                  <v-list-item-title>
                    <v-btn href="/wallet">
                      VARLIKLARIM
                    </v-btn>
                  </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                 <v-btn href="/">
                  ANASAYFA
                 </v-btn>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-arrow-right-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                  <v-list-item-title>
                    <v-btn href="/login">
                      GİRİŞ
                    </v-btn>
                  </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple-plus-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content href="/register">
                  <v-list-item-title>
                    <v-btn href="/register">
                      ÜYELİK
                    </v-btn>
                  </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-card>
      </v-dialog>

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
    isAuthenticated: true,
    dialog: false,
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
