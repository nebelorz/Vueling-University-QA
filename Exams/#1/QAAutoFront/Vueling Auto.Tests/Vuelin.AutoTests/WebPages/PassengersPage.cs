using Vueling.Auto.SetUp;
using Vueling.Auto.WebPages.Base;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;
using Vueling.Auto.Common;

namespace Vueling.Auto.WebPages {

    public class PassengersPage : CommonPage {

        public PassengersPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement formAdult1Name { get { return WebDriver.FindElementById("ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxFirstName_0"); } }
        private IWebElement formAdult1Surname { get { return WebDriver.FindElementById("ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxLastName_0"); } }
        private IWebElement formBaby1Name { get { return WebDriver.FindElementById("ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxFirstName_0_0"); } }
        private IWebElement formBaby1Surname { get { return WebDriver.FindElementById("ContactViewControlGroupMainContact_BoxPassengerInformationView_TextBoxLastName_0_0"); } }
        private IWebElement formBaby1DateOfBirth { get { return WebDriver.FindElementById("birthDate1_1"); } }

        private IWebElement contactPersonCountry { get { return WebDriver.FindElementById("ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_DropDownListCountry"); } }
        private IWebElement contactPersonDialingCode { get { return WebDriver.FindElementById("ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_DropDownListPrefix"); } }
        private IWebElement contactPersonPhone { get { return WebDriver.FindElementById("ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_TextBoxHomePhone"); } }
        private IWebElement contactPersonEmail { get { return WebDriver.FindElementById("ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_TextBoxEmailAddress"); } }

        private IWebElement buttonAllSet { get { return WebDriver.FindElementByCssSelector(".booking-contact_form_button"); } }
        private IWebElement buttonSubmit { get { return WebDriver.FindElementById("ContactViewControlGroupMainContact_BoxPassengerInformationView_LinkButtonSubmit"); } }

        private IWebElement checkboxPrivacyPolicy { get { return WebDriver.FindElementById("checkboxAcceptsPrivPolLabel"); } }

        private By _adultBox { get { return By.Id("passengerInformation"); } }
        private By _countrySelect { get { return By.Id("ContactViewControlGroupMainContact_BoxPassengerInformationView_BoxContactInformationView_DropDownListCountry"); } }
        private By _seatmap { get { return By.Id("casco_0_0"); } }

        // Functions
        public PassengersPage FillPassengersForm() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_adultBox));

            formAdult1Name.SendKeys(Helpers.GenerateFirstName(6));
            formAdult1Surname.SendKeys(Helpers.GenerateLastName(6));
            formBaby1Name.SendKeys(Helpers.GenerateFirstName(5));
            formBaby1Surname.SendKeys(Helpers.GenerateLastName(5));
            formBaby1DateOfBirth.SendKeys("01062023");
            buttonAllSet.Click();
            return this;
        }

        public PassengersPage FillContactPersonForm() {
            Random random = new Random();
            SelectElement selectCountry = new SelectElement(contactPersonCountry);

            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_countrySelect));
            selectCountry.SelectByValue("BR");
            contactPersonPhone.SendKeys(Helpers.GetRandomPhoneNumber().ToString());
            contactPersonEmail.SendKeys(Helpers.GenerateEmail());
            return this;
        }

        public PassengersPage SubmitPassengers() {
            checkboxPrivacyPolicy.Click();
            buttonSubmit.Click();
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_seatmap));
            return this;
        }
    }
}