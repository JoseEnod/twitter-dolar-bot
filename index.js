const bot = require('./src/twitterConnection');
const getDolar = require('./src/apiValue');

async function init() {
  const dolarNow = await getDolar(); //Valor do dolar agora

  console.log(dolarNow);

  bot.botInit(dolarNow); //Inicia o bot que Tweeta
}

setInterval(() => {
  init();
}, 1 * 1200 * 1000); //Tempo de verifição do Dolar (em segundos)