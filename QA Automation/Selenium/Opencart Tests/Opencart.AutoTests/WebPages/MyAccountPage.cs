using Opencart.Auto.Common;
using Opencart.Auto.SetUp;
using Opencart.Auto.WebPages.Base;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using System;

namespace Opencart.Auto.WebPages {

    public class MyAccountPage : CommonPage {

        public MyAccountPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement rightMenu { get { return WebDriver.FindElementById("column-right"); } }
        private IWebElement menuEditAccount { get { return rightMenu.FindElement(By.XPath("//a[text()='Edit Account']")); } } // Busca el elemento DENTRO de rightMenu

        private IWebElement alertSuccess { get { return WebDriver.FindElementByCssSelector("i.fa-check-circle"); } }



        // Functions
        public MyAccountPage GoToEditAccount() {
            menuEditAccount.Click();
            return this;
        }

        public IWebElement getAlertSucess() {
            return alertSuccess;
        }
    }
}