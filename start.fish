#!/usr/bin/fish
nvm use
set NODE_ENV=production
echo "Installing dependices"
yarn install
yarn build:prod
sudo /home/server/scripts/reloadNGINX.sh