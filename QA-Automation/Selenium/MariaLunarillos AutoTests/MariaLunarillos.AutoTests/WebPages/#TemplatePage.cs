using MariaLunarillos.Auto.SetUp;
using MariaLunarillos.Auto.WebPages.Base;
using OpenQA.Selenium;

namespace MariaLunarillos.Auto.WebPages {

    public class MariaLunarillosPage : CommonPage {

        public MariaLunarillosPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement templateElement { get { return WebDriver.FindElementByXPath("//a[text()='Add to cart']"); } }

        // Functions
        public MariaLunarillosPage MariaLunarillosFunction() {
            templateElement.Click();
            return this;
        }
    }
}