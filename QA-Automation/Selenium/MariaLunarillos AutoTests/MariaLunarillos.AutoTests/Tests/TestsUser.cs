using MariaLunarillos.Auto.WebPages;
using NUnit.Framework;
using System;
using System.Threading;

namespace MariaLunarillos.Auto.Tests {

    [TestFixture]
    internal class TestsUser : TestSetCleanBase {

        [TestCase, Order(1)]
        public void Register_User() {
            homePage = new HomePage(setUpWebDriver);
            registerPage = new RegisterPage(setUpWebDriver);

            homePage.GoToMiCuenta();
            registerPage.FillForm();
            //Assert.IsTrue(registerPage.IsRegistered(), "User hasn't registered.");
        }
    }
}