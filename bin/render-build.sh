#!/usr/bin/env bash
# exit on error
set -o errexit

# builds the front end code
set -x
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

# builds the back end code
bundle install
rails db:create
rails db:migrate
rails db:seed # if you have seed data, run this command for the initial deploy only
