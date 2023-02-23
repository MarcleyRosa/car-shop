# Boas-vindas ao repositório do projeto Car Shop!

API para gerenciar uma concessionária de veículos.
API em TypeScript na arquitetura MSC, aplicando os pilares de POO e utilizando o ODM Mongoose para se conectar com um banco de dados MongoDB.


Para realizar o projeto, atente-se a cada passo descrito a seguir.

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório.

# Orientações

<details>
  <summary><strong>🐳 Rodando no Docker vs Localmente</strong></summary>

  ## 👉 Com Docker

  > :information_source: Rode os serviços `node` e `db` com o comando `docker-compose up -d`.

  - Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `car_shop` e outro chamado `car_shop_db`.
  - A partir daqui você pode rodar o container `car_shop` via CLI ou abri-lo no VS Code.

  > :information_source: Use o comando `docker exec -it car_shop bash`.

  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > :information_source: Instale as dependências com `npm install` 
  
  - **⚠ Atenção:** Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  <img src="public/remote-container.png" width="800px" >

  <br />
  
  ## 👉 Sem Docker

  > :information_source: Instale as dependências com `npm install`
  
  **⚠ Atenção:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  <br>
</details>

<details>
  <summary><strong>‼ Para rodar o projeto</strong></summary>

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:MarcleyRosa/car-shop.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd car-shop`

  2. Instale as dependências

  - `npm install`


  ##### Estrutura das pastas dentro de `src`

  ```tree
  .
  ├── src/
  │   ├── Controllers/
  │   ├── Domains/
  │   ├── Exceptions/
  │   ├── Interfaces/
  │   ├── Middlewares/
  │   ├── Models/
  │   ├── Routes/
  │   ├── Services/
  │   ├── util/
  │   └── ...
  ├── tests/
  │   ├── unit/
  |   │      ├── Services/
  |   │      ├── ...
  |   └── ... 
  └── ...
  ```

  <br>
</details>

# Exemplo

## É possível cadastrado um carro atraves da rota /cars



- Os atributos necessários para criar um carro estão na tabela:

| Atributos | Descrição |
| :-------: | :-------- |
| `id`   | _String_ contendo id do veículo |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo deve ser opcional e se não passado, deve ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `doorsQty` | _Number_ contendo quantidade de portas de um carro |
| `seatsQty` | _Number_ contendo quantidade de assentos de um carro |

- O corpo da requisição poderá seguir o formato abaixo:

```json
{
  "model": "Fiat Uno",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 12.990,
  "doorsQty": 8,
  "seatsQty": 6
}
```
