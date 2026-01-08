# WebCarros

## Descrição

WebCarros é uma aplicação web desenvolvida para facilitar o gerenciamento e a listagem de carros. A plataforma permite que usuários se cadastrem, façam login e acessem um dashboard personalizado onde podem visualizar, adicionar e gerenciar anúncios de carros. É ideal para vendedores de carros, compradores interessados e entusiastas automotivos que desejam uma interface simples e intuitiva para interagir com listagens de veículos.

### Funcionalidades Principais

- **Autenticação de Usuários**: Sistema de login e registro seguro utilizando Firebase Authentication.
- **Dashboard Personalizado**: Área exclusiva para usuários logados, onde podem gerenciar seus anúncios e visualizar informações relevantes.
- **Página de Carros**: Exibição de listagens de carros disponíveis, com filtros e detalhes.
- **Interface Responsiva**: Design moderno e adaptável a diferentes dispositivos, utilizando Tailwind CSS.
- **Integração com Firebase**: Armazenamento de dados em tempo real e autenticação robusta.

### Tecnologias Utilizadas

- **Frontend**: React com TypeScript para uma experiência de desenvolvimento tipada e eficiente.
- **Build Tool**: Vite para desenvolvimento rápido e otimizado.
- **Estilização**: Tailwind CSS para um design responsivo e customizável.
- **Backend as a Service**: Firebase para autenticação, banco de dados em tempo real e hospedagem.
- **Linting**: ESLint configurado para manter a qualidade do código.

## Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Conta no Firebase (para configurar autenticação e banco de dados)

### Passos para Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/webcarros.git
   cd webcarros
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Configure o Firebase**:
   - Acesse o [Firebase Console](https://console.firebase.google.com/).
   - Crie um novo projeto ou use um existente.
   - Ative a Authentication e o Firestore Database.
   - Copie as configurações do SDK (API Key, etc.) para o arquivo `src/services/firebaseConnection.ts`.
   - **Importante**: Configure as regras de segurança do Firestore:
     - Vá para Firestore Database > Rules
     - Substitua as regras por:
       ```
       rules_version = '2';
       service cloud.firestore {
         match /databases/{database}/documents {
           match /{document=**} {
             allow read, write: if true;
           }
         }
       }
       ```
     - Clique em "Publicar"

4. **Execute o projeto em modo de desenvolvimento**:
   ```bash
   npm run dev
   ```
   O aplicativo estará disponível em `http://localhost:5173`.

5. **Build para produção**:
   ```bash
   npm run build
   ```

## Estrutura do Projeto

```
webcarros/
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/             # Recursos como imagens e estilos
│   ├── components/         # Componentes reutilizáveis (header, input, etc.)
│   ├── contexts/           # Contextos React (ex: AuthContext)
│   ├── pages/              # Páginas da aplicação (home, login, dashboard, etc.)
│   ├── routes/             # Configuração de rotas privadas
│   ├── services/           # Integrações externas (Firebase)
│   └── main.tsx            # Ponto de entrada da aplicação
├── package.json            # Dependências e scripts
├── vite.config.ts          # Configuração do Vite
└── tailwind.config.js      # Configuração do Tailwind CSS
```

## Troubleshooting

### Carros não aparecem na aplicação

Se os carros não estiverem sendo exibidos, verifique:

1. **Regras do Firestore**: Certifique-se de que as regras de segurança do Firestore permitem leitura dos dados. Vá para Firebase Console > Firestore Database > Rules e verifique se as regras estão configuradas corretamente.

2. **Dados no Firestore**: Verifique se há documentos na coleção "cars" no Firebase Console > Firestore Database > Data.

3. **Configuração do Firebase**: Confirme se as credenciais no arquivo `src/services/firebaseConnection.ts` estão corretas.

4. **Console do navegador**: Abra o console do navegador (F12) e verifique se há erros relacionados ao Firebase.

### Erro de build na Vercel

Se ocorrer erro de TypeScript durante o deploy:

1. Execute `npm run build` localmente para verificar erros.
2. Certifique-se de que todas as importações estão sendo usadas.
3. Verifique se há variáveis não utilizadas causando warnings.

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera o build de produção.
- `npm run preview`: Visualiza o build de produção localmente.
- `npm run lint`: Executa o ESLint para verificar a qualidade do código.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

1. Fork o projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.

## Contato

Para dúvidas ou sugestões, entre em contato via [email] ou abra uma issue no repositório.
