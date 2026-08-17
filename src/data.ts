export type Universe = "tobey" | "andrew" | "tom" | "verse";
export type EditorialStatus =
  | "Confirmado oficialmente"
  | "Reportado por fonte confiável"
  | "Rumor não confirmado"
  | "Desmentido"
  | "Indeterminado por falta de evidência";
export const verified = "16 de agosto de 2026";
export const sources = {
  sonyTobey: {
    label: "Sony Pictures — Spider-Man",
    url: "https://www.sonypictures.com/movies/spiderman",
  },
  sonyAndrew: {
    label: "Sony Pictures — The Amazing Spider-Man",
    url: "https://www.sonypictures.com/movies/theamazingspiderman",
  },
  sonyTom: {
    label: "Sony Pictures — Spider-Man: Brand New Day",
    url: "https://www.sonypictures.com/movies/spidermanbrandnewday",
  },
  apBnd: {
    label: "Associated Press — Brand New Day supera US$ 2 bilhões",
    url: "https://apnews.com/article/oak-street-paw-patrol-box-office-e9bb0bd359a218da0d7b705c725522e5",
  },
  sonyVerse: {
    label: "Sony Pictures Animation — Spider-Verse",
    url: "https://www.sonypicturesanimation.com/projects/films/spider-man-across-the-spider-verse",
  },
  marvelNwh: {
    label: "Marvel — bastidores de No Way Home",
    url: "https://www.marvel.com/articles/culture-lifestyle/spider-man-no-way-home-the-official-movie-special-tobey-maguire-andrew-garfield",
  },
  marvelComics: {
    label: "Marvel — 60 anos de histórias essenciais",
    url: "https://www.marvel.com/articles/comics/beyond-amazing-spider-man-60-anniversary-best-moments-from-the-comics",
  },
  marvelMiles: {
    label: "Marvel — guia de Miles Morales",
    url: "https://www.marvel.com/articles/comics/where-to-start-comics-guide-miles-morales-spider-man",
  },
  boxOffice: {
    label: "The Numbers — franquia Spider-Man",
    url: "https://www.the-numbers.com/movies/franchise/Spider-Man",
  },
  deadlineRaimi: {
    label: "Deadline — fim de Spider-Man 4",
    url: "https://deadline.com/2010/01/sony-pictures-and-marvel-studios-announce-new-spider-man-movie-22326/",
  },
  marvelMovies: {
    label: "Marvel — calendário de filmes",
    url: "https://www.marvel.com/movies",
  },
  sonyMcu: {
    label: "Sony Pictures — acordo de coprodução com Marvel Studios",
    url: "https://www.sonypictures.com/corp/press_releases/2015/02_15/020915_spiderman.html",
  },
  disneyMerch: {
    label: "The Walt Disney Company — relatório anual de 2012",
    url: "https://thewaltdisneycompany.com/app/uploads/2015/10/2012-Annual-Report.pdf",
  },
};
export const profiles = {
  tobey: {
    slug: "tobey-maguire",
    key: "tobey" as Universe,
    name: "Tobey Maguire",
    label: "A era de Sam Raimi",
    years: "2002—2007 · retorno em 2021",
    title: "O herói que aprende a levantar.",
    intro:
      "Um Peter tímido, brilhante e financeiramente vulnerável descobre que poder não simplifica a vida: multiplica suas escolhas.",
    thesis:
      "Na trilogia de Sam Raimi, responsabilidade é um exercício diário. Peter deseja amor, estabilidade e reconhecimento, mas o heroísmo cobra presença justamente quando sua vida pessoal desaba.",
    powers:
      "Teias orgânicas, força e resistência extraordinárias, aderência, reflexos e um sentido de perigo mostrado por desaceleração sensorial.",
    suit: "Vermelho profundo, azul escuro, lentes angulares e teias prateadas elevadas criam a silhueta mais escultórica das três séries.",
    relations: [
      [
        "Mary Jane Watson",
        "amor idealizado que amadurece quando ambos reconhecem suas falhas",
      ],
      [
        "Tia May",
        "consciência moral que não precisa conhecer cada segredo para orientar Peter",
      ],
      ["Harry Osborn", "amizade corroída por luto, herança e ressentimento"],
      [
        "Otto Octavius",
        "um espelho do que acontece quando ambição perde a responsabilidade",
      ],
    ],
    villains: [
      "Duende Verde — poder e paternidade distorcidos",
      "Doutor Octopus — ciência sem freio ético",
      "Homem-Areia — culpa, sobrevivência e perdão",
      "Venom — o ego de Peter devolvido como ameaça",
    ],
    films: [
      ["Homem-Aranha", "2002", "Origem, culpa e a decisão que define o herói."],
      [
        "Homem-Aranha 2",
        "2004",
        "O desejo de abandonar a máscara encontra seu custo humano.",
      ],
      [
        "Homem-Aranha 3",
        "2007",
        "Ego, vingança e perdão disputam o centro da narrativa.",
      ],
    ],
  },
  andrew: {
    slug: "andrew-garfield",
    key: "andrew" as Universe,
    name: "Andrew Garfield",
    label: "A era Amazing",
    years: "2012—2014 · retorno em 2021",
    title: "A queda não encerra o movimento.",
    intro:
      "Ágil, inquieto e emocionalmente exposto, este Peter investiga o passado enquanto descobre que promessas também podem ferir.",
    thesis:
      "A fisicalidade de Andrew Garfield dá ao herói uma leveza quase dançada. Por baixo dela existe um jovem atravessado por abandono, culpa e uma relação com Gwen construída como parceria, não apenas ideal romântico.",
    powers:
      "Força, aderência e sentido de perigo coexistem com lançadores mecânicos projetados por Peter; sua movimentação privilegia impulso, flexibilidade e improviso.",
    suit: "O primeiro traje é estreito, texturizado e experimental. O segundo amplia as lentes brancas e recupera proporções clássicas, acompanhando um herói mais seguro.",
    relations: [
      [
        "Gwen Stacy",
        "parceria afetiva e intelectual que organiza toda a jornada",
      ],
      [
        "Tia May",
        "cuidado recíproco atravessado por silêncios sobre a família",
      ],
      ["Capitão Stacy", "autoridade que se torna compromisso moral"],
      [
        "Max Dillon",
        "solidão ignorada que se converte em ressentimento e violência",
      ],
    ],
    villains: [
      "Lagarto — mentor e ciência transformados",
      "Electro — invisibilidade social convertida em fúria",
      "Duende Verde — amizade, doença e obsessão",
      "Rino — espetáculo breve de um herói que volta a agir",
    ],
    films: [
      [
        "O Espetacular Homem-Aranha",
        "2012",
        "Uma reinicialização apoiada em investigação, adolescência e escolha.",
      ],
      [
        "O Espetacular Homem-Aranha 2",
        "2014",
        "Romance e ameaça industrial dividem uma narrativa de consequências.",
      ],
      [
        "Sem Volta Para Casa",
        "2021",
        "O retorno transforma memória de perda em possibilidade de reparação.",
      ],
    ],
  },
  tom: {
    slug: "tom-holland",
    key: "tom" as Universe,
    name: "Tom Holland",
    label: "O Homem-Aranha do MCU",
    years: "2016—presente",
    title: "Crescer sem testemunhas.",
    intro:
      "Ele entra em um mundo já cheio de heróis, procura aprovação e termina obrigado a descobrir quem é sem tecnologia, reputação ou reconhecimento.",
    thesis:
      "A trajetória começa na euforia de ser recrutado e atravessa guerras, perdas e exposição pública. Aos poucos, a pergunta deixa de ser “como entrar para os Vingadores?” e passa a ser “como fazer o certo quando ninguém lembrará?”.",
    powers:
      "Força, aderência, agilidade e sentido-aranha — chamado informalmente de “Peter tingle” — combinam-se a lançadores e trajes de complexidade variável.",
    suit: "Do traje caseiro ao uniforme Stark, ao Iron Spider e ao traje costurado no recomeço: a evolução visual registra a passagem da tutela para a autonomia.",
    relations: [
      [
        "Tia May",
        "família, acolhimento e formulação explícita da responsabilidade",
      ],
      ["MJ", "intimidade baseada em observação, verdade e escolha"],
      ["Ned Leeds", "amizade que dá ao segredo um espaço de normalidade"],
      [
        "Tony Stark",
        "mentoria que oferece recursos e também uma expectativa difícil de carregar",
      ],
    ],
    villains: [
      "Abutre — sobrevivência à margem dos grandes eventos",
      "Mystério — fabricação de imagem e manipulação",
      "Duende Verde — violência que testa o limite moral",
      "Thanos — escala cósmica e a perda de controle",
    ],
    films: [
      [
        "De Volta ao Lar",
        "2017",
        "Um herói local aprende que o traje não produz caráter.",
      ],
      [
        "Longe de Casa",
        "2019",
        "Luto e desinformação transformam férias em crise de identidade.",
      ],
      [
        "Sem Volta Para Casa",
        "2021",
        "Consequências multiversais conduzem a uma renúncia radical.",
      ],
      [
        "Brand New Day",
        "2026",
        "Novo capítulo lançado em 31 de julho de 2026.",
      ],
    ],
  },
};
export const profileEditorial = {
  tobey: {
    origin:
      "A picada muda seu corpo; a omissão diante do assaltante muda sua ética. A morte de Ben não funciona como um simples gatilho de aventura, mas como uma dívida impossível de quitar.",
    daily:
      "A universidade, o aluguel atrasado, as entregas de pizza e o Clarim Diário fazem deste Peter o herói mais materialmente precário. A cidade pede socorro ao mesmo tempo em que cobra boletos.",
    city: "Manhattan tem peso, trânsito e vertigem. Os balanços são longos, físicos e solenes; o corpo parece lutar contra a gravidade antes de vencê-la.",
    return:
      "Em Sem Volta Para Casa, o Peter mais velho não precisa dominar a cena. Ele ampara dois jovens, impede uma escolha irreversível e revela que a responsabilidade também pode significar interromper o ciclo da vingança.",
    lesson:
      "Perseverar não é suportar tudo calado: é continuar escolhendo cuidado, inclusive quando o reconhecimento não vem.",
    beats: [
      [
        "Mary Jane",
        "O amor começa idealizado e se torna real quando precisa conviver com ausências, medo e escolhas imperfeitas.",
      ],
      [
        "Otto Octavius",
        "O mentor científico se torna um espelho: inteligência sem responsabilidade pode transformar ambição em catástrofe.",
      ],
      [
        "Os três Peters",
        "No encontro multiversal, experiência deixa de ser superioridade e se transforma em escuta, limite e cuidado.",
      ],
    ],
  },
  andrew: {
    origin:
      "Este Peter já começa ferido pelo desaparecimento dos pais. A investigação da Oscorp, a picada e a busca por Curt Connors misturam curiosidade científica com a necessidade íntima de preencher uma ausência.",
    daily:
      "Sarcasmo, fotografia, skate e inteligência técnica convivem com isolamento. Ele improvisa os próprios lançadores e encontra em Gwen alguém capaz de acompanhar seu raciocínio, não apenas admirar a máscara.",
    city: "Seu movimento é elástico, veloz e quase coreografado. Nova York responde com reflexos, guindastes, eletricidade e alturas; a câmera deixa o corpo completar a frase.",
    return:
      "Em Sem Volta Para Casa, salvar MJ não apaga Gwen. O gesto oferece outra coisa: a possibilidade de agir sem negar a ferida, transformando memória em cuidado.",
    lesson: "O luto pode alterar o movimento sem precisar encerrá-lo.",
    beats: [
      [
        "Gwen Stacy",
        "Parceira intelectual e afetiva, ela participa das decisões e também paga o preço das promessas que Peter não consegue cumprir.",
      ],
      [
        "Max Dillon",
        "A solidão ignorada de Max se converte em eletricidade, espetáculo e ressentimento diante do herói que ele admirava.",
      ],
      [
        "Os três Peters",
        "O retorno permite que Andrew converta memória de perda em presença: ele se reconhece nos outros sem apagar a própria história.",
      ],
    ],
  },
  tom: {
    origin:
      "Sua origem acontece fora de quadro. Quando surge em Guerra Civil, Peter já escolheu ajudar o bairro e formula a responsabilidade em palavras próprias: se pode impedir algo ruim e não age, aquilo também passa por ele.",
    daily:
      "Escola, amizade, competição acadêmica e o Queens dão escala íntima a um universo de batalhas cósmicas. A tecnologia amplia possibilidades, mas também torna visível sua dependência de aprovação.",
    city: "O movimento alterna improviso suburbano, recursos Stark e, no recomeço, uma silhueta deliberadamente artesanal. Cada traje marca quem está decidindo por ele.",
    return:
      "Ao fim de Sem Volta Para Casa, ninguém se lembra de Peter Parker. Ele abandona o discurso preparado para MJ e Ned, costura o próprio uniforme e volta às ruas sem plateia, tutor ou garantia de recompensa.",
    lesson:
      "Fazer o certo quando ninguém saberá seu nome é a forma mais radical de autonomia.",
    beats: [
      [
        "Tony Stark",
        "Mentoria, acesso e expectativa. Peter precisa aprender a separar inspiração de validação.",
      ],
      [
        "MJ & Ned",
        "Os amigos dão verdade e humor à vida dupla; perdê-los torna concreto o preço da escolha final.",
      ],
      [
        "Os três Peters",
        "Tobey e Andrew oferecem experiência sem tomar a decisão de Tom; a rede existe para que cada um faça a própria escolha.",
      ],
    ],
  },
} as const;

