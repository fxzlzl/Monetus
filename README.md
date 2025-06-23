# Monetus - Assistente Financeiro

Este é um projeto que visa criar um assistente financeiro na palma da mão.

## Visão Geral

O projeto "Monetus" é uma aplicação web simples, focada em fornecer um "Assistente Financeiro" para os usuários. A interface atual apresenta um menu de navegação com opções de "Aplicação" e "N7 Tech", além de um título e subtítulo descritivos.

### Funcionalidade Principal

O Monetus será desenvolvido como um **chatbot integrado ao WhatsApp**. Os usuários poderão interagir com o assistente financeiro enviando:

* **Áudios:** Para informar sobre compras realizadas, categorizar despesas ou registrar receitas.
* **Fotos de Recibos:** Para digitalizar e armazenar comprovantes de transações.
* **Outras informações:** Relacionadas à gestão financeira pessoal.

Todas as informações fornecidas pelos usuários serão armazenadas em um **banco de dados altamente seguro**, garantindo a privacidade e integridade dos dados financeiros.

## Estrutura do Projeto

* `index.html`: O arquivo HTML principal que estrutura o conteúdo da página.
* `index.css`: O arquivo CSS responsável pela estilização e layout da aplicação.
* `fonts/`: Pasta contendo as fontes personalizadas utilizadas no projeto, incluindo:
    * `GT-Alpina/`: Contém a fonte "GT Alpina".
    * `Sohne/`: Contém a fonte "Sohne Leich".
        * `Befonts-License.txt`: Licença de uso para a fonte Sohne, indicando que é gratuita para uso pessoal.
* `logos/`: Pasta para armazenar as imagens de logotipo e fundo (como `MonetusB.png` e `fundo2.png`).

## Tecnologias Utilizadas

* **Frontend (Interface Web):**
    * HTML5
    * CSS3
* **Integração e Automação (API):**
    * **n8n:** Será utilizado para orquestração e automação de fluxos de trabalho, conectando o WhatsApp ao banco de dados e processando as interações dos usuários.
    * **Evolution API:** Servirá como o gateway de comunicação para a integração com o WhatsApp, permitindo o envio e recebimento de mensagens, áudios e mídias.

## Fontes

O projeto utiliza as seguintes fontes personalizadas:

* **GT Alpina**: Importada localmente.
* **Sohne Leich**: Importada localmente, gratuita para uso pessoal.
* **Poppins**: Importada via Google Fonts.

## Como Executar o Projeto

1.  Clone este repositório para o seu ambiente local.
2.  Abra o arquivo `index.html` em seu navegador web.

## Funcionalidades Atuais

* Navegação com menu dropdown para "Aplicação" e "N7 Tech".
* Exibição de um título e subtítulo.
* Design responsivo básico (com base no `max-width: 100%` para a imagem de fundo).

## Próximos Passos

* Desenvolvimento da lógica do chatbot utilizando n8n para processamento das interações.
* Integração com a Evolution API para comunicação com o WhatsApp.
* Implementação do banco de dados seguro para armazenamento das informações financeiras.
* Implementação das páginas vinculadas aos links do menu (e.g., `cadastrarUser.php`, `addTenis.php`, etc., embora os links sugiram PHP, a estrutura atual é apenas HTML/CSS).
* Melhorar a responsividade para diferentes tamanhos de tela.
* Adicionar uma seção de contato ou formulário.

## Licença

[Inserir informações sobre a licença do seu código, se aplicável. Por exemplo, MIT, Apache 2.0, etc.]
