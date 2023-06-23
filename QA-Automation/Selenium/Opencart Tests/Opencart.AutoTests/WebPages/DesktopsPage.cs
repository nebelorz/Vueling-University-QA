using NUnit.Framework;
using Opencart.Auto.Common;
using Opencart.Auto.SetUp;
using Opencart.Auto.WebPages.Base;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;

namespace Opencart.Auto.WebPages {

    public class DesktopsPage : CommonPage {

        public DesktopsPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private By titleDesktops { get { return By.XPath("//h2[text()='Desktops']"); } }

        // Functions
        public void FindByProductName(string product_name) {
            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(titleDesktops));
            IWebElement product = WebDriver.FindElementByCssSelector($"div.product-layout img[title='{product_name}']");
            Assert.IsTrue(product.Displayed, $"{product_name} has not been found.");
            product.Click();
        }

    }
}