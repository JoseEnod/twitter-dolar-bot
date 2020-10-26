const axios = require('axios');

async function getDolar() {

  const response = await axios.get('https://economia.awesomeapi.com.br/json/all/USD-BRL');
  const dolar = response.data.USD.high;

  return dolar;
}

module.exports = getDolar;