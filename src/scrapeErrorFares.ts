let latestErrorFare = {
  deal: null,
  link: null
};

const ScrapeErrorFares = async (x: any, bot: any) => {
  const [response] = await x(process.env.WEB_URL, "article", [
    {
      deal: "h2 a",
      link: "h2 a@href"
    }
  ]);

  if (
    response.deal === latestErrorFare.deal &&
    response.link === latestErrorFare.link
  ) {
    console.log("latest error fare hasn't changed");
    return;
  }

  latestErrorFare = {
    deal: response.deal,
    link: response.link
  };
  bot.telegram.sendMessage(
    process.env.CHAT_ID,
    `New Flight Deal! ✈️ - ${latestErrorFare.deal} - click here: ${
      latestErrorFare.link
    }`
  );
};

module.exports = { GetErrorFares: ScrapeErrorFares };
