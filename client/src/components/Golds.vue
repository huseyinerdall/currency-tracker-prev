<template>
  <v-data-table
      :headers="headers"
      :items="data"
      item-class="d-none"
      hide-default-footer
      :loading="!goldloaded"
      disable-pagination
  >
    <template v-slot:item.type="{ item }">
      <router-link :to="{ name: 'Golds', params: { type: item.type }}" tag="h3">{{ item.type }}</router-link>
    </template>
  </v-data-table>
</template>


<script>
import axios from "axios";
export default {
  data () {
    return {
      goldloaded: false,
      headers: [
        { text: 'Tür',align: 'start', sortable: false,value: 'type',},
        { text: 'Alış Fiyatı', value: 'buy',sortable: false,align: 'right', },
        { text: 'Satış Fiyatı', value: 'sell',sortable: false,align: 'right', },
        //{ text: 'Kapanış', value: 'close',sortable: false,align: 'right', },
        { text: 'Son Güncelleme', value: 'updated',sortable: false,align: 'right', },
      ],
      data: []
    }
  },
  created() {
    let app = this;
    axios.get("http://localhost:4000/golds")
        .then((res)=>{
          app.data = res.data;
          app.goldloaded = true;
        })
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
  background: #ff0000 !important;
}
td{
  color:white !important;
}
h3{
  cursor: pointer;
}
</style>
