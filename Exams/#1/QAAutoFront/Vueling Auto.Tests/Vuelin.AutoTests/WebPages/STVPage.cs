using Vueling.Auto.SetUp;
using Vueling.Auto.WebPages.Base;
using OpenQA.Selenium;
using System.Collections.Generic;
using System;
using OpenQA.Selenium.Support.UI;
using Vueling.Auto.Common;
using System.Threading;

namespace Vueling.Auto.WebPages {

    public class STVPage : CommonPage {

        public STVPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        // Selects all "flightCardContent" id elements which contains the class.
        private IList<IWebElement> flightsVueling { get { return WebDriver.FindElementsByCssSelector("#flightCardContent:has(.vy-icon-vueling-default)"); } }

        private IWebElement fareBasic { get { return WebDriver.FindElementById("basicFareBox"); } }
        private IWebElement fareOptima { get { return WebDriver.FindElementById("optimaFareBox"); } }
        private IWebElement fareTimeFlex { get { return WebDriver.FindElementById("timeFlexFareBox"); } }

        private IWebElement buttonSubmit { get { return WebDriver.FindElementById("stvContinueButton"); } }

        private By _searchBody { get { return By.Id("searchBody"); } }
        private By _outboundSummary { get { return By.Id("outboundSummary"); } }
        private By _fareBasic { get { return By.Id("basicFareBox"); } }
        private By _fareSelected { get { return By.Id("stvContinueButton"); } }
        private By _adultBox { get { return By.Id("passengerInformation"); } }


        // Functions
        public STVPage SelectFlights(int flightPosition1, int flightPosition2) {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_searchBody));
            flightsVueling[flightPosition1].Click();

            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_outboundSummary)); // Esto no funciona para poder quitar el Thread.Sleep
            Thread.Sleep(500); // No encuentro otra manera de esperar a que termine la animación, si no salta una excepcion :S
            flightsVueling[flightPosition2].Click();
            return this;
        }

        public STVPage SelectFare(string fare) {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_fareBasic));

            if (fare == "basic")
                fareBasic.Click();
            else if (fare == "optima")
                fareOptima.Click();
            else if (fare == "timeflex")
                fareTimeFlex.Click();
            else
                throw new ArgumentException("Fare is not valid.");

            return this;
        }

        public STVPage SubmitSTV() {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_fareSelected)); // Esto no funciona para poder quitar el Thread.Sleep
            Thread.Sleep(500); // No encuentro otra manera de esperar a que termine la animación, si no salta una excepcion :S
            buttonSubmit.Click();
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_adultBox));
            return this;
        }
    }
}