using Vueling.Auto.WebPages;
using NUnit.Framework;

namespace Vueling.Auto.Tests {

    [TestFixture]
    internal class E2E_Tests : TestSetCleanBase {

        [TestCase, Order(1)]
        public void RT_1ADT_1BBY_BASIC() {
            homePage = new HomePage(setUpWebDriver);
            STVpage = new STVPage(setUpWebDriver);
            passengersPage = new PassengersPage(setUpWebDriver);
            seatmapPage = new SeatmapPage(setUpWebDriver);

            homePage.AcceptCookies();
            homePage.SelectEnglishLanguage();
            //homePage.SelectCurrencyEUR() // La web no permite cambiar divisa
            homePage.SelectOriginAndDestination("Barcelona", "Madrid");
            homePage.PickDayFromFirstAvailable(4);
            homePage.PickDayFromFirstAvailable(3);
            homePage.SelectInfants(1);
            homePage.SubmitSearch();
            Assert.IsTrue(STVpage.GetCurrentUrl().Contains("ScheduleSelectNew"), "Didn't land on STV page.");

            STVpage.SelectFlights(1, 4);
            STVpage.SelectFare("basic");
            STVpage.SubmitSTV();
            Assert.IsTrue(STVpage.GetCurrentUrl().Contains("PassengersInformation"), "Didn't land on Passengers page.");

            passengersPage.FillPassengersForm();
            passengersPage.FillContactPersonForm();
            passengersPage.SubmitPassengers();

            Assert.IsTrue(seatmapPage.GetCurrentUrl().Contains("SeatService"), "Didn't land on SeatMap page.");
            Assert.IsTrue(seatmapPage.IsElementDisplayed(seatmapPage.getSeatmap()));
        }
    }
}