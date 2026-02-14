<h1 align="center">
    Consulta de endereço por CEP
</h1>

Aplicação desenvolvida para **buscar dados de uma API com base em informações fornecidas pelo usuário**, utilizando o CEP como entrada e consumindo a API ViaCEP.

---

## 📄 Descrição

Este projeto tem como objetivo praticar o consumo de **APIs externas**, trabalhando com **requisições HTTP**, **validação de dados de entrada** e **tratamento de erros** no front-end.

A aplicação permite que o usuário informe um **CEP válido**, realiza uma requisição para a API ViaCEP e exibe na tela os dados do endereço retornado, como cep, logradouro, bairro, cidade e estado.

---

## 🔗 Preview

<div align="center">

  ### Mobile 📱  
  <img src="./src/assets/images/buscador-cep-mobile.gif" alt="mobile" height="425">

  <br>
  
  ### Desktop 💻
  <img src="./src/assets/images/buscador-cep-desktop.gif" alt="desktop" height="425">
</div>

<br>


🚀 Deploy do projeto:
<a href="https://consulta-cep-fawn.vercel.app/" target="_blank">Deploy</a>


---

## 🚀 Tecnologias Utilizadas

- React
- TypeScript
- Fetch API
- React-hook-form
- Zod
- Tailwind CSS
- Vite

---

## ⚙️ Funcionalidades

- Campo de input para digitação do CEP
- Validação do CEP (apenas números e 8 dígitos)
- Requisição `GET` para a API ViaCEP
- Exibição dinâmica dos dados do endereço:
  - CEP
  - Logradouro
  - Bairro
  - Cidade
  - Estado
- Tratamento de erros para:
  - CEP inválido
  - CEP inexistente
  - Falha na requisição

---

## ▶️ Como rodar o projeto localmente

Siga os passos abaixo para rodar o projeto em sua máquina:

```bash
# Clone o repositório
git clone https://github.com/MadeiraVitor/consulta-cep.git

# Acesse a pasta do projeto
cd consulta-cep

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```
O projeto estará disponível em:
http://localhost:5173

## 📚 Aprendizados
Durante o desenvolvimento deste projeto, foi possível praticar:

- Consumo de API externa utilizando fetch
- Requisições dinâmicas baseadas na entrada do usuário
- Validação de formulários no front-end
- Tratamento de erros em chamadas HTTP
- Manipulação de eventos de formulário
- Estilização de interfaces com Tailwind CSS
- Boas práticas iniciais em aplicações front-end

## 👤 Autor
<div align="center">
    <p>Desenvolvido por <strong>Vitor Madeira</strong></p>
    <a href="https://www.linkedin.com/in/vitor-madeira/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
    <a href = "mailto:vitorsoutom@hotmail.com"><img src="https://img.shields.io/badge/-Email-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
</div>

