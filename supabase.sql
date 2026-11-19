-- =====================================================================
-- Pesquisa Mídia OFF · Rede D'Or Pernambuco
-- Rode TUDO de uma vez no Supabase: SQL Editor → New query → Run
-- Não mexe em nenhuma tabela existente (inscrições, settings etc.).
-- =====================================================================

-- 1) Tabela de respostas (sem nenhum dado pessoal)
create table if not exists public.pesquisa_midia_off (
  id           bigint generated always as identity primary key,
  created_at   timestamptz not null default now(),
  perfil       text not null check (perfil in ('medico','gestor')),
  respostas    jsonb not null,
  duracao_seg  integer check (duracao_seg >= 0),
  dispositivo  text check (dispositivo in ('mobile','desktop'))
);

-- 2) Lista de e-mails que podem ver os resultados
create table if not exists public.pesquisa_midia_admins (
  email text primary key
);

-- >>> TROQUE pelo(s) e-mail(s) que vão acessar o painel <<<
insert into public.pesquisa_midia_admins (email) values
  ('SEU-EMAIL@rededor.com.br')
on conflict do nothing;

-- 3) Segurança (RLS)
alter table public.pesquisa_midia_off    enable row level security;
alter table public.pesquisa_midia_admins enable row level security;

-- Qualquer pessoa com o link pode ENVIAR uma resposta…
drop policy if exists "pmo_insere_publico" on public.pesquisa_midia_off;
create policy "pmo_insere_publico" on public.pesquisa_midia_off
  for insert to anon, authenticated
  with check (
    perfil in ('medico','gestor')
    and jsonb_typeof(respostas) = 'object'
    and pg_column_size(respostas) < 4000
  );

-- …mas só administradores logados conseguem LER.
drop policy if exists "pmo_le_admin" on public.pesquisa_midia_off;
create policy "pmo_le_admin" on public.pesquisa_midia_off
  for select to authenticated
  using (exists (select 1 from public.pesquisa_midia_admins a
                 where lower(trim(a.email)) = lower(trim(auth.jwt() ->> 'email'))));

-- Diagnóstico usado pelo painel (conta respostas e diz se o usuário está autorizado)
create or replace function public.pesquisa_midia_status()
returns json language sql security definer set search_path = public as $$
  select json_build_object(
    'total', (select count(*) from public.pesquisa_midia_off),
    'email', auth.jwt() ->> 'email',
    'autorizado', exists (select 1 from public.pesquisa_midia_admins a
                          where lower(trim(a.email)) = lower(trim(auth.jwt() ->> 'email'))));
$$;
revoke all on function public.pesquisa_midia_status() from public, anon;
grant execute on function public.pesquisa_midia_status() to authenticated;

-- A lista de admins não é lida pelo site (só pela regra acima).
grant insert on public.pesquisa_midia_off to anon, authenticated;
grant select on public.pesquisa_midia_off to authenticated;
revoke update, delete on public.pesquisa_midia_off from anon, authenticated;

-- =====================================================================
-- Depois de rodar:
--   Authentication → Users → Add user → Create new user
--   (mesmo e-mail da lista acima + uma senha; marque "Auto Confirm User")
--
-- Para APAGAR respostas de teste antes de enviar o link:
--   truncate public.pesquisa_midia_off restart identity;
-- =====================================================================
