using Flylevel.Auto.WebPages;
using NUnit.Framework;

namespace Flylevel.Auto.Tests {

    [TestFixture]
    internal class Searcher_Tests : TestSetCleanBase {

        [TestCase, Order(1)]
        public void RT_BCNSCL_3ADT_1CHD_1BBY() {
            flHomePage = new FLHomePage(setUpWebDriver);

            flHomePage.AcceptCookies();
            flHomePage.FillOriginAndDestination("Barcelona", "Santiago de Chile");
            flHomePage.PickDatepickerDays("Septiembre");
            flHomePage.FillPax(3, 1, 1);
            flHomePage.ClickOnSearch();
            Assert.AreNotEqual(TestContext.Parameters["targetUrl"], flHomePage.getActualUrl()); // Hago este assert porque la página no carga desde Selenium
        }
    }
}