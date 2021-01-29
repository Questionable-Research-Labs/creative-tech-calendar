#!/usr/bin/fish
nvm use
echo "Installing dependices"
yarn global add pm2 y
yarn install
yarn build