<template>
  <div id="app">
        <v-flex xs12 sm12 mt-5>
          <v-card transparent style="background:rgba(0,0,0,.3);color:#ffffff;">
            <v-container text-xs-center>
              <v-avatar
                  size="100"
                  color="red"
              >
                <img v-if="userInfo.profileImage" :src="userInfo.profileImage" alt="avatar">
                <span v-else class="white--text headline">{{userInfo.fullName | nameAvatar}}</span>
              </v-avatar>
            </v-container>

            <v-card-title primary-title>
              <h3 class="headline mb-0">{{userInfo.fullName}}</h3>
            </v-card-title>


            <v-card-text color="white" class="white--text">
              <p>Eposta:{{userInfo.email}}<br></p>
              <v-divider></v-divider>
              <p>Üyelik tarihi:{{userInfo.createdAt}}</p>
              <v-divider></v-divider>
              <p>Parola(Şifreli):{{userInfo.passwd}}</p>
            </v-card-text>
          </v-card>
        </v-flex>
  </div>
</template>

<script>

export default {
  name: "Profile",
  data () {
    return {
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  },
  computed: {
    userInfo () {
      return JSON.parse(localStorage.getItem('user'));
    }
  },
};
</script>
