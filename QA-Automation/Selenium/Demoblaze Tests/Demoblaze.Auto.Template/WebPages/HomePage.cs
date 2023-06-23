using OpenQA.Selenium;
using Demoblaze.Auto.SetUp;
using Demoblaze.Auto.WebPages.Base;
using NUnit.Framework;
using Demoblaze.Auto.Common;
using OpenQA.Selenium.Support.UI;
using System;

namespace Demoblaze.Auto.WebPages {
    public class HomePage : CommonPage {
        public HomePage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) { }

        // Elements
        private IWebElement buttonHome { get { return WebDriver.FindElementByXPath("//a[text() = 'Home ']"); } }
        private IWebElement buttonContact { get { return WebDriver.FindElementByXPath("//a[text() = 'Contact']"); } }
        private IWebElement buttonLogin { get { return WebDriver.FindElementById("login2"); } }

        private IWebElement categoryPhones { get { return WebDriver.FindElementByXPath("//a[text() = 'Phones']"); } }
        private IWebElement categoryLaptops { get { return WebDriver.FindElementByXPath("//a[text() = 'Laptops']"); } }
        private IWebElement categoryMonitors { get { return WebDriver.FindElementByXPath("//a[text() = 'Monitors']"); } }

        private By formButtonLogin { get { return By.XPath("//button[text() = 'Log in']"); } }


        // Functions
        public HomePage ClickOnHome() {
            buttonHome.Click();
            return this;
        }
        public HomePage ClickOnLogin() {
            buttonLogin.Click();
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(formButtonLogin));
            return this;
        }

        public HomePage ClickOnCategoryLaptops() {
            categoryLaptops.Click();
            return this;
        }

        public HomePage ClickOnCategoryMonitors() {
            categoryMonitors.Click();
            return this;
        }

        public HomePage ClickOnCategoryPhones() {
            categoryPhones.Click();
            return this;
        }
    }
}