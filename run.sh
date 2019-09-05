#!/usr/bin/env bash

printenv | grep "port" --color
#NPM_INSTALL=$(npm install);
#RUN=$(npm run dev);
PORT=${PORT_EXPOSE}


if lsof -Pi :${PORT} -sTCP:LISTEN -t >/dev/null ; then
    echo "port already in use"
    kill $(lsof -t -i:${PORT})
    echo "port has been killed"
fi

if [[ "${NODE_ENV}" = "development" ]] ;then
    echo "Attempting to run application in DEV mode"
    npm run run:dev:debug
fi

if [[ "${NODE_ENV}" = "production" ]] ;then
    echo "Attempting to run application in PROD mode"
    npm run run:prod
fi