using OpenQA.Selenium;
using Demoblaze.Auto.SetUp;
using Demoblaze.Auto.WebPages.Base;

namespace Demoblaze.Auto.WebPages {
    public class TemplatePage : CommonPage {
        public TemplatePage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) { }


        // Elements
        private IWebElement templateElement { get { return WebDriver.FindElementByXPath("//a[text()='Add to cart']"); } }


        // Functions
        public TemplatePage TemplateFunction() {
            templateElement.Click();
            return this;
        }
    }
}