using MariaLunarillos.Auto.Common;
using MariaLunarillos.Auto.SetUp;
using MariaLunarillos.Auto.WebPages.Base;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;

namespace MariaLunarillos.Auto.WebPages {

    public class RegisterPage : CommonPage {

        public RegisterPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        private string user_email = "test1005@test.com";
        private string user_password = "$_%665#mN";

        // Elements
        private IWebElement formFirstName { get { return WebDriver.FindElementById("firstname"); } }
        private IWebElement formLastName { get { return WebDriver.FindElementById("lastname"); } }
        private IWebElement formEmail { get { return WebDriver.FindElementById("email_address"); } }
        private IWebElement formPassword { get { return WebDriver.FindElementById("password"); } }
        private IWebElement formPasswordConfirmation { get { return WebDriver.FindElementById("password-confirmation"); } }
        private IWebElement checkboxShowPassword { get { return WebDriver.FindElementById("show-password"); } }
        private IWebElement checkboxPrivacy { get { return WebDriver.FindElementByCssSelector("[title='Privacy Register'"); } }
        private IWebElement checkboxNewsletter { get { return WebDriver.FindElementById("is_subscribed"); } }

        private IWebElement buttonCookiesAccept { get { return WebDriver.FindElementByCssSelector("[data-amgdprcookie-js='accept']"); } }
        private IWebElement buttonSubmitRegister { get { return WebDriver.FindElementById("send2"); } }

        private By _messageSuccess { get { return By.CssSelector("[data-ui-id='message-success']"); } }
        private By _buttonCookiesAccept { get { return By.CssSelector("[data-amgdprcookie-js='accept']"); } }


        // Functions
        public RegisterPage FillForm() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonCookiesAccept));
            buttonCookiesAccept.Click();

            formFirstName.SendKeys(Helpers.GenerateFirstName(5));
            formLastName.SendKeys(Helpers.GenerateLastName(5));
            formEmail.SendKeys(user_email);
            formPassword.SendKeys(user_password);
            formPasswordConfirmation.SendKeys(user_password);
            checkboxShowPassword.Click();
            checkboxPrivacy.Click();
            buttonSubmitRegister.Click();
            return this;
        }

        public bool IsRegistered() {
            var element = CustomExpectedConditions.ElementIsVisible(_messageSuccess);

            if (element != null)
            {
                return true;
            }
            return false;
        }
    }
}