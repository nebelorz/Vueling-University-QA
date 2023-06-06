using Template.Auto.WebPages;
using NUnit.Framework;

namespace Template.Auto.Tests {

    [TestFixture]
    internal class TestsDatepicker : TestSetCleanBase {

        [TestCase, Order(1)]
        public void PickFirstDayAvailable() {
            homePage = new HomePage(setUpWebDriver);

            homePage.AcceptCookies();
            //homePage.SelectOriginAndDestination("Barcelona", "Madrid");
            homePage.PickFirstDayAvailable("AgOsTO");

        }
    }
}