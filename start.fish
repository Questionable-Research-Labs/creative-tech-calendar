#!/usr/bin/fish

cd (dirname (status -f))

echo "Installing required Node version"
nvm install
npm install --global yarn
set NODE_ENV production

echo "Installing dependices"
yarn install
echo "Building"
yarn build:prod
echo "Starting"
pm2 start index.js --name geekonical
sudo /home/server/scripts/reloadNGINX.sh