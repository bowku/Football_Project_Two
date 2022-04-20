CRUD Application - Football Player Project
====================================
Mohamed Jaleil

Google Slides Presentation link :

Coverage : 97.9%

## Contents:
* [Introduction](#Introduction)
* [Planning Resources](#Planning-Resources)
* [Databases](#Databases)
* [Back-End](#Back-End)
* [Testing](#Testing)
* [Front-End](#Front-End)


Introduction:
-------------

The aim of the project was to select a hobby in which we can use CRUD functionality by connecting the back-end to the front-end by applying the content taught to us during the training. 

Project Management - Jira was used to manage the project with various user stories and tasks with the correct format, acceptance criteria, user story points and MosCow prioritisation. There was also some Jira-GitHub Integration.

Version Control - GitHub and Git was used to commit and use the feature branch models and creating pull requests to close the branches and finally merge into main.

Databases - A relational database was used to store the contents of the project generated from the frontend by using the backend.

Back-End - Springboot project was created and followed the OOP principles.

Testing - 97.9% test coverage by using integration testing MockMVC.

Front-End Development - Front-end website created by using html,css and javascript. Bootstrap was used as the main source of design.

* * * * *

### Planning Resources:

First I will be talking about project management - Jira was used to create a Kanban board where user stories was allocated to its own epics and tasks. Some of the user stories was blocked until the stories had been completed. There was story point estimates included and MosCow prioritisation to assess which tasks and user stories are more urgent than others. The user stories also had acceptance criteria for situations where the condition has been met. The use of Jira-GitHub integeration will also be included in the example below:

![Img](/Documentation/Jira/UserStory.png)
![Img](/Documentation/Jira/MoscowPriority.png)

Below is how my current sprint looks with to-do, ongoing and completed user-stories and tasks. The roadmap shows the progress and timeframe of the current sprint.

![Img](/Documentation/Jira/Sprint.png)
![Img](/Documentation/Jira/Roadmap.png)

below is GitHub's feature branch model and pull requests. This is where the code is fully integrated into a Version Control.

![Img](/Documentation/Jira/feature-branch.png)

Finally there was a risk assessment created before any starts to technical work. I started with an excel file then generated a risk matrix.

![Img](/Documentation/RiskAssessment/riskassessment.png)
![Img](/Documentation/RiskAssessment/RiskAssessmentMatrix.png)



* * * * *

### Databases:

The main databases that was used throughout my project was MySQL server and local H2 database which was setup in the backend under application properties. The H2 database is primarily used for the integration testing and MySQL server is used to store data from our crud application.

The below image is the ERD - Entity Relationship Diagram which highlights the properties and links in the database to other entities:

![Img](/Documentation/SQL/ERD.png)

Finally below image is a preview of MySQL workbench to use select manipulations to check if our application is working accordingly.
![Img](/Documentation/SQL/SQL.png)


* * * * *

### Back-End:

The back-end was heavily focused on Java by the use of the SpringBoot Framework in an OOP manner. There was manipulations of implementations, extends, interfaces and classes with the correct mappings such as Post,Get,Put and Delete to have a bijection to CRUD. The Get mapping was then also used as an extension to find not just by id, but with name, shirt number and also team.

below is an example of some of the code in Java:
![Img](/Documentation/backend/backendCode.png)

Then to compile everything a Jar file was made by using the mvn clean package in the gitbash terminal for universal use:

![Img](/Documentation/backend/fatjar.png)
![Img](/Documentation/backend/fatjarexecuted.png)

Finally to have an idea of how the classes and interfaces are used and how OOP is used, below outlines the UML - Unified Modeling Language:

![Img](/Documentation/UML/UMLupdate.png = 250x250)



* * * * *

### Testing:

Once all the back-end was completed, MockMVC was used as the primary source of integration testing. This was used to mock the Controller class and give it dummy HTTP requests.

all tests and the extension get functions was successful and ended with a 97.9% test coverage.

![Img](/Documentation/Testing/coverage.png)
![Img](/Documentation/Testing/TestsMVC.png)
![Img](/Documentation/Testing/IntegrationTesting.png)

This is a preview of the test codes:

![Img](/Documentation/Testing/IntegrationTesting.png)

* * * * *

### Front-End:

The front end used HTML,CSS and JavaScript. The styling was primarily the Bootstrap framework such as NavBar, fonts, borders and different button styles.

Javascript used axios for the API integration and made sure everything that was being presented as the output on the website was structured in a clear manner. The Navbar had buttons which was linked to other HTML files, so create, read, update, delete there was seperate JavaScript and HTML files associated to them. 


![Img](/Documentation/frontend/create2.png)
![Img](/Documentation/frontend/readbyid.png)
![Img](/Documentation/frontend/readbyteam.png)
![Img](/Documentation/frontend/update2.png)
![Img](/Documentation/frontend/delete2.png)

