/* ==========================================================
   CONFIGURAÇÃO — Pesquisa Mídia OFF · Rede D'Or Pernambuco
   Edite só este arquivo para trocar chaves, locais ou textos.
   ========================================================== */
window.PESQUISA = {
  // Supabase (projeto RedeDorPE_2). A publishable key é pública por natureza;
  // a segurança vem das regras RLS do arquivo supabase.sql.
  SUPABASE_URL: "https://nrmryoypnocodsygonrv.supabase.co",
  SUPABASE_KEY: "sb_publishable_u81vpfVkko0g2BFnoi5VqQ_Cfkti6va",
  TABELA: "pesquisa_midia_off",

  // Deixe true só para testar sem banco (salva no próprio navegador).
  MODO_DEMO: false,

  CAMPANHA: "A emergência mais ágil da Região Metropolitana",

  PERFIS: [
    { id: "medico", label: "Médico(a)" },
    { id: "gestor", label: "Gestor(a) administrativo(a)" }
  ],

  // Ordem = ordem de exibição. "id" nunca deve mudar depois que a pesquisa começar.
  RESPOSTAS: [
    { id: "vi_varias",   label: "Vi mais de uma vez",              grupo: "viu" },
    { id: "vi_uma",      label: "Vi uma vez",                      grupo: "viu" },
    { id: "nao_vi_freq", label: "Passo com frequência, mas não vi", grupo: "nao_viu" },
    { id: "nao_vi_rar",  label: "Passo às vezes, mas não vi",      grupo: "nao_viu" },
    { id: "nao_passo",   label: "Não passo por esse local",        grupo: "nao_passa" }
  ],

  LOCAIS: [
    { id: "riomar",       tipo: "Totem digital",  titulo: "Shopping RioMar Recife",                 detalhe: "Totens digitais nos corredores do shopping",   fotos: ["riomar"] },
    { id: "agam-4775",    tipo: "Painel de LED",  titulo: "Av. Agamenon Magalhães, 4775",           detalhe: "Painel de LED à margem da avenida",          fotos: ["agam-4775"] },
    { id: "agam-hport",   tipo: "Painel digital", titulo: "Av. Agamenon Magalhães · Hosp. Português", detalhe: "Sentido Polo Médico / Zona Sul",              fotos: ["agam-hport"] },
    { id: "agam-sjose",   tipo: "Painel digital", titulo: "Av. Agamenon Magalhães · Memorial São José", detalhe: "Sentido Shopping Tacaruna / Olinda",       fotos: ["agam-sjose"] },
    { id: "agam-2830",    tipo: "Painel de LED",  titulo: "Av. Agamenon Magalhães, 2830",           detalhe: "Painel de LED",                              fotos: ["agam-2830"] },
    { id: "paissandu",    tipo: "Painel digital", titulo: "Av. Paissandu",                          detalhe: "Próximo ao Sport Club do Recife",             fotos: ["paissandu"] },
    { id: "getulio",      tipo: "Outdoor",        titulo: "Av. Getúlio Vargas, 773",                detalhe: "Próximo ao Bradesco",                         fotos: ["getulio-1", "getulio-2"] },
    { id: "br-cotegy",    tipo: "Outdoor",        titulo: "BR-101 Sul · Posto Cotegy",              detalhe: "Sentido Aeroporto / Recife",                  fotos: ["br-cotegy"] },
    { id: "br-arcelor",   tipo: "Outdoor",        titulo: "BR-101 Sul · Arcelor / Kropneus",        detalhe: "Sentido Recife / Aeroporto / Boa Viagem",     fotos: ["br-arcelor"] },
    { id: "br-vitarella", tipo: "Outdoor",        titulo: "BR-101 Sul · Fábrica Vitarella",         detalhe: "Sentido Aeroporto / Recife",                  fotos: ["br-vitarella-1", "br-vitarella-2"] },
    { id: "br-guarany",   tipo: "Outdoor",        titulo: "BR-101 Sul · Pedreira Guarany",          detalhe: "Sentido Porto de Galinhas / Suape / Cabo",    fotos: ["br-guarany-1", "br-guarany-2"] }
  ]
};
