import loginPage from '../support/loginPagePOM';
import Data from '../fixtures/Data.json';
import resetPwPage from '../support/resetPwPagePOM'; 

describe('OrangeHRM POM Login Page', () => {

  beforeEach(() => {
    loginPage.visit();
  });

  it('TC_LOGIN_001 - Login valid', () => {
    loginPage.inputUsername(Data.loginValid.username);
    loginPage.inputPassword(Data.loginValid.password);
    loginPage.interceptLocations();
    loginPage.clickloginButton();
    loginPage.waitLocations();
    loginPage.loginvalidcreds();
  });

  it('TC_LOGIN_002 - Login dengan password salah', () => {
    loginPage.inputUsername(Data.loginValid.username);
    loginPage.inputPassword(Data.invalidPasssword.password);
    loginPage.interceptValidate();
    loginPage.clickloginButton();
    loginPage.waitValidate();
    loginPage.psswdinvalMessage();
  });

  it('TC_LOGIN_003 - Login dengan username salah', () => {
    loginPage.inputUsername(Data.invalidUsername.username);
    loginPage.inputPassword(Data.loginValid.password);
    loginPage.clickloginButton();
    loginPage.unameinvalMessage();
  });

  it('TC_LOGIN_004 - Login username dan password kosong', () => {
    loginPage.clickloginButton();
    loginPage.bothUPnotvalidMessage();
  });

  it('TC_LOGIN_005 - Login dengan password kosong', () => {
    loginPage.inputUsername(Data.invalidUsername.username);
    loginPage.clickloginButton();
    loginPage.psswdReqMessage();
  });

  it('TC_LOGIN_006 - Login dengan username uppercase', () => {
    loginPage.inputUsername(Data.upperUsername.username);
    loginPage.inputPassword(Data.loginValid.password);
    loginPage.clickloginButton();
    loginPage.loginvalidcreds();
  });

  it('TC_LINK_001 - Verifikasi hyperlink OrangeHRM', () => {
    loginPage.ohrmlink();
  });

  it('TC_SOCIAL_001 - Verifikasi LinkedIn icon', () => {
    loginPage.linkedinIcon();
  });

  it('TC_SOCIAL_002 - Verifikasi Facebook icon', () => {
    loginPage.facebookIcon();
  });

  it('TC_SOCIAL_003 - Verifikasi Twitter/X icon', () => {
    loginPage.xIcon();  
  });

  it('TC_SOCIAL_004 - Verifikasi YouTube icon', () => {
    loginPage.youtubeIcon();
  });
  
  it('TC_FORGOT_001 - Verifikasi link Forgot Password', () => {
    loginPage.forgotLinkClick();
    loginPage.checkForgoturl();
  });

});