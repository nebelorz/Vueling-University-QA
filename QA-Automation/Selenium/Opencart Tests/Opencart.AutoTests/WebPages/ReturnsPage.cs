using Opencart.Auto.Common;
using Opencart.Auto.SetUp;
using Opencart.Auto.WebPages.Base;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;

namespace Opencart.Auto.WebPages {

    public class ReturnsPage : CommonPage {

        public ReturnsPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement formFirstName { get { return WebDriver.FindElementById("input-firstname"); } }
        private IWebElement formLastName { get { return WebDriver.FindElementById("input-lastname"); } }
        private IWebElement formEmail { get { return WebDriver.FindElementById("input-email"); } }
        private IWebElement formTelephone { get { return WebDriver.FindElementById("input-telephone"); } }
        private IWebElement formOrderID { get { return WebDriver.FindElementById("input-order-id"); } }
        private IWebElement formDatepicker { get { return WebDriver.FindElementByCssSelector("i.fa-calendar"); } }
        private IWebElement formDatepickerFirstPastDay { get { return WebDriver.FindElementByXPath("//div[@class='datepicker-days'] //td[not(@class='day new')]"); } }
        private IWebElement formProductName { get { return WebDriver.FindElementById("input-product"); } }
        private IWebElement formProductCode { get { return WebDriver.FindElementById("input-model"); } }
        private IWebElement formProductQty { get { return WebDriver.FindElementById("input-quantity"); } }

        private IWebElement radioReasonOrderError { get { return WebDriver.FindElementByCssSelector("input[value='3']"); } }
        private IWebElement radioProductOpened { get { return WebDriver.FindElementByCssSelector("input[name='opened']"); } }
        private IWebElement formComment { get { return WebDriver.FindElementById("input-comment"); } }


        private IWebElement buttonSubmit { get { return WebDriver.FindElementByCssSelector("input[type='submit']"); } }

        private By _buttonSubmit { get { return By.CssSelector("input[type='submit']"); } }


        // Functions
        public ReturnsPage FillForm() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonSubmit));
            formFirstName.SendKeys(Helpers.GenerateFirstName(5));
            formLastName.SendKeys(Helpers.GenerateLastName(8));
            formEmail.SendKeys("test@test.com");
            formTelephone.SendKeys(Helpers.GetRandomPhoneNumber().ToString());
            formOrderID.SendKeys(Helpers.GetRandomNumberBetween(1, 1000).ToString());
            formDatepicker.Click();
            formDatepickerFirstPastDay.Click();
            formProductName.SendKeys(Helpers.GetRandomString(15));
            formProductCode.SendKeys(Helpers.GetRandomNumberBetween(0, 20000).ToString());
            formProductQty.SendKeys(Helpers.GetRandomNumberBetween(0, 10).ToString());
            radioReasonOrderError.Click();
            radioProductOpened.Click();
            formComment.SendKeys(Helpers.GetRandomString(300));
            buttonSubmit.Click();
            return this;
        }
    }
}