using Template.Auto.SetUp;
using Template.Auto.WebPages.Base;
using OpenQA.Selenium;
using OpenQA.Selenium.Support.UI;
using Template.Auto.Common;
using System;

namespace Template.Auto.WebPages {

    public class RegisterPage : CommonPage {

        public RegisterPage(ISetUpWebDriver setUpWebDriver) : base(setUpWebDriver) {
        }

        // Elements

        private IWebElement formFirstName { get { return WebDriver.FindElementById("CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_TextBoxFirstName"); } }
        private IWebElement formLastName { get { return WebDriver.FindElementById("CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_TextBoxLastName"); } }
        private IWebElement formEmail { get { return WebDriver.FindElementById("CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_TextBoxEmail"); } }
        private IWebElement formPassword { get { return WebDriver.FindElementById("CONTROLGROUPREGISTERVIEW_MemberInputRegisterView_PasswordFieldAgentPassword"); } }
        private IWebElement formPasswordConfirm { get { return WebDriver.FindElementById("CONTROLGROUPREGISTERVIEW_MemberInputRegisterView_PasswordFieldPasswordConfirm"); } }

        private IWebElement formViewFirstQuestion { get { return WebDriver.FindElementById("CONTROLGROUPREGISTERVIEW_SecurityQuestionsRegisterView_FirstQuestion"); } }
        private IWebElement formFirstQuestionAnswer { get { return WebDriver.FindElementById("CONTROLGROUPREGISTERVIEW_SecurityQuestionsRegisterView_FirstAnswer"); } }

        private IWebElement formViewSecondQuestion { get { return WebDriver.FindElementById("CONTROLGROUPREGISTERVIEW_SecurityQuestionsRegisterView_SecondQuestion"); } }
        private IWebElement formSecondQuestionAnswer { get { return WebDriver.FindElementById("CONTROLGROUPREGISTERVIEW_SecurityQuestionsRegisterView_SecondAnswer"); } }


        private IWebElement checkboxPromo { get { return WebDriver.FindElementByCssSelector("[for='CONTROLGROUPREGISTERVIEW_PersonInputRegisterView_CheckBoxPromoOpt']"); } }
        private IWebElement checkboxLegalConditions { get { return WebDriver.FindElementByCssSelector("[for='CONTROLGROUPREGISTERVIEW_LegalConditionsCheckbox']"); } }

        private IWebElement buttonSubmit { get { return WebDriver.FindElementById("CONTROLGROUPREGISTERVIEW_LinkButtonSubmit"); } }

        private By _buttonSubmit { get { return By.Id("CONTROLGROUPREGISTERVIEW_LinkButtonSubmit"); } }

        // Functions
        public RegisterPage FillForm() {
            string password = "T_%contr#190";

            new WebDriverWait(WebDriver, TimeSpan.FromSeconds(WaitTimeout)).Until(CustomExpectedConditions.ElementIsVisible(_buttonSubmit));
            formFirstName.SendKeys(Helpers.GenerateFirstName(8));
            formLastName.SendKeys(Helpers.GenerateLastName(8));
            formEmail.SendKeys("test@test.com");
            formPassword.SendKeys(password);
            formPasswordConfirm.SendKeys(password);

            SelectQuestions(0, 10);
            formFirstQuestionAnswer.SendKeys(Helpers.GetRandomString(10));
            formSecondQuestionAnswer.SendKeys(Helpers.GetRandomString(6));
            checkboxPromo.Click();
            Jse2.ExecuteScript("arguments[0].click();", checkboxLegalConditions);
            WebDriver.Navigate().GoToUrl("https://www.vueling.com");
            return this;
        }

        public RegisterPage SelectQuestions(int randomFrom, int randomTo) {
            SelectElement selectFirstQuestion = new SelectElement(formViewFirstQuestion);
            SelectElement selectSecondQuestion = new SelectElement(formViewSecondQuestion);

            selectFirstQuestion.SelectByIndex(Helpers.GetRandomNumberBetween(randomFrom, randomTo));
            selectSecondQuestion.SelectByIndex(Helpers.GetRandomNumberBetween(randomFrom, randomTo));
            return this;
        }
    }
}