import axios from "axios";

export const core = "https://min-api.cryptocompare.com";
const coinsVolume6Hours =
  "/data/exchange/symbol/histohour?fsym=OMG&tsym=RUB&e=Binance&limit=6&api_key=d91b56941a71fb8070ff270b2417a0cd8848ab1da6b6da47d4b870eeee37de84";

export const fetchCurrencies = async () =>
  await axios.get(
    `${core}/data/pricemultifull?fsyms=OMG&tsyms=RUB&api_key=d91b56941a71fb8070ff270b2417a0cd8848ab1da6b6da47d4b870eeee37de84`
  );

export const fetchCoinVolume = async () =>
  await axios.get(`${core}${coinsVolume6Hours}`);
