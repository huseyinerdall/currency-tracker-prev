<template>
  <v-card style="border: 1px solid #444767;border-radius:0;background-color:rgba(0,0,0,.3);color:#fff;" class="mb-6">
    <v-row>
      <v-spacer></v-spacer>
      <v-col sm="10" lg="1">
        <v-text-field
            v-model="amount"
            style="width:40px;"
            color="white"
        ></v-text-field>
      </v-col>
      <v-col sm="10" lg="1">
        <v-select
            :items="items"
            item-text="symbol"
            color="white"
        ></v-select>
      </v-col>
      <v-col sm="2" lg="1">
        <v-icon size="40" color="yellow darken-1" class="mt-1">
          mdi-arrow-left-right
        </v-icon>
      </v-col>
      <v-col sm="10" lg="1">
        <v-text-field
            v-model="result"
            color="white"
            style="width:40px;"
        ></v-text-field>
      </v-col>
      <v-col sm="10" lg="1">
        <v-select
            :items="items"
            item-text="symbol"
            color="white"
        ></v-select>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-card>
</template>

<script>
import axios from 'axios';
import currencies from '../assets/currencies.js';
export default {
  name: "CurrencyConverter",
  data: () => ({
    isLoading: false,
    items: currencies,
    model1: null,
    model2: null,
    search: null,
    tab: null,
    source: '',
    target: '',
    amount: '',
    resulted: false,
    result: '',
  }),
  methods: {
    convert(){
      if(!(this.model1 && this.model2 && this.amount))return;
      axios.post(`http://${this.$store.state.addr}:${this.$store.state.port}/converter`,{
        source: this.model1,
        target: this.model2,
        amount: this.amount,
      })
      .then(response => {
        this.resulted = true;
        console.log(response.data.result)
        this.result = response.data.result;
      })
    }
  }
};
</script>
<style>
.v-text-field__details{
  display: none;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before{
  border-color: white !important;
}
.theme--light.v-icon{
  color:white !important;
}
.theme--light.v-input input, .theme--light.v-input textarea,
.theme--light.v-select .v-select__selection--comma{
  text-align: center;
  font-size: 20px;
  color:white;
}
</style>