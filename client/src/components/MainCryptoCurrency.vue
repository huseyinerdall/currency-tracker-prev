<template>
  <v-data-table
    :headers="headers"
    :items="data"
    hide-default-footer
  >
    <template v-slot:item.shortName="{ item }">
      <h3 style="font-weight:400;" :class="item.shortName">{{ item.shortName }} </h3>
      <h4 style="font-weight:400;">{{ coins[item.shortName] }}</h4>
    </template>
    <template v-slot:item.price="{ item }">
      <h3 style="font-weight:400;" class="text-right">{{item.price.toFixed(4)}}</h3>
      <h4 style="font-weight:400;font-size:12px;color:#91dc5a;" class="text-right">
        {{+item.price - (+item.close) | signint}}
        (% {{ ((+item.price-(+item.close))/+item.close)*100 | signint}})</h4>
    </template>
  </v-data-table>
</template>


<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Döviz Adı',align: 'start', sortable: false,value: 'shortName',},
          { text: 'Satış Fiyatı($)', value: 'price',sortable: false,align: 'right', },
          { text: 'En Yüksek', value: 'high',sortable: false,align: 'right', },
          { text: 'En Düşük', value: 'low',sortable: false,align: 'right', },
          { text: 'Kapanış', value: 'close',sortable: false,align: 'right',},
        ],
        data: [
          {
            shortName: 'BTC',
            price: 159,
            high: 1218766.5460,
            low: 24,
            close: 4.0,
          },
          {
            shortName: 'ETH',
            price: 237,
            high: 9.0,
            low: 37,
            close: 4300,
          }
        ],
        coins: {
          "BTC": "Bitcoin",
          "ETH": "Etherium",
        }
      }
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
      background: red !important;
}
td{
  color:white !important;
}
</style>
