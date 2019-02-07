[![version (scoped)](https://img.shields.io/badge/version-1-blue.svg)](https://github.com/alexdisdier/react-add-on)

# Synopsis

This is a Currency Converter Web Application built with React.

![screenshot of the Currency Converter Web App](/screenshot.jpg?raw=true "screenshot of the Currency Converter Web App")

## Usage example

See a live version running this template - https://alexdisdier.github.io/currency-converter/

## Functionalities

- Simultaneously converts any currency available in the dropdown.
- Validation message in case the user enters a non number character.
- Round up to the 3 decimals.

## 🚧 Version 2

- Use a currency api instead of a static rates.json file
- A mobile version

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
│   │   ├── Validation.css
│   │   └── Validation
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
- This was developped white attending a FullStack Developer Bootcamp [@Le Reacteur](https://www.lereacteur.io)
- Deploy React to github pages [codeburst](https://codeburst.io/deploy-react-to-github-pages-to-create-an-amazing-website-42d8b09cd4d)
- [shields badges](https://shields.io/#/)