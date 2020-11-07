<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col
        class="col-6 col-sm-12">
          <IzlemeSecenek />
          <MainDoviz />
        </v-col>
        <v-col
        class="col-6 col-sm-12">
          <v-row>
            <v-col
            class="col-6 col-sm-6"
            style="border:1px solid red;">
              <MainCryptoCurrency />
            </v-col>

            <v-col
            class="col-6 col-sm-6"
            style="border:1px solid red;">
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src
import MainDoviz from "@/components/MainDoviz.vue";
import IzlemeSecenek from "@/components/IzlemeSecenek.vue";
import MainCryptoCurrency from "@/components/MainCryptoCurrency.vue";

export default {
  name: "Home",
  components: {
    MainDoviz,
    IzlemeSecenek,
    MainCryptoCurrency
  }
};
</script>
