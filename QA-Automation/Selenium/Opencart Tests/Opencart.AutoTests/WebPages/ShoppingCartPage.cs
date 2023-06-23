using Opencart.Auto.SetUp;
using Opencart.Auto.WebPages.Base;
using OpenQA.Selenium;

namespace Opencart.Auto.WebPages {

    public class ShoppingCartPage : CommonPage {

        public ShoppingCartPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement buttonCheckout { get { return WebDriver.FindElementByXPath("//a[text()='Checkout']"); } }

        // Functions
        public ShoppingCartPage ClickOnCheckout() {
            buttonCheckout.Click();
            return this;
        }
    }
}