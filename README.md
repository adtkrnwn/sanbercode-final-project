Sanbercode Final Project — OrangeHRM Automation Testing (Cypress)

Project Overview
Project ini merupakan Final Project Sanbercode Quality Assurance yang berfokus pada Automated Web Testing menggunakan Cypress.  
Aplikasi yang dites adalah [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com), sebuah sistem HRM berbasis web.  
Testing diimplementasikan menggunakan Page Object Model (POM).

---

Test Coverage
Project ini mencakup 3 fitur utama:
1. Login Page
File: `OrangeHRMloginPage.cy.js`
- TC_LOGIN_001 – Login dengan kredensial valid  
- TC_LOGIN_002 – Login dengan password salah  
- TC_LOGIN_003 – Login dengan username salah  
- TC_LOGIN_004 – Login tanpa username & password  
- TC_LOGIN_005 – Login tanpa password  
- TC_LOGIN_006 – Login menggunakan username uppercase  
- TC_LINK_001 – Verifikasi hyperlink OrangeHRM, Inc  
- TC_SOCIAL_001 s/d 004 – Verifikasi ikon media sosial (LinkedIn, Facebook, X/Twitter, YouTube)  
- TC_FORGOT_001 – Verifikasi link Forgot Password  

2. Reset Password Page
File: `OrangeHRMresetpwPage.cy.js`
- TC_FORGOT_002 – Reset password dengan username valid  
- TC_FORGOT_003 – Reset password dengan username kosong  
- TC_FORGOT_004 – Verifikasi link OrangeHRM, Inc di halaman Reset Password  
- TC_FORGOT_005 – Verifikasi fungsi tombol Cancel  

3. Dashboard Page
File: `OrangeHRMDashboardPage.cy.js`
- TC_Dashboard_001 – Verifikasi seluruh widget di dashboard:
  - Attendance Widget  
  - To-Do List Widget  
  - Quick Launch Widget  
  - Buzz Widget  
  - On Leave Today Widget  
  - Distribution by Unit Widget  
  - Distribution by Location Widget  
  - Hyperlink OrangeHRM, Inc  
- TC_Dashboard_002 – Verifikasi menu sidebar (expand/collapse)  
- TC_Dashboard_003 – Verifikasi User Menu (dropdown: About, Support, Logout)

Page Object Model (POM)

Project ini menggunakan beberapa file Page Object Model (POM) untuk memisahkan aksi dan verifikasi pada setiap halaman utama di OrangeHRM, yaitu:

- `loginPageElements.js` → berisi seluruh aksi & verifikasi untuk halaman Login Page (input username/password, tombol login, link forgot password, link OrangeHRM, dll).  
- `dashboardPage.js` → berisi method untuk Dashboard Page (verifikasi widget seperti Attendance, Quick Launch, Buzz, Distribution, serta menu sidebar dan user dropdown).  
- `resetPwPage.js` → berisi aksi dan verifikasi untuk Reset Password Page (input username, tombol reset, tombol cancel, dan validasi link OrangeHRM).  

Fixture (Test Data)

Project ini juga menggunakan file fixture untuk menyimpan data uji dalam format JSON, agar pengujian lebih konsisten dan mudah di-maintain.

`Data.json` → berisi data login valid/invalid serta tautan eksternal (LinkedIn, Facebook, X, YouTube).  
File ini digunakan pada skenario login, reset password, dan validasi link di halaman utama.


