<template>
  <div class="home">
    <v-container>

        <v-col
        class="col-md-12">
          <!--<IzlemeSecenek />-->
        </v-col>
      <v-row>
        <v-col
        class="col-md-12">
          <v-row>
            <v-col class="pa-0"
            cols="12"
            md="6">
              <MainCryptoCurrency />
            </v-col>

            <v-col cols="12" md="6" class="pa-0"
            style="border:1px solid red;">
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

export default {
  name: "Home",
  components: {
    //IzlemeSecenek,
    MainCryptoCurrency,
    Golds
  }
};
</script>
