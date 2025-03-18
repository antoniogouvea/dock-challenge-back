## Description

It was created using Nestjs and graphql. I am also implementing the calls in Rest.

It is located on AWS

All routes are protected by a Guard, which checks the validity of the token.

It was implemented using a MongoDB in Atlas that is connected to the application in AWS.

To create the environment variables, it is necessary to pass the value of the selected environment, for example:
```bash
$ touch environment/development.env
$ npm run start:dev
```

```bash
Login: dock@dock.com
Password: dockTeste
```


[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## License

Nest is [MIT licensed](LICENSE).
