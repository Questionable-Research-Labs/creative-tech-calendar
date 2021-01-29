#!/usr/bin/fish
nvm use
echo "Installing dependices"
yarn install
yarn build
sudo /home/server/scripts/reloadNGINX.sh