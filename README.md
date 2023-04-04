## Description

Foi criado utilizando o Nestjs e graphql. Estou implementando também as chamadas em Rest. 

Ele se encontra na AWS, [link](https://dock.tonyprojects.net/graphql) para a utilização do playground como teste

Estou terminando a implementação dos testes unitários. 

Todas as rotas se encontram protegidas por um Guard, que checa a validade do token.

Foi implementado utilizando um MongoDB na Atlas que está conectado com a aplicação na AWS.

Para criação das váriaveis de ambiente é necessário a passagem do valor do ambiente selecionado , por exemplo:

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
