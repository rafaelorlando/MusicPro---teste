
## MusicPro - Teste

Esse é um repositório que contém a automação de alguns testes referentes ao desafio técnico proposto. Desafio de Automação Web desenvolvido utilizando o  usando como linguagem de desenvolvimento o JavaScript. Abaixo, nos sub-tópicos, segue a descrição de ferramentas, instalações, estrutura e contexto dos testes.

### Tecnologias Utilizadas

Para a visualização dos relatórios, é necessário a utilização do Java (https://www.oracle.com/java/technologies/javase/18-0-2-relnotes.html). O Allure é uma ferramenta utilizada para a geração de relatórios  (https://allurereport.org/docs/install/)

### Esse framework de testes automatizados utiliza :

O framework utilizado nesse projeto é o Cypress (https://www.cypress.io/) utilizando JavaScript. Abaixo segue a estrutura do projeto e cenários realizados.

------------


##### Estrutura das pastas :
Para visualização e execução dos cenários; acesse a pasta cypress, em seguida e2e, e por fim o arquivo login.cy.js

#####  Para executar o projeto:
    - npm install (instalar dependências  do projeto).
    - npx cypress run --env allure=true (executar o projeto).
    - npx cypress open (executar o projeto visualizando a automação).

##### Contexto dos Testes : 

------------



Os testes tem como base no desafio de automação de Login do seguinte site "https://practicetestautomation.com/practice-test-login/"

1. Caso de Teste 1 (Login Positivo)
		Abrir página
		Digite o nome de usuário 'student' no campo Nome de usuário
		Digite a senha 'Password123' no campo Senha
		Pressione o botão Submit 
		Verifique se o URL da nova página contém  'practicestestautomation.com/logged-in-successfully/'
		Verifique se a nova página contém o texto esperado ('Congratulations ' ou 'successfully logged in')
		Botão de verificação Log out é exibido na nova página
2. Caso de Teste 2 (Usuário inválido)
		Abrir página
		Digite nome de usuário 'incorrectUser' no campo Nome de usuário
		Digite a senha 'Password123' no campo Senha
		Pressione o botão Submit 
		Verifique se a mensagem de erro é exibida
		Verifique se o texto da mensagem de erro é 'Your username is invalid!'
3. Caso de Teste 3 (Senha inválida)
		Abrir página
		Digite nome de usuário 'student' no campo Nome de usuário
		Digite a senha 'incorrectPassword' no campo Senha
		Pressione o botão Submit 
		Verifique se a mensagem de erro é exibida
		Verifique se o texto da mensagem de erro é 'Your password is invalid!'
4. Caso de Teste 4 (Usuário em branco - adicional)
		Abrir página
		Digite a senha 'Password123' no campo Senha
		Pressione o botão Submit 
		Verifique se a mensagem de erro é exibida
		Verifique se o texto da mensagem de erro é 'Your username is invalid!'
5. Caso de Teste 5 (Senha em branco - adicional)
		Abrir página
		Digite nome de usuário 'student' no campo Nome de usuário
		Pressione o botão Submit 
		Verifique se a mensagem de erro é exibida
		Verifique se o texto da mensagem de erro é 'Your password is invalid!'

Para gerar o relatório  :
	- allure serve