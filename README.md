# GIFORAMA

Um aplicativo para explorar GIFs usando a API do Giphy, desenvolvido com Vue.js 3 e Quasar Framework.

## Funcionalidades

- Visualizar GIFs em tendência
- Buscar GIFs por termo
- Explorar por categorias
- Salvar GIFs favoritos
- Interface responsiva

## Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/CarolineT9/giforama.git
cd gif-explorer
```
2. Clone o repositório:
```bash
npm install
# ou
yarn install

```

### Configuração
1. Crie um arquivo .env na raiz do projeto baseado no .env.example:
```bash VITE_API_KEY=sua_chave_da_api_giphy
VITE_API_KEY=sua_chave_da_api_giphy
VITE_API_BASE_URL=https://api.giphy.com/v1

```
2. Obtenha uma chave de API gratuita no site do Giphy.
```bash
# Modo desenvolvimento
quasar dev

# Modo produção
quasar build
```
### Ferramentas Utilizadas

- [Vue.js 3](https://vuejs.org)
- [Quasar Framework](https://quasar.dev)
- [Pinia](https://pinia.vuejs.org)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [TailWindCSS](https://tailwindcss.com)
- [Vue Router](https://router.vuejs.org)
