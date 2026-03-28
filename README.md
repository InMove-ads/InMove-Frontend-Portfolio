# InMove Frontend Portfolio

Frontend institucional da InMove para apresentação comercial (anunciantes) e captação de motoristas parceiros.

## Objetivo

Este projeto entrega:
- Landing page comercial com seções de prova social, planos e contato.
- Seção de motoristas integrada na home (scroll) e página dedicada (`/motoristas`).
- Formulário de contato com validação no frontend.
- CTA de WhatsApp e eventos de analytics no cliente.

## Stack

- React 18 + TypeScript
- Vite 7
- Tailwind CSS
- Framer Motion
- Wouter (roteamento)
- React Query (estado assíncrono)
- Radix UI (componentes base)
- Zod + React Hook Form (validação de formulário)

## Pré-requisitos

- Node.js 20+
- npm 10+

## Instalação

```bash
npm install
```

## Scripts

```bash
# Ambiente local
npm run dev

# Build de produção
npm run build

# Preview local da build
npm run preview

# Checagem de tipos
npm run check
```

## Variáveis de ambiente

Crie um arquivo `.env` na raiz se quiser habilitar GA4:

```env
VITE_GA_ID=G-XXXXXXXXXX
```

Sem `VITE_GA_ID`, o site funciona normalmente e o analytics não é inicializado.

## Estrutura de pastas

```text
src/
  components/
    layout/        # Estruturas globais (navbar, footer, floating CTA)
    sections/      # Seções da home (hero, cases, pricing, contact, etc.)
    ui/            # Componentes base reutilizáveis (button, card, input...)
  hooks/           # Hooks customizados
  lib/             # Utilitários (analytics, query client, utils)
  pages/           # Páginas de rota (home, drivers, not-found)
  App.tsx
  main.tsx
```

## Rotas

- `/` Home principal
- `/motoristas` Página detalhada para motoristas

## Padrões de desenvolvimento

- `layout`: componentes estruturais globais.
- `sections`: blocos da home orientados a negócio.
- `ui`: componentes atômicos/reutilizáveis de interface.
- Preferir imports por alias `@/`.

## Build e deploy (frontend)

1. Gerar build:
```bash
npm run build
```
2. Publicar a pasta `dist/` no provedor estático (Vercel, Netlify, Cloudflare Pages, etc.).
3. Garantir fallback para SPA (todas as rotas apontando para `index.html`).

## SEO já configurado

No `index.html`:
- `title` e `description`
- Open Graph e Twitter Card
- `canonical`
- `lang="pt-BR"`

## Observações

- Este repositório é **frontend-only**.
- Integrações de backend (CRM/API própria) podem ser adicionadas depois sem mudar a estrutura atual.
