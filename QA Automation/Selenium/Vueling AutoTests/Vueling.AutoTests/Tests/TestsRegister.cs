using Template.Auto.WebPages;
using NUnit.Framework;
using OpenQA.Selenium;

namespace Template.Auto.Tests {

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