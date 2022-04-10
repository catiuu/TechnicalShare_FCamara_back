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

=======
**Repositório de Frontend:** https://github.com/catiuu/TechnicalShare_FCamara_front

**URL da aplicação funcionando**:

## Contribuídoras

<table>
    <tr align="center">
        <td>
            <img src="https://avatars.githubusercontent.com/u/86853033?v=4" height="150px">
        </td>
        <td>
            <img src="https://avatars.githubusercontent.com/u/62453211?v=4" height="150px"></td>
        </td>
        <td>
            <img src="https://avatars.githubusercontent.com/u/85588757?v=4" height="150px"></td>
        </td>
    </tr>
    <tr align="center">
        <td>
        <a href="https://github.com/sucodelarangela">Angela Caldas</a>
        </td>
        <td>
        <a href="https://github.com/ANNEBORTOLI">Anne Bortoli</a>
        </td>
        <td>
        <a href="https://github.com/catiuu">Catiussia Nascimento</a>
        </td>
    </tr>
</table>

08/04 - Anne

- [x] Implementação do hash da senha com Bcrypt para subir seeders no BD;
- [x] Inclusão das colunas "pronouns" e "password" na tabela Users
- [x] Inclusão das skills "Oferece Mentoria" nas skills.
- [x] Criação dos endpoints:
  - achar user por e-mail;
  - editar perfil do usuário;
  - adicionar skill do usuário;
  - deletar skill do usuário;
    > > > > > > > 1c9f62e157622f33959faf6109ebf90555e3a1d6
