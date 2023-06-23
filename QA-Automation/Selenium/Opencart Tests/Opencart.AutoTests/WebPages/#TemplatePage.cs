using Opencart.Auto.SetUp;
using Opencart.Auto.WebPages.Base;
using OpenQA.Selenium;

namespace Opencart.Auto.WebPages {

    public class Template : CommonPage {

        public Template(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement templateElement { get { return WebDriver.FindElementByXPath("//a[text()='Add to cart']"); } }

        // Functions
        public Template OpencartFunction() {
            templateElement.Click();
            return this;
        }
    }
}