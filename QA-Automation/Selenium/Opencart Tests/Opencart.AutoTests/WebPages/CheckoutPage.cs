using NUnit.Framework;
using Opencart.Auto.Common;
using Opencart.Auto.SetUp;
using Opencart.Auto.WebPages.Base;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;
using System.Threading;

namespace Opencart.Auto.WebPages {

    public class CheckoutPage : CommonPage {

        public CheckoutPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement formFirstName { get { return WebDriver.FindElementById("input-payment-firstname"); } }
        private IWebElement formLasttName { get { return WebDriver.FindElementById("input-payment-lastname"); } }
        private IWebElement formCompany { get { return WebDriver.FindElementById("input-payment-company"); } }
        private IWebElement formAddress1 { get { return WebDriver.FindElementById("input-payment-address-1"); } }
        private IWebElement formAddress2 { get { return WebDriver.FindElementById("input-payment-address-2"); } }
        private IWebElement formCity { get { return WebDriver.FindElementById("input-payment-city"); } }
        private IWebElement formPostalCode { get { return WebDriver.FindElementById("input-payment-postcode"); } }
        private IWebElement formCountrySelect { get { return WebDriver.FindElementById("input-payment-country"); } }
        private IWebElement formCountrySelectOption { get { return WebDriver.FindElementByXPath("//select[@id='input-payment-country'] //option[text()='Spain']"); } }
        private IWebElement formZoneSelect { get { return WebDriver.FindElementById("input-payment-zone"); } }
        private IWebElement formZoneSelectOption { get { return WebDriver.FindElementByXPath("//select[@id='input-payment-zone'] //option[text()='Barcelona']"); } }

        private IWebElement alreadyExistsBillingAddress { get { return WebDriver.FindElementById("payment-existing"); } }
        private IWebElement buttonSubmitBillingDetails { get { return WebDriver.FindElementById("button-payment-address"); } }


        private IWebElement alreadyExistsDeliveryAddress { get { return WebDriver.FindElementById("shipping-existing"); } }
        private IWebElement buttonSubmitDeliveryDetails { get { return WebDriver.FindElementById("button-shipping-address"); } }

        private IWebElement buttonSubmitDeliveryMethod { get { return WebDriver.FindElementById("button-shipping-method"); } }

        private IWebElement checkboxPaymentTerms { get { return WebDriver.FindElementByCssSelector("#collapse-payment-method input[type='checkbox']"); } }
        private IWebElement buttonSubmitPaymentMethod { get { return WebDriver.FindElementById("button-payment-method"); } }

        private IWebElement buttonSubmitOrder { get { return WebDriver.FindElementById("button-confirm"); } }
        private IWebElement messageOrderPlaced { get { return WebDriver.FindElementByXPath("//h1[text()='Your order has been placed!']"); } }

        private By _buttonSubmitBillingDetails { get { return By.Id("button-payment-address"); } }
        private By _buttonSubmitDeliveryDetails { get { return By.Id("button-shipping-address"); } }
        private By _buttonSubmitDeliveryMethod { get { return By.Id("button-shipping-method"); } }
        private By _buttonSubmitPaymentMethod { get { return By.Id("button-payment-method"); } }
        private By _buttonSubmitOrder { get { return By.Id("button-confirm"); } }



        // Functions
        public CheckoutPage FillBillingDetails() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonSubmitBillingDetails));
            try
            {
                IsElementDisplayed(alreadyExistsBillingAddress);
            }
            catch (NoSuchElementException)
            {
                formFirstName.SendKeys("Alex");
                formLasttName.SendKeys("Gassó");
                formCompany.SendKeys("Vueling");
                formAddress1.SendKeys("C/ Falsa 123");
                formAddress2.SendKeys("C/ Falsa 456");
                formCity.SendKeys("Barcelona");
                formPostalCode.SendKeys("12345");
                formCountrySelect.Click();
                formCountrySelectOption.Click();
                formZoneSelect.Click();
                formZoneSelectOption.Click();
            }
            finally { buttonSubmitBillingDetails.Click(); }

            return this;
        }

        public CheckoutPage FillDeliveryDetails() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonSubmitDeliveryDetails));
            if (IsElementDisplayed(alreadyExistsDeliveryAddress) == true)
            {
                buttonSubmitDeliveryDetails.Click();
            }
            else
            {
                formFirstName.SendKeys("Alex");
                formLasttName.SendKeys("Gassó");
                formCompany.SendKeys("Vueling");
                formAddress1.SendKeys("C/ Falsa 123");
                formAddress2.SendKeys("C/ Falsa 456");
                formCity.SendKeys("Barcelona");
                formPostalCode.SendKeys("12345");
                formCountrySelect.Click();
                formCountrySelectOption.Click();
                formZoneSelect.Click();
                formZoneSelectOption.Click();
                buttonSubmitDeliveryDetails.Click();
            }

            return this;
        }

        public CheckoutPage FillDeliveryMethod() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonSubmitDeliveryMethod));
            buttonSubmitDeliveryMethod.Click();
            return this;
        }

        public CheckoutPage FillPaymentMethod() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonSubmitPaymentMethod));
            checkboxPaymentTerms.Click();
            buttonSubmitPaymentMethod.Click();
            return this;
        }

        public CheckoutPage SubmitOrder() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonSubmitOrder));
            buttonSubmitOrder.Click();
            Assert.IsTrue(messageOrderPlaced.Displayed, "The order hasn't been placed.");
            return this;
        }

        public bool isElementVisible(string ID) {
            try
            {
                bool test = WebDriver.FindElementById($"{ID}").Displayed;
                return test;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}