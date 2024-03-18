# CC Payment App
This is an app about a hot sale store and payment credit card checkout
## Technical implementation
- **Login with firebase:** I implemented a real login with Firebase the data manage of login is real, you have the option for creating account by email/password or by your google account, this information will be stored in firebase cloud.
- **Store with redux:** I created a store with two main states, first one it's about the login, then it's possible to know if user is logged(authenticated) and user's information, second one manage the information about payment, the status of payment, and relevant information for making this process.
- **Store in LocalStorage:** I implemented a hook that update in real time information filled in form about payment
- **Form creation with react-hook-form:** I used react-hook-form for creating, managing and use different forms inside app
- **CSS styling with Mui:** I used Mui for creating visual components, make layout and stilying css.
## Built With
- React
- Vite
- Redux
- Firebase
- Mui
- React hook form
- Jest
## Usage
#### **Register:** First of all it's necesarry to create an account, don't worry about proccess you can create it by google, or you can put fake data into register form it's not neccesary confirm the mail(you need to pass validations of form.
#### **Login:** If your account was created correctly the app redirect to main page(hot sale store) but if you made logout and you want yo login again you need to fill login form, this will be check information login in firebase then you need to put correct information
#### **Buy section:** In main page you will see different products and their information and button for pay product that you want
#### **Payment form:** In this form yo need to put information about payment, in this case information about credit card(don't worry you can put fake information) this information will be validated, then you need to put it correctly, about credit card number you can know if you a re paying with visa or mastercard, logo will be displayed while you typing
#### **Summary :** in this modal you will see the summary information about your purchase and button for paying, if click it in pay button this one will be disabled while your payment is verified
#### **Back to main page :** For this final part I created a simulation of payment with a random probability, then you can have 2 different toast error, if yor payment was successful or failed and try again as well if you want to leave try logout
## Prerequisites
#### **Node.js:** The project is built with modern JavaScript features and requires Node.js. It's recommended to use the latest LTS (Long-Term Support) version of Node.js. You can download it from Node.js official website.
#### **npm or yarn:** You will need npm or yarn to install dependencies and run scripts defined in package.json. npm is installed with Node.js by default. If you prefer yarn, you can download it from Yarn's official website.
#### **Vite:** The project uses Vite for fast development and building. It is included as a dev dependency, so no global installation is necessary as long as you use npm scripts defined in the package.json.
#### **Git:** If the project is hosted in a version control system, you will need Git to clone the repository. You can download Git from Git's official website.
## Installation
```cmd
git clone https://github.com/DnlAlejandro/CreditCardPayment.git
```
```cmd
cd payment-cc-app
```
```cmd
yarn install
```
```cmd
yarn dev
```
For testing purposes
```cmd
yarn test
```
![image](https://github.com/DnlAlejandro/CreditCardPayment/assets/44418909/9da8e546-0ae2-4646-a47a-c54539c8776e)

