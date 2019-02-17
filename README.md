# Synopsis

This is a Currency Converter Web Application built with React.

![screenshot of the Currency Converter Web App](/screenshot.jpg?raw=true "screenshot of the Currency Converter Web App")

## Usage example

See demo - https://alexdisdier.github.io/currency-converter/

## ✅ Functionalities

- Simultaneously converts any currency available in the dropdown.
- Validation message in case the user enters a non number character.
- Round up to the 3 decimals.
- Use of a Currency Rates API called (data.fixer)[http://data.fixer.io]

## 🚧 Functionalities

- Use Heroku to bypass http and making the api accessible.
- Make it more mobile friendly and turn it into a web app.

## Directory Structure

```bash

currency-converter
├── public
├── src
│   ├── assets
│   │   ├── css
│   │   ├── img
│   │   ├── resources
│   ├── components
│   │   ├── Card
│   │   ├── Footer
│   │   ├── Header
│   │   ├── Logo
│   │   ├── Menu
│   │   └── Title
│   ├── Validation
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── serviceWorker.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── screenshot.jpg

```

## Running the project

Clone this repository :

```bash
git clone https://github.com/alexdisdier/currency-converter.git

cd currency-converter
```

Start the server:

```bash
npm start
```

Build the project

```bash
npm run build
```

## Built With

- html
- scss
- [JavaScript](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [React.js](https://reactjs.org/docs/hello-world.html)
- [Create React App](https://facebook.github.io/create-react-app/docs/getting-started)

## Acknowledgments

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Deploy React to github pages [codeburst](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d)
- Based on (XE currency design[https://www.xe.com/currencyconverter/]).
