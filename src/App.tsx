import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Asterisk as Web,
  BookOpen,
  ChevronDown,
  Menu,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import {
  claims,
  comics,
  commercialFilms,
  profileEditorial,
  profiles,
  sources,
  timeline,
  verified,
  type EditorialStatus,
} from "./data";
import { comicMedia, media, universeMedia, type MediaItem } from "./media";

const routes = [
  ["/tobey-maguire", "Tobey"],
  ["/andrew-garfield", "Andrew"],
  ["/tom-holland", "Tom"],
  ["/aranhaverso", "Aranhaverso"],
  ["/quadrinhos", "HQs"],
];
function Img({
  item,
  className = "",
  eager = false,
}: {
  item: MediaItem;
  className?: string;
  eager?: boolean;
}) {
  const [bad, setBad] = useState(false);
  return (
    <figure className={`image ${className} ${bad ? "broken" : ""}`}>
      {!bad ? (
        <img
          src={item.src}
          alt={item.alt}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          decoding="async"
          width="1280"
          height="720"
          style={{ objectPosition: item.focus }}
          onError={() => setBad(true)}
        />
      ) : (
        <div className="imageFallback">
          <Web />
          <span>Imagem indisponível</span>
        </div>
      )}
      <figcaption>
        {item.work}
        <small>{item.nature}</small>
      </figcaption>
    </figure>
  );
}
function AppShell() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    scrollTo({ top: 0 });
    document.title = titleFor(pathname);
  }, [pathname]);
  return (
    <>
      <header className="topbar">
        <Link to="/" className="identity" onClick={() => setOpen(false)}>
          <Web />
          <span>
            ARANHA<small>arquivo multiversal</small>
          </span>
        </Link>
        <button
          className="menuButton"
          aria-expanded={open}
          aria-label="Alternar menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          className={open ? "open" : ""}
          onClick={() => setOpen(false)}
          aria-label="Navegação principal"
        >
          {routes.map((r) => (
            <NavLink to={r[0]} key={r[0]}>
              {r[1]}
            </NavLink>
          ))}
          <NavLink to="/cronologia">Cronologia</NavLink>
          <NavLink to="/fontes">Fontes</NavLink>
        </nav>
      </header>
      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tobey-maguire"
            element={<ProfilePage profile={profiles.tobey} />}
          />
          <Route
            path="/andrew-garfield"
            element={<ProfilePage profile={profiles.andrew} />}
          />
          <Route
            path="/tom-holland"
            element={<ProfilePage profile={profiles.tom} />}
          />
          <Route path="/aranhaverso" element={<Verse />} />
          <Route path="/quadrinhos" element={<Comics />} />
          <Route path="/comparativo" element={<Compare />} />
          <Route path="/cronologia" element={<Timeline />} />
          <Route path="/por-tras-da-mascara" element={<Industry />} />
          <Route path="/fontes" element={<Sources />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ReadingProgress />
    </>
  );
}
const titleFor = (p: string) => {
  const k = routes.find((r) => p.includes(r[0]));
  return `${k?.[1] || "Aranha"} | três gerações, uma responsabilidade`;
};
function ReadingProgress() {
  const [v, setV] = useState(0);
  useEffect(() => {
    const f = () =>
      setV(
        Math.min(
          100,
          (scrollY /
            Math.max(1, document.documentElement.scrollHeight - innerHeight)) *
            100,
        ),
      );
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return <div className="reading" style={{ width: `${v}%` }} />;
}
function Home() {
  const tobey = universeMedia("tobey"),
    andrew = universeMedia("andrew"),
    tom = universeMedia("tom"),
    verse = universeMedia("verse");
  const t = tobey.find((x) => x.id === "tobey-hero") || tobey[0];
  const cards = [
    {
      to: "/tobey-maguire",
      name: "Tobey Maguire",
      line: "O herói que aprende a levantar.",
      meta: "01 / 2002—2007",
      key: "tobey",
      img: tobey[1],
    },
    {
      to: "/andrew-garfield",
      name: "Andrew Garfield",
      line: "A queda não encerra o movimento.",
      meta: "02 / 2012—2014",
      key: "andrew",
      img: andrew[4],
    },
    {
      to: "/tom-holland",
      name: "Tom Holland",
      line: "Crescer sem testemunhas.",
      meta: "03 / 2016—",
      key: "tom",
      img: tom[2],
    },
    {
      to: "/aranhaverso",
      name: "Miles Morales",
      line: "Todo mundo começa em algum lugar.",
      meta: "04 / 2018—",
      key: "verse",
      img: verse[1],
    },
  ];
  return (
    <>
      <section className="homeHero">
        <div className="heroTrio">
          <Img item={t} eager />
          <Img item={andrew[1]} eager />
          <Img item={tom[2]} eager />
        </div>
        <div className="homeOverlay">
          <p className="eyebrow">TRÊS GERAÇÕES · UMA RESPONSABILIDADE</p>
          <h1>
            QUALQUER UM
            <br />
            PODE USAR <em>A MÁSCARA.</em>
          </h1>
          <p>
            Três Peters, um Miles e incontáveis maneiras de escolher ajudar.
          </p>
          <div className="heroLinks">
            {routes.map((r) => (
              <Link
                className={`portal portal-${r[1].toLowerCase()}`}
                key={r[0]}
                to={r[0]}
              >
                {r[1]} <ArrowRight />
              </Link>
            ))}
          </div>
        </div>
        <a className="scrollCue" href="#universos">
          DESCER <span>↓</span>
        </a>
      </section>
      <section id="universos" className="universeRail">
        {cards.map((c) => (
          <Link className={`universeCard ${c.key}`} to={c.to} key={c.key}>
            <Img item={c.img} />
            <div>
              <span>{c.meta}</span>
              <h2>{c.name}</h2>
              <p>{c.line}</p>
              <i>ABRIR ARQUIVO ↗</i>
            </div>
          </Link>
        ))}
      </section>
      <section className="homeManifest">
        <div className="manifestKicker">
          <p className="eyebrow">MANIFESTO / QUEENS — MANHATTAN — BROOKLYN</p>
          <span>ARQUIVO 616</span>
        </div>
        <h2>
          Não existe um único jeito de ser o <mark>Homem-Aranha.</mark>
        </h2>
        <div className="manifestCopy">
          <p>
            Tobey transforma dever em perseverança. Andrew faz da perda uma
            batalha contra a desistência. Tom amadurece dentro de um mundo que
            primeiro o acolhe e depois o esquece. Miles descobre que pertencer
            não exige imitar.
          </p>
          <div className="boroughs">
            <b>
              QUEENS<small>origem</small>
            </b>
            <b>
              MANHATTAN<small>vertigem</small>
            </b>
            <b>
              BROOKLYN<small>reinvenção</small>
            </b>
          </div>
          <Link className="button" to="/comparativo">
            Cruzar as quatro lentes <ArrowUpRight />
          </Link>
        </div>
      </section>
      <section className="spiderBreak">
        <Img item={verse[3]} />
        <div>
          <span>PRÓXIMO PORTAL</span>
          <h2>
            O multiverso não é cenário.
            <br />É linguagem.
          </h2>
          <Link to="/aranhaverso">
            Entrar no Aranhaverso <ArrowRight />
          </Link>
        </div>
      </section>
      <section className="headlineStrip">
        <b>CLARIM ESPECIAL</b>
        <p>
          Responsabilidade é o que cada versão faz depois que tudo dá errado.
        </p>
        <Link to="/por-tras-da-mascara">Abrir caderno de cinema →</Link>
      </section>
    </>
  );
}

type Profile =
  typeof profiles.tobey | typeof profiles.andrew | typeof profiles.tom;
type ProfileKey = "tobey" | "andrew" | "tom";
const profileChapters: Record<
  ProfileKey,
  { year: string; title: string; tag: string; text: string; spoiler: string }[]
> = {
  tobey: [
    {
      year: "2002",
      title: "Homem-Aranha",
      tag: "ORIGEM / DUENDE VERDE",
      text: "Peter confunde poder com recompensa até que a morte de Ben converte omissão em responsabilidade. Norman Osborn oferece o espelho sombrio: força usada para dominar e testar vínculos.",
      spoiler:
        "Peter rejeita a promessa de poder de Norman e também renuncia a começar uma relação com Mary Jane, acreditando que a proximidade a colocaria em risco.",
    },
    {
      year: "2004",
      title: "Homem-Aranha 2",
      tag: "VOCAÇÃO / DOUTOR OCTOPUS",
      text: "Trabalho, universidade, aluguel e amor entram em colapso. Otto Octavius transforma ambição científica em tragédia e devolve a Peter a pergunta central: quem ele escolhe ser quando ser herói custa tudo?",
      spoiler:
        "Peter recupera seus poderes quando aceita que não pode separar desejo e dever. Otto reassume o controle de sua criação e impede a catástrofe.",
    },
    {
      year: "2007",
      title: "Homem-Aranha 3",
      tag: "EGO / PERDÃO",
      text: "O traje negro amplifica orgulho e crueldade. Sandman personifica culpa e sobrevivência; Harry carrega a herança de Norman; Eddie Brock transforma ressentimento em simbiose.",
      spoiler:
        "A conclusão recusa uma vitória limpa: Peter perdoa Flint, pede perdão a Harry e encerra a trilogia dançando com Mary Jane depois de perdas que não podem ser desfeitas.",
    },
    {
      year: "2021",
      title: "Sem Volta Para Casa",
      tag: "RETORNO / MENTORIA",
      text: "O Peter mais velho chega como presença serena. Sua função não é provar superioridade, mas reconhecer a dor dos outros Peters e oferecer experiência sem apagar as diferenças.",
      spoiler:
        "Ele impede Tom de matar o Duende Verde, usando o próprio corpo como limite entre luto e vingança.",
    },
  ],
  andrew: [
    {
      year: "2012",
      title: "O Espetacular Homem-Aranha",
      tag: "INVESTIGAÇÃO / LAGARTO",
      text: "A busca pelos pais leva Peter a Curt Connors e à Oscorp. Gwen participa da investigação e o Capitão Stacy obriga o herói a encarar a diferença entre impulso pessoal e proteção pública.",
      spoiler:
        "A promessa feita ao Capitão Stacy tenta afastar Gwen do perigo, mas Peter descobre que amor e responsabilidade não cabem em uma regra simples.",
    },
    {
      year: "2014",
      title: "O Espetacular Homem-Aranha 2",
      tag: "PROMESSA / ELECTRO / DUENDE",
      text: "Peter e Gwen tentam planejar o futuro enquanto culpa, doença hereditária e solidão convergem na Oscorp. A energia visual do herói contrasta com uma história atravessada por presságios.",
      spoiler:
        "A morte de Gwen interrompe brutalmente o movimento. Peter se afasta, mas retorna ao ouvir o discurso de formatura dela sobre esperança.",
    },
    {
      year: "2021",
      title: "Sem Volta Para Casa",
      tag: "REDENÇÃO / MEMÓRIA",
      text: "Andrew retorna mais velho, ainda marcado pelo fracasso. Humor e vulnerabilidade coexistem até que a narrativa lhe oferece não uma correção do passado, mas uma nova escolha no presente.",
      spoiler:
        "Ao salvar MJ da queda, Peter chora. O gesto não substitui Gwen; transforma a dor acumulada em proteção.",
    },
  ],
  tom: [
    {
      year: "2016",
      title: "Guerra Civil",
      tag: "RECRUTAMENTO / QUEENS",
      text: "Tony Stark encontra um adolescente que já patrulha o bairro com recursos próprios. Peter entra no conflito maior pela promessa de ajudar, mas ainda não compreende a política que o cerca.",
      spoiler:
        "Sua participação estabelece a euforia do recrutamento e a assimetria da mentoria: Tony controla informação, traje e missão.",
    },
    {
      year: "2017",
      title: "De Volta ao Lar",
      tag: "BAIRRO / ABUTRE",
      text: "Peter quer pular etapas e provar que merece os Vingadores. Adrian Toomes traz o custo doméstico das grandes batalhas para o chão da cidade.",
      spoiler:
        "Sem o traje Stark, Peter levanta os escombros, derrota Toomes e recusa a vaga nos Vingadores: o caráter precede o uniforme.",
    },
    {
      year: "2018–19",
      title: "Guerra Infinita & Ultimato",
      tag: "ESCALA CÓSMICA / PERDA",
      text: "A aventura de bairro é arrastada para uma guerra planetária. Peter recebe o Iron Spider, viaja ao espaço, desaparece e retorna a um mundo transformado.",
      spoiler:
        "A morte de Tony encerra a tutela sem encerrar a necessidade de Peter encontrar sua própria medida.",
    },
    {
      year: "2019",
      title: "Longe de Casa",
      tag: "LUTO / MYSTÉRIO",
      text: "Férias europeias se tornam crise de sucessão. Quentin Beck fabrica imagens, monstros e autoridade, explorando a confiança de um adolescente em luto.",
      spoiler:
        "Peter derrota a ilusão, mas Mystério vence a batalha da narrativa pública ao revelar sua identidade e incriminá-lo.",
    },
    {
      year: "2021",
      title: "Sem Volta Para Casa",
      tag: "CONSEQUÊNCIA / RENÚNCIA",
      text: "Exposição pública, desejo de reparar a vida dos amigos e confiança apressada em magia abrem a crise multiversal. Os três Peters enfrentam vilões e versões de si mesmos.",
      spoiler:
        "May morre, Peter escolhe curar os vilões e aceita ser apagado da memória de todos. O último traje é costurado por ele.",
    },
    {
      year: "2026",
      title: "Brand New Day",
      tag: "RECOMEÇO / AUTONOMIA",
      text: "O novo capítulo parte de um Peter que combate o crime em tempo integral num mundo que não se lembra dele. Detalhes adicionais são tratados apenas quando confirmados por fonte oficial.",
      spoiler:
        "Esta ficha evita antecipar acontecimentos do filme e registra somente a premissa pública da Sony Pictures.",
    },
  ],
};

const filmMedia: Record<ProfileKey, string[]> = {
  tobey: ["tobey-01", "tobey-06", "tobey-08", "nwh-three-peters"],
  andrew: ["andrew-2012-scene", "andrew-2014-scene", "nwh-three-peters"],
  tom: [
    "tom-02",
    "tom-03",
    "tom-infinity-war",
    "tom-05",
    "nwh-three-peters",
    "bnd-banner",
  ],
};
const relationMedia: Record<ProfileKey, string[]> = {
  tobey: ["tobey-03", "tobey-06", "nwh-three-peters"],
  andrew: ["andrew-2012-scene", "andrew-2014-scene", "nwh-three-peters"],
  tom: ["tom-tony-peter", "tom-mj-ned", "nwh-three-peters"],
};
const signatures = {
  tobey: [
    "THE DAILY BUGLE",
    "RESPONSIBILITY · SACRIFICE · 35MM",
    "EDIÇÃO RAIMI / NOVA YORK EM PRATA",
  ],
  andrew: [
    "OSCORP FIELD LOG",
    "VELOCITY · VOLTAGE · LOSS",
    "ARQUIVO AMAZING / SISTEMA INSTÁVEL",
  ],
  tom: [
    "MCU PHASE LOG",
    "NEIGHBORHOOD · LEGACY · RESET",
    "QUEENS / NOVO DIA EM CURSO",
  ],
} as const;
const byId = (id: string, fallback: MediaItem) =>
  media.find((item) => item.id === id) || fallback;

function RelationArchive({
  profileKey,
  beats,
  fallback,
}: {
  profileKey: ProfileKey;
  beats: readonly (readonly [string, string])[];
  fallback: MediaItem;
}) {
  const [active, setActive] = useState(0);
  return (
    <section id="relacoes" className="relationsStage">
      <Img
        key={relationMedia[profileKey][active]}
        item={byId(relationMedia[profileKey][active], fallback)}
      />
      <div>
        <p className="eyebrow">GRAVIDADE HUMANA</p>
        <h2>Ninguém balança sozinho.</h2>
        <div
          className="relationOptions"
          role="tablist"
          aria-label="Relações centrais"
        >
          {beats.map((relation, index) => (
            <button
              key={relation[0]}
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
            >
              <span>
                {String(index + 1).padStart(2, "0")} — {relation[0]}
              </span>
              {active === index && <p>{relation[1]}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function EraSignature({ profileKey }: { profileKey: ProfileKey }) {
  const signature = signatures[profileKey];
  return (
    <aside
      className="eraSignature"
      aria-label={`Identidade visual de ${profileKey}`}
    >
      <b>{signature[0]}</b>
      <span>{signature[1]}</span>
      <small>{signature[2]}</small>
    </aside>
  );
}

const artifactData = {
  tobey: {
    code: "CONTATO 36 / P. PARKER",
    title: "A cidade cabe num negativo.",
    text: "Entre a objetiva e a manchete, Peter registra a mesma Manhattan que precisa atravessar. O trabalho precário vira arquivo visual do próprio heroísmo.",
    tags: ["DAILY BUGLE", "F/2.8", "ROLL 04"],
    images: ["tobey-02", "tobey-06"],
  },
  andrew: {
    code: "OSCORP / BIO-ENHANCEMENT 42",
    title: "Toda resposta abre outro arquivo.",
    text: "Genética, energia e arquitetura corporativa formam uma investigação sem linha reta. A interface organiza dados; a eletricidade denuncia quando o sistema perdeu o controle.",
    tags: ["CROSS-SPECIES", "GRID 7B", "VOLTAGE LIVE"],
    images: ["andrew-02", "andrew-2014-scene"],
  },
  tom: {
    code: "MIDTOWN / CASE 616",
    title: "O bairro virou evidência.",
    text: "Escola, tecnologia Stark e cobertura do Clarim disputam a imagem pública de Peter. Depois de No Way Home, o arquivo existe — mas o nome dentro dele desapareceu.",
    tags: ["QUEENS", "DODC REVIEW", "IDENTITY: REDACTED"],
    images: ["tom-03", "tom-09"],
  },
} as const;

function UniverseArtifacts({
  profileKey,
  fallback,
}: {
  profileKey: ProfileKey;
  fallback: MediaItem;
}) {
  const artifact = artifactData[profileKey];
  return (
    <section
      className={`universeArtifacts artifacts-${profileKey}`}
      aria-label="Arquivo visual do universo"
    >
      <header>
        <small>{artifact.code}</small>
        <h2>{artifact.title}</h2>
        <p>{artifact.text}</p>
      </header>
      <div className="artifactTags">
        {artifact.tags.map((tag, index) => (
          <span key={tag}>
            {String(index + 1).padStart(2, "0")} / {tag}
          </span>
        ))}
      </div>
      <div className="artifactPhotos">
        {artifact.images.map((id) => (
          <Img key={id} item={byId(id, fallback)} />
        ))}
      </div>
      <i aria-hidden="true">616</i>
    </section>
  );
}

function BrandNewDay() {
  return (
    <section className="brandNewDay">
      <Img item={byId("bnd-banner", universeMedia("tom")[0])} />
      <div>
        <p className="eyebrow">CAPÍTULO 04 · EM EXIBIÇÃO</p>
        <h2>Brand New Day</h2>
        <p>
          Sem a rede social que sustentava sua vida anterior, Peter volta a
          Manhattan em tempo integral. A imagem oficial troca a tutela
          tecnológica por corpo, vertigem e cidade: um novo começo que
          visualmente retorna ao essencial.
        </p>
        <div className="liveGross">
          <span>BILHETERIA MUNDIAL</span>
          <strong>US$ 2 bi+</strong>
          <small>estimativa de estúdio · 16 ago 2026</small>
        </div>
        <div className="bndSources">
          <SourceLink id="sonyTom" />
          <SourceLink id="apBnd" />
        </div>
      </div>
    </section>
  );
}

function ProfilePage({ profile: p }: { profile: Profile }) {
  const key = p.key as ProfileKey;
  const imgs = universeMedia(key);
  const ed = profileEditorial[key];
  const hero =
    key === "tobey"
      ? imgs.find((x) => x.id === "tobey-hero") || imgs[0]
      : imgs[0];
  return (
    <article className={`profile ${key}`}>
      <nav className="chapterNav" aria-label="Capítulos">
        <a href="#origem">Origem</a>
        <a href="#peter">Peter</a>
        <a href="#filmes">Filmes</a>
        <a href="#relacoes">Relações</a>
        <a href="#traje">Traje & cidade</a>
        <a href="#legado">Legado</a>
      </nav>
      <section className="profileHero">
        <Img item={hero} eager />
        <div>
          <p className="eyebrow">
            {p.label} · {p.years}
          </p>
          <h1>{p.title}</h1>
          <p>{p.intro}</p>
        </div>
        <div className="maskStamp" aria-hidden="true">
          <Web />
        </div>
      </section>
      <EraSignature profileKey={key} />
      <section id="origem" className="identityDeck">
        <article>
          <span>01</span>
          <h2>A origem</h2>
          <p>{ed.origin}</p>
        </article>
        <article>
          <span>02</span>
          <h2>Peter todo dia</h2>
          <p>{ed.daily}</p>
        </article>
        <article>
          <span>03</span>
          <h2>Nova York em movimento</h2>
          <p>{ed.city}</p>
        </article>
      </section>
      <section id="peter" className="essay">
        <div>
          <p className="eyebrow">SOB A MÁSCARA</p>
          <h2>{p.name}, antes do salto.</h2>
        </div>
        <div>
          <p className="dropcap">{p.thesis}</p>
          <p>
            A máscara amplia o que já existe: inteligência, desejo de
            pertencimento, impulsividade e capacidade de cuidado. Esta leitura
            distingue acontecimentos mostrados de interpretação editorial.
          </p>
        </div>
      </section>
      <section className="cinemaMosaic">
        <Img item={imgs[1]} />
        <Img item={imgs[2]} />
        <blockquote>
          “O poder não resolve a vida comum. Torna impossível ignorar quem
          precisa de ajuda.”<small>síntese editorial</small>
        </blockquote>
        <Img item={imgs[3]} />
      </section>
      <UniverseArtifacts profileKey={key} fallback={imgs[0]} />
      <section id="filmes" className="filmChapters">
        <header>
          <p className="eyebrow">FILME A FILME</p>
          <h2>Uma trajetória em atos.</h2>
          <p className="sectionIntro">
            Cada capítulo separa conflito, antagonista, transformação e
            consequência — sem converter a filmografia em uma parede de
            sinopses.
          </p>
        </header>
        {profileChapters[key].map((f, i) => (
          <article key={f.title + f.year}>
            <span>{f.year}</span>
            <div>
              <small>{f.tag}</small>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <Spoiler text={f.spoiler} />
            </div>
            <Img item={byId(filmMedia[key][i], imgs[0])} />
          </article>
        ))}
      </section>
      {key === "tom" && <BrandNewDay />}
      <RelationArchive profileKey={key} beats={ed.beats} fallback={imgs[2]} />
      <section className="returnPanel">
        <p className="eyebrow">A CENA QUE REORGANIZA O LEGADO</p>
        <h2>
          {key === "tobey"
            ? "Impedir a vingança."
            : key === "andrew"
              ? "Salvar sem apagar a perda."
              : "Escolher sem testemunhas."}
        </h2>
        <p>{ed.return}</p>
      </section>
      <section className="villainTape" aria-label="Vilões centrais">
        <span>GALERIA DE AMEAÇAS</span>
        {p.villains.map((v) => (
          <b key={v}>{v}</b>
        ))}
      </section>
      <section id="traje" className="suitLab">
        <div>
          <p className="eyebrow">LABORATÓRIO / CORPO / CIDADE</p>
          <h2>A silhueta conta a história.</h2>
          <h3>Traje</h3>
          <p>{p.suit}</p>
          <h3>Poderes & movimento</h3>
          <p>{p.powers}</p>
          <h3>Manhattan como personagem</h3>
          <p>{ed.city}</p>
        </div>
        <div className="suitImages">
          <Img item={imgs[7] || imgs[1]} />
          <Img item={imgs[8] || imgs[3]} />
        </div>
      </section>
      <section id="legado" className="legacy">
        <p className="eyebrow">O QUE PERMANECE</p>
        <h2>{ed.lesson}</h2>
        <p>
          Conclusão editorial apoiada na progressão dramática dos filmes, não
          declaração oficial dos realizadores.
        </p>
        <SourceLink id={key === "tom" ? "sonyTom" : "marvelNwh"} />
        <Next current={key} />
      </section>
    </article>
  );
}

function Verse() {
  const imgs = universeMedia("verse");
  return (
    <article className="profile verse">
      <section className="profileHero verseHero">
        <Img item={imgs[0]} eager />
        <div>
          <p className="eyebrow">TERRA-1610 · ARANHAVERSO</p>
          <h1>
            Seu salto.
            <br />
            Seu ritmo.
            <br />
            Sua máscara.
          </h1>
          <p>
            Miles Morales descobre que legado não é repetição: é a coragem de
            criar uma nova forma.
          </p>
        </div>
      </section>
      <nav className="chapterNav">
        <a href="#miles">Miles</a>
        <a href="#rede">A rede</a>
        <a href="#linguagem">Linguagem</a>
        <a href="#filmes">Filmes</a>
      </nav>
      <section id="miles" className="essay">
        <div>
          <p className="eyebrow">01 / O NOVO PROTAGONISTA</p>
          <h2>O salto de fé.</h2>
        </div>
        <div>
          <p className="dropcap">
            Miles é filho, estudante, artista e herói em formação. Seus poderes
            — incluindo camuflagem e descarga bioelétrica — não eliminam a
            insegurança; tornam sua aprendizagem singular.
          </p>
          <p>
            Família, pertencimento e expectativa ocupam o centro. A máscara
            funciona porque não apaga a identidade sob ela.
          </p>
        </div>
      </section>
      <section className="verseCollage">
        {imgs.slice(1, 6).map((x) => (
          <Img item={x} key={x.id} />
        ))}
      </section>
      <section id="rede" className="spiderPeople">
        <header>
          <p className="eyebrow">02 / A REDE</p>
          <h2>Cada dimensão deixa uma marca.</h2>
        </header>
        {[
          [
            "Gwen Stacy",
            "Independência e conexão atravessadas pelo medo de perder outra amizade.",
          ],
          [
            "Peter B. Parker",
            "Mentoria imperfeita: ensinar Miles também o obriga a reabrir a própria vida.",
          ],
          [
            "Miguel O’Hara",
            "A ordem dos eventos canônicos tratada como convicção narrativa, não ciência.",
          ],
          [
            "Hobie Brown",
            "Recusa à autoridade e apoio prático à autonomia de Miles.",
          ],
          [
            "Pavitr Prabhakar",
            "Carisma, comunidade e o custo de uma regra imposta de fora.",
          ],
        ].map((x, i) => (
          <div key={x[0]}>
            <span>0{i + 1}</span>
            <h3>{x[0]}</h3>
            <p>{x[1]}</p>
          </div>
        ))}
      </section>
      <section id="linguagem" className="visualLanguage">
        <Img item={imgs[6]} />
        <div>
          <p className="eyebrow">03 / IMAGEM EM MOVIMENTO</p>
          <h2>A animação pensa como quadrinho.</h2>
          <p>
            Retículas, registros de cor deslocados, variações de quadros por
            segundo, lettering e grafite não são acabamento: expressam
            personagem, lugar e emoção.
          </p>
          <Spoiler text="A ideia de evento canônico é apresentada pelos personagens como explicação e conflito. O filme não exige que o público a aceite como lei absoluta do multiverso." />
        </div>
      </section>
      <section id="filmes" className="verseFilms">
        <Img item={imgs[7]} />
        <div>
          <h2>
            No Aranhaverso <small>2018</small>
          </h2>
          <p>
            A origem de Miles converte a multiplicidade em uma declaração de
            pertencimento. O longa recebeu o Oscar de animação.
          </p>
          <h2>
            Através do Aranhaverso <small>2023</small>
          </h2>
          <p>
            A escala cresce sem abandonar família e escolha. A continuação,
            Beyond the Spider-Verse, está confirmada para 18 de junho de 2027.
          </p>
          <Status value="Confirmado oficialmente" />
          <SourceLink id="sonyVerse" />
        </div>
      </section>
      <Next current="verse" />
    </article>
  );
}

const comicDepth = [
  [
    "Cria a fórmula moral do personagem sem separar erro, consequência e escolha.",
    "O adolescente comum se torna o centro do gênero.",
    "Toda adaptação posterior conversa com a recusa inicial de Peter.",
  ],
  [
    "Transforma a origem em rotina editorial: dinheiro, imprensa, Tia May e reputação.",
    "O herói passa a lutar também para manter a vida civil.",
    "Define o atrito produtivo entre Homem-Aranha e Clarim Diário.",
  ],
  [
    "Condensa perseverança em uma sequência física desenhada como monólogo interior.",
    "A força deixa de ser número e passa a ser decisão.",
    "A imagem de Peter sob os escombros virou uma das composições mais citadas da Marvel.",
  ],
  [
    "Rompe a expectativa de que o círculo íntimo estará sempre protegido.",
    "A perda deixa uma marca permanente no tempo do personagem.",
    "Reorienta décadas de histórias sobre luto, culpa e memória.",
  ],
  [
    "Introduz uma silhueta radical antes de revelar sua natureza simbiótica.",
    "O uniforme deixa de ser só identidade visual e ganha vontade própria.",
    "Abre caminho para Venom e para uma mitologia inteira de simbiontes.",
  ],
  [
    "Coloca Kraven dentro da identidade de Peter para perguntar o que a máscara realmente significa.",
    "O caçador vence fisicamente e fracassa moralmente.",
    "É referência de narrativa adulta, fechada e psicologicamente sombria.",
  ],
  [
    "Aproxima Peter e Demolidor de respostas opostas à mesma violência.",
    "Justiça e vingança deixam de parecer sinônimos confortáveis.",
    "Consolida o potencial policial e urbano das histórias do herói.",
  ],
  [
    "Reconta a juventude pela voz de um adulto que ainda conversa com a ausência.",
    "A memória vira estrutura, não apenas flashback.",
    "Tornou-se uma porta de entrada emocional para a era clássica.",
  ],
  [
    "Reencena a origem com tempo para escola, família e amadurecimento.",
    "O status quo adolescente passa a durar e respirar.",
    "Influenciou diretamente o vocabulário de adaptações do século XXI.",
  ],
  [
    "Apresenta Miles num mundo em luto sem tratá-lo como cópia de Peter.",
    "O legado muda de mãos e de experiência cultural.",
    "Amplia de forma duradoura quem pode ocupar o centro do símbolo.",
  ],
  [
    "Dá a Miles família, voz, poderes e dilemas próprios.",
    "A sucessão deixa de ser evento e se torna vida cotidiana.",
    "Estabelece a base emocional usada por jogos e animações posteriores.",
  ],
  [
    "Converte décadas de variações editoriais em uma rede narrativa.",
    "A exceção vira comunidade e o cânone passa a admitir multiplicidade.",
    "Prepara o terreno conceitual para a explosão audiovisual do Aranhaverso.",
  ],
] as const;
function Comics() {
  const [sp, setSp] = useSearchParams();
  const filter = sp.get("era") || "Todas";
  const shown = comics
    .map((c, i) => ({
      ...c,
      img: comicMedia[i],
      depth: comicDepth[i],
      order: i + 1,
    }))
    .filter((c) => filter === "Todas" || c.era === filter);
  return (
    <article className="comicsPage">
      <header className="comicHero">
        <div>
          <p>ARQUIVO Nº 062</p>
          <h1>
            HISTÓRIAS
            <br />
            <i>ESPETACULARES!</i>
          </h1>
          <span>
            Doze portas de entrada. Seis décadas. Uma revista de leitura,
            contexto e legado.
          </span>
        </div>
        <Img item={comicMedia[0]} eager />
      </header>
      <div className="comicFilters" role="group" aria-label="Filtrar por era">
        {["Todas", "Clássica", "Bronze", "Moderna", "Contemporânea"].map(
          (x) => (
            <button
              key={x}
              aria-pressed={filter === x}
              onClick={() => setSp(x === "Todas" ? {} : { era: x })}
            >
              {x}
            </button>
          ),
        )}
      </div>
      <section className="comicGrid">
        {shown.map((c) => (
          <article key={c.title}>
            <div className="issueNo">#{String(c.order).padStart(2, "0")}</div>
            <Img item={c.img} />
            <div>
              <span>
                {c.year} · {c.era} · {c.theme}
              </span>
              <h2>{c.title}</h2>
              <b>{c.credit}</b>
              <p className="comicLead">{c.text}</p>
              <dl>
                <div>
                  <dt>Por que importa</dt>
                  <dd>{c.depth[0]}</dd>
                </div>
                <div>
                  <dt>O que muda</dt>
                  <dd>{c.depth[1]}</dd>
                </div>
                <div>
                  <dt>Legado</dt>
                  <dd>{c.depth[2]}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </section>
      <aside className="comicNote">
        <BookOpen />
        <div>
          <h2>Curadoria, não ranking.</h2>
          <p>
            As capas são exibidas integralmente, sem cortes agressivos. A
            seleção privilegia impacto, influência e capacidade de abrir eras
            distintas.
          </p>
          <SourceLink id="marvelComics" />
        </div>
      </aside>
    </article>
  );
}

function Compare() {
  const rows = [
    [
      "Origem",
      "culpa e escolha",
      "investigação familiar",
      "recrutamento no MCU",
      "legado em construção",
    ],
    [
      "Teias",
      "orgânicas",
      "lançadores próprios",
      "lançadores e trajes variáveis",
      "lançadores próprios",
    ],
    [
      "Movimento",
      "peso e impulso clássico",
      "acrobacia fluida",
      "cinética apoiada por tecnologia",
      "ritmo, camuflagem e bioeletricidade",
    ],
    [
      "Falha central",
      "ego e renúncia",
      "promessa e culpa",
      "validação e imprudência",
      "medo de não pertencer",
    ],
    [
      "Virtude",
      "perseverança",
      "vulnerabilidade",
      "capacidade de aprender",
      "autoria da própria identidade",
    ],
  ];
  return (
    <article className="standardPage comparePage">
      <PageHero
        label="QUATRO LENTES"
        title="Não existe pódio para responsabilidade."
        image={universeMedia("tom")[8]}
      />
      <section className="compareTable" role="table">
        <div className="compareHead" role="row">
          <b>ATRIBUTO</b>
          <b>TOBEY</b>
          <b>ANDREW</b>
          <b>TOM</b>
          <b>MILES</b>
        </div>
        {rows.map((r) => (
          <div role="row" key={r[0]}>
            {r.map((c, i) =>
              i === 0 ? (
                <strong role="rowheader" key={`${r[0]}-${i}`}>
                  {c}
                </strong>
              ) : (
                <p role="cell" key={`${r[0]}-${i}`}>
                  {c}
                </p>
              ),
            )}
          </div>
        ))}
      </section>
      <p className="method">
        Comparação editorial baseada no que filmes mostram. Não converte feitos
        isolados em escala canônica de poder.
      </p>
      <Next current="compare" />
    </article>
  );
}
function Timeline() {
  const [sp, setSp] = useSearchParams();
  const f = sp.get("universo") || "Todos";
  const shown = timeline.filter((x) => f === "Todos" || x[1] === f);
  return (
    <article className="standardPage timelinePage">
      <PageHero
        label="1962—2027"
        title="Uma teia através do tempo."
        image={universeMedia("tobey")[5]}
      />
      <div className="filters" role="group" aria-label="Filtrar cronologia">
        {["Todos", "HQs", "Tobey", "Andrew", "Tom", "Miles"].map((x) => (
          <button
            aria-pressed={f === x}
            onClick={() => setSp(x === "Todos" ? {} : { universo: x })}
            key={x}
          >
            {x}
          </button>
        ))}
      </div>
      <ol className="timeline">
        {shown.map((x) => (
          <li
            className={`era-${x[1].toLowerCase().replace(/\s/g, "-")}`}
            key={x[0] + x[2]}
          >
            <time>{x[0]}</time>
            <span>{x[1]}</span>
            <h2>{x[2]}</h2>
            <p>{x[3]}</p>
            {x[0] === "2027" ? (
              <Status value="Confirmado oficialmente" />
            ) : null}
          </li>
        ))}
      </ol>
    </article>
  );
}
const money = (n: number) =>
  n >= 1000000000
    ? `US$ ${(n / 1000000000).toLocaleString("pt-BR", { maximumFractionDigits: 2 })} bi`
    : `US$ ${Math.round(n / 1000000)} mi`;
function Industry() {
  const eras = ["Raimi", "Amazing", "MCU", "Aranhaverso"];
  const notes: Record<string, [string, string, string]> = {
    Raimi: [
      "O fenômeno que consolidou o herói no blockbuster moderno.",
      "Spider-Man 4 deixou de avançar em 2010; o reinício foi anunciado pela Sony.",
      "deadlineRaimi",
    ],
    Amazing: [
      "Dois filmes sustentaram uma nova continuidade, depois encerrada quando a estratégia mudou.",
      "Projetos mencionados durante o desenvolvimento não equivalem a filmes aprovados.",
      "sonyAndrew",
    ],
    MCU: [
      "A série nasce de uma coprodução: Sony lança os filmes e Marvel Studios participa da produção.",
      "A bilheteria mede ingressos, não resolve por si só a divisão de receita ou o lucro.",
      "sonyMcu",
    ],
    Aranhaverso: [
      "A animação converte experimentação visual em identidade de franquia.",
      "Os dois longas lançados têm escalas de custo menores que as séries live-action da amostra.",
      "sonyVerse",
    ],
  };
  return (
    <article className="standardPage industry">
      <PageHero
        label="CADERNO DE CINEMA / BILHETERIA"
        title="Luzes, ingressos, risco e reinvenção."
        image={universeMedia("andrew")[5]}
      />
      <section className="industryLead">
        <p className="eyebrow">ANTES DOS NÚMEROS</p>
        <h2>Bilheteria não é lucro.</h2>
        <p>
          Receita bruta mundial não desconta participação de exibidores,
          marketing, distribuição ou acordos de talentos. Orçamentos publicados
          são estimativas de produção. Aqui, os números aparecem como escala de
          lançamento — nunca como placar de qualidade.
        </p>
        <div className="ticketLegend">
          <span>
            <b>BUDGET</b> custo de produção reportado
          </span>
          <span>
            <b>WORLDWIDE</b> receita bruta mundial
          </span>
          <span>
            <b>BASE</b> The Numbers
          </span>
        </div>
      </section>
      {eras.map((era) => {
        const n = notes[era];
        return (
          <section className={`marqueeEra era-${era.toLowerCase()}`} key={era}>
            <header>
              <span>AGORA EM CARTAZ</span>
              <h2>{era}</h2>
              <p>{n[0]}</p>
            </header>
            <div className="ticketRow">
              {commercialFilms
                .filter((f) => f.era === era)
                .map((f) => {
                  const poster =
                    media.find(
                      (m) => m.id === `poster-${f.universe}-${f.poster + 1}`,
                    ) || universeMedia(f.universe)[0];
                  return (
                    <article className="filmTicket" key={f.title}>
                      <Img item={poster} />
                      <div>
                        <small>
                          {f.year} · {"ongoing" in f ? "EM EXIBIÇÃO" : "SESSÃO"}{" "}
                          {String(f.poster + 1).padStart(2, "0")}
                        </small>
                        <h3>{f.title}</h3>
                        <p>
                          <span>ORÇAMENTO</span>
                          <b>
                            {f.budget === null
                              ? "não publicado"
                              : money(f.budget)}
                          </b>
                        </p>
                        <p>
                          <span>MUNDIAL</span>
                          <strong>
                            {"ongoing" in f
                              ? `${money(f.worldwide)}+`
                              : money(f.worldwide)}
                          </strong>
                        </p>
                      </div>
                    </article>
                  );
                })}
            </div>
            <aside>
              <p>{n[1]}</p>
              <SourceLink id={n[2]} />
            </aside>
          </section>
        );
      })}
      <section className="licensing">
        <p className="eyebrow">FORA DA SALA</p>
        <h2>O símbolo continua circulando.</h2>
        <div>
          <p>
            Brinquedos, roupas, jogos, parcerias promocionais e colecionáveis
            prolongam a vida cultural dos filmes. Esses mercados ajudam a
            explicar por que a marca não pode ser medida apenas pela venda de
            ingressos.
          </p>
          <p>
            Os direitos não formam um bloco simples: o relatório anual da Disney
            registra que a companhia adquiriu a participação da Sony no
            merchandising do personagem, enquanto a Sony manteve sua
            participação nos filmes. A descrição é qualitativa porque receitas
            detalhadas por produto não são públicas nesta base.
          </p>
        </div>
        <SourceLink id="disneyMerch" />
      </section>
      <p className="method">
        Valores históricos são nominais, sem ajuste de inflação, e foram
        consultados em {verified}. Brand New Day está em exibição e usa a
        estimativa de estúdio reportada pela AP; seu total pode continuar
        mudando. <SourceLink id="boxOffice" /> <SourceLink id="apBnd" />
      </p>
    </article>
  );
}
function Sources() {
  const counts = claims.reduce<Record<string, number>>(
    (a, c) => ((a[c.status] = (a[c.status] || 0) + 1), a),
    {},
  );
  return (
    <article className="standardPage sourcesPage">
      <header>
        <ShieldCheck />
        <p className="eyebrow">TRANSPARÊNCIA EDITORIAL</p>
        <h1>Fontes, imagens e incertezas à vista.</h1>
        <p>Conteúdo verificado até {verified}.</p>
      </header>
      <section>
        <h2>Inventário de afirmações</h2>
        <div className="statusLegend">
          {(
            [
              "Confirmado oficialmente",
              "Reportado por fonte confiável",
              "Rumor não confirmado",
              "Desmentido",
              "Indeterminado por falta de evidência",
            ] as EditorialStatus[]
          ).map((s) => (
            <span key={s}>
              <Status value={s} />
              <b>{counts[s] || 0}</b>
            </span>
          ))}
        </div>
        {claims.map((c) => (
          <article className="claim" key={c.id}>
            <b>{c.id}</b>
            <div>
              <Status value={c.status} />
              <p>{c.text}</p>
              <SourceLink id={c.source} />
            </div>
          </article>
        ))}
      </section>
      <section>
        <h2>Fontes editoriais</h2>
        <div className="sourceGrid">
          {Object.entries(sources).map(([id, s], i) => (
            <a href={s.url} target="_blank" rel="noreferrer" key={id}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {s.label}
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </section>
      <section>
        <h2>Créditos visuais — {media.length} arquivos locais</h2>
        <p>
          Stills promocionais foram reunidos via galerias TMDB e pôsteres
          diretamente das páginas Sony. Capas vêm da curadoria oficial Marvel.
          Direitos permanecem com os titulares; o uso é editorial em protótipo
          privado e nenhuma licença de redistribuição é presumida.
        </p>
        <div className="mediaInventory">
          {media.map((m) => (
            <details key={m.id}>
              <summary>
                {m.id} · {m.work}
              </summary>
              <p>
                {m.description} {m.usage}
              </p>
              <a href={m.sourceUrl} target="_blank" rel="noreferrer">
                {m.source} ↗
              </a>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}

function PageHero({
  label,
  title,
  image,
}: {
  label: string;
  title: string;
  image: MediaItem;
}) {
  return (
    <header className="pageHero">
      <Img item={image} eager />
      <div>
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
      </div>
    </header>
  );
}
function Spoiler({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="spoiler">
      <button aria-expanded={open} onClick={() => setOpen(!open)}>
        <ChevronDown />{" "}
        {open ? "Ocultar spoiler" : "Revelar leitura com spoiler"}
      </button>
      {open && <p>{text}</p>}
    </div>
  );
}
function SourceLink({ id }: { id: string }) {
  const s = sources[id as keyof typeof sources];
  return s ? (
    <a className="sourceLink" href={s.url} target="_blank" rel="noreferrer">
      Fonte: {s.label} <ArrowUpRight />
    </a>
  ) : null;
}
function Status({ value }: { value: EditorialStatus }) {
  return (
    <span
      className={`status ${value.startsWith("Confirmado") ? "confirmed" : value.startsWith("Indeterminado") ? "unknown" : "reported"}`}
    >
      {value}
    </span>
  );
}
function Next({ current }: { current: string }) {
  const map: Record<string, [string, string]> = {
    tobey: ["/andrew-garfield", "Próxima lente: Andrew"],
    andrew: ["/tom-holland", "Próxima lente: Tom"],
    tom: ["/aranhaverso", "Próximo portal: Miles"],
    verse: ["/quadrinhos", "Próximo arquivo: HQs"],
    compare: ["/cronologia", "Abrir cronologia"],
  };
  const n = map[current];
  return n ? (
    <Link className="next" to={n[0]}>
      {n[1]} <ArrowRight />
    </Link>
  ) : null;
}
function NotFound() {
  return (
    <div className="notFound">
      <Web />
      <h1>Esta teia não leva a lugar algum.</h1>
      <Link to="/">Voltar ao início</Link>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <div className="identity">
        <Web />
        <span>
          ARANHA<small>arquivo multiversal</small>
        </span>
      </div>
      <div className="footerDossier">
        <b>DOSSIÊ 1962—2027</b>
        <p>
          Homenagem editorial não oficial. Personagens, imagens e marcas
          pertencem aos respectivos titulares. Sem vínculo com Sony, Marvel ou
          Disney.
        </p>
        <span>CATÁLOGO · CINEMA · HQS · NOVA YORK</span>
      </div>
      <div>
        <Link to="/fontes">Fontes & créditos</Link>
        <Link to="/cronologia">Índice cronológico</Link>
        <a href="#conteudo">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
export default function App() {
  return <AppShell />;
}
