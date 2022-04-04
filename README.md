# FCamara - Technical Share

## Instruções

1. Clonar o repositório

```sh
   git clone https://github.com/catiuu/TechnicalShare_FCamara
```

2. Alterar arquivo .env com as configurações do seu banco de dados.

3. Instalando os pacotes

```sh
    npm install
```

4. Rodar migrations

```sh
    npm run migrate
```

-OU-

```sh
    npx sequelize db:migrate
```

4. Rodar seeders

```sh
    npm run seed
```

-OU-

```sh
    npx sequelize db:seed:all
```

# Dia 04/04

- [x] Melhorando a estrutura do projeto com criação do diretório API e inclusão das pastas routes, controllers, services.

- [x] Criação de rodas '/admin' para visualização das tabelas no Postman.  
      obs: Usada somente para fins de desenvolvimento, uma vez que facilita a visualização do que já está inserido no BD.

- [] EM DESENVOLVIMENTO: Até amanhã concluo as queries que iremos usar para fazer a funcionalidades do projeto (login, busca funcionário, agendamentos);
