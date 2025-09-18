# Liva FEBA Desk Mobile

Projeto Next.js (App Router) da Liva. Este README explica como rodar o projeto localmente.

## Requisitos
- Node.js 18+ (recomendado LTS)
- npm 9+ (ou yarn/pnpm, se preferir)

## Instalação
1. Instale as dependências:
```bash
npm install
```

## Rodando em desenvolvimento
```bash
npm run dev
```
- Acesse `http://localhost:3000` no navegador.

## Build de produção
```bash
npm run build
npm start
```
- O build gerará os arquivos otimizados e `npm start` iniciará o servidor em produção.

## Scripts úteis
- `dev`: inicia o servidor de desenvolvimento
- `build`: cria o build de produção
- `start`: inicia o servidor com o build de produção
- `lint`: executa o linter

## Estrutura relevante
- `src/app/`: rotas e layouts do App Router
- `src/components/`: componentes de UI
- `src/ui/`: componentes reutilizáveis (botões, dropdown, etc.)
- `public/`: arquivos estáticos (imagens, ícones, fontes)

## Observações
- As fontes Urbane estão configuradas em `src/app/globals.css`.
- Ícones e imagens adicionais ficam em `public/`.

## Troubleshooting
- Versão do Node: verifique com `node -v` (use 18+). Se necessário, use `nvm` para alternar.
- Portas ocupadas: ajuste a porta com `PORT=3001 npm run dev`.
- Dependências quebradas: `rm -rf node_modules package-lock.json && npm install`.
