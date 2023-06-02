using NUnit.Framework;
using Demoblaze.Auto.WebPages;

namespace Demoblaze.Auto.Tests {
    [TestFixture]
    class FlujosDeCompra : TestSetCleanBase {
        private string productName = "MacBook air";

        [TestCase, Order(1)]
        public void BuyLaptop() {
            homePage = new HomePage(setUpWebDriver);
            loginPage = new LoginPage(setUpWebDriver);
            laptopsPage = new LaptopsPage(setUpWebDriver);
            productPage = new ProductPage(setUpWebDriver);
            cartPage = new CartPage(setUpWebDriver);

            homePage.ClickOnLogin();
            loginPage.FillFormAndLogin();
            loginPage.AssertLoggedIn();
            homePage.ClickOnCategoryLaptops();
            laptopsPage.ClickOnLaptop();
            laptopsPage.AssertProductName();
            productPage.ClickOnAddToCart();
            productPage.ClickOnCart();
            cartPage.PlaceOrder();
            cartPage.AssertOrder();
        }

        [TestCase, Order(2)]
        public void BuyPhone() {
            homePage = new HomePage(setUpWebDriver);
            loginPage = new LoginPage(setUpWebDriver);
            phonesPage = new PhonesPage(setUpWebDriver);
            productPage = new ProductPage(setUpWebDriver);
            cartPage = new CartPage(setUpWebDriver);

            homePage.ClickOnLogin();
            loginPage.FillFormAndLogin();
            loginPage.AssertLoggedIn();
            homePage.ClickOnCategoryPhones();
            phonesPage.ClickOnPhone();
            phonesPage.AssertProductName();
            productPage.ClickOnAddToCart();
            productPage.ClickOnCart();
            cartPage.PlaceOrder();
            cartPage.AssertOrder();
        }

        [TestCase, Order(3)]
        public void BuyMonitor() {
            homePage = new HomePage(setUpWebDriver);
            loginPage = new LoginPage(setUpWebDriver);
            monitorsPage = new MonitorsPage(setUpWebDriver);
            productPage = new ProductPage(setUpWebDriver);
            cartPage = new CartPage(setUpWebDriver);

            homePage.ClickOnLogin();
            loginPage.FillFormAndLogin();
            loginPage.AssertLoggedIn();
            homePage.ClickOnCategoryMonitors();
            monitorsPage.ClickOnMonitor();
            monitorsPage.AssertProductName();
            productPage.ClickOnAddToCart();
            productPage.ClickOnCart();
            cartPage.PlaceOrder();
            cartPage.AssertOrder();
        }

        [TestCase, Order(4)]
        public void TwoProductsAddedOnCart() {
            homePage = new HomePage(setUpWebDriver);
            loginPage = new LoginPage(setUpWebDriver);
            monitorsPage = new MonitorsPage(setUpWebDriver);
            laptopsPage = new LaptopsPage(setUpWebDriver);
            productPage = new ProductPage(setUpWebDriver);
            cartPage = new CartPage(setUpWebDriver);

            homePage.ClickOnLogin();
            loginPage.FillFormAndLogin();
            loginPage.AssertLoggedIn();
            homePage.ClickOnCategoryMonitors();
            monitorsPage.ClickOnMonitor();
            monitorsPage.AssertProductName();
            productPage.ClickOnAddToCart();
            homePage.ClickOnHome();
            homePage.ClickOnCategoryLaptops();
            laptopsPage.ClickOnLaptop();
            laptopsPage.AssertProductName();
            productPage.ClickOnAddToCart();
            homePage.ClickOnHome();
            productPage.ClickOnCart();
            cartPage.AssertItemIsOnCart(productName);
        }

        [TestCase, Order(5)]
        public void DeleteItemFromCart() {
            homePage = new HomePage(setUpWebDriver);
            loginPage = new LoginPage(setUpWebDriver);
            monitorsPage = new MonitorsPage(setUpWebDriver);
            laptopsPage = new LaptopsPage(setUpWebDriver);
            productPage = new ProductPage(setUpWebDriver);
            cartPage = new CartPage(setUpWebDriver);

            homePage.ClickOnLogin();
            loginPage.FillFormAndLogin();
            loginPage.AssertLoggedIn();
            homePage.ClickOnCategoryMonitors();
            monitorsPage.ClickOnMonitor();
            monitorsPage.AssertProductName();
            productPage.ClickOnAddToCart();
            homePage.ClickOnHome();
            homePage.ClickOnCategoryLaptops();
            laptopsPage.ClickOnLaptop();
            laptopsPage.AssertProductName();
            productPage.ClickOnAddToCart();
            homePage.ClickOnHome();
            productPage.ClickOnCart();
            cartPage.DeleteItemFromCart(productName);
            //cartPage.FindItemOnCart(productName);
        }
    }
}