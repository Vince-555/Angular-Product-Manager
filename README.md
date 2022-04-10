This is a simple inventory manager app creatend in angular with the ability to have users and add or edit products.

How to set up node server which is required as a backend for this project:
1. Install xammp app and run it.
2. In xammp app start Apache and MySql
3. Open myAdmin http://localhost/phpmyadmin/
4. Create new db with the name nodejs-login
5. Import the file nodejs-login.db found in the Node_server_for_Product_Manager repo
6. Run a cmd in the node server directory and type npm-install (make sure you have node.js installed beforehand)
7. Now type npm install --global nodemon.
8. Type nodemon app.js this will start the server.
9. Open another cmd in the angular project folder and type ng serve.
10. Enjoy !


# Apm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
