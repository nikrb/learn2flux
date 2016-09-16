working through learncode.academy "react JS tutorial" on youtube

checkout the different branches, the names roughly match the videos.

Starting with my finally cobbled together server with backend to mongo (master branch). This starting point has nothing to do with the tutorials, sorry about that! Just use the other branches.
There is NO server side rendering here ... I don't think so anyway haha!
To start:

1. get mongo running
2. run the server (nodemon to update on change)
   unixy: npm start
   dos  : npm run dos-start
3. run webpack to watch for front end changes
   webpack --watch

On the way here ...
trying to run backend api with webpack
finding process:
lsof -i tcp:$PORT

run webpack for frontend
npm start

run server as normal
npm run start-api

init comments in mongodb:
mongo scripts/init-mongo.js


react getting started:
https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Setting-Up-A-React-ES6-Webpack-Project

running webpack for react from cloud9:
```
webpack-dev-server --port $PORT --host $IP  --content-base dist/
```

*note $port and $ip seem to be already defined in workspace.*

react sass template.

point browser at:
https://react-sass-template-knik.c9users.io/



     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--,
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    -----------------------------------------------------------------


Welcome to your Node.js project on Cloud9 IDE!

Based on the cloud9 ide nodejs chat server starting template.
