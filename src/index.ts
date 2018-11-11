const Xray = require("x-ray");
const Telegraf = require("telegraf");
const Sleep = require("await-sleep");

const { GetErrorFares } = require("./scrapeErrorFares");
const { GetFlightPrices } = require("./scrapeFlightPrices");

const x = Xray();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.startPolling();

bot.hears("hello", (ctx: any) => ctx.reply("Hey there! 👋🏼 I am still working!"));

const Crawl = async () => {
  console.log("crawling...");
  GetErrorFares(x, bot);
  GetFlightPrices(x, bot);
  await Sleep(60000);
  Crawl();
};

Crawl();
