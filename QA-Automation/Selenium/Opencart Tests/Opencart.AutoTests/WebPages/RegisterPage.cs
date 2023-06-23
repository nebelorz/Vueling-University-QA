using Opencart.Auto.SetUp;
using Opencart.Auto.WebPages.Base;
using OpenQA.Selenium;

namespace Opencart.Auto.WebPages {

    public class RegisterPage : CommonPage {

        public RegisterPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) { }

        private string firstName = "Alex";
        private string lastName = "Gassó";
        private string email = "8650@test.com";
        private string telephone = "123456789";
        private string password = "1234";

        // Elements
        private IWebElement formFirstName { get { return WebDriver.FindElementById("input-firstname"); } }
        private IWebElement formLastName { get { return WebDriver.FindElementById("input-lastname"); } }
        private IWebElement formEmail{ get { return WebDriver.FindElementById("input-email"); } }
        private IWebElement formTelephone{ get { return WebDriver.FindElementById("input-telephone"); } }
        private IWebElement formPassword{ get { return WebDriver.FindElementById("input-password"); } }
        private IWebElement formPasswordConfirm{ get { return WebDriver.FindElementById("input-confirm"); } }
        private IWebElement formCheckbox { get { return WebDriver.FindElementByCssSelector("input[type='checkbox']"); } }
        private IWebElement formSubmit { get { return WebDriver.FindElementByCssSelector("input[type='submit']"); } }


        // Functions
        public RegisterPage FillForm() {
            formFirstName.SendKeys(firstName);
            formLastName.SendKeys(lastName);
            formEmail.SendKeys(email);
            formTelephone.SendKeys(telephone);
            formPassword.SendKeys(password);
            formPasswordConfirm.SendKeys(password);
            formCheckbox.Click();
            formSubmit.Click();
            return this;
        }

        public string getEmail() {
            return email;
        }

        public string getPassword() {
            return password;
        }
    }
}