'use client';
/* oxlint-disable next/no-img-element */

import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, FileText, Moon, Play, Sun } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { screenplayCat, screenplayEs, screenplayRoles } from './screenplay-data';

type Lang = 'cat' | 'es';
type Theme = 'dark' | 'light';
type GalleryImage = { src: string; alt: { cat: string; es: string } };

const copy = {
  cat: {
    nav: ['Mirada', 'Referències', 'Direcció', 'Construcció', 'Intimitat', 'Storyboard', 'Guió'],
    eyebrow: 'Dossier visual · Curtmetratge · 3’30”', subtitle: 'Un refugi sota la guerra. Dos cossos aferrats a la vida.', scroll: 'Entrar al dossier',
    miradaLabel: '01 — La mirada', miradaTitle: 'La intimitat com a refugi', miradaBody: 'L’espai és estret, fosc i gairebé abstracte. A fora, la guerra. A dins, una sexualitat viscuda com a afecte, necessitat i últim acte de llibertat.',
    chapters: [
      ['Confinament', 'La foscor interromp la mirada. El fora només existeix a través de fustes, passos i escletxes.'],
      ['Intimitat', 'La proximitat no és només desig: és tendresa, complicitat i una manera de calmar la por.'],
      ['Cos', 'La sexualitat es construeix en fragments. Pell, respiració, dits, llavis. Mai des de l’exhibició.'],
    ],
    refsLabel: '02 — Referències audiovisuals', refsTitle: 'Una gramàtica de fragments',
    refTitles: ['L’amenaça fora de camp', 'La distància mínima', 'La pell com a paisatge'],
    refTexts: ['Claustrofòbia, mirades tallades i presència exterior. La tensió neix del que no podem veure.', 'Dos rostres dins d’un espai impossible. El desig conviu amb l’alerta i amb la cura.', 'Plans detall per mostrar la sexualitat amb elegància, tacte i una proximitat gairebé abstracta.'],
    drive: 'Veure les referències originals a Drive', noteLabel: '03 — Nota de direcció', noteTitle: 'Mostrar-me sense por',
    note: ['Aquest curt neix del contrast. De la guerra i del desig. De l’opressió exterior i de la llibertat íntima que pot aparèixer, precisament, quan tot sembla tancat.', 'Em trobo en un moment en què em mostro amb més honestedat i menys por. En els meus treballs apareixen, cada vegada més, aquelles parts que durant molt temps han estat tabú o que jo mateix he reprimit. Una d’elles és la sexualitat.', 'Vull mirar-la de manera natural, bella i sincera; amb afecte, però sense amagar-ne la força. Per a Marc i Laia, el sexe no és una fugida del món: és una manera desesperada i tendra de continuar vius dins d’ell.'],
    buildLabel: '04 — Construcció i rodatge', buildTitle: 'Un refugi construït des de la càmera', buildBody: 'L’espai es resol amb una estructura cenital mínima i elements de l’espai. La càmera converteix una construcció oberta i funcional en un amagatall tancat, físic i creïble.',
    mounting: 'Muntatge en set gestos', safety: 'La fusta és només un recurs visual per al pla cenital: no suportarà actors ni càmera. Cal revisar estelles, treballar amb llum LED i mantenir la palla lluny de qualsevol font de calor.',
    depth: 'Un sac de 50 L crea aproximadament 1,25 cm sobre 4 m² o 1 cm sobre 5 m².',
    intimacyLabel: '05 — Intimitat i metodologia de rodatge', intimacyTitle: 'La cura també forma part de la imatge', intimacyIntro: 'Les escenes íntimes formen part essencial del relat, però seran abordades des de la suggerència, la fragmentació i el llenguatge cinematogràfic, mai des de l’exhibició. L’objectiu és que els intèrprets coneguin prèviament i amb precisió què es rodarà, què apareixerà en pantalla i quins seran els límits de cada acció.',
    intimacySections: [
      ['Coreografia prèvia', 'Les escenes íntimes estaran planificades i coreografiades abans del rodatge. No s’introduiran accions físiques inesperades ni improvisacions que no hagin estat parlades prèviament entre els intèrprets i la direcció.', 'Es realitzarà un assaig específic per treballar les posicions, moviments, distàncies i ritme de l’escena abans de filmar-la.'],
      ['Què es veurà', 'La sexualitat es construirà principalment a través de rostres i mirades, respiració, mans, espatlles i esquena, coll i pell, proximitat entre els cossos, moviment i suggerència fora de camp, i enquadraments parcials i plans detall.', 'Les accions sexuals que apareixen al guió seran simulades cinematogràficament mitjançant posicions, enquadraments, interpretació, llum, so i muntatge.'],
      ['Què no es veurà', 'No hi haurà sexe real ni contacte genital real. El grau de nuesa, les zones del cos visibles i qualsevol contacte físic estaran acordats abans del rodatge amb els intèrprets.', 'No es modificarà aquest acord de manera improvisada durant la filmació.'],
      ['Storyboard i planificació', 'La seqüència íntima comptarà amb un storyboard específic on es podrà veure pla per pla la posició dels intèrprets i de càmera, l’enquadrament, les parts del cos visibles, les accions representades i els elements que quedaran fora de camp.', 'L’objectiu és eliminar al màxim la incertesa abans d’arribar al set. També es realitzaran proves prèvies d’enquadrament i il·luminació perquè els intèrprets puguin entendre visualment com serà representada la intimitat en la pel·lícula.'],
      ['Rodatge', 'Les escenes íntimes es rodaran amb l’equip mínim imprescindible. Qualsevol intèrpret podrà comunicar un límit, incomoditat o necessitat de modificar una acció durant el procés.', 'La intenció és construir un espai de treball basat en la preparació, la comunicació i la confiança, perquè la vulnerabilitat que necessita la història pugui existir dins d’un entorn segur i controlat.'],
    ],
    storyboardLabel: '06 — Storyboard', storyboardTitle: 'La seqüència, pla a pla', storyboardIntro: 'Una guia visual de la seqüència íntima: enquadraments, gestos, mirades i posicions de càmera pensats abans d’arribar al rodatge.', shot: 'Pla',
    previousLabel: 'Referència de treball anterior', previousTitle: 'Claustrofòbia en anamòrfic', previousBody: 'Una peça realitzada fa tres anys. No és una referència exacta d’il·luminació, però sí del format anamòrfic i de la sensació d’espai tancat. Aquí, la diferència essencial és que el confinament contindrà també una forma d’alliberament.', youtube: 'Veure a YouTube',
    scriptLabel: '07 — Guió literari', scriptIntro: 'Lectura completa · 6 pàgines · català i castellà', page: 'Pàgina', original: 'Obrir el PDF original', footer: 'Guió i direcció — Enrike Segarra · Setembre 2026',
    enlarge: 'Ampliar imatge', closeImage: 'Imatge ampliada', light: 'Mode clar', dark: 'Mode fosc',
  },
  es: {
    nav: ['Mirada', 'Referencias', 'Dirección', 'Construcción', 'Intimidad', 'Storyboard', 'Guion'],
    eyebrow: 'Dossier visual · Cortometraje · 3’30”', subtitle: 'Un refugio bajo la guerra. Dos cuerpos aferrados a la vida.', scroll: 'Entrar en el dossier',
    miradaLabel: '01 — La mirada', miradaTitle: 'La intimidad como refugio', miradaBody: 'El espacio es estrecho, oscuro y casi abstracto. Fuera, la guerra. Dentro, una sexualidad vivida como afecto, necesidad y último acto de libertad.',
    chapters: [
      ['Encierro', 'La oscuridad interrumpe la mirada. El exterior solo existe a través de maderas, pasos y rendijas.'],
      ['Intimidad', 'La proximidad no es solo deseo: es ternura, complicidad y una forma de calmar el miedo.'],
      ['Cuerpo', 'La sexualidad se construye en fragmentos. Piel, respiración, dedos, labios. Nunca desde la exhibición.'],
    ],
    refsLabel: '02 — Referencias audiovisuales', refsTitle: 'Una gramática de fragmentos',
    refTitles: ['La amenaza fuera de campo', 'La distancia mínima', 'La piel como paisaje'],
    refTexts: ['Claustrofobia, miradas cortadas y presencia exterior. La tensión nace de aquello que no podemos ver.', 'Dos rostros dentro de un espacio imposible. El deseo convive con la alerta y con el cuidado.', 'Planos detalle para mostrar la sexualidad con elegancia, tacto y una proximidad casi abstracta.'],
    drive: 'Ver las referencias originales en Drive', noteLabel: '03 — Nota de dirección', noteTitle: 'Mostrarme sin miedo',
    note: ['Este corto nace del contraste. De la guerra y del deseo. De la opresión exterior y de la libertad íntima que puede aparecer, precisamente, cuando todo parece cerrado.', 'Me encuentro en un momento en el que me muestro con más honestidad y menos miedo. En mis trabajos aparecen, cada vez más, aquellas partes que durante mucho tiempo han sido tabú o que yo mismo he reprimido. Una de ellas es la sexualidad.', 'Quiero mirarla de manera natural, bella y sincera; con afecto, pero sin esconder su fuerza. Para Marc y Laia, el sexo no es una huida del mundo: es una manera desesperada y tierna de continuar vivos dentro de él.'],
    buildLabel: '04 — Construcción y rodaje', buildTitle: 'Un refugio construido desde la cámara', buildBody: 'El espacio se resuelve con una estructura cenital mínima y elementos del espacio. La cámara convierte una construcción abierta y funcional en un escondite cerrado, físico y creíble.',
    mounting: 'Montaje en siete gestos', safety: 'La madera es solo un recurso visual para el plano cenital: no soportará actores ni cámara. Hay que revisar astillas, trabajar con luz LED y mantener la paja lejos de cualquier fuente de calor.',
    depth: 'Un saco de 50 L crea aproximadamente 1,25 cm sobre 4 m² o 1 cm sobre 5 m².',
    intimacyLabel: '05 — Intimidad y metodología de rodaje', intimacyTitle: 'El cuidado también forma parte de la imagen', intimacyIntro: 'Las escenas íntimas forman parte esencial del relato, pero se abordarán desde la sugerencia, la fragmentación y el lenguaje cinematográfico, nunca desde la exhibición. El objetivo es que las personas intérpretes conozcan previamente y con precisión qué se rodará, qué aparecerá en pantalla y cuáles serán los límites de cada acción.',
    intimacySections: [
      ['Coreografía previa', 'Las escenas íntimas estarán planificadas y coreografiadas antes del rodaje. No se introducirán acciones físicas inesperadas ni improvisaciones que no hayan sido habladas previamente entre las personas intérpretes y la dirección.', 'Se realizará un ensayo específico para trabajar las posiciones, movimientos, distancias y ritmo de la escena antes de filmarla.'],
      ['Qué se verá', 'La sexualidad se construirá principalmente a través de rostros y miradas, respiración, manos, hombros y espalda, cuello y piel, proximidad entre los cuerpos, movimiento y sugerencia fuera de campo, y encuadres parciales y planos detalle.', 'Las acciones sexuales que aparecen en el guion se simularán cinematográficamente mediante posiciones, encuadres, interpretación, luz, sonido y montaje.'],
      ['Qué no se verá', 'No habrá sexo real ni contacto genital real. El grado de desnudez, las zonas del cuerpo visibles y cualquier contacto físico estarán acordados antes del rodaje con las personas intérpretes.', 'Este acuerdo no se modificará de manera improvisada durante la filmación.'],
      ['Storyboard y planificación', 'La secuencia íntima contará con un storyboard específico donde se podrá ver plano a plano la posición de las personas intérpretes y de cámara, el encuadre, las partes del cuerpo visibles, las acciones representadas y los elementos que quedarán fuera de campo.', 'El objetivo es eliminar al máximo la incertidumbre antes de llegar al set. También se realizarán pruebas previas de encuadre e iluminación para que las personas intérpretes puedan entender visualmente cómo se representará la intimidad en la película.'],
      ['Rodaje', 'Las escenas íntimas se rodarán con el equipo mínimo imprescindible. Cualquier intérprete podrá comunicar un límite, incomodidad o necesidad de modificar una acción durante el proceso.', 'La intención es construir un espacio de trabajo basado en la preparación, la comunicación y la confianza, para que la vulnerabilidad que necesita la historia pueda existir dentro de un entorno seguro y controlado.'],
    ],
    storyboardLabel: '06 — Storyboard', storyboardTitle: 'La secuencia, plano a plano', storyboardIntro: 'Una guía visual de la secuencia íntima: encuadres, gestos, miradas y posiciones de cámara pensados antes de llegar al rodaje.', shot: 'Plano',
    previousLabel: 'Referencia de trabajo anterior', previousTitle: 'Claustrofobia en anamórfico', previousBody: 'Una pieza realizada hace tres años. No es una referencia exacta de iluminación, pero sí del formato anamórfico y de la sensación de espacio cerrado. Aquí, la diferencia esencial es que el encierro contendrá también una forma de liberación.', youtube: 'Ver en YouTube',
    scriptLabel: '07 — Guion literario', scriptIntro: 'Lectura completa · 6 páginas · catalán y castellano', page: 'Página', original: 'Abrir el PDF original', footer: 'Guion y dirección — Enrike Segarra · Septiembre 2026',
    enlarge: 'Ampliar imagen', closeImage: 'Imagen ampliada', light: 'Modo claro', dark: 'Modo oscuro',
  },
} as const;

