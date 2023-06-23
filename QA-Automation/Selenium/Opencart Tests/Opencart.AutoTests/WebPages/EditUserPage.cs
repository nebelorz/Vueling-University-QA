using Opencart.Auto.Common;
using Opencart.Auto.SetUp;
using Opencart.Auto.WebPages.Base;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;

namespace Opencart.Auto.WebPages {

    public class EditUserPage : CommonPage {

        public EditUserPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement formFirstName { get { return WebDriver.FindElementById("input-firstname"); } }
        private IWebElement formLastName { get { return WebDriver.FindElementById("input-lastname"); } }
        private IWebElement formPhone { get { return WebDriver.FindElementById("input-telephone"); } }

        private IWebElement buttonSubmit { get { return WebDriver.FindElementByCssSelector("input[type='submit']"); } }

        private By _buttonSubmit { get { return By.CssSelector("input[type='submit']"); } }

        // Functions
        public EditUserPage FillForm() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonSubmit));
            formFirstName.Clear();
            formFirstName.SendKeys(Helpers.GenerateFirstName(10));
            formLastName.Clear();
            formLastName.SendKeys(Helpers.GenerateLastName(10));
            formPhone.Clear();
            formPhone.SendKeys(Helpers.GetRandomPhoneNumber().ToString());
            buttonSubmit.Click();
            return this;
        }
    }
}