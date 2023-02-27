# appointments
React application

I am currently working on a React project, so I figured I'd better learn it.
So I am following along with the book "Mastering React Test Driven Development",
and keeping the results in this repository.

## Project initialization
npm init
## use jest as test command
npm install --save-dev jest
## Version control initialization
git init
echo "node_modules" > .gitignore
## Installing react and support libraries
npm install --save react react-dom
npm install --save-dev @babel/preset-env @babel/preset-react
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime

## Adding babel support
.babelrc
{
"presets": ["@babel/env", "@babel/react"],
"plugins": ["@babel/transform-runtime"]
}

## Initial push to git
git remote add origin git@github.com:JDLuke/appointments.git
git branch -M main
git push -u origin main

## At this point the TDD cycle can begin, right up until it's time to run the UI...

## Installing webpack for local runs
npm install --save-dev webpack webpack-cli babel-loader
Modify package.json to add build script
Add webpack.config.js
Create dist/index.html
## Now we can do local testing
npm run build
Open dist/index.html in browser or run 


npm install --save-dev jest-matcher-utils
