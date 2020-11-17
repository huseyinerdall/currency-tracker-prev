<template>
  <div class="home">
    <v-container>
          <CurrencyConverter />
          <CurrencyMatrixTable />
      <v-row>
        <v-col
        class="col-md-12">
          <v-row>
            <v-col
            cols="12"
            md="6">
              <MainCryptoCurrency />
            </v-col>

            <v-col cols="12" md="6">
              <Golds />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src
/*import IzlemeSecenek from "@/components/IzlemeSecenek.vue";*/
import MainCryptoCurrency from "@/components/MainCryptoCurrency.vue";
import Golds from "@/components/Golds.vue";
import CurrencyConverter from "@/components/CurrencyConverter.vue";
import CurrencyMatrixTable from "@/components/CurrencyMatrixTable.vue";

export default {
  name: "Home",
  components: {
    //IzlemeSecenek,
    MainCryptoCurrency,
    Golds,
    CurrencyConverter,
    CurrencyMatrixTable,
  }
};
</script>
