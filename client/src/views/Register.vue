<template>
  <div class="login">
    <v-container >
      <v-row>
        <v-col class="mx-auto col-sm-10 col-xs-12 col-lg-5" >
          <v-row>
            <v-col
            cols="6"
            sm="12">
              <v-text-field
                  color="green"
                  dark
                  label="E-posta"
                  append-outer-icon="mdi-card-account-mail"
                  v-model="email"
              ></v-text-field>
            </v-col>
            <v-col
                cols="6"
                sm="12">
              <v-text-field
                  color="green"
                  dark
                  label="İsim Soyisim"
                  append-outer-icon="mdi-card-account-details"
                  v-model="fullname"
              ></v-text-field>
            </v-col>
            <v-col
                cols="6"
                sm="12">
              <v-text-field
                  color="green"
                  dark
                  label="Parola"
                  append-outer-icon="mdi-key"
                  v-model="password1"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  hint="En az 8 karakter!"
                  @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
            <v-col
                cols="6"
                sm="12">
              <v-text-field
                  color="green"
                  dark
                  label="Parola(Tekrar)"
                  append-outer-icon="mdi-key"
                  v-model="password2"
                  type="password"
              ></v-text-field>
            </v-col>

          </v-row>
          <v-btn
              color="blue-grey"
              class="white--text mx-auto"
              @click="register"
          >
            KAYDOL
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
import axios from "axios";
export default {
  name: "Login",
  components: {
  },
  data () {
    return {
      email:'',
      fullname:'',
      password1: '',
      password2: '',
      show1: false,
      show2: false,
    }
  },
  methods:{
    register(){
      axios.post(`${this.$store.state.addr}:${this.$store.state.port}/register`,{
        fullName: this.fullname,
        email: this.email,
        passwd: this.password1
      })
    }
  }
};
</script>
<style scoped>

</style>