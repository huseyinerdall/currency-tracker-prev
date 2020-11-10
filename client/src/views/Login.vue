<template>
  <div class="login">
    <v-container >
      <v-row>
        <v-col class="mx-auto col-sm-10 col-xs-12 col-lg-5" >
          <v-text-field
              color="green"
              dark
              label="Kullanıcı Adı"
              append-outer-icon="mdi-account"
          ></v-text-field>
          <v-text-field
              color="green"
              dark
              label="Parola"
              append-outer-icon="mdi-key-variant"
          ></v-text-field>
          <v-btn
              color="blue-grey"
              class="white--text mx-auto"
          >
            GİRİŞ
            <v-icon
                right
                dark
            >
              mdi-login
            </v-icon>
          </v-btn>
          <v-btn
              style="background:#de5246;"
              class="white--text float-right"
          >
            Google
            <v-icon
                right
                dark
            >
              mdi-google
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Login",
  components: {
  }
};
</script>
<style scoped>

</style>