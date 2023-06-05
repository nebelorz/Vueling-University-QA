using OpenQA.Selenium.Remote;

namespace Template.Auto.SetUp {

    public interface ISetUpWebDriver {

        RemoteWebDriver GetSetUpWebDriver();

        void CloseWebDriver();

        void GoTo(string url);

        bool HasQuit(RemoteWebDriver webDriver);
    }
}