import loginPage from '../support/loginPagePOM';
import Data from '../fixtures/Data.json';
import resetPwPage from '../support/resetPwPagePOM'; 

describe('OrangeHRM POM Login Page', () => {

  beforeEach(() => {
      loginPage.visit();
  });
  
  it('TC_FORGOT_002 - Reset Password dengan Username Valid', () => {
    loginPage.forgotLinkClick();
    resetPwPage.inputUsername(Data.loginValid.username);
    resetPwPage.interceptsendReset();
    resetPwPage.resetButton();
    resetPwPage.waitsendReq();
    resetPwPage.resetvalidcreds();
  });

    it('TC_FORGOT_003 - Reset Password dengan Username Kosong', () => {
    loginPage.forgotLinkClick();
    resetPwPage.resetButton();
    resetPwPage.unameReqMessage();
  });

    it('TC_FORGOT_003 - Verifikasi Link OrangeHRM Reset Password Page', () => {
    loginPage.forgotLinkClick();
    resetPwPage.ohrmlink();
  });

    it('TC_FORGOT_004 - Check Fungsi Cancel Button', () => {
    loginPage.forgotLinkClick();
    resetPwPage.cancelButton();
  });

});