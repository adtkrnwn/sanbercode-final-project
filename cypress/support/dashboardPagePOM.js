import Data from '../fixtures/Data.json';
class dahsboardPage{
    
    visitlogin(){cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');}

    visitDashboardurl(){cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');}

    ohrmlink(){cy.contains('OrangeHRM, Inc')
                 .should('have.attr', 'href')
                 .and('include', 'orangehrm.com');}

    clickmenuButton(){cy.get('.oxd-main-menu-button')
                        .should('exist')
                        .click()}

    checkattendanceWidget(){cy.get('.orangehrm-dashboard-widget:has(p:contains("Time at Work"))')
                              .each(($widget) => {
                               cy.wrap($widget).within(() => {
                                cy.get('.orangehrm-attendance-card').should('exist')
                                cy.get('.orangehrm-attendance-card-bar').should('exist')
                                cy.get('.orangehrm-attendance-card-summary').should('exist')})})}

    checktodolistWidget(){cy.get('.orangehrm-dashboard-widget:has(p:contains("My Actions"))')
                            .each(($widget) => {
                             cy.wrap($widget).within(() => {
                              cy.get('.orangehrm-todo-list').should('exist')
                              cy.get('.orangehrm-todo-list-item').should('exist')})})}

    checkquicklaunchWidget(){cy.get('.orangehrm-dashboard-widget:has(p:contains("Quick Launch"))')
                               .each(($widget) => {
                                cy.wrap($widget).within(() => {
                                 cy.get('button[title="Assign Leave"]').should('exist')
                                 cy.get('button[title="Leave List"]').should('exist')
                                 cy.get('button[title="Timesheets"]').should('exist')
                                 cy.get('button[title="Apply Leave"]').should('exist')
                                 cy.get('button[title="My Leave"]').should('exist')
                                 cy.get('button[title="My Timesheet"]').should('exist')})})}

    checkbuzzWidget(){cy.get('.orangehrm-dashboard-widget:has(p:contains("Latest Posts"))')
                        .each(($widget) => {
                         cy.wrap($widget).within(() => {
                          cy.get('.orangehrm-buzz-widget-card').should('exist')})})}

    checkonleaveWidget(){cy.get('.orangehrm-dashboard-widget:has(p:contains("Leave Today"))')
                           .each(($widget) => {
                            cy.wrap($widget).within(() => {
                             cy.get('.orangehrm-dashboard-widget-body').should('exist')})})}
                             
    checkdisunitWidget(){cy.get('.orangehrm-dashboard-widget:has(p:contains("Sub Unit"))')
                           .each(($widget) => {
                            cy.wrap($widget).within(() => {
                             cy.get('.emp-distrib-chart').should('exist')
                             cy.get('span[title="Engineering"]').should('exist')
                             cy.get('span[title="Administration"]').should('exist')
                             cy.get('span[title="Client Services"]').should('exist')
                             cy.get('span[title="Human Resources"]').should('exist')
                             cy.get('span[title="Unassigned"]').should('exist')})})}

    checkdislocWidget(){cy.get('.orangehrm-dashboard-widget:has(p:contains("Location"))')
                          .each(($widget) => {
                           cy.wrap($widget).within(() => {
                            cy.get('.emp-distrib-chart').should('exist')
                            cy.get('span[title="New York Sales Office"]').should('exist')
                            cy.get('span[title="Texas R&D"]').should('exist')
                            cy.get('span[title="Unassigned"]').should('exist')})})}

    checkMenu(){cy.get('.oxd-sidepanel-body').should('exist')
                cy.get('.oxd-brand-banner').should('exist')
                cy.get('.bi-chevron-left').should('exist')
                cy.get('.oxd-main-menu').should('exist')
                cy.get('.oxd-main-menu-search').should('exist')
                cy.get('.bi-chevron-left').click()
                cy.get('.oxd-sidepanel.toggled').should('exist')
                cy.get('.bi-chevron-right').should('exist')}
    
    checksearchbar(){cy.get('.oxd-sidepanel-body').should('exist')
                     cy.get('.oxd-brand-banner').should('exist')
                     cy.get('.bi-chevron-left').should('exist')
                     cy.get('.oxd-main-menu').should('exist')
                     cy.get('.oxd-main-menu-search').should('exist')
                     cy.get('.oxd-input--active').click().type("directory")
                     cy.contains('.oxd-main-menu-item--name', 'Directory').should('be.visible')}
                
    checkUserDropDown(){cy.get('.oxd-userdropdown').click()
                        cy.get('.oxd-dropdown-menu').should('exist')
                        cy.get('.oxd-dropdown-menu').contains("About").click()
                        cy.get('.orangehrm-about').should('be.visible')
                        cy.get('.oxd-dialog-close-button').click()
                        cy.get('.oxd-userdropdown').click()
                        cy.get('.oxd-dropdown-menu').contains("Support").click()
                        cy.get('.orangehrm-support').should('be.visible')
                        cy.get('.oxd-userdropdown').click()
                        cy.get('.oxd-dropdown-menu').contains("Change Password").click()
                        cy.get('.orangehrm-main-title').contains("Update Password").should('be.visible')
                        cy.get('.oxd-userdropdown').click()
                        cy.get('.oxd-dropdown-menu').contains("Logout").click()
                        cy.get('.orangehrm-login-slot-wrapper').should('exist')
    }
                           
}
export default new dahsboardPage();