using OpenQA.Selenium;
using Demoblaze.Auto.SetUp;
using Demoblaze.Auto.WebPages.Base;
using System;

namespace Demoblaze.Auto.WebPages {
    public class ProductPage : CommonPage {
        public ProductPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) { }


        // Elements
        private IWebElement buttonCart { get { return WebDriver.FindElementById("cartur"); } }
        private IWebElement buttonAddToCart { get { return WebDriver.FindElementByXPath("//a[text()='Add to cart']"); } }



        // Functions
        public ProductPage ClickOnAddToCart() {
            buttonAddToCart.Click();
            return this;
        }

        public ProductPage ClickOnCart() {
            buttonCart.Click();
            return this;
        }
    }
}