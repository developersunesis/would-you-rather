# Would You Rather
This is a single-page app, final assessment project for Udacity's React Redux course. This project postulates the use of React Native dom to create a simple poll/voting system. The projects shows the use of React, Component, Router, React States, Functional Components, React props, Redux etc.

## Get Started

To get started, clone/pull the project and then:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Source Files
```bash
── src
    ├── actions # Contains all the actions needed for the redux operations
        ├── authedUser.js
        ├── filterType.js
        ├── questions.js
        ├── shared.js
        ├── users.js
    ── components # all dom components and static html contents are provided in this folder
        ├── App.js # This is the root of your app. Contains static HTML right now and he BrowserRouter.
        ├── AnsweredPoll.js
        ├── Dashboard.js
        ├── LeaderBoard.js
        ├── Login.js
        ├── LoginItem.js
        ├── Nav.js
        ├── NewQuestion.js
        ├── Question.js
        ├── Questions.js
        ├── UnansweredPoll.js
        ├── User.js
        ├── ViewPoll.js
    ├── middlewares
        ├── index.js
        ├── logger.js # The changes that occur in our store are logged from this middleware
    ├── index.css # Styles for your app. Feel free to customize this as you desire.
    ├── reducers # contains our pure functions to update our store
        ├── authedUser.js
        ├── questions.js
        ├── index.js
        ├── users.js
    ├── utils # Contains the api calls required for the app
        ├── _DATA.js
        ├── api.js
```
