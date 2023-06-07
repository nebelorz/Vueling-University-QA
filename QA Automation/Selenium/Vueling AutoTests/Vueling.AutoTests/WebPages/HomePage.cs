using Template.Auto.SetUp;
using Template.Auto.WebPages.Base;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;
using Template.Auto.Common;
using System.Collections.Generic;
using System.Threading;

namespace Template.Auto.WebPages {

    public class HomePage : CommonPage {

        public HomePage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements

        private IWebElement cookiesAccept { get { return WebDriver.FindElementById("onetrust-accept-btn-handler"); } }


        private IWebElement buttonRegister { get { return WebDriver.FindElementByCssSelector(".optionRegister"); } }
        private IWebElement buttonRegisterSubmit { get { return WebDriver.FindElementByCssSelector(".register-tab .mv_button"); } }
        private IWebElement buttonOneWay { get { return WebDriver.FindElementByCssSelector("[for='AvailabilitySearchInputSearchView_OneWay']"); } }
        private IWebElement buttonChilds { get { return WebDriver.FindElementById("AvailabilitySearchInputSearchView_DropDownListPassengerType_CHD"); } }
        private IWebElement buttonBabies { get { return WebDriver.FindElementById("AvailabilitySearchInputSearchView_DropDownListPassengerType_INFANT"); } }
        private IWebElement buttonSubmit { get { return WebDriver.FindElementById("AvailabilitySearchInputSearchView_btnClickToSearchNormal"); } }

        private IWebElement searcherOrigin { get { return WebDriver.FindElementById("AvailabilitySearchInputSearchView_TextBoxMarketOrigin1"); } }
        private IWebElement searcherDestination { get { return WebDriver.FindElementById("AvailabilitySearchInputSearchView_TextBoxMarketDestination1"); } }

        private string datepickerFirstMonthText { get { return WebDriver.FindElementByXPath("//span[@class='ui-datepicker-month']").Text; } }
        private IList<IWebElement> datepickerAvailableDaysList { get { return WebDriver.FindElementsByCssSelector("[data-handler='selectDay']"); } }
        private IWebElement datepickerOrigin { get { return WebDriver.FindElementById("marketDate1"); } }
        private IWebElement datepickerNextMonth { get { return WebDriver.FindElementByCssSelector("[data-handler='next']"); } }
        private IWebElement datepickerFirstAvailableDay { get { return WebDriver.FindElementByCssSelector("[data-handler='selectDay']"); } }

        private By _searcherCityList { get { return By.Id("stationsList"); } }
        private By _searcherOrigin { get { return By.Id("AvailabilitySearchInputSearchView_TextBoxMarketOrigin1"); } }
        private By _cookiesAccept { get { return By.Id("onetrust-accept-btn-handler"); } }
        private By _datepickerNextMonth { get { return By.CssSelector("[data-handler='next']"); } }

        // Functions
        public HomePage PickFirstDayAvailable(string month) {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_datepickerNextMonth));
            while (datepickerFirstMonthText.ToUpper() != month.ToUpper())
            {
                datepickerNextMonth.Click();
            }

            datepickerFirstAvailableDay.Click();
            NextDayFromFirstAvailable().Click();

            return this;
        }

        public HomePage SelectOriginAndDestination(string origin, string destination) {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_searcherOrigin));
            searcherOrigin.Click();
            searcherOrigin.SendKeys(origin);
            Thread.Sleep(100);
            searcherOrigin.SendKeys(Keys.Tab);

            searcherDestination.Click();
            searcherDestination.SendKeys(destination);
            searcherDestination.SendKeys(Keys.Tab);
            return this;
        }

        public HomePage AcceptCookies() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_cookiesAccept));
            cookiesAccept.Click();
            return this;
        }

        public IWebElement NextDayFromFirstAvailable() {
            IWebElement nextFromFirstAvailable = datepickerAvailableDaysList[1];
            return nextFromFirstAvailable;
        }

        public IWebElement PickAvailableDayFromToday(int number) {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_datepickerNextMonth));
            IWebElement day = datepickerAvailableDaysList[number - 1];

            day.Click();
            return day;
        }

        public HomePage SelectChilds(int number) {
            SelectElement select = new SelectElement(buttonChilds);

            select.SelectByValue(number.ToString());
            return this;
        }

        public HomePage SelectInfants(int number) {
            SelectElement select = new SelectElement(buttonBabies);

            select.SelectByValue(number.ToString());
            return this;
        }

        public HomePage GoToRegisterPage() {
            buttonRegister.Click();
            buttonRegisterSubmit.Click();
            return this;
        }

        public HomePage SelectOneWay() {
            buttonOneWay.Click();
            return this;
        }

        public HomePage SubmitClick() {
            buttonSubmit.Click();
            return this;
        }
    }
}