using System;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using Demoblaze.Auto.SetUp;
using Demoblaze.Auto.WebPages.Base;
using Demoblaze.Auto.Common;
using NUnit.Framework;

namespace Demoblaze.Auto.WebPages {
    public class LoginPage : CommonPage {
        public LoginPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) { }


        // Elements
        private IWebElement formFieldUsername { get { return WebDriver.FindElementById("loginusername"); } }
        private IWebElement formFieldPassword { get { return WebDriver.FindElementById("loginpassword"); } }

        private IWebElement buttonClose { get { return WebDriver.FindElementByXPath("//button[text() = 'Close']"); } }
        private IWebElement buttonLogin { get { return WebDriver.FindElementByXPath("//button[text() = 'Log in']"); } }

        private IWebElement welcomeUser { get { return WebDriver.FindElementById("nameofuser"); } }
        private By _welcomeUser { get { return By.Id("nameofuser"); } }

        // Functions
        public LoginPage FillFormAndLogin() {
            string username = "alex.vueling";
            string password = "1234";

            formFieldUsername.SendKeys(username);
            formFieldPassword.SendKeys(password);
            buttonLogin.Click();
            return this;
        }

        public LoginPage AssertLoggedIn() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_welcomeUser));
            Assert.AreEqual("Welcome alex.vueling", welcomeUser.Text);
            return this;
        }
    }
}