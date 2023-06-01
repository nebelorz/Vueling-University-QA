using OpenQA.Selenium;
using Demoblaze.Auto.SetUp;
using Demoblaze.Auto.WebPages.Base;
using Demoblaze.Auto.Common;
using NUnit.Framework;
using OpenQA.Selenium.Support.UI;
using System;

namespace Demoblaze.Auto.WebPages {
    public class MonitorsPage : CommonPage {
        public MonitorsPage (ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) { }

        string monitorName = "ASUS Full HD";


        // Elements
        private IWebElement monitor { get { return WebDriver.FindElementByXPath("//a[text() = '" + monitorName + "']"); } }
        private IWebElement productPageTitle { get { return WebDriver.FindElementByXPath("//h2[text() = '" + monitorName + "']"); } }
        private By _productPageTitle { get { return By.XPath("//h2[text() = '" + monitorName + "']"); } }


        // Functions
        public MonitorsPage ClickOnMonitor() {
            monitor.Click();
            return this;
        }

        public MonitorsPage AssertProductName() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_productPageTitle));
            Assert.AreEqual(monitorName, productPageTitle.Text);
            return this;
        }
    }
}