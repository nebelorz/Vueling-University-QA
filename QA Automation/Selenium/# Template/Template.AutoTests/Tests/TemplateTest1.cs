using Template.Auto.WebPages;
using NUnit.Framework;

namespace Template.Auto.Tests {

    [TestFixture]
    internal class Template_Tests : TestSetCleanBase {

        [TestCase, Order(1)]
        public void Template_TestCase() {
            templatePage = new TemplatePage(setUpWebDriver);

            //templatePage.AcceptCookies();
            //templatePage.FillOriginAndDestination("Barcelona", "Santiago de Chile");
            //templatePage.PickDatepickerDays("Septiembre");
            //templatePage.FillPax(3, 1, 1);
            //templatePage.ClickOnSearch();
            //Assert.AreNotEqual(TestContext.Parameters["targetUrl"], templatePage.getActualUrl()); // Assert baseURL with the actual url
        }
    }
}