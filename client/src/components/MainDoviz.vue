<template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Tür
          </th>
          <th class="text-left">
            Alış
          </th>
          <th class="text-left">
            Satış
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in prices"
          :key="item.isim"
        >
          <td>{{ item.isim }}</td>
          <td>{{ item.alis }}</td>
          <td>{{ item.satis }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
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
            url: `http://localhost:4000`,
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
