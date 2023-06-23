using NUnit.Framework;
using Template.Auto.WebPages;

namespace Vueling.AutoTests {

    [TestFixture]
    internal class TestsSearcher : TestSetCleanBase {

        [TestCase, Order(1)]
        public void OW_1ADT_1BBY() {
            homePage = new HomePage(setUpWebDriver);

            homePage.AcceptCookies();
            homePage.SelectOneWay();
            homePage.SelectOriginAndDestination("Barcelona", "Madrid");
            homePage.PickAvailableDayFromToday(4);
            homePage.SelectInfants(1);
            homePage.SubmitClick();
        }
    }
}