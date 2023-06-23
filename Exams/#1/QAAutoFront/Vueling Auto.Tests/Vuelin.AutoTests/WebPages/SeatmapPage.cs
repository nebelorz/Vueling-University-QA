using Vueling.Auto.SetUp;
using Vueling.Auto.WebPages.Base;
using OpenQA.Selenium;

namespace Vueling.Auto.WebPages {

    public class SeatmapPage : CommonPage {

        public SeatmapPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements
        private IWebElement seatmap { get { return WebDriver.FindElementById("casco_0_0"); } }

        // Functions
        public IWebElement getSeatmap() {
            return seatmap;
        }
    }
}