# Aranha — Arquivo Multiversal

Experiência editorial cinematográfica sobre Tobey Maguire, Andrew Garfield, Tom Holland, Miles Morales, o Aranhaverso e histórias essenciais dos quadrinhos. O projeto tem dez rotas, 52 imagens locais com créditos e uma página dedicada à procedência das fontes.

## Requisitos e comandos

Use Node.js 22.22 ou mais recente.

```bash
npm ci
npm run dev
npm run lint
npm test
npm run build
npm run preview
```

O repositório inclui uma distribuição pronta em `dist/`. Para simular um servidor estático/Live Server e o subcaminho do GitHub Pages:

```bash
npm run serve:static
# http://127.0.0.1:5500/

npm run serve:pages
# http://127.0.0.1:5501/Spider-Man/
```

A configuração do VS Code aponta o Live Server para `/dist` na porta 5500. O `HashRouter` preserva todas as rotas em hospedagem estática, e o `base: './'` do Vite mantém CSS, JavaScript e mídia funcionais no subcaminho `/Spider-Man/`.

## Validação

```bash
npm run qa:runtime
npm run qa:visual
```

`qa:runtime` confere as dez rotas, imagens, console, overflow e as interações de menu, spoiler e filtros. `qa:visual` percorre 360, 430, 768, 1366 e 1440 px e grava screenshots completos em `qa/rebuild/`.

O workflow `.github/workflows/deploy-pages.yml` executa instalação limpa, lint, testes e build antes de publicar `dist` no GitHub Pages. A simulação local cobre o mesmo artefato e o mesmo subcaminho; a publicação remota depende de um repositório GitHub com Pages habilitado.

## Estrutura

- `src/App.tsx`: rotas e componentes editoriais.
- `src/data.ts`: perfis, cronologia, quadrinhos, fontes e afirmações.
- `src/media.ts`: inventário de mídia, textos alternativos e procedência.
- `public/media/`: stills, pôsteres e capas usados em runtime.
- `scripts/fetch-media.ps1`: obtenção reproduzível dos assets editoriais.
- `scripts/runtime-check.mjs`: smoke test das variantes de hospedagem e interações.
- `scripts/visual-check.mjs`: auditoria responsiva com screenshots.

Pesquisa verificada em 16 de agosto de 2026. Este é um protótipo editorial não oficial; personagens, marcas e imagens pertencem aos respectivos titulares, sem presunção de licença para redistribuição pública.
