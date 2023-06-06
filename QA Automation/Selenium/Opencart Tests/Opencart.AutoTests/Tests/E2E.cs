using Opencart.Auto.WebPages;
using NUnit.Framework;
using System;

namespace Opencart.Auto.Tests {

    [TestFixture]
    internal class Opencart_Tests : TestSetCleanBase {

        [TestCase, Order(1)]
        public void RegisterNewUser() {
            homePage = new HomePage(setUpWebDriver);
            registerPage = new RegisterPage(setUpWebDriver);

            homePage.GoToRegisterPage();
            registerPage.FillForm();
            Assert.IsTrue(homePage.GetCurrentUrl().Contains("account/success"), "User cannot be created.");
        }

        [TestCase]
        public void LoginWithExistingUser() {
            homePage = new HomePage(setUpWebDriver);
            registerPage = new RegisterPage(setUpWebDriver);
            loginPage = new LoginPage(setUpWebDriver);

            homePage.GoToLoginPage();
            loginPage.FillLogin(registerPage.getEmail(), registerPage.getPassword());
            Assert.IsTrue(homePage.GetCurrentUrl().Contains("account/account"), "User cannot log in.");
        }

        [TestCase]
        public void EditExistingAccount() {
            homePage = new HomePage(setUpWebDriver);
            registerPage = new RegisterPage(setUpWebDriver);
            loginPage = new LoginPage(setUpWebDriver);
            myAccountPage = new MyAccountPage(setUpWebDriver);
            editUserPage = new EditUserPage(setUpWebDriver);

            homePage.GoToLoginPage();
            loginPage.FillLogin(registerPage.getEmail(), registerPage.getPassword());
            Assert.IsTrue(homePage.GetCurrentUrl().Contains("account/account"), "User cannot log in.");
            myAccountPage.GoToEditAccount();
            editUserPage.FillForm();
            Assert.IsTrue(myAccountPage.getAlertSucess().Displayed, "User cannot edit his information.");
        }

        [TestCase]
        public void BuyAProduct() {
            homePage = new HomePage(setUpWebDriver);
            registerPage = new RegisterPage(setUpWebDriver);
            loginPage = new LoginPage(setUpWebDriver);
            desktopsPage = new DesktopsPage(setUpWebDriver);
            productPage = new ProductPage(setUpWebDriver);
            shoppingCartPage = new ShoppingCartPage(setUpWebDriver);
            checkoutPage = new CheckoutPage(setUpWebDriver);

            homePage.GoToLoginPage();
            loginPage.FillLogin(registerPage.getEmail(), registerPage.getPassword());
            homePage.GoToSectionDesktops();
            desktopsPage.FindByProductName("MacBook Air");
            productPage.AddProductToCart();
            homePage.GoToShoppingCartPage();
            shoppingCartPage.ClickOnCheckout();
            checkoutPage.FillBillingDetails();
            checkoutPage.FillDeliveryDetails();
            checkoutPage.FillDeliveryMethod();
            checkoutPage.FillPaymentMethod();
            checkoutPage.SubmitOrder();
            Assert.IsTrue(homePage.GetCurrentUrl().Contains("checkout/success"), "Order hasn't been placed.");
        }

        [TestCase]
        public void SendFormContactUs() {
            homePage = new HomePage(setUpWebDriver);
            contactUsPage = new ContactUsPage(setUpWebDriver);

            homePage.GoToContactUs();
            contactUsPage.FillForm();
            Assert.IsTrue(homePage.GetCurrentUrl().Contains("contact/success"), "Contact Us form hasn't been sent.");
        }

        [TestCase]
        public void ReturnProduct() {
            homePage = new HomePage(setUpWebDriver);
            returnsPage = new ReturnsPage(setUpWebDriver);

            homePage.GoToReturns();
            returnsPage.FillForm();
            Assert.IsTrue(homePage.GetCurrentUrl().Contains("return/success"), "Return form hasn't been sent.");
        }

        [TestCase]
        public void TestCheckSponsor() {
            homePage = new HomePage(setUpWebDriver);
            string sponsorName = "Nintendo";

            Assert.IsTrue(homePage.isInSlider(sponsorName), $"{sponsorName} is not in the slider.");
        }
    }
}