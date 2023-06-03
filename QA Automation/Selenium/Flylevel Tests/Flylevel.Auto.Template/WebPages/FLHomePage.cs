using OpenQA.Selenium;
using Flylevel.Auto.SetUp;
using Flylevel.Auto.WebPages.Base;
using Flylevel.Auto.Common;
using OpenQA.Selenium.Support.UI;
using System;
using System.Threading;
using NUnit.Framework;

namespace Flylevel.Auto.WebPages {
    public class FLHomePage : CommonPage {
        public FLHomePage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) { }

        // Elements
        private IWebElement buttonAcceptCookies { get { return WebDriver.FindElementById("ensCloseBanner"); } }

        private IWebElement searcherButtonSearch { get { return WebDriver.FindElementById("searcher_submit_buttons"); } }

        private IWebElement searcherButtonOrigin { get { return WebDriver.FindElementByCssSelector("div[data-field='origin']"); } }
        private IWebElement searcherOriginInput { get { return WebDriver.FindElementByXPath("(//input[@class='input-value'])[1]"); } }

        // Este codigo haría lo mismo, de los elementos input con clase (.) input-value, escoge el primero,
        // pero solo funciona si usas ID (#) en el selector, con otros atributos no
        // private IWebElement searcherOriginInput { get { return WebDriver.FindElementByCssSelector("input.input-value:nth-of-type(1)"); } }

        private IWebElement searcherOriginMenu { get { return WebDriver.FindElementByXPath("//div[@data-field='origin'] //div[@class='station-info'][1]"); } } // El segundo elemento no hace falta ponerlo entre () para buscar por posición (?)
        private string searcherOriginText { get { return WebDriver.FindElementByCssSelector("div[data-field='origin'] .city").Text; } }

        private IWebElement searcherButtonDestination { get { return WebDriver.FindElementByCssSelector("div[data-field='destination']"); } }
        private IWebElement searcherDestinationInput { get { return WebDriver.FindElementByXPath("(//input[@class='input-value'])[2]"); } }
        private IWebElement searcherDestinationMenu { get { return WebDriver.FindElementByXPath("//div[@data-field='destination'] //div[@class='station-info'][1]"); } }
        private string searcherDestinationText { get { return WebDriver.FindElementByCssSelector("div[data-field='destination'] .city").Text; } }

        // Si el elemento tiene mas de una clase, hay que usar [contains(@class, 'nombreClase') and [contains(@class, 'nombreClase2)]
        private IWebElement datepickerFirstAvailableDay { get { return WebDriver.FindElementByXPath("(//section[@class='datepicker__month'])[1] //div[contains(@class, 'is-available') and not(contains(@class, 'is-previous-month'))]"); } }
        
        // Encuentra el elemento numero 11 contando desde el primer día seleccionado,
        // que sea un día del mismo mes available (la primera expresión "section" va entre parentesis para buscar por posición,
        // la segunda NO puede ir entre parentesis, no lo encontraría)
        private IWebElement datepicker11DaysMoreFromFirstAvailableDay { get { return WebDriver.FindElementByXPath($"(//section[@class='datepicker__month'])[1] //div[contains(@class, 'is-available') and not(contains(@class, 'is-previous-month'))][{datepicker11DaysMoreFromFirstAvailableNumber}]"); } }
        private IWebElement datepickerButtonNextMonth { get { return WebDriver.FindElementByCssSelector(".datepicker__next-action"); } }
        private string datepickerMonthName { get { return WebDriver.FindElementByXPath("//section[@class='datepicker__month'] //span[@class='month']").Text; } }
        private string datepickerFirstAvailableText { get { return WebDriver.FindElementByXPath("(//section[@class='datepicker__month'])[1] //div[contains(@class, 'is-available') and not(contains(@class, 'is-previous-month'))]").Text; } }
        private int datepicker11DaysMoreFromFirstAvailableNumber { get { return int.Parse(datepickerFirstAvailableText) + 11; } }

        private IWebElement paxButtonOk { get { return WebDriver.FindElementByCssSelector(".btn-pax"); } }
        private IWebElement paxAdultPlusIcon { get { return WebDriver.FindElementByCssSelector("[data-field='adult'] .icon-plus, [data-field='adult'] .icon-plus-active"); } } // Con la "," busca tanto elementos con la clase icon-plus como icon-plus-active
        private IWebElement paxChildPlusIcon { get { return WebDriver.FindElementByCssSelector("[data-field='child'] .icon-plus, [data-field='child'] .icon-plus-active"); } }
        private IWebElement paxInfantPlusIcon { get { return WebDriver.FindElementByCssSelector("[data-field='infant'] .icon-plus, [data-field='infant'] .icon-plus-active"); } }
        private string paxAdultText { get { return WebDriver.FindElementByCssSelector("[data-field='adult'] .pax-count").Text; } }
        private string paxChildText { get { return WebDriver.FindElementByCssSelector("[data-field='child'] .pax-count").Text; } }
        private string paxInfantText { get { return WebDriver.FindElementByCssSelector("[data-field='infant'] .pax-count").Text; } }

        private By _buttonAcceptCookies { get { return By.Id("ensCloseBanner"); } }


        // Functions
        public FLHomePage AcceptCookies() {
            try
            {
                new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonAcceptCookies));
                buttonAcceptCookies.Click();
            }
            catch (Exception)
            {
                Console.WriteLine("No hay cookies que aceptar.");
            }
            return this;
        }

        public FLHomePage FillOriginAndDestination(string origin, string destination) {
            searcherButtonOrigin.Click();
            searcherOriginInput.SendKeys(origin);
            searcherOriginMenu.Click();

            searcherButtonDestination.Click();
            searcherDestinationInput.SendKeys(destination);
            searcherDestinationMenu.Click();

            Assert.AreEqual(origin.ToUpper(), searcherOriginText.ToUpper());
            Assert.AreEqual(destination.ToUpper(), searcherDestinationText.ToUpper());
            return this;
        }

        public FLHomePage PickDatepickerDays(string monthName) {
            while (datepickerMonthName.ToUpper() != monthName.ToUpper())
            {
                datepickerButtonNextMonth.Click();
                Thread.Sleep(100);
            }
            datepickerFirstAvailableDay.Click();
            datepicker11DaysMoreFromFirstAvailableDay.Click();
            return this;
        }

        public FLHomePage FillPax(int adults, int child, int infant) {
            for (int i = 1; i < adults; i++) { paxAdultPlusIcon.Click(); } // Empieza el bucle en 1 porque por defecto siempre hay un adulto seleccionado
            for (int i = 0; i < child; i++) { paxChildPlusIcon.Click(); }
            for (int i = 0; i < infant; i++) { paxInfantPlusIcon.Click(); }

            Assert.AreEqual(adults, int.Parse(paxAdultText));
            Assert.AreEqual(child, int.Parse(paxChildText));
            Assert.AreEqual(infant, int.Parse(paxInfantText));

            paxButtonOk.Click();
            return this;
        }

        public FLHomePage ClickOnSearch() {
            searcherButtonSearch.Click();
            return this;
        }

        public string getActualUrl() {
            return WebDriver.Url;
        }
    }
}