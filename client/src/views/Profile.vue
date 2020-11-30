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
              <v-btn
                  color="primary"
                  class="text-none"
                  rounded
                  depressed
                  :loading="isSelecting"
                  @click="onButtonClick"
              >
                <v-icon left>
                  mdi-camera
                </v-icon>
                {{ buttonText }}
              </v-btn>
              <input
                  ref="file"
                  class="d-none"
                  type="file"
                  id="file"
                  accept="image/*"
                  @change="onFileChanged"
              >
            </v-container>

            <v-card-title primary-title>
              <h3 class="headline mb-0">{{userInfo.fullName}}</h3>
            </v-card-title>


            <v-card-text color="white" class="white--text">
              <p>ID:{{userInfo.id}}<br></p>
              <v-divider></v-divider>
              <p>Eposta:{{userInfo.email}}<br></p>
              <v-divider></v-divider>
              <p>Üyelik tarihi:{{userInfo.createdAt}}</p>
              <v-divider></v-divider>
              <p>Parola(Şifreli):{{userInfo.passwd}}</p>
            </v-card-text>
            <v-btn @click="save">KAYDET</v-btn>
          </v-card>
        </v-flex>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Profile",
  data () {
    return {
      defaultButtonText: 'Profil görsel',
      selectedFile: null,
      isSelecting: false,
      file: '',
    }
  },
  computed: {
    userInfo () {
      return JSON.parse(localStorage.getItem('user'));
    },
    buttonText() {
      return this.selectedFile ? this.selectedFile.name : this.defaultButtonText
    }
  },
  methods: {
    onButtonClick() {
      this.isSelecting = true
      window.addEventListener('focus', () => {
        this.isSelecting = false
      }, { once: true })

      this.$refs.file.click()
    },
    onFileChanged() {
      this.file = this.$refs.file.files[0];
      const formData = new FormData();
      formData.append('file', this.file);
      axios.post(`http://${this.$store.state.addr}:${this.$store.state.port}/avatar`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        console.log(res)
      })
    },
    save() {

    }
  }
};
</script>
