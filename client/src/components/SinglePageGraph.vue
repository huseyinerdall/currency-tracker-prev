<template>
  <v-container class="ma-0 pa-0">
    <v-row>
      <h2 class="white--text font-weight-light ml-10">
        <v-avatar size="32" class="mb-2">
          <img
              :src="coinImage"
              :alt="$route.params.coin"
          >
        </v-avatar>
        {{ $route.params.coin }}
      </h2>
      <h2 class="white--text font-weight-light ml-10" :class="[state > 0 ? 'price-up' : 'price-down']">
        {{ current_price }} $

      </h2>
      <h3 class="ml-4 mt-2 white--text" :class="[price_change_24h>=0 ? 'green--text' : 'red--text']">
        {{ price_change_24h }}
        <v-icon color="red" v-if="price_change_24h < 0">mdi-trending-down</v-icon>
        <v-icon color="green" v-else-if="price_change_24h > 0">mdi-trending-up</v-icon>
        <v-icon color="gray" v-else-if="price_change_24h == 0">mdi-trending-neutral</v-icon>
      </h3>
    </v-row>

    <div id="chart">
      <apexchart ref="realtimeChart" class="ma-0 pa-0" type="area" height="350" :options="chartOptions"
                 :series="series"></apexchart>
    </div>
  </v-container>
</template>

<script>
import axios from 'axios';
import io from "socket.io-client";
//import dump from '../assets/dump.js'

export default {
  name: "SinglePageGraph",
  data: (app) => ({
    state: 0,
    coinImage: '',
    high: '',
    low: '',
    current_price: '',
    last_updated: '',
    price_change_24h: '',
    price_change_percentage_24h: '',
    series: [{
      name: app.$route.params.coin,
      data: [30, 40, 45, 30, 40, 45, 30, 40, 45, 30, 40, 45, 30, 40, 45]
    }],
    chartOptions: {
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      stroke: {
        width: 1
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
      },
      title: {
        align: 'left'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff",
          }
        },
        title: {
          text: 'Fiyat($)',
          style: {
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 600
          }
        },
        axisTicks: {
          color: '#ffffff'
        },
        axisBorder: {
          color: '#ffffff'
        }
      },
      xaxis: {
        //type: 'datetime',
        labels: {
          style: {
            colors: "#fff",
          }
        },
        categories: ['-', '-', '-'],
        axisTicks: {
          color: '#ffffff'
        },
        axisBorder: {
          color: '#ffffff'
        }
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val + " $"
          }
        },
      }
    },
  }),
  methods:{
    sleep: function(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    }
  },
  created() {
    let app = this;
    for (let i = 0; i==i ; i++) {
        axios.get(`http://${this.$store.state.addr}:${this.$store.state.port}/coin/${this.$route.params.coin}`)
            .then(response => {
              this.coinImage = response.data[0].image;
              this.high = response.data[0].high_24h;
              this.low = response.data[0].low_24h;
              this.current_price = response.data[0].current_price;
              this.last_updated = response.data[0].last_updated;
              this.price_change_24h = response.data[0].price_change_24h;
              this.price_change_percentage_24h = response.data[0].price_change_percentage_24h;
            })
      
    }

    let temp;
    var socket = io.connect(`${this.$store.state.addr}:${this.$store.state.port}`);
    socket.on(app.$route.params.coin, fetchedData => {
      if (fetchedData[fetchedData.length - 1]["Fiyat"] != temp ||!temp) {

        //app.graphData = fetchedData
        let tempDates = [];
        let time;
        let tempValues = [];
        for (let i = 0; i < fetchedData.length; i++) {
          time = new Date(fetchedData[i]["createdAt"]);
          tempDates.push(time.getUTCHours() + 3 + ":" +
              time.getUTCMinutes() + ":" + time.getUTCSeconds());
          tempValues.push(fetchedData[i]["Fiyat"])
        }
        this.series = [{
          data: tempValues
        }]
        this.chartOptions = {
          xaxis: {
            categories: tempDates
          }
        }
        temp = fetchedData[fetchedData.length - 1]["Fiyat"];
      }
    })
  },
  watch: {
    current_price(newValue, oldValue) {
      console.log(newValue + "---" + oldValue + "degişti")
      if (+newValue < +oldValue) {
        this.state = -1;
      } else {
        this.state = 1;
      }
    }
  }
};
</script>

<style scoped>
@keyframes price-up {
  0% {
    background-color: darkgreen;
  }
  100% {
    background-color: unset;
  }
}

@keyframes price-down {
  0% {
    background-color: red;
  }
  100% {
    background-color: unset;
  }
}

.price-up {
  -webkit-animation: 1.5s alternate price-up;
  animation: 1.5s alternate price-up;
}

.price-down {
  -webkit-animation: 1.5s alternate price-down;
  animation: 1.5s alternate price-down;
}
</style>