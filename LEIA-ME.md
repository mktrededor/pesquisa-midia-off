# Pesquisa Mídia OFF · Rede D'Or Pernambuco

Pesquisa anônima de recall da campanha OOH (outdoors, painéis e totens), com painel de resultados para o Marketing.

## O que tem na pasta

| Arquivo | Para que serve |
|---|---|
| `index.html` | A pesquisa (é o link que vai no WhatsApp) |
| `admin.html` | Painel de resultados, com login |
| `config.js` | Chaves do Supabase, perfis, opções de resposta e os 11 locais |
| `supabase.sql` | Cria a tabela e as regras de segurança (rodar uma vez) |
| `img/`, `assets/` | Fotos dos pontos, logo, símbolo D', favicon e gerador de Excel |

## Passo a passo (cerca de 10 min)

### 1. Supabase (projeto RedeDorPE_2)
1. Abra o `supabase.sql` e troque `SEU-EMAIL@rededor.com.br` pelo e-mail que vai acessar o painel (pode colocar mais de um).
2. No Supabase, vá em **SQL Editor → New query**, cole o arquivo inteiro e clique em **Run**.
3. Vá em **Authentication → Users → Add user → Create new user**: use o mesmo e-mail, defina uma senha e marque **Auto Confirm User**.

As tabelas que já existem no projeto não são alteradas.

### 2. GitHub + Netlify
**Opção A (recomendada): site novo**
1. Crie um repositório novo no GitHub (ex.: `pesquisa-midia-off`) e envie todos os arquivos desta pasta para a raiz dele (*Add file → Upload files → Commit directly to the main branch*).
2. No Netlify: **Add new site → Import an existing project → GitHub** → escolha o repositório. Não precisa de build command; o publish directory é a raiz.
3. Em **Site configuration → Change site name**, coloque algo como `pesquisa-rededorpe`.

**Opção B:** suba a pasta como `pesquisa-midia/` dentro do repositório do simpósio. O link fica `simposiorededorpe.netlify.app/pesquisa-midia/`.

### 3. Prévia do link no WhatsApp
Em `index.html`, troque `content="img/og.jpg"` pelo endereço completo, por exemplo
`content="https://pesquisa-rededorpe.netlify.app/img/og.jpg"`. Sem o endereço completo, o WhatsApp não mostra a imagem de prévia.

### 4. Testar antes de enviar
1. Responda a pesquisa uma vez no celular.
2. Abra `/admin.html`, faça login e confira se a resposta apareceu.
3. Apague os testes com `truncate public.pesquisa_midia_off restart identity;` no SQL Editor.
4. Para responder de novo no mesmo aparelho durante os testes, abra o link com `?nova=1` no final.

## Links
- Pesquisa: `https://SEU-SITE.netlify.app/`
- Painel: `https://SEU-SITE.netlify.app/admin.html` (não aparece em nenhum lugar da pesquisa)

## Como ler os resultados
- **Exposição**: % de pessoas que passam pelo local.
- **Alcance**: % do total de pessoas que viu a peça.
- **Lembrança**: entre quem passa pelo local, % que viu a peça. É o principal indicador de impacto, porque não penaliza pontos que ficam fora da rota do público.

## Exportações
- **Excel**: gera três abas — Resumo, Por local (todos, médicos e gestores) e Respostas (dados brutos).
- **PDF**: abre a impressão do navegador com o painel formatado em A4. Escolha "Salvar como PDF". O PDF segue o filtro de perfil que estiver ativo na tela.

## Anonimato e consumo
- Ficam gravados apenas o perfil, as respostas, o tempo de preenchimento e o tipo de aparelho (celular ou computador). Não são gravados nome, telefone, IP nem unidade.
- O aparelho que já respondeu não consegue enviar outra resposta. Essa trava fica no navegador: ela evita duplicidade por engano, mas não é um bloqueio rígido.
- As fotos ficam no Netlify, não no Supabase. Cada resposta ocupa menos de 1 KB, e o painel só busca dados quando você clica em **Atualizar** (não há atualização automática).

## Editar locais ou textos
Tudo fica no `config.js`. Para trocar uma foto, substitua o `.jpg` correspondente em `img/` mantendo o mesmo nome.
**Não mude o `id` de um local depois que a pesquisa começar**, porque as respostas são gravadas com esse id.
