<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-default-footer
    class="indigo"
  >
    <template v-slot:item.name="{ item }">
      <h3 style="font-weight:400;" :class="item.name">BTC</h3>
      <h4 style="font-weight:400;">Bitcoin</h4>
    </template>
  </v-data-table>
</template>


<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Döviz Adı',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Satış Fiyatı($)', value: 'calories',sortable: false },
          { text: 'En Yüksek', value: 'fat',sortable: false, },
          { text: 'En Düşük', value: 'carbs',sortable: false, },
          { text: 'Kapanış', value: 'protein',sortable: false,},
        ],
        desserts: [
          {
            name: 'BTC',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
          },
        ],
      }
    },
    methods: {
      getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    },
  }
</script>


<style scoped>
.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){
      background: red !important;
}
</style>