const ids = ['mirada', 'referencies', 'direccio', 'construccio', 'intimitat', 'storyboard', 'guio'];
const gallery: GalleryImage[][] = [
  [
    { src: '/images/videoframe_541466.png', alt: { cat: 'Ulls vistos entre fustes', es: 'Ojos vistos entre maderas' } },
    { src: '/images/videoframe_615658.png', alt: { cat: 'Figura amagada sota una taula', es: 'Figura escondida bajo una mesa' } },
  ],
  [
    { src: '/images/videoframe_601064.png', alt: { cat: 'Dos rostres molt pròxims', es: 'Dos rostros muy próximos' } },
    { src: '/images/videoframe_635352.png', alt: { cat: 'Rostre estirat a la foscor', es: 'Rostro tumbado en la oscuridad' } },
  ],
  [
    { src: '/images/videoframe_1133213.png', alt: { cat: 'Petó en primeríssim pla', es: 'Beso en primerísimo plano' } },
    { src: '/images/videoframe_1136191.png', alt: { cat: 'Dits sobre la pell', es: 'Dedos sobre la piel' } },
    { src: '/images/videoframe_1138085.png', alt: { cat: 'Dit pressionant la pell', es: 'Dedo presionando la piel' } },
    { src: '/images/videoframe_630811.png', alt: { cat: 'Pell eriçada en macro', es: 'Piel erizada en macro' } },
  ],
];

