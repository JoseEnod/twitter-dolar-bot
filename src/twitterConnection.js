const Twit = require('twit');

require('dotenv').config();

// Conexão com a api do Twitter
const t = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

console.log('The bot is OK...');
let lastValue = 0;

function botInit(value) {

  const nuns = value.split('');
  nuns.length = 4;
  let valueNow = nuns.join('').replace('.', ',');

  if (valueNow !== lastValue) { //Verifica se o valor do dolar mudou
    if (valueNow < lastValue) {
      console.log(`O dólar abaixou para R$${valueNow} :)`);

      t.post('statuses/update', {
        status: `O dólar abaixou para R$${valueNow} :)`,
      }, function (err, data, response) {
        console.log(`Novo valor tweetado: R$${valueNow}`);
      });
    } else {
      console.log(`O dólar aumentou para R$${valueNow} :(`);

      t.post('statuses/update', {
        status: `O dólar aumentou para R$${valueNow} :(`,
      }, function (err, data, response) {
        console.log(`Novo valor tweetado: R$${valueNow}`);
      });
    }

    lastValue = valueNow;
  }

  return;
}

module.exports = {
  botInit
}