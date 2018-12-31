# mongodb-joyride

This repository is an example of the basics and complex scenarios of using mongodb and express together in a production node environment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- node (8.11.1)
- nvm
- mongodb
- robo 3T

### Installing

After cloning repository, install node packages.

```
npm install;
```

Start mongo. The command be run anywhere on the system.

```
mongod;
```

The node environment is now ready to go.

## Running the tests

The test suite used is mocha. All the tests are covering the express routes created and validating against a test database for assertions.

To run tests, execute the following in the terminal.

```
npm run test;
```

## Built With

- [express.js](https://expressjs.com/) - The web framework used
- [MongoDB](https://www.mongodb.com/) - Database used
- [mongoose](https://mongoosejs.com/) - MongoDB object modeling
- [body-parser](https://www.npmjs.com/package/body-parser) - Necessary for express to parse data from client into req.body
