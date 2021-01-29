#!/bin/bash
nvm use
echo "Installing dependices"
yarn global add pm2 y
yarn install y
pm2 start index.js --name webHookManager