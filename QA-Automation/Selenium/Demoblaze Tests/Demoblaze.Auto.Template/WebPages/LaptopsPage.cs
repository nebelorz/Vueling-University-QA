using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using Demoblaze.Auto.SetUp;
using Demoblaze.Auto.WebPages.Base;
using Demoblaze.Auto.Common;
using NUnit.Framework;

namespace Demoblaze.Auto.WebPages {
    public class LaptopsPage : CommonPage {
        public LaptopsPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) { }

        string laptopName = "MacBook air";

        // Elements
        private IWebElement laptop { get { return WebDriver.FindElementByXPath("//a[text() = '" + laptopName + "']"); } }
        private IWebElement productPageTitle { get { return WebDriver.FindElementByXPath("//h2[text() = '" + laptopName + "']"); } }
        private By _productPageTitle { get { return By.XPath("//h2[text() = '" + laptopName + "']"); } }


        // Functions
        public LaptopsPage ClickOnLaptop() {
            laptop.Click();
            return this;
        }

        public LaptopsPage AssertProductName() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_productPageTitle));
            Assert.AreEqual(laptopName, productPageTitle.Text);
            return this;
        }
    }
}