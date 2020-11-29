<template>
  <v-data-table
    :headers="headers"
    :items="data"
    item-class="d-none"
    hide-default-footer
    :loading="!coinloaded"
    disable-pagination
    style="border: 1px solid #444767;border-radius:0;background-color:rgba(0,0,0,.3);color:#fff;"
  >
    <template v-slot:item.shortName="{ item }">
      <router-link :to="{ name: 'Coins', params: { coin: item.name }}" tag="h3">{{ item.shortName | uppercase }}</router-link>
      <h4 style="font-weight:400;">{{ item.name }}</h4>
    </template>
    <template v-slot:item.price="{ item }">
      <h3 style="font-weight:400;font-size:12px;" class="text-right">{{item.price.toFixed(4) }}</h3>
      <h4 style="font-weight:400;font-size:11px;color:#91dc5a;" class="text-right"
          :class="[item.price-item.close>=0 ? 'green--text' : 'red--text']">
        {{+item.price - Math.abs(+item.close) | signint}}
        (% {{ (((+item.price-(+item.close))/+item.close)*100) | signint }})</h4>
    </template>
    <template v-slot:item.low="{ item }">
      <span style="font-size:10px;">{{ item.low | tofixedfour }}</span>
    </template>
    <template v-slot:item.high="{ item }">
      <span style="font-size:10px;">{{ item.high | tofixedfour }}</span>
    </template>
    <template v-slot:item.close="{ item }">
      <span style="font-size:10px;">{{ item.close | tofixedfour }}</span>
    </template>
  </v-data-table>
</template>


<script>
//import axios from "axios";
//import coins from '../assets/coins.json';
import io from "socket.io-client";

  export default {
    data () {
      return {
        coinloaded: true,
        headers: [
          { text: 'Kripto Kurlar',align: 'start', sortable: false,value: 'shortName',class: 'yellow--text darken-1 font-weight-light body-1',},
          { text: 'Fiyat(USD)', value: 'price',sortable: false,align: 'right',class: 'yellow--text darken-1 font-weight-light body-1', },
          { text: 'Fiyat(TL)', value: 'price',sortable: false,align: 'right',class: 'yellow--text darken-1 font-weight-light body-1', },
          { text: 'Fark', value: 'high',sortable: false,align: 'right',class: 'yellow--text darken-1 font-weight-light body-1', },
          { text: 'Piyasa Hacmi', value: 'low',sortable: false,align: 'right',class: 'yellow--text darken-1 font-weight-light body-1', },
          { text: 'Fark (24S)', value: 'close',sortable: false,align: 'right',class: 'yellow--text darken-1 font-weight-light body-1', },
          { text: 'Fark (7G)', value: 'close',sortable: false,align: 'right',class: 'yellow--text darken-1 font-weight-light body-1', },
          { text: 'Saat', value: 'close',sortable: false,align: 'right',class: 'yellow--text darken-1 font-weight-light body-1', },
        ],
        data:[]
      }
    },
    created() {
      let app = this;
      var socket = io.connect(`http://${this.$store.state.addr}:${this.$store.state.port}`);
      /*setInterval(function () {
        axios.get("http://localhost:4000/coins")
            .then((res)=>{
              app.data = res.data;
              app.coinloaded = true;
            })
      },1000)*/
      socket.on("coins", fetchedData => {
        app.data = fetchedData
      })
    },
    mounted() {
    },
    methods: {
      getColor (price) {
        if (price > 400) return 'red'
        else if (price > 200) return 'orange'
        else return 'green'
      },
    },
  }
</script>

<style scoped>
.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){
  background: rgba(0,0,0,.1) !important;
  background-attachment: fixed;
}
.theme--light.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){
  background: rgba(0,0,0,.3) !important;
}
td{
  color:white !important;
}
h3{
  cursor: pointer;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td{
  font-size: 4px !important;
}
</style>
