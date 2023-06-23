using Opencart.Auto.SetUp;
using Opencart.Auto.WebPages.Base;
using OpenQA.Selenium;
using System;

namespace Opencart.Auto.WebPages {

    public class LoginPage : CommonPage {

        public LoginPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement formEmail { get { return WebDriver.FindElementById("input-email"); } }
        private IWebElement formPassword { get { return WebDriver.FindElementById("input-password"); } }

        private IWebElement buttonSubmit { get { return WebDriver.FindElementByCssSelector("input[type='submit']"); } }

        private IWebElement accountDiv { get { return WebDriver.FindElementById("account-account"); } }


        // Functions
        public LoginPage FillLogin(string email, string password) {
            formEmail.SendKeys(email);
            formPassword.SendKeys(password);
            buttonSubmit.Click();
            return this;
        }
    }
}