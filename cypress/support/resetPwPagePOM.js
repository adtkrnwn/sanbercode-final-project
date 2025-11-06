import Data from '../fixtures/Data.json';
class resetPage{
    
    inputUsername(username){cy.get('input[name="username"]')
                              .type(username);}
   
    resetButton(){cy.get('button[type="submit"]')
                         .click();}
   
    resetvalidcreds(){cy.get('h6.orangehrm-forgot-password-title')
                        .contains('successfully')
                        .should('be.visible');}

    unameReqMessage(){cy.get('input[name="username"]')
                        .parents('.oxd-input-group')
                        .find('.oxd-input-field-error-message')
                        .should('have.text', 'Required');}

    ohrmlink(){cy.contains('OrangeHRM, Inc')
                 .should('have.attr', 'href')
                 .and('include', 'orangehrm.com');}

    interceptsendReset(){cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset')
                           .as('sendpasswordreset');}

    waitsendReq(){cy.wait('@sendpasswordreset');}

    cancelButton(){cy.get('button[type="button"]')
                     .click()
                     .url()
                     .should('include', '/login');}


}
export default new resetPage();