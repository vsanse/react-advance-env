
# react-advance-env [![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/Vishu-Chaudhary/react-advance-env)

A plug and play react setup saves you time to configure all sort of things. 
It comes preconfigured with:
- redux
- firebase
- sass ( with bootstrap like responsive framework pre-configured)
- babel 7 
- webpack 4.

#### To get started

clone git repo : 

```
git clone https://github.com/Vishu-Chaudhary/react-advance-env.git
```

Make it your own:

```
rm -rf .git && git init && npm init
```


install dependencies: 
```
npm install
```

start app :
```
npm start 
```
and you are ready to go live.

### Project structure
```
├── config
└── src
    ├── components
    │   ├── container
    │   └── presentational
    ├── firebase
    ├── static
    │   ├── fonts
    │   └── images
    ├── store
    │   └── user
    ├── stylesheets
    │   ├── dependency
    │   └── partials
    └── UiConfigs
    ├── App.js        // your app's entry point. Handle routing here.
    ├── index.js
    ├── index.html

```
#### config
```
├── config
   ├── webpack.base.config.js   // webpack config for development server
   └── webpack.prod.config.js   // webpack production configuraton 
```

#### src/components

```
├── components
   ├── container
   │   └── Landing.js
   └── presentational
       ├── LandingUI.js
       └── Navigation.js
```

#### src/firebase

```
├── firebase
   ├── auth.js          //  hold methods for sign in, signup, forget password etc.
   ├── config.js       
   ├── dbactions.js    // hold db actions like add to db, update etc.
   ├── dbEndpoints.js  // holds db endpoints like users, posts etc.
   └── index.js
```
firebase/config.js: holds your firebase configurations like api and all. [check here](https://firebase.google.com/docs/web/setup)

firebase/index.js: gateway to access config, auth and firebase db.

#### src/store:

```
 store
 ├── index.js             
 ├── initialState.js
 ├── rootReducer.js
 └── user                 // component related actions,types and reducer
     ├── actions.js
     ├── reducer.js
     └── types.js
```
Holds all logic for your redux store.

#### src/stylesheets

```
── stylesheets
   ├── dependency
   │   ├── _grid.scss    
   │   ├── _mixins.scss
   │   ├── _typography.scss
   │   └── _variables.scss
   └── partials
   |   ├── _app.scss
   |   ├── _common.scss
   |   ├── _landing.scss
   |   └── _navigation.scss
   ├── main.scss

```
This  holds all the scss and main.scss combine all that together.

_grid.scss: creates bootstrap like framework and can be extended as per your choice 

_typography.scss: holds all the fonts related config

_mixins_scss: holds media queries and other common configs

_variables.scss: holds color codes etc.

###### partials: contains component replated scss files

#### UiConfigs:
```
── UiConfigs
    └── routes.js
```
This directory is for holding all your constants used throughout the app.


Enjoy :smile: :+1:
