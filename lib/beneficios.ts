import type { IconeNome } from "@/components/icones-traco"

/*
 * Conteúdo das páginas de cada benefício.
 * São regras GERAIS do INSS, escritas em linguagem simples.
 * Antes de publicar: revisão do Dr. Emanuel (regras mudam e cada caso tem detalhes).
 */

export type Beneficio = {
    slug: string
    icone: IconeNome
    nome: string
    tituloSeo: string
    descricaoSeo: string
    chamada: string
    resumo: string
    quemTemDireito: string[]
    documentos?: string[]
    negativas: string[]
    faq: { pergunta: string; resposta: string }[]
    mensagemWhats: string
}

export const beneficios: Beneficio[] = [
    {
        slug: "aposentadoria-rural",
        icone: "rural",
        nome: "Aposentadoria Rural",
        tituloSeo: "Aposentadoria Rural: quem tem direito e documentos",
        descricaoSeo:
            "Trabalhou na roça, pesca ou agricultura familiar? Veja a idade, o tempo de trabalho rural e os documentos para a aposentadoria rural no INSS.",
        chamada: "Trabalhou na roça a vida toda? Você pode se aposentar 5 anos mais cedo.",
        resumo:
            "O trabalhador rural que produz em regime de economia familiar (o segurado especial) pode se aposentar com idade menor que a do trabalhador da cidade, e sem ter pago o carnê do INSS. O que conta é provar o tempo de trabalho no campo.",
        quemTemDireito: [
            "Mulheres a partir de 55 anos e homens a partir de 60 anos.",
            "Quem comprova 15 anos de atividade rural, mesmo que com intervalos.",
            "Agricultores familiares, pescadores artesanais, extrativistas e indígenas, além do cônjuge e dos filhos que trabalham junto.",
            "Não precisa ter pago o INSS mensalmente: a contribuição do segurado especial é sobre a venda da produção.",
        ],
        documentos: [
            "Autodeclaração do segurado especial (formulário do INSS)",
            "Notas fiscais de produtor rural ou de venda da produção",
            "Contrato de arrendamento, parceria ou comodato da terra",
            "Certidões de casamento ou de nascimento dos filhos que indiquem a profissão de lavrador",
            "Documentos da terra, como ITR ou CCIR",
            "DAP ou CAF do Pronaf, ficha do sindicato ou da cooperativa",
        ],
        negativas: [
            "Falta de documentos antigos que comecem a provar o trabalho rural.",
            "Períodos em que alguém da família teve emprego na cidade, analisados de forma errada.",
            "Documentos em nome do marido ou dos pais que o INSS não aceitou para a esposa ou os filhos.",
            "Exigências do INSS que não foram cumpridas no prazo.",
        ],
        faq: [
            {
                pergunta: "Nunca paguei o INSS. Mesmo assim posso me aposentar como rural?",
                resposta:
                    "Sim. O segurado especial não precisa ter pago o carnê. O que o INSS exige é a prova do trabalho no campo pelo tempo mínimo, com documentos e, se preciso, testemunhas.",
            },
            {
                pergunta: "Tenho poucos documentos. Ainda tem jeito?",
                resposta:
                    "Muitas vezes, sim. Um documento antigo que mostre a atividade rural pode ser complementado por outros papéis e por testemunhas. Na análise vemos o que você já tem e o que dá para conseguir.",
            },
            {
                pergunta: "Trabalhei um tempo na cidade. Perco o direito?",
                resposta:
                    "Não necessariamente. Dependendo do caso, é possível somar o tempo rural com o urbano na aposentadoria híbrida, com idade de 62 anos para mulheres e 65 para homens.",
            },
        ],
        mensagemWhats: "Olá, quero saber sobre a Aposentadoria Rural.",
    },
    {
        slug: "aposentadoria-por-idade",
        icone: "idade",
        nome: "Aposentadoria por Idade",
        tituloSeo: "Aposentadoria por Idade: regras e tempo de contribuição",
        descricaoSeo:
            "Completou 62 anos (mulher) ou 65 anos (homem) e o INSS negou? Entenda o tempo mínimo de contribuição e como recorrer da negativa.",
        chamada: "Completou a idade e o INSS negou? A negativa pode ser revertida.",
        resumo:
            "A aposentadoria por idade é para quem trabalhou com carteira assinada, pagou o carnê ou contribuiu como autônomo, e chegou à idade mínima com o tempo de contribuição exigido.",
        quemTemDireito: [
            "Mulheres a partir de 62 anos e homens a partir de 65 anos.",
            "Mulheres com pelo menos 15 anos de contribuição.",
            "Homens com 15 anos de contribuição, se já contribuíam antes de 13/11/2019, ou 20 anos, se começaram depois.",
            "Quem tem tempo rural e urbano pode somar os dois na aposentadoria híbrida.",
        ],
        documentos: [
            "Documento de identidade e CPF",
            "Carteiras de trabalho (todas, inclusive as antigas)",
            "Carnês e guias de contribuição pagas",
            "Extrato do CNIS (pelo Meu INSS)",
            "Documentos de períodos que não aparecem no CNIS, como recibos e declarações de empregadores",
        ],
        negativas: [
            "Vínculos de emprego que não aparecem no CNIS ou aparecem incompletos.",
            "Contribuições pagas com atraso ou com código errado que o INSS desconsiderou.",
            "Tempo rural ou de serviço militar que não foi contado.",
            "Carência calculada a menos por erro no cadastro.",
        ],
        faq: [
            {
                pergunta: "Minha carteira tem um emprego que não aparece no INSS. E agora?",
                resposta:
                    "A carteira de trabalho é prova do vínculo. É possível pedir a inclusão do período no CNIS e, se o INSS negar, discutir na Justiça.",
            },
            {
                pergunta: "Paguei o carnê com atraso. Conta?",
                resposta:
                    "Depende do caso: há regras diferentes para pagamentos atrasados. Na análise vemos quais contribuições o INSS precisa considerar.",
            },
        ],
        mensagemWhats: "Olá, quero saber sobre a Aposentadoria por Idade.",
    },
    {
        slug: "bpc-loas",
        icone: "bpc",
        nome: "BPC / LOAS",
        tituloSeo: "BPC/LOAS: benefício para idosos e pessoas com deficiência",
        descricaoSeo:
            "O BPC/LOAS paga um salário mínimo por mês a idosos a partir de 65 anos e pessoas com deficiência de baixa renda, sem precisar ter contribuído.",
        chamada: "Um salário mínimo por mês, mesmo sem nunca ter pago o INSS.",
        resumo:
            "O Benefício de Prestação Continuada (BPC), previsto na LOAS, garante um salário mínimo por mês para idosos e pessoas com deficiência que não têm como se sustentar. Não é aposentadoria e não exige contribuição.",
        quemTemDireito: [
            "Idosos a partir de 65 anos.",
            "Pessoas com deficiência de longo prazo (pelo menos 2 anos), de qualquer idade, inclusive crianças.",
            "Famílias de baixa renda: em regra, renda por pessoa de até 1/4 do salário mínimo, mas a Justiça também considera a situação real, como gastos com remédios.",
            "Família inscrita e com dados atualizados no CadÚnico.",
        ],
        documentos: [
            "Documento de identidade e CPF de todos da casa",
            "Comprovante de inscrição atualizada no CadÚnico",
            "Comprovante de endereço",
            "Para pessoas com deficiência: laudos, exames e receitas médicas",
        ],
        negativas: [
            "Renda da família calculada a mais, incluindo valores que não deveriam entrar na conta.",
            "CadÚnico desatualizado ou com informações diferentes do pedido.",
            "Perícia ou avaliação social que não reconheceu a deficiência.",
        ],
        faq: [
            {
                pergunta: "O BPC paga 13º salário?",
                resposta: "Não. O BPC não é aposentadoria: não paga 13º e não deixa pensão por morte para a família.",
            },
            {
                pergunta: "Alguém da minha casa recebe aposentadoria. Perco o direito?",
                resposta:
                    "Não necessariamente. Em alguns casos, o benefício de um salário mínimo de outro idoso ou pessoa com deficiência da casa não entra no cálculo da renda. Vale analisar.",
            },
        ],
        mensagemWhats: "Olá, quero saber se tenho direito ao BPC/LOAS.",
    },
    {
        slug: "auxilio-doenca-e-invalidez",
        icone: "doenca",
        nome: "Auxílio-doença e Aposentadoria por Invalidez",
        tituloSeo: "Auxílio-doença e Invalidez: perícia negada pelo INSS",
        descricaoSeo:
            "Está doente, não consegue trabalhar e a perícia do INSS negou? Veja quem tem direito ao auxílio-doença e à aposentadoria por invalidez e como recorrer.",
        chamada: "Não consegue trabalhar e o perito negou? Dá para recorrer.",
        resumo:
            "Quem fica sem condições de trabalhar por doença ou acidente pode receber o auxílio por incapacidade temporária (o auxílio-doença). Quando a incapacidade é permanente, o benefício pode virar aposentadoria por incapacidade permanente (a invalidez).",
        quemTemDireito: [
            "Quem está coberto pelo INSS (a chamada qualidade de segurado) quando a doença começou.",
            "Em regra, quem tem 12 contribuições, mas acidentes e algumas doenças graves não exigem esse mínimo.",
            "Quem tem a incapacidade confirmada pela perícia médica.",
            "Trabalhadores rurais (segurados especiais) também têm direito.",
        ],
        documentos: [
            "Laudos e atestados médicos com o CID da doença",
            "Exames, receitas e relatórios de tratamento",
            "Documentos que mostrem o trabalho que você fazia",
            "Carteira de trabalho ou comprovantes de contribuição",
        ],
        negativas: [
            "Perícia rápida que não considerou todos os laudos e exames.",
            "Entendimento de que a doença começou antes de a pessoa estar coberta pelo INSS.",
            "Falta de documentos médicos atualizados no dia da perícia.",
        ],
        faq: [
            {
                pergunta: "O perito disse que eu posso trabalhar, mas não consigo. O que fazer?",
                resposta:
                    "É possível recorrer no próprio INSS ou entrar com ação na Justiça, onde a perícia é feita por um médico nomeado pelo juiz.",
            },
            {
                pergunta: "Recebo auxílio-doença. Ele pode virar aposentadoria?",
                resposta:
                    "Sim, quando a perícia conclui que a incapacidade é permanente e não há como voltar a trabalhar ou mudar de função.",
            },
        ],
        mensagemWhats: "Olá, estou doente, o INSS negou meu benefício e quero uma análise.",
    },
    {
        slug: "revisao-de-beneficio",
        icone: "revisao",
        nome: "Revisão de Benefício",
        tituloSeo: "Revisão de Benefício do INSS: valor errado na aposentadoria",
        descricaoSeo:
            "Recebe menos do que deveria? Veja quando cabe revisão do benefício do INSS, o prazo de 10 anos e como funcionam os atrasados.",
        chamada: "Recebe menos do que deveria? O cálculo do INSS pode estar errado.",
        resumo:
            "A revisão corrige erros no cálculo ou na concessão do benefício, como períodos de trabalho que não foram contados ou salários registrados a menos. Quando dá certo, o valor mensal sobe e o INSS paga a diferença atrasada.",
        quemTemDireito: [
            "Quem recebe aposentadoria, pensão ou outro benefício com possível erro de cálculo.",
            "Quem teve períodos rurais, especiais ou com carteira que não entraram na conta.",
            "Em regra, o pedido deve ser feito em até 10 anos, contados a partir do mês seguinte ao primeiro pagamento.",
            "Os atrasados costumam alcançar os últimos 5 anos.",
        ],
        documentos: [
            "Carta de concessão do benefício",
            "Extrato do CNIS e histórico de créditos (pelo Meu INSS)",
            "Carteiras de trabalho e comprovantes de salários",
            "Documentos de períodos que ficaram de fora",
        ],
        negativas: [
            "Pedido feito depois do prazo de 10 anos.",
            "Falta de prova dos períodos ou salários que se quer incluir.",
        ],
        faq: [
            {
                pergunta: "Revisão pode diminuir meu benefício?",
                resposta:
                    "Por isso fazemos a análise antes de pedir: calculamos se a revisão vale a pena no seu caso, para não correr riscos à toa.",
            },
            {
                pergunta: "Como sei se meu benefício está errado?",
                resposta:
                    "Comparando a carta de concessão com o seu histórico de trabalho e contribuições. Na análise conferimos período por período.",
            },
        ],
        mensagemWhats: "Olá, acho que meu benefício está com valor errado e quero uma revisão.",
    },
    {
        slug: "planejamento-previdenciario",
        icone: "planejamento",
        nome: "Planejamento Previdenciário",
        tituloSeo: "Planejamento Previdenciário: a melhor hora de se aposentar",
        descricaoSeo:
            "Descubra a melhor regra e o melhor momento para se aposentar. Analisamos seu CNIS, corrigimos falhas e simulamos as regras de transição.",
        chamada: "Não se aposente no escuro: descubra a melhor regra e a melhor data.",
        resumo:
            "O planejamento previdenciário é um estudo do seu histórico no INSS antes de pedir o benefício. Ele mostra quando você pode se aposentar, por qual regra e com qual valor, e aponta o que precisa ser corrigido antes do pedido.",
        quemTemDireito: [
            "Quem está perto de se aposentar e quer saber a melhor regra.",
            "Quem tem períodos rurais, especiais, no serviço público ou no exterior para somar.",
            "Quem tem falhas no CNIS e quer corrigir antes de pedir.",
            "Autônomos que querem saber quanto e como contribuir daqui para a frente.",
        ],
        documentos: [
            "Extrato do CNIS (pelo Meu INSS)",
            "Carteiras de trabalho",
            "Carnês e guias de contribuição",
            "Documentos de períodos rurais ou especiais",
        ],
        negativas: [
            "Pedidos feitos antes da hora, que acabam negados ou com valor menor.",
            "Escolha de uma regra de aposentadoria pior do que outra disponível.",
        ],
        faq: [
            {
                pergunta: "Vale a pena fazer o planejamento antes de pedir?",
                resposta:
                    "Na maioria dos casos, sim: um pedido feito com o cadastro corrigido e na regra certa evita negativas e pode render um valor maior.",
            },
        ],
        mensagemWhats: "Olá, quero fazer um planejamento da minha aposentadoria.",
    },
]

export const beneficioPorSlug = (slug: string) => beneficios.find((b) => b.slug === slug)
