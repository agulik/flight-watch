let currentCheapestPrice = {
  deal: null,
  link: null
};

const ScrapeFlightPrices = async (x: any, bot: any) => {
  console.log("scraping flight prices...");
  const response = await x(process.env.WEB_URL_FLIGHT_PRICES, "#library", [
    {
      price: Sleep(1000).then(".ResultList-results div")
      // itinerary: {
      //   destination: ".JourneyTrips .TripPlace to .name",
      //   leaving: ".TripInfoField _dateField .TripInfoField-date time",
      //   returning: ".TripInfoField _dateField .TripInfoField-date time"
      // }
    }
  ]);
  console.log(response);

  // if (
  //   response.deal === latestErrorFare.deal &&
  //   response.link === latestErrorFare.link
  // ) {
  //   console.log("latest error fare hasn't changed");
  //   return;
  // }

  // latestErrorFare = {
  //   deal: response.deal,
  //   link: response.link
  // };
  // bot.telegram.sendMessage(
  //   process.env.CHAT_ID,
  //   `New Flight Deal! ✈️ - ${latestErrorFare.deal} - click here: ${
  //     latestErrorFare.link
  //   }`
  // );
};

module.exports = { GetFlightPrices: ScrapeFlightPrices };
