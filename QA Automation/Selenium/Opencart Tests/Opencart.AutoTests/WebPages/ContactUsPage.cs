using Opencart.Auto.SetUp;
using Opencart.Auto.WebPages.Base;
using OpenQA.Selenium;

namespace Opencart.Auto.WebPages {

    public class ContactUsPage : CommonPage {

        public ContactUsPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement formName { get { return WebDriver.FindElementById("input-name"); } }
        private IWebElement formEmail { get { return WebDriver.FindElementById("input-email"); } }
        private IWebElement formMessage { get { return WebDriver.FindElementById("input-enquiry"); } }
        private IWebElement buttonSubmit { get { return WebDriver.FindElementByCssSelector(".btn[type='Submit']"); } }


        // Functions
        public ContactUsPage FillForm() {
            formName.SendKeys("Alex");
            formEmail.SendKeys("test@test.com");
            formMessage.SendKeys("I'm auto testing this form");
            buttonSubmit.Click();
            return this;
        }
    }
}