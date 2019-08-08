# Crypto Dashboard
A Full-stack JS Implementation For Crypto Dashboard

#### Steps to start the application

1. Set `CRYPTO_API_KEY` in file `config/default.js` as your Crypto API Key

2. `npm i` : Install packages 

3. `npm run start-server` : Run server in port 4576

4. `npm run start` : Run client side with webpack-dev-server

#### Database configurations
1. `docker-compose up` : to create our local docker server for the database service
2. Please create databases in the locally created database server:
    1. `dashboard_db` : for the **normal** run of the server 
    1. `dashboard_db_test` : for the **test** run of the server 

#### Other scripts

* `npm test` : Run tests for client
* `npm test-server` : Run tests for client

#### License

[MIT licensed](./LICENSE).
