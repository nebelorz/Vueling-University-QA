using NUnit.Framework;
using Template.Auto.WebPages;

namespace Vueling.AutoTests {

    [TestFixture]
    internal class TestsRegister : TestSetCleanBase {

        [TestCase, Order(1)]
        public void RegisterNewUser() {
            homePage = new HomePage(setUpWebDriver);
            registerPage = new RegisterPage(setUpWebDriver);

            homePage.AcceptCookies();
            homePage.GoToRegisterPage();
            registerPage.FillForm();
            Assert.AreEqual(homePage.GetCurrentUrl(), "https://www.vueling.com/es");
        }
    }
}