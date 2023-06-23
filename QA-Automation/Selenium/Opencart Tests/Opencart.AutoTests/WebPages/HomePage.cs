using NUnit.Framework;
using Opencart.Auto.SetUp;
using Opencart.Auto.WebPages.Base;
using OpenQA.Selenium;
using System;

namespace Opencart.Auto.WebPages {

    public class HomePage : CommonPage {

        public HomePage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) { }

        // Elements
        private IWebElement topMyAccount { get { return WebDriver.FindElementByCssSelector("a[title='My Account']"); } }
        private IWebElement topRegister { get { return WebDriver.FindElementByXPath("//a[text()='Register']"); } }
        private IWebElement topLogin { get { return WebDriver.FindElementByXPath("//a[text()='Login']"); } }
        private IWebElement topShoppingCart { get { return WebDriver.FindElementByCssSelector("a[title='Shopping Cart']"); } }

        private IWebElement sectionDesktops { get { return WebDriver.FindElementByXPath("//*[text()='Desktops']"); } }
        private IWebElement sectionDesktopsShowAll { get { return WebDriver.FindElementByXPath("//*[text()='Show All Desktops']"); } }

        private IWebElement bottomContactUs { get { return WebDriver.FindElementByXPath("//ul[@class='list-unstyled'] //*[text()='Contact Us']"); } }
        private IWebElement bottomReturns { get { return WebDriver.FindElementByXPath("//ul[@class='list-unstyled'] //*[text()='Returns']"); } }


        // Functions
        public HomePage GoToRegisterPage() {
            topMyAccount.Click();
            topRegister.Click();
            Assert.IsTrue(GetCurrentUrl().Contains("register"), "No se ha redirigido a 'register'");
            return this;
        }

        public HomePage GoToLoginPage() {
            topMyAccount.Click();
            topLogin.Click();
            return this;
        }

        public HomePage GoToSectionDesktops() {
            sectionDesktops.Click();
            sectionDesktopsShowAll.Click();
            return this;
        }

        public HomePage GoToShoppingCartPage() {
            topShoppingCart.Click();
            return this;
        }

        public HomePage GoToContactUs() {
            bottomContactUs.Click();
            return this;
        }

        public HomePage GoToReturns() {
            bottomReturns.Click();
            return this;
        }

        public bool isInSlider(string imageName) {
            try
            {
                bool image = WebDriver.FindElementByXPath($"//div[@id='carousel0'] //img[@alt='{imageName}']").Displayed;
            }
            catch (Exception) 
            {
                return false;
            }
            return true;
        }
    }
}