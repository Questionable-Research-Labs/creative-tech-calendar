#!/usr/bin/fish
nvm use
set NODE_ENV=production
echo "Installing dependices"
yarn install
echo "Building"
yarn build:prod
echo "Starting"
pm2 start index.js --name webHookManager
sudo /home/server/scripts/reloadNGINX.sh