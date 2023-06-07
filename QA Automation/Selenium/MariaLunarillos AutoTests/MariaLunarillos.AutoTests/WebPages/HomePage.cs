using MariaLunarillos.Auto.SetUp;
using MariaLunarillos.Auto.WebPages.Base;
using OpenQA.Selenium;

namespace MariaLunarillos.Auto.WebPages {

    public class HomePage : CommonPage {

        public HomePage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement buttonMiCuenta { get { return WebDriver.FindElementByCssSelector("[title='Mi cuenta']"); } }

        // Functions
        public HomePage GoToMiCuenta() {
            buttonMiCuenta.Click();
            return this;
        }
    }
}