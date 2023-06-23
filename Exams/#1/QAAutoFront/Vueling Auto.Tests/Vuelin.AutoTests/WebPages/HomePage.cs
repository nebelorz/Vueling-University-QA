using OpenQA.Selenium;
using OpenQA.Selenium.Interactions;
using OpenQA.Selenium.Support.UI;
using System;
using System.Collections.Generic;
using System.Threading;
using Vueling.Auto.Common;
using Vueling.Auto.SetUp;
using Vueling.Auto.WebPages.Base;

namespace Vueling.Auto.WebPages {

    public class HomePage : CommonPage {

        public HomePage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements

        private IWebElement buttonCookiesAccept { get { return WebDriver.FindElementByCssSelector("#onetrust-accept-btn-handler"); } }
        private IWebElement buttonBabies { get { return WebDriver.FindElementById("AvailabilitySearchInputSearchView_DropDownListPassengerType_INFANT"); } }
        private IWebElement buttonSubmit { get { return WebDriver.FindElementById("AvailabilitySearchInputSearchView_btnClickToSearchNormal"); } }

        private IWebElement dropdownLanguage { get { return WebDriver.FindElementByCssSelector(".dropdown-lang"); } }
        private IWebElement dropdownSelectLanguageEnglish { get { return WebDriver.FindElementById("language_option_en-GB"); } }

        private IWebElement dropdownCurrency { get { return WebDriver.FindElementById("currencyDropDownButton"); } }
        private IWebElement dropdownSelectCurrencyEUR { get { return WebDriver.FindElementByCssSelector("[currency='EUR']"); } }

        private IWebElement searcherOrigin { get { return WebDriver.FindElementById("AvailabilitySearchInputSearchView_TextBoxMarketOrigin1"); } }
        private IWebElement searcherDestination { get { return WebDriver.FindElementById("AvailabilitySearchInputSearchView_TextBoxMarketDestination1"); } }

        private IList<IWebElement> datepickerAvailableDaysList { get { return WebDriver.FindElementsByCssSelector("[data-handler='selectDay']"); } }

        private By _buttonCookiesAccept { get { return By.CssSelector("#onetrust-accept-btn-handler"); } }
        private By _dropdownLanguage { get { return By.CssSelector(".dropdown-lang"); } }
        private By _dropdownCurrency { get { return By.Id("currencyDropDownButton"); } }
        private By _datepickerNextMonth { get { return By.CssSelector("[data-handler='next']"); } }
        private By _searchBody { get { return By.Id("searchBody"); } }


        // Functions
        public HomePage AcceptCookies() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonCookiesAccept));
            buttonCookiesAccept.Click();
            return this;
        }

        public HomePage SelectEnglishLanguage() {
            MouseOver(_dropdownLanguage, dropdownLanguage);
            dropdownSelectLanguageEnglish.Click();
            return this;
        }

        public HomePage SelectCurrencyEUR() {
            MouseOver(_dropdownCurrency, dropdownCurrency);
            dropdownSelectCurrencyEUR.Click();
            return this;
        }

        public HomePage SelectOriginAndDestination(string origin, string destination) {
            searcherOrigin.Click();
            searcherOrigin.SendKeys(origin);
            Thread.Sleep(100);
            searcherOrigin.SendKeys(Keys.Tab);

            searcherDestination.Click();
            searcherDestination.SendKeys(destination);
            Thread.Sleep(100);
            searcherDestination.SendKeys(Keys.Tab);
            return this;
        }

        public IWebElement PickDayFromFirstAvailable(int number) {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_datepickerNextMonth));
            IWebElement day = datepickerAvailableDaysList[number - 1];

            day.Click();
            return day;
        }

        public HomePage SelectInfants(int number) {
            SelectElement select = new SelectElement(buttonBabies);

            select.SelectByValue(number.ToString());
            return this;
        }

        public HomePage SubmitSearch() {
            buttonSubmit.Click();
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_searchBody));
            return this;
        }

        public HomePage MouseOver(By by_element, IWebElement webelement_element) {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(by_element));

            Actions action = new Actions(WebDriver);
            action.MoveToElement(webelement_element).Perform();
            return this;
        }
    }
}