const storyboard: GalleryImage[] = Array.from({ length: 41 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0');
  return {
    src: `/storyboard/plano-${number}.png`,
    alt: { cat: `Storyboard · Pla ${number}`, es: `Storyboard · Plano ${number}` },
  };
});

const mounting = {
  cat: ['Estendre el plàstic per protegir el terra.', 'Cobrir el fons amb una manta fosca.', 'Repartir el mantell sec només a la zona visible.', 'Afegir palla de manera escassa i irregular.', 'Col·locar dues taules, una davant de l’altra.', 'Recolzar els llistons entre les taules, sense tallar ni cargolar.', 'Deixar separacions irregulars per crear la reixa i la sensació de trapa.'],
  es: ['Extender el plástico para proteger el suelo.', 'Cubrir el fondo con una manta oscura.', 'Repartir el mantillo seco solo en la zona visible.', 'Añadir paja de manera escasa e irregular.', 'Colocar dos mesas, una frente a la otra.', 'Apoyar los listones entre las mesas, sin cortar ni atornillar.', 'Dejar separaciones irregulares para crear la rejilla y la sensación de trampilla.'],
};

const sceneHeading = /^(INT\.|EXT\.)/;
const transition = /^(CORTE|FUNDIDO|TALL|FOS A|AL MISMO|AL MATEIX)/;

function ScriptPage({ text, index, lang }: { text: string; index: number; lang: Lang }) {
  const roles = screenplayRoles[lang][index] ?? {};
  return <article className="script-page" id={`script-page-${index + 1}`} aria-label={`${copy[lang].page} ${index + 1}`}><span className="script-page-number">{String(index + 1).padStart(2, '0')}</span><div className="script-lines">{text.split('\n').map((line, n) => { const content = line.trim(); const role = roles[n]; const lineClass = role ? `${role}-line` : sceneHeading.test(content) ? 'scene-line' : transition.test(content) ? 'transition-line' : 'action-line'; return <p key={n} className={lineClass}>{line || '\u00a0'}</p>; })}</div></article>;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('cat');
  const [theme, setTheme] = useState<Theme>(() => typeof window !== 'undefined' && localStorage.getItem('dossier-theme') === 'light' ? 'light' : 'dark');
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const t = copy[lang];
  const script = useMemo(() => lang === 'cat' ? screenplayCat : screenplayEs, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const changeTheme = (next: Theme) => {
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem('dossier-theme', next);
  };
  const changeLanguage = (next: Lang) => {
    if (next === lang) return;
    const current = Array.from(document.querySelectorAll<HTMLElement>('.script-page')).find((page) => { const rect = page.getBoundingClientRect(); return rect.top <= innerHeight * .45 && rect.bottom >= innerHeight * .45; });
    const id = current?.id;
    setLang(next);
    requestAnimationFrame(() => id && document.getElementById(id)?.scrollIntoView({ block: 'center' }));
  };

  return <main>
    <header className="site-header"><a href="#top" className="wordmark">L’ÚLTIM CLAU</a><nav aria-label="Dossier">{t.nav.map((name, index) => <a key={name} href={`#${ids[index]}`}>{name}</a>)}</nav><div className="header-actions"><div className="language-switch" aria-label="Idioma"><button className={lang === 'cat' ? 'active' : ''} onClick={() => changeLanguage('cat')} aria-pressed={lang === 'cat'}>CAT</button><span>/</span><button className={lang === 'es' ? 'active' : ''} onClick={() => changeLanguage('es')} aria-pressed={lang === 'es'}>ES</button></div><div className="theme-switch"><Moon size={14} aria-hidden="true"/><Switch checked={theme === 'light'} onCheckedChange={(checked) => changeTheme(checked ? 'light' : 'dark')} aria-label={theme === 'dark' ? t.light : t.dark}/><Sun size={14} aria-hidden="true"/></div></div></header>
    <section className="hero" id="top"><img src="/images/videoframe_1110535.png" alt="" className="hero-image"/><div className="hero-shade"/><div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1>L’ÚLTIM<br/>CLAU</h1><p className="hero-subtitle">{t.subtitle}</p></div><a href="#mirada" className="scroll-cue"><span>{t.scroll}</span><ArrowDown size={18}/></a></section>
    <section className="intro-section" id="mirada"><div className="section-heading"><p className="eyebrow">{t.miradaLabel}</p><h2>{t.miradaTitle}</h2></div><p className="lead-copy">{t.miradaBody}</p></section>
    <section className="moodboard" aria-label="Moodboard">{gallery.map((images, index) => <div className={`mood-chapter chapter-${index + 1}`} key={index}><div className="chapter-copy"><span>0{index + 1}</span><h3>{t.chapters[index][0]}</h3><p>{t.chapters[index][1]}</p></div><div className={`image-composition images-${images.length}`}>{images.map((item) => <figure key={item.src}><button className="gallery-button" onClick={() => setSelected(item)} aria-label={`${t.enlarge}: ${item.alt[lang]}`}><img src={item.src} alt={item.alt[lang]} loading="lazy"/><span className="zoom-mark" aria-hidden="true">＋</span></button></figure>)}</div></div>)}</section>
    <section className="references-section" id="referencies"><div className="section-heading"><p className="eyebrow">{t.refsLabel}</p><h2>{t.refsTitle}</h2></div><div className="video-list">{[1, 2, 3].map((number, index) => <article className="video-reference" key={number}><div className="video-frame"><video controls muted preload="metadata" poster={gallery[index][0].src}><source src={`/media/referencia-${number}.mp4`} type="video/mp4"/></video><span className="video-index">0{number}</span></div><div className="video-copy"><h3>{t.refTitles[index]}</h3><p>{t.refTexts[index]}</p></div></article>)}</div><a className="text-link" href="https://drive.google.com/drive/folders/1eA5orkN2y5Q9VWg16eNaC7R_IL-2ZKsJ?usp=sharing" target="_blank" rel="noreferrer">{t.drive}<ArrowUpRight size={16}/></a></section>
    <section className="director-section" id="direccio"><div className="director-sticky"><p className="eyebrow">{t.noteLabel}</p><h2>{t.noteTitle}</h2></div><div className="director-copy">{t.note.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
    <section className="construction-section" id="construccio"><div className="construction-intro"><div><p className="eyebrow">{t.buildLabel}</p><h2>{t.buildTitle}</h2></div><p>{t.buildBody}</p></div><button className="construction-image" onClick={() => setSelected({ src: '/images/construccion-cenital.png', alt: { cat: 'Esquema real de construcció per al pla cenital', es: 'Esquema real de construcción para el plano cenital' } })} aria-label={t.enlarge}><img src="/images/construccion-cenital.png" alt={lang === 'cat' ? 'Esquema real de construcció per al pla cenital' : 'Esquema real de construcción para el plano cenital'}/><span>{t.enlarge} ＋</span></button><div className="construction-grid"><div className="mounting"><h3>{t.mounting}</h3><ol>{mounting[lang].map((step) => <li key={step}>{step}</li>)}</ol><p className="depth-note">{t.depth}</p><p className="safety-note">{t.safety}</p></div></div></section>
    <section className="intimacy-section" id="intimitat"><div className="intimacy-intro"><p className="eyebrow">{t.intimacyLabel}</p><h2>{t.intimacyTitle}</h2><p>{t.intimacyIntro}</p></div><div className="intimacy-list">{t.intimacySections.map(([title, first, second], index) => <article className="intimacy-item" key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{first}</p><p>{second}</p></div></article>)}</div></section>
    <section className="storyboard-section" id="storyboard"><div className="storyboard-intro"><div><p className="eyebrow">{t.storyboardLabel}</p><h2>{t.storyboardTitle}</h2></div><p>{t.storyboardIntro}</p></div><div className="storyboard-grid">{storyboard.map((item, index) => <figure className="storyboard-frame" key={item.src}><button className="storyboard-button" onClick={() => setSelected(item)} aria-label={`${t.enlarge}: ${item.alt[lang]}`}><img src={item.src} alt={item.alt[lang]} loading="lazy"/><span className="storyboard-number">{t.shot} {String(index + 1).padStart(2, '0')}</span><span className="zoom-mark" aria-hidden="true">＋</span></button></figure>)}</div></section>
    <section className="previous-work"><div className="youtube-frame"><iframe src="https://www.youtube-nocookie.com/embed/hAgSa0w1bzY?rel=0" title={t.previousTitle} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/></div><div className="previous-copy"><p className="eyebrow">{t.previousLabel}</p><h2>{t.previousTitle}</h2><p>{t.previousBody}</p><a className="text-link" href="https://www.youtube.com/watch?v=hAgSa0w1bzY" target="_blank" rel="noreferrer">{t.youtube}<Play size={15}/></a></div></section>
    <section className="script-section" id="guio"><div className="script-header"><div><p className="eyebrow">{t.scriptLabel}</p><h2>L’últim clau</h2><p>{t.scriptIntro}</p></div><a className="pdf-link" href={lang === 'cat' ? '/documents/guio-catala.pdf' : '/documents/guion-castellano.pdf'} target="_blank"><FileText size={18}/>{t.original}</a></div><div className="script-language"><button className={lang === 'cat' ? 'active' : ''} onClick={() => changeLanguage('cat')}>Versió catalana</button><button className={lang === 'es' ? 'active' : ''} onClick={() => changeLanguage('es')}>Versión castellana</button></div><div className="script-reader">{script.map((page, index) => <ScriptPage key={`${lang}-${index}`} text={page} index={index} lang={lang}/>)}</div></section>
    <footer><span>L’ÚLTIM CLAU</span><p>{t.footer}</p><a href="#top">↑</a></footer>
    <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}><DialogContent className="lightbox"><DialogTitle className="sr-only">{t.closeImage}</DialogTitle><DialogDescription className="sr-only">{selected?.alt[lang]}</DialogDescription>{selected && <img src={selected.src} alt={selected.alt[lang]}/>}</DialogContent></Dialog>
  </main>;
}
