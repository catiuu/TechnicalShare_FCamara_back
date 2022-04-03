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
