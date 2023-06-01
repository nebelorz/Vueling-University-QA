using OpenQA.Selenium;
using Demoblaze.Auto.SetUp;
using Demoblaze.Auto.WebPages.Base;
using Demoblaze.Auto.Common;
using NUnit.Framework;
using OpenQA.Selenium.Support.UI;
using System;

namespace Demoblaze.Auto.WebPages {
    public class PhonesPage : CommonPage {
        public PhonesPage (ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) { }

        string phoneName = "Nexus 6";


        // Elements
        private IWebElement phone { get { return WebDriver.FindElementByXPath("//a[text() = '" + phoneName + "']"); } }
        private IWebElement productPageTitle { get { return WebDriver.FindElementByXPath("//h2[text() = '" + phoneName + "']"); } }
        private By _productPageTitle { get { return By.XPath("//h2[text() = '" + phoneName + "']"); } }


        // Functions
        public PhonesPage ClickOnPhone() {
            phone.Click();
            return this;
        }

        public PhonesPage AssertProductName() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_productPageTitle));
            Assert.AreEqual(phoneName, productPageTitle.Text);
            return this;
        }
    }
}