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

  PERFIS: [
    { id: "medico", label: "Médico(a)" },
    { id: "gestor", label: "Gestor(a) administrativo(a)" }
  ],

  // Opções padrão. "grupo" define o cálculo: viu / nao_viu / nao_passa.
  // Os "id" nunca devem mudar depois que a pesquisa começar.
  RESPOSTAS: [
    { id: "sim_vi",      label: "Sim, vi o anúncio",                grupo: "viu" },
    { id: "nao_vi_freq", label: "Passo com frequência, mas não vi", grupo: "nao_viu" },
    { id: "nao_vi",      label: "Não vi",                           grupo: "nao_viu" },
    { id: "nao_passo",   label: "Não passo por esse local",         grupo: "nao_passa" }
  ],

  // Ordem = ordem de exibição.
  // Campos opcionais: pergunta (texto próprio), lista (chips de locais),
  // audios (players no lugar das fotos), rotulos (troca o texto das opções, mantendo os ids).
  LOCAIS: [
    { id: "riomar", tipo: "Totem digital", titulo: "Totens digitais em shoppings",
      detalhe: "A campanha foi exibida nos totens destes shoppings:",
      lista: ["Paulista North Way", "Shopping Recife", "Shopping RioMar Recife", "Shopping Guararapes"],
      pergunta: "Você viu a campanha em algum desses shoppings?",
      fotos: ["riomar"] },
    { id: "agam-4775",    tipo: "Painel de LED",  titulo: "Av. Agamenon Magalhães, 4775",               detalhe: "Painel de LED à margem da avenida",        fotos: ["agam-4775"] },
    { id: "agam-hport",   tipo: "Painel digital", titulo: "Av. Agamenon Magalhães · Hosp. Português",   detalhe: "Sentido Polo Médico / Zona Sul",           fotos: ["agam-hport"] },
    { id: "agam-sjose",   tipo: "Painel digital", titulo: "Av. Agamenon Magalhães · Memorial São José", detalhe: "Sentido Shopping Tacaruna / Olinda",       fotos: ["agam-sjose"] },
    { id: "agam-2830",    tipo: "Painel de LED",  titulo: "Av. Agamenon Magalhães, 2830",               detalhe: "Painel de LED",                            fotos: ["agam-2830"] },
    { id: "paissandu",    tipo: "Painel digital", titulo: "Av. Paissandu",                              detalhe: "Próximo ao Sport Club do Recife",          fotos: ["paissandu"] },
    { id: "getulio",      tipo: "Outdoor",        titulo: "Av. Getúlio Vargas, 773",                    detalhe: "Próximo ao Bradesco",                      fotos: ["getulio-1", "getulio-2"] },
    { id: "br-cotegy",    tipo: "Outdoor",        titulo: "BR-101 Sul · Posto Cotegy",                  detalhe: "Sentido Aeroporto / Recife",               fotos: ["br-cotegy"] },
    { id: "br-arcelor",   tipo: "Outdoor",        titulo: "BR-101 Sul · Arcelor / Kropneus",            detalhe: "Sentido Recife / Aeroporto / Boa Viagem",  fotos: ["br-arcelor"] },
    { id: "br-vitarella", tipo: "Outdoor",        titulo: "BR-101 Sul · Fábrica Vitarella",             detalhe: "Sentido Aeroporto / Recife",               fotos: ["br-vitarella-1", "br-vitarella-2"] },
    { id: "br-guarany",   tipo: "Outdoor",        titulo: "BR-101 Sul · Pedreira Guarany",              detalhe: "Sentido Porto de Galinhas / Suape / Cabo", fotos: ["br-guarany-1", "br-guarany-2"] },
    { id: "radio", tipo: "Rádio", titulo: "Spot nas rádios",
      detalhe: "Veiculado em 8 emissoras de rádio. Toque para ouvir:",
      pergunta: "Você ouviu este anúncio no rádio?",
      audios: [ { arquivo: "spot_1", nome: "Spot 1" }, { arquivo: "spot_2", nome: "Spot 2" } ],
      rotulos: { sim_vi: "Sim, ouvi o anúncio", nao_vi_freq: "Ouço rádio com frequência, mas não ouvi", nao_vi: "Não ouvi", nao_passo: "Não ouço rádio" },
      fotos: [] }
  ]
};
