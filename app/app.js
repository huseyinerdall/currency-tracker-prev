const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const axios = require('axios');
var parseString = require('xml2js').parseString;

const app = express();

var currencyXmlBodyStr = `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Header>
    <AuthHeader xmlns="http://data.altinkaynak.com/">
      <Username>AltinkaynakWebServis</Username>
      <Password>AltinkaynakWebServis</Password>
    </AuthHeader>
  </soap12:Header>
  <soap12:Body>
    <GetCurrency xmlns="http://data.altinkaynak.com/" />
  </soap12:Body>
</soap12:Envelope>`;

var goldXmlBodyStr = `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Header>
    <AuthHeader xmlns="http://data.altinkaynak.com/">
      <Username>AltinkaynakWebServis</Username>
      <Password>AltinkaynakWebServis</Password>
    </AuthHeader>
  </soap12:Header>
  <soap12:Body>
    <GetGold xmlns="http://data.altinkaynak.com/" />
  </soap12:Body>
</soap12:Envelope>`;

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


setInterval(()=>{

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
              altinAlis = result2['Kurlar']['Kur'][0]['Alis'][0]
              altinSatis = result2['Kurlar']['Kur'][0]['Satis'][0]
          })

      });
  }).catch(err => console.log(err));

},1000)

app.get('/', (req, res) => {

    res.json([
        {
          'isim': 'dolar',
          'alis': +dolarAlis || 0,
          'satis': +dolarSatis || 0
        },
        {
          'isim': 'altin',
          'alis': +altinAlis || 0,
          'satis': +altinSatis || 0
        }
    ]);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
