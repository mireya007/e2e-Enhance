# Enhance test cypress

Automation Test

**Installation steps:**

0) Navigate to the project directory folder

1) run in the terminal: npm install to install all the packages in package json.

2) open the GUI with : npx cypress open




**Aside notes:**

UI automation testing framework based on Cypress+Mocha+Node.js.

The main features of this demo framework are:

1.Page-object pattern based. The benefits are easy to maintain and refactor the page object and the test.

2.Stable,Fast and easy to maintain. By the nature of Cypress, the running process is quite stable and pretty fast than Selenium. The code is more simpler than the code when using selenium.

3.Data-driven. Store test data into json files to improve the maintainability and to reduce duplicated code.

4.Taken Shortcuts. Login and prepare test data programmatically without UI to speed up the running process.

5.BDD based. So it’s quite easy to integrate to Cucumber.
What’s more, Environment configurable to support different testing environments. This framework could integrate to Jenkins by CLI command, could generate testing report, could take screen shot when failing etc.


Backlog & Historical Notes:

//Previous comparison with Cypress & Selenum: no tool is perfect, so we neen to use both Cypress and Selenium. 

//fast, build in the apps, 50 commands. no webdriver

//could wait automatically

//easy to maintain. new tag to locate elements

//short cut, bypass login, imaging we have 1,000 login page could bypass.

//don't support cross brower.


