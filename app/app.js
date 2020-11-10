const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const axios = require('axios');
var fs = require('fs');
var parseString = require('xml2js').parseString;
var utils = require('./utils');

//static long data
const coins = require('./static/coins.json');

const goldXmlBodyStr = fs.readFileSync('./static/altinkaynakGold.xml', 'utf8');
;
const currencyXmlBodyStr = fs.readFileSync('./static/altinkaynakCurrency.xml', 'utf8');
;

const app = express();


var config = {
    headers: {
        'Host': 'data.altinkaynak.com',
        'Content-Type': 'application/soap+xml; charset=utf-8',
        //'Content-Length': 100,
    }
};


app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

let dolarAlis = 0;
let dolarSatis = 0;
let altinAlis = 0;
let altinSatis = 0;


/*setInterval(()=>{

  axios.post('http://data.altinkaynak.com/DataService.asmx', currencyXmlBodyStr, config).then(res => {
      xml = res.data.toString();
      parseString(xml, function (err, result) {
          parseString(result['soap:Envelope']['soap:Body'][0]['GetCurrencyResponse'][0]['GetCurrencyResult'][0],function(err, result2){
              dolarAlis = result2['Kurlar']['Kur'][0]['Alis'][0]
              dolarSatis = result2['Kurlar']['Kur'][0]['Satis'][0]
          })

      });
  }).catch(err => console.log(err));

  axios.post('http://data.altinkaynak.com/DataService.asmx', goldXmlBodyStr, config).then(res => {
      xml = res.data.toString();
      parseString(xml, function (err, result) {

          parseString(result['soap:Envelope']['soap:Body'][0]['GetGoldResponse'][0]['GetGoldResult'][0],function(err, result2){
              console.log(result2["Kurlar"]["Kur"]);
          })

      });
  }).catch(err => console.log(err));

},1000)*/

app.get('/golds', (req, res) => {
    let factRes = [];
    let temp = {};
    axios.post('http://data.altinkaynak.com/DataService.asmx', goldXmlBodyStr, config)
        .then(response => {
            xml = response.data.toString();
            parseString(xml, function (err, result) {

                parseString(result['soap:Envelope']['soap:Body'][0]['GetGoldResponse'][0]['GetGoldResult'][0], function (err, result) {
                    result = result["Kurlar"]["Kur"];
                    for (let i = 0; i < result.length; i++) {
                        temp = {};
                        temp["type"] = result[i]["Aciklama"][0]
                        temp["sell"] = result[i]["Alis"]
                        temp["buy"] = result[i]["Satis"]
                        temp["updated"] = result[i]["GuncellenmeZamani"]
                        factRes.push(temp);
                    }
                    res.json(factRes);
                })

            });
        }).catch(err => console.log(err));
})

app.get('/currencies', (req, res) => {
    axios.post('http://data.altinkaynak.com/DataService.asmx', currencyXmlBodyStr, config)
        .then(response => {
            xml = response.data.toString();
            parseString(xml, function (err, result) {

                parseString(result['soap:Envelope']['soap:Body'][0]['GetCurrencyResponse'][0]['GetCurrencyResult'][0], function (err, result2) {
                    res.json(result2["Kurlar"]["Kur"]);
                })

            });
        }).catch(err => console.log(err));
})

app.get('/coin/:coinName', (req, res) => {
    let coinID = utils.search(req.params["coinName"], coins)["id"];
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinID}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        .then((response) => {
            res.json(response.data);
        })
})

app.get('/coins', (req, res) => {
    let factRes = [];
    let temp = {};
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
        .then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                temp = {};
                temp["name"] = response.data[i]["name"];
                temp["shortName"] = response.data[i]["symbol"];
                temp["price"] = response.data[i]["current_price"];
                temp["high"] = response.data[i]["high_24h"];
                temp["low"] = response.data[i]["low_24h"];
                temp["close"] = parseFloat(response.data[i]["current_price"]) + parseFloat(response.data[i]["price_change_percentage_24h"]); //close price
                factRes.push(temp);
            }
            res.json(factRes);
        })
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
