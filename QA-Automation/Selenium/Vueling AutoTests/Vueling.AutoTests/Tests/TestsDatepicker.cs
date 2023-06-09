﻿using Template.Auto.WebPages;
using NUnit.Framework;

namespace Vueling.AutoTests {

    [TestFixture]
    internal class TestsDatepicker : TestSetCleanBase {

        [TestCase, Order(1)]
        public void PickFirstDayAvailable() {
            homePage = new HomePage(setUpWebDriver);

            homePage.AcceptCookies();
            homePage.SelectOriginAndDestination("Barcelona", "Madrid");
            homePage.PickFirstDayAvailable("AgOsTO");

        }
    }
}