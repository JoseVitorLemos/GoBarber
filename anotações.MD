# MVC
Model view controller

# path.resolve()
Irá determinar a barra que ele irá ultilizar

# index.js
Arquivo do servidor, arquivo start do servidor

# server.js
Configuração do Express

# Controller
Contêm as regras de negócios

# View
interage entre o controller, vice e versa

# Model
O model é a representação de uma tabela no banco de dados.

# ORM
Com o uso do ORM não será mais preciso usar Query language(QL) Remoção, inserçãom, leitura e atualização não será mais feita com QL, substituindo pela linguaguem javaScript ao realizar essa tarefa.

# init ORM
- yarn add pg || yarn add mysql2
- yarn add sequelize
- yarn add sequelize-cli -D
- npx sequelize init

# npx sequelize migration:create --name=create-users
Cria uma migration dentro da pasta especificada "feito para teste"

# Migrations
Serve para controle de versão para as tabelas do banco de dados.

# npx sequelize db:migrate
Executa a migrate e executa os comandos de da ORM continos dela, no exemplo em específico foi criado 2 tabelas no banco de deados uma contida na migration e outra automatica gerada pela ORM do sequelize.

# yarn add bcryptjs
Essa dependencia vai servir para fazer a criptografia da senha.
- Foi feito um hook: No caso será uma função criada para disparar automaticamente, dependendo de certas ações realizadas no model.
- Ex: No processo de criação de usuário um Hash será feito na senha.
<b>Documentação sequelize hooks:</b> https://sequelize.org/master/manual/hooks.html

# yarn add multer || npm install multer
Uma dependencia responsável por fazer upload de imagens da aplicação
A imagem será armazenada dentro de uma pasta local chamada temp



