-- =====================================================================
-- CORREÇÃO · Pesquisa Mídia OFF  (rode uma vez no SQL Editor → Run)
-- Motivo: o painel ficava vazio porque o e-mail logado não estava na
-- lista de administradores (o Supabase devolve lista vazia, sem erro).
-- =====================================================================

-- 1) >>> COLOQUE AQUI o e-mail EXATO que você usa para entrar no admin.html <<<
insert into public.pesquisa_midia_admins (email) values
  ('SEU-EMAIL-AQUI@rededor.com.br')
on conflict do nothing;

-- Remove o exemplo antigo, se ficou lá
delete from public.pesquisa_midia_admins where email ilike 'SEU-EMAIL%';

-- 2) Comparação de e-mail sem diferenciar maiúsculas/minúsculas e espaços
drop policy if exists "pmo_le_admin" on public.pesquisa_midia_off;
create policy "pmo_le_admin" on public.pesquisa_midia_off
  for select to authenticated
  using (exists (select 1 from public.pesquisa_midia_admins a
                 where lower(trim(a.email)) = lower(trim(auth.jwt() ->> 'email'))));

-- 3) Diagnóstico usado pelo painel: diz quantas respostas existem e se
--    o usuário logado está autorizado (não devolve nenhuma resposta).
create or replace function public.pesquisa_midia_status()
returns json
language sql
security definer
set search_path = public
as $$
  select json_build_object(
    'total',     (select count(*) from public.pesquisa_midia_off),
    'email',     auth.jwt() ->> 'email',
    'autorizado', exists (select 1 from public.pesquisa_midia_admins a
                          where lower(trim(a.email)) = lower(trim(auth.jwt() ->> 'email')))
  );
$$;
revoke all on function public.pesquisa_midia_status() from public, anon;
grant execute on function public.pesquisa_midia_status() to authenticated;

-- 4) Confira o resultado: deve listar o seu e-mail
select email from public.pesquisa_midia_admins;

-- 5) Antes de enviar o link para o público, apague TODOS os testes
--    (inclusive a resposta de diagnóstico enviada pelo Claude):
-- truncate public.pesquisa_midia_off restart identity;