export const commercialFilms = [
  {
    era: "Raimi",
    universe: "tobey" as Universe,
    title: "Homem-Aranha",
    year: "2002",
    budget: 139000000,
    worldwide: 823929972,
    poster: 0,
  },
  {
    era: "Raimi",
    universe: "tobey" as Universe,
    title: "Homem-Aranha 2",
    year: "2004",
    budget: 200000000,
    worldwide: 797001599,
    poster: 1,
  },
  {
    era: "Raimi",
    universe: "tobey" as Universe,
    title: "Homem-Aranha 3",
    year: "2007",
    budget: 258000000,
    worldwide: 896337268,
    poster: 2,
  },
  {
    era: "Amazing",
    universe: "andrew" as Universe,
    title: "O Espetacular Homem-Aranha",
    year: "2012",
    budget: 220000000,
    worldwide: 758576824,
    poster: 0,
  },
  {
    era: "Amazing",
    universe: "andrew" as Universe,
    title: "O Espetacular Homem-Aranha 2",
    year: "2014",
    budget: 200000000,
    worldwide: 709672746,
    poster: 1,
  },
  {
    era: "MCU",
    universe: "tom" as Universe,
    title: "De Volta ao Lar",
    year: "2017",
    budget: 175000000,
    worldwide: 878852749,
    poster: 0,
  },
  {
    era: "MCU",
    universe: "tom" as Universe,
    title: "Longe de Casa",
    year: "2019",
    budget: 160000000,
    worldwide: 1132298674,
    poster: 1,
  },
  {
    era: "MCU",
    universe: "tom" as Universe,
    title: "Sem Volta Para Casa",
    year: "2021",
    budget: 200000000,
    worldwide: 1921206586,
    poster: 2,
  },
  {
    era: "MCU",
    universe: "tom" as Universe,
    title: "Brand New Day",
    year: "2026",
    budget: null,
    worldwide: 2000000000,
    poster: 3,
    ongoing: true,
  },
  {
    era: "Aranhaverso",
    universe: "verse" as Universe,
    title: "No Aranhaverso",
    year: "2018",
    budget: 90000000,
    worldwide: 373807069,
    poster: 0,
  },
  {
    era: "Aranhaverso",
    universe: "verse" as Universe,
    title: "Através do Aranhaverso",
    year: "2023",
    budget: 100000000,
    worldwide: 690824738,
    poster: 1,
  },
] as const;

