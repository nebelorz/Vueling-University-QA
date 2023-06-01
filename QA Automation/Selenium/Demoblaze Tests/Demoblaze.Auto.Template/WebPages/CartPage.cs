using OpenQA.Selenium;
using Demoblaze.Auto.SetUp;
using Demoblaze.Auto.WebPages.Base;
using Demoblaze.Auto.Common;
using OpenQA.Selenium.Support.UI;
using System;
using NUnit.Framework;
using System.Threading;

namespace Demoblaze.Auto.WebPages {
    public class CartPage : CommonPage {
        public CartPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) { }

        string laptopName = "MacBook air";
        string monitorName = "ASUS Full HD";

        // Elements
        private IWebElement buttonPlaceOrder { get { return WebDriver.FindElementByCssSelector("button[data-target='#orderModal']"); } }

        private IWebElement formButtonClose { get { return WebDriver.FindElementByCssSelector("button[data-dismiss='modal']"); } }
        private IWebElement formButtonPurchase { get { return WebDriver.FindElementByXPath("//button[text() = 'Purchase']"); } }
        private IWebElement formTotalAmount { get { return WebDriver.FindElementById("totalm"); } }
        private IWebElement formNameField { get { return WebDriver.FindElementById("name"); } }
        private IWebElement formCountryField { get { return WebDriver.FindElementById("country"); } }
        private IWebElement formCityField { get { return WebDriver.FindElementById("city"); } }
        private IWebElement formCreditCardField { get { return WebDriver.FindElementById("card"); } }
        private IWebElement formMonthField { get { return WebDriver.FindElementById("month"); } }
        private IWebElement formYearField { get { return WebDriver.FindElementById("year"); } }

        private IWebElement orderPlacedImage { get { return WebDriver.FindElementByCssSelector(".sa-placeholder"); } }
        private IWebElement orderPlacedText { get { return WebDriver.FindElementByXPath("//h2[text() = 'Thank you for your purchase!']"); } }
        private IWebElement orderPlacedButtonOk { get { return WebDriver.FindElementByXPath("//button[text() = 'OK']"); } }

        private IWebElement tableBody { get { return WebDriver.FindElementByTagName("tbody"); } }

        private By _buttonPurchase { get { return By.XPath("//button[text() = 'Purchase']"); } }
        private By _imageOrderPlaced { get { return By.CssSelector(".sa-placeholder"); } }
        private By _tbody { get { return By.TagName("tbody"); } }


        // Functions
        public CartPage PlaceOrder() {
            buttonPlaceOrder.Click();
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonPurchase));
            formNameField.SendKeys(Helpers.GenerateFirstName(6));
            formCountryField.SendKeys(Helpers.GetRandomString(10));
            formCityField.SendKeys(Helpers.GetRandomString(8));
            formCreditCardField.SendKeys("0450456712340689");
            formMonthField.SendKeys("05");
            formYearField.SendKeys("2023");
            formButtonPurchase.Click();
            return this;
        }

        public CartPage AssertOrder() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_imageOrderPlaced));
            Assert.IsTrue(orderPlacedImage.Displayed, "La imagen de compra no se muestra");
            Assert.AreEqual("Thank you for your purchase!", orderPlacedText.Text);
            orderPlacedButtonOk.Click();
            return this;
        }

        public CartPage AssertNumberOfItems(int expectedNumber) {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_tbody));
            Assert.IsTrue(tableBody.Displayed, "La tabla no se muestra");
            Thread.Sleep(1000); // Hay que esperar a que carguen todas las filas igualmente (??)

            int rowsNumber = tableBody.FindElements(By.TagName("tr")).Count;
            Assert.AreEqual(rowsNumber, expectedNumber);
            return this;
        }

        public CartPage FindItemOnCart(string item) {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_tbody));
            Assert.IsTrue(tableBody.Displayed, "La tabla no se muestra");
            Thread.Sleep(1000); // Hay que esperar a que carguen todas las filas igualmente (??)

            IWebElement itemLocator = WebDriver.FindElementByXPath("//tr[@class='success']/td[text()='" + item + "']/../td/a");
            Assert.IsTrue(itemLocator.Displayed, "El producto no se encuentra en el carro");
            return this;
        }

        public CartPage DeleteItemFromCart(string item) {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_tbody));
            Assert.IsTrue(tableBody.Displayed, "La tabla no se muestra");
            Thread.Sleep(1000); // Hay que esperar a que carguen todas las filas igualmente (??)

            // Click on delete
            IWebElement itemLocator = WebDriver.FindElementByXPath("//tr[@class='success']/td[text()='" + item + "']/../td/a");
            itemLocator.Click();

            // Assert item is not on cart
            // No se que assertion hacer para comprobar que el producto ya no existe en el DOM, me salta error por no encontrar el locator :S

            return this;
        }
    }
}