IDE (Ambiente de desenvolvimento - Integrated Development Environment):
Visual Studio;

Plataforma de aplicação:
NodeJS (Plataforma Javascript);

Interface:
ReactJS (Biblioteca Javascript);

Linguagem:
Typescript (Superset/Superconjunto sintático javascript)



Passo 1:
Iniciar o projeto com o comando: 
	npm init

Esse comando irá iniciar o node através do package.json, que é o arquivo de configuração do node

Passo 2:
Instalar as dependências necessárias através do comando:
	npm i

Esse comando ira instalar as dependências do projeto e colocar em uma pasta chamada node_modules. A dependência será adicionada no arquivo package.json
No nosso caso iremos utilizas as seguintes dependências iniciais: express.
O express é um framework do nodejs para gerenciar toda a parte web da nossa aplicação.

Passo 3:
Criar a nossa estrutura de pastas e arquivos para a inicialização do aplicativo.

Passo 4:
Instalar o superset typescript na nossa aplicação juntamente com suas tipagens.
Para cada dependência que instalarmos, precisamos instalar suas tipagens para que possamos utilizar ela com a linguagem typescript.
Vale ressaltar que o typescript é utilizado apenas para o desenvolvimento, e para isso, utilizamos a opção -D no comando de instalação da dependência.

Passo 5:
Alterar o nosso código para funcionar através do typescript.

Passo 6:
Criar comandos para facilitar o nosso build e start da aplicação.

Passo 7:
Utilizar dependências que irão facilitar e tornar mais seguros os nossos ambientes.