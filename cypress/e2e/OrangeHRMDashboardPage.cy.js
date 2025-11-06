import loginPage from '../support/loginPagePOM';
import Data from '../fixtures/Data.json';
import dashboardPage from '../support/dashboardPagePOM';

describe('OrangeHRM POM Login Page', () => {

  beforeEach(() => {
    dashboardPage.visitlogin()
  })

  it('TC_Dashboard_001 - Check Dashboard Page', () => {
    loginPage.inputUsername(Data.loginValid.username)
    loginPage.inputPassword(Data.loginValid.password)
    loginPage.clickloginButton()
    dashboardPage.checkattendanceWidget()
    dashboardPage.checktodolistWidget()
    dashboardPage.checkquicklaunchWidget()
    dashboardPage.checkbuzzWidget()
    dashboardPage.checkonleaveWidget()
    dashboardPage.checkdisunitWidget()
    dashboardPage.checkdislocWidget()
    dashboardPage.ohrmlink()
    })

  it('TC_Dashboard_002 - Check Side Menu', () => {
    loginPage.inputUsername(Data.loginValid.username)
    loginPage.inputPassword(Data.loginValid.password)
    loginPage.clickloginButton()
    dashboardPage.checkMenu()
    dashboardPage.clickmenuButton()
    })

  it('TC_Dashboard_004 - Check Fungsi Search Bar', () => {
    loginPage.inputUsername(Data.loginValid.username)
    loginPage.inputPassword(Data.loginValid.password)
    loginPage.clickloginButton()
    dashboardPage.checksearchbar()
  })

  it('TC_Dashboard_003 - Check User Menu', () => {
    loginPage.inputUsername(Data.loginValid.username)
    loginPage.inputPassword(Data.loginValid.password)
    loginPage.clickloginButton()   
    dashboardPage.checkUserDropDown()
    })

});
