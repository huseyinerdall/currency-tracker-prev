<template>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card
            color="blue"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                >USDTRY</v-card-title>

                <v-card-subtitle class="d-flex flex-row mb-6">
                  <h4>Alış : 8.9898</h4>
                  <v-spacer></v-spacer>
                  <h4>Satış : 8.9998</h4>
                </v-card-subtitle>

                <v-card-actions>
                </v-card-actions>
              </div>

            </div>
          </v-card>
        </v-col>
        </v-row>
      </v-container>

</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        prices: [],
      }
    },
    mounted() {
      let app = this;
      setInterval(function(){
        axios({
            method: 'GET',
            url: `http://${this.$store.state.addr}:${this.$store.state.port}`,
            headers: {
               'Access-Control-Allow-Origin': '*',
               'Content-type': 'application/json',
            }
        })
        .then(function(res){
          app.prices = res.data;
        })
      },1000)
    }
  }
</script>