export const timeline = [
  ["1962", "HQs", "Amazing Fantasy #15", "Peter Parker estreia nos quadrinhos"],
  ["1963", "HQs", "The Amazing Spider-Man #1", "Começa a série solo"],
  [
    "1973",
    "HQs",
    "A noite em que Gwen Stacy morreu",
    "A perda redefine o horizonte do herói",
  ],
  ["1984", "HQs", "O traje negro", "Uma nova silhueta entra na mitologia"],
  [
    "2000",
    "HQs",
    "Ultimate Spider-Man",
    "A origem é recontada para outro século",
  ],
  ["2002", "Tobey", "Homem-Aranha", "Filme solo"],
  ["2004", "Tobey", "Homem-Aranha 2", "Filme solo"],
  ["2007", "Tobey", "Homem-Aranha 3", "Filme solo"],
  ["2011", "Miles", "Ultimate Fallout #4", "Miles Morales assume a máscara"],
  ["2012", "Andrew", "O Espetacular Homem-Aranha", "Filme solo"],
  ["2014", "Andrew", "O Espetacular Homem-Aranha 2", "Filme solo"],
  ["2016", "Tom", "Capitão América: Guerra Civil", "Participação"],
  ["2017", "Tom", "Homem-Aranha: De Volta ao Lar", "Filme solo"],
  ["2018", "Miles", "Homem-Aranha no Aranhaverso", "Animação"],
  ["2018", "Tom", "Vingadores: Guerra Infinita", "Equipe"],
  ["2019", "Tom", "Vingadores: Ultimato", "Equipe"],
  ["2019", "Tom", "Homem-Aranha: Longe de Casa", "Filme solo"],
  [
    "2021",
    "Três Peters",
    "Homem-Aranha: Sem Volta Para Casa",
    "Encontro multiversal",
  ],
  ["2023", "Miles", "Homem-Aranha: Através do Aranhaverso", "Animação"],
  ["2026", "Tom", "Spider-Man: Brand New Day", "Filme solo lançado"],
  [
    "2027",
    "Miles",
    "Spider-Man: Beyond the Spider-Verse",
    "Confirmado oficialmente",
  ],
] as const;
export const comics = [
  {
    title: "Amazing Fantasy #15",
    year: "1962",
    era: "Clássica",
    hero: "Peter",
    theme: "Origem",
    credit: "Stan Lee · Steve Ditko",
    text: "Em poucas páginas, o adolescente que falha em agir aprende que capacidade e responsabilidade são inseparáveis.",
  },
  {
    title: "The Amazing Spider-Man #1",
    year: "1963",
    era: "Clássica",
    hero: "Peter",
    theme: "Identidade",
    credit: "Stan Lee · Steve Ditko",
    text: "A primeira série solo define humor, precariedade financeira e uma cidade que nem sempre confia no herói.",
  },
  {
    title: "If This Be My Destiny…!",
    year: "1965–66",
    era: "Clássica",
    hero: "Peter",
    theme: "Perseverança",
    credit: "Stan Lee · Steve Ditko",
    text: "O arco do Planejador Mestre culmina numa imagem duradoura: Peter supera peso físico e dúvida para salvar Tia May.",
  },
  {
    title: "A morte de Gwen Stacy",
    year: "1973",
    era: "Bronze",
    hero: "Peter",
    theme: "Perda",
    credit: "Gerry Conway · Gil Kane",
    text: "A história altera a percepção de segurança dos quadrinhos de super-herói e marca Peter por décadas.",
  },
  {
    title: "A saga do traje alienígena",
    year: "1984",
    era: "Moderna",
    hero: "Peter",
    theme: "Transformação",
    credit: "Vários autores",
    text: "O uniforme negro nasce como novidade visual e evolui para uma das mitologias mais influentes da franquia.",
  },
  {
    title: "Kraven's Last Hunt",
    year: "1987",
    era: "Moderna",
    hero: "Peter",
    theme: "Identidade",
    credit: "J. M. DeMatteis · Mike Zeck",
    text: "Uma narrativa sombria sobre obsessão, identidade e a diferença entre vestir o símbolo e compreendê-lo.",
  },
  {
    title: "The Death of Jean DeWolff",
    year: "1985–86",
    era: "Moderna",
    hero: "Peter",
    theme: "Justiça",
    credit: "Peter David · Rich Buckler",
    text: "O confronto entre justiça e vingança aproxima Peter de limites morais desconfortáveis.",
  },
  {
    title: "Spider-Man: Blue",
    year: "2002–03",
    era: "Contemporânea",
    hero: "Peter",
    theme: "Memória",
    credit: "Jeph Loeb · Tim Sale",
    text: "Uma lembrança afetiva de Gwen e da juventude, narrada pela distância entre quem Peter foi e quem se tornou.",
  },
  {
    title: "Ultimate Spider-Man",
    year: "2000",
    era: "Contemporânea",
    hero: "Peter",
    theme: "Reinvenção",
    credit: "Brian Michael Bendis · Mark Bagley",
    text: "A origem é reconstruída para um novo século, com adolescência estendida e relações em primeiro plano.",
  },
  {
    title: "Ultimate Fallout #4",
    year: "2011",
    era: "Contemporânea",
    hero: "Miles",
    theme: "Legado",
    credit: "Bendis · Sara Pichelli",
    text: "Miles Morales assume o símbolo em um universo que perdeu seu Peter Parker.",
  },
  {
    title: "Ultimate Comics Spider-Man #1",
    year: "2011",
    era: "Contemporânea",
    hero: "Miles",
    theme: "Origem",
    credit: "Bendis · Sara Pichelli",
    text: "A nova voz do Homem-Aranha ganha espaço próprio, família, dúvidas e poderes distintos.",
  },
  {
    title: "Spider-Verse",
    year: "2014",
    era: "Contemporânea",
    hero: "Multiverso",
    theme: "Legado",
    credit: "Dan Slott · Olivier Coipel",
    text: "A rede de versões transforma variação editorial em tema narrativo e amplia quem pode vestir a máscara.",
  },
];
export const claims = [
  {
    id: "C01",
    text: "Maguire e Garfield retornaram em No Way Home.",
    status: "Confirmado oficialmente" as EditorialStatus,
    source: "marvelNwh",
  },
  {
    id: "C02",
    text: "Spider-Man 4 de Raimi deixou de avançar e a Sony reiniciou a série.",
    status: "Confirmado oficialmente" as EditorialStatus,
    source: "deadlineRaimi",
  },
  {
    id: "C03",
    text: "Brand New Day estreou em 31 de julho de 2026.",
    status: "Confirmado oficialmente" as EditorialStatus,
    source: "sonyTom",
  },
  {
    id: "C04",
    text: "Beyond the Spider-Verse está anunciado para 18 de junho de 2027.",
    status: "Confirmado oficialmente" as EditorialStatus,
    source: "sonyVerse",
  },
  {
    id: "C05",
    text: "Não há confirmação oficial nas fontes auditadas de Tobey ou Andrew em Avengers: Doomsday.",
    status: "Indeterminado por falta de evidência" as EditorialStatus,
    source: "marvelMovies",
  },
];
