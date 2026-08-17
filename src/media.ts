import type { Universe } from "./data";
export type MediaItem = {
  id: string;
  src: string;
  universe: Universe | "comics";
  work: string;
  year: string;
  description: string;
  source: string;
  sourceUrl: string;
  credit: string;
  nature: string;
  usage: string;
  alt: string;
  focus: string;
};
const filmSource = "The Movie Database — galeria de material promocional";
const tmdbUrls: Record<Universe, string> = {
  tobey:
    "https://www.themoviedb.org/collection/556-spider-man-collection/images/backdrops",
  andrew:
    "https://www.themoviedb.org/collection/125574-the-amazing-spider-man-collection/images/backdrops",
  tom: "https://www.themoviedb.org/collection/531241-spider-man-homecoming-collection/images/backdrops",
  verse:
    "https://www.themoviedb.org/collection/573436-spider-man-spider-verse-collection/images/backdrops",
};
const counts = { tobey: 9, andrew: 6, tom: 9, verse: 6 };
const labels = {
  tobey: "trilogia de Sam Raimi",
  andrew: "série O Espetacular Homem-Aranha",
  tom: "série do MCU",
  verse: "filmes do Aranhaverso",
};
export const media: MediaItem[] = (Object.keys(counts) as Universe[]).flatMap(
  (u) =>
    Array.from({ length: counts[u] }, (_, i) => ({
      id: `${u}-${String(i + 1).padStart(2, "0")}`,
      src: `media/${u}-${String(i + 1).padStart(2, "0")}.jpg`,
      universe: u,
      work: labels[u],
      year:
        u === "tobey"
          ? "2002–2007"
          : u === "andrew"
            ? "2012–2014"
            : u === "tom"
              ? "2017–2021"
              : "2018–2023",
      description: `Still promocional relacionado à ${labels[u]}.`,
      source: filmSource,
      sourceUrl: tmdbUrls[u],
      credit: "Direitos visuais dos respectivos estúdios e titulares",
      nature: "still promocional",
      usage:
        "Uso editorial em protótipo privado; licença de redistribuição não presumida.",
      alt: `Cena promocional da ${labels[u]}, usada para contextualizar sua identidade visual.`,
      focus: "50% 40%",
    })),
);
const posterWorks: Record<Universe, string[]> = {
  tobey: ["Homem-Aranha", "Homem-Aranha 2", "Homem-Aranha 3"],
  andrew: ["O Espetacular Homem-Aranha", "O Espetacular Homem-Aranha 2"],
  tom: ["De Volta ao Lar", "Longe de Casa", "Sem Volta Para Casa"],
  verse: ["No Aranhaverso", "Através do Aranhaverso"],
};
Object.entries(posterWorks).forEach(([u, works]) =>
  works.forEach((work, i) =>
    media.push({
      id: `poster-${u}-${i + 1}`,
      src: `media/poster-${u}-${i + 1}.jpg`,
      universe: u as Universe,
      work,
      year: "",
      description: `Key art oficial de ${work}.`,
      source: "Sony Pictures — página oficial do filme",
      sourceUrl:
        u === "verse"
          ? "https://www.sonypictures.com/movies/spidermanacrossthespiderverse"
          : "https://www.sonypictures.com/movies",
      credit: "Sony Pictures",
      nature: "pôster oficial",
      usage: "Identificação editorial no protótipo privado.",
      alt: `Pôster oficial de ${work}.`,
      focus: "50% 28%",
    }),
  ),
);
media.push({
  id: "tobey-hero",
  src: "media/tobey-hero.jpg",
  universe: "tobey",
  work: "Homem-Aranha 2",
  year: "2004",
  description: "Key art promocional com Peter Parker e a máscara.",
  source: filmSource,
  sourceUrl: tmdbUrls.tobey,
  credit: "Sony Pictures / Columbia Pictures",
  nature: "imagem promocional",
  usage:
    "Uso editorial em protótipo privado; licença de redistribuição não presumida.",
  alt: "Rosto de Tobey Maguire dividido pela máscara do Homem-Aranha, com Manhattan ao fundo.",
  focus: "72% 42%",
});
media.push({
  id: "bnd-banner",
  src: "media/bnd-banner.jpg",
  universe: "tom",
  work: "Spider-Man: Brand New Day",
  year: "2026",
  description:
    "Banner oficial do novo capítulo, com o Homem-Aranha em movimento sobre Manhattan.",
  source: "Sony Pictures — página oficial do filme",
  sourceUrl: "https://www.sonypictures.com/movies/spidermanbrandnewday",
  credit: "Sony Pictures / Marvel Studios",
  nature: "imagem oficial",
  usage: "Identificação editorial em protótipo privado.",
  alt: "Homem-Aranha balança entre os prédios de Manhattan em imagem oficial de Brand New Day.",
  focus: "50% 45%",
});
media.push({
  id: "poster-tom-4",
  src: "media/poster-tom-4.jpg",
  universe: "tom",
  work: "Spider-Man: Brand New Day",
  year: "2026",
  description: "Cartaz oficial com o título e a data de estreia nos cinemas.",
  source: "Sony Pictures — página oficial do filme",
  sourceUrl: "https://www.sonypictures.com/movies/spidermanbrandnewday",
  credit: "Sony Pictures / Marvel Studios",
  nature: "pôster oficial",
  usage: "Identificação editorial em protótipo privado.",
  alt: "Pôster oficial de Spider-Man: Brand New Day com o título vermelho sobre fundo preto.",
  focus: "50% 42%",
});
media.push(
  {
    id: "tom-infinity-war",
    src: "media/tom-infinity-war.jpg",
    universe: "tom",
    work: "Vingadores: Guerra Infinita",
    year: "2018",
    description:
      "Peter Parker com o traje Iron Spider durante a batalha em Titã.",
    source: "Digital Spy — cobertura de Avengers: Infinity War",
    sourceUrl:
      "https://www.digitalspy.com/movies/a29452175/tom-holland-spider-man-marvel-stressful/",
    credit: "Marvel Studios / Walt Disney Studios Motion Pictures",
    nature: "frame do filme",
    usage: "Contextualização narrativa em protótipo editorial privado.",
    alt: "Peter Parker sem máscara usando o traje Iron Spider em Titã durante Vingadores: Guerra Infinita.",
    focus: "52% 38%",
  },
  {
    id: "nwh-three-peters",
    src: "media/nwh-three-peters.jpg",
    universe: "tom",
    work: "Homem-Aranha: Sem Volta Para Casa",
    year: "2021",
    description:
      "Os três Peters reunidos no andaime durante o confronto final.",
    source: "Still oficial Sony reproduzido pela Colombia.com",
    sourceUrl:
      "https://www.colombia.com/cine/noticias/spider-man-no-way-home-reestreno-fechas-paises-confirmados-marvel-studios-sony-360920",
    credit: "Sony Pictures / Marvel Studios",
    nature: "frame do filme",
    usage: "Contextualização narrativa em protótipo editorial privado.",
    alt: "Tom Holland, Tobey Maguire e Andrew Garfield juntos no andaime em Sem Volta Para Casa.",
    focus: "50% 36%",
  },
  {
    id: "andrew-2012-scene",
    src: "media/andrew-2012-scene.jpg",
    universe: "andrew",
    work: "O Espetacular Homem-Aranha",
    year: "2012",
    description: "Peter e Gwen no corredor da Midtown High.",
    source: "The Movie Database — still do filme",
    sourceUrl:
      "https://www.themoviedb.org/movie/1930-the-amazing-spider-man/images/backdrops",
    credit: "Sony Pictures / Columbia Pictures",
    nature: "frame do filme",
    usage: "Contextualização narrativa em protótipo editorial privado.",
    alt: "Gwen Stacy e Peter Parker juntos no corredor da escola em O Espetacular Homem-Aranha.",
    focus: "50% 42%",
  },
  {
    id: "andrew-2014-scene",
    src: "media/andrew-2014-scene.jpg",
    universe: "andrew",
    work: "O Espetacular Homem-Aranha 2",
    year: "2014",
    description:
      "Electro descarrega energia durante o confronto em Times Square.",
    source: "Entertainment Tonight — teaser oficial Sony",
    sourceUrl: "https://www.etonline.com/movies/142156_New_Spider_Man_2_Teaser",
    credit: "Sony Pictures / Columbia Pictures",
    nature: "frame do filme",
    usage: "Contextualização narrativa em protótipo editorial privado.",
    alt: "Electro cercado por descargas azuis em uma cena de O Espetacular Homem-Aranha 2.",
    focus: "50% 45%",
  },
  {
    id: "tom-tony-peter",
    src: "media/tom-tony-peter.jpg",
    universe: "tom",
    work: "Homem-Aranha: De Volta ao Lar",
    year: "2017",
    description: "Tony Stark e Peter Parker no complexo dos Vingadores.",
    source: "Still de Spider-Man: Homecoming reproduzido por Alpha Coders",
    sourceUrl: "https://wall.alphacoders.com/big.php?i=817011",
    credit: "Sony Pictures / Marvel Studios",
    nature: "frame do filme",
    usage: "Contextualização narrativa em protótipo editorial privado.",
    alt: "Tony Stark caminha ao lado de Peter Parker no complexo dos Vingadores em De Volta ao Lar.",
    focus: "68% 42%",
  },
  {
    id: "tom-mj-ned",
    src: "media/tom-mj-ned.jpg",
    universe: "tom",
    work: "Homem-Aranha: Sem Volta Para Casa",
    year: "2021",
    description:
      "Peter, MJ e Ned observam a chegada dos visitantes multiversais.",
    source: "GQ España — still promocional de No Way Home",
    sourceUrl:
      "https://www.revistagq.com/noticias/articulo/spider-man-no-way-home-sin-camino-a-casa",
    credit: "Sony Pictures / Marvel Studios",
    nature: "frame do filme",
    usage: "Contextualização narrativa em protótipo editorial privado.",
    alt: "Peter Parker, MJ e Ned juntos em uma cena de Sem Volta Para Casa.",
    focus: "50% 38%",
  },
);
const focusMap: Record<string, string> = {
  "tobey-01": "62% 42%",
  "andrew-02": "50% 30%",
  "tom-03": "78% 42%",
  "tom-04": "34% 42%",
  "tom-09": "64% 38%",
  "verse-01": "55% 46%",
};
media.forEach((item) => {
  if (focusMap[item.id]) item.focus = focusMap[item.id];
});
export const universeMedia = (u: Universe) =>
  media.filter((m) => m.universe === u);
export const comicMedia: MediaItem[] = Array.from({ length: 12 }, (_, i) => ({
  id: `comic-${String(i + 1).padStart(2, "0")}`,
  src: `media/comic-${String(i + 1).padStart(2, "0")}.jpg`,
  universe: "comics",
  work: "Curadoria Marvel: 60 anos",
  year: "",
  description: "Capa oficial de edição selecionada na curadoria.",
  source: "Marvel — Beyond Amazing",
  sourceUrl:
    "https://www.marvel.com/articles/comics/beyond-amazing-spider-man-60-anniversary-best-moments-from-the-comics",
  credit: "Marvel e respectivos artistas",
  nature: "capa oficial",
  usage: "Identificação bibliográfica em protótipo privado.",
  alt: "Capa de uma história essencial do Homem-Aranha na curadoria cronológica.",
  focus: "50% 20%",
}));
media.push(...comicMedia);
