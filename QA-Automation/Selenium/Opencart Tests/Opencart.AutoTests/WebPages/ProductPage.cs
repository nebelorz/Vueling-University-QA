using NUnit.Framework;
using Opencart.Auto.Common;
using Opencart.Auto.SetUp;
using Opencart.Auto.WebPages.Base;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;

namespace Opencart.Auto.WebPages {

    public class ProductPage : CommonPage {

        public ProductPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement buttonAddToCart { get { return WebDriver.FindElementById("button-cart"); } }
        private IWebElement alertSuccess { get { return WebDriver.FindElementByCssSelector("div[class*='alert-success']"); } }

        private By _buttonAddToCart { get { return By.Id("button-cart"); } }

        // Functions
        public ProductPage AddProductToCart() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonAddToCart));
            buttonAddToCart.Click();
            Assert.IsTrue(alertSuccess.Displayed, "Alert 'added to cart' has not been shown.");
            return this;
        }
    }
}