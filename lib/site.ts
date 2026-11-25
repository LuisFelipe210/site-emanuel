// URL pública do site. Defina NEXT_PUBLIC_SITE_URL (ex.: https://www.seudominio.com.br) na Vercel;
// sem ela, usa o domínio de produção que a própria Vercel informa no build.
export const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000")

export const SITE_NOME = "Emanuel Silvestre Advocacia Previdenciária"
export const SITE_TITULO = "Advogado do INSS em Campo Formoso-BA | Emanuel Silvestre"
export const SITE_DESCRICAO =
    "Benefício do INSS negado? Dr. Emanuel Silvestre (OAB/BA 79.803) cuida de aposentadoria rural, por idade, BPC/LOAS, auxílio-doença e revisão. Atende todo o Brasil."
