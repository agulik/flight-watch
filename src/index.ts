const Xray = require("x-ray");
const Telegraf = require("telegraf");

const x = Xray();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.startPolling();

const crawl = async () => {
  console.log("crawling...");
  const [response] = await x(process.env.WEB_URL, "article", [
    {
      deal: "h2 a",
      link: "h2 a@href"
    }
  ]);
  bot.telegram.sendMessage(
    process.env.CHAT_ID,
    `New Flight Deal! ✈️ - ${response.deal} - click here: ${response.link}`
  );
  console.log(response);
};

crawl();
