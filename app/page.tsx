'use client';
/* oxlint-disable next/no-img-element */

import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, FileText, Moon, Play, Sun } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { screenplayCat, screenplayEs } from './screenplay-data';

type Lang = 'cat' | 'es';
type Theme = 'dark' | 'light';
type GalleryImage = { src: string; alt: { cat: string; es: string } };

const copy = {
  cat: {
    nav: ['Mirada', 'Referències', 'Direcció', 'Construcció', 'Guió'],
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
    drive: 'Veure els materials originals a Drive', noteLabel: '03 — Nota de direcció', noteTitle: 'Mostrar-me sense por',
    note: ['Aquest curt neix del contrast. De la guerra i del desig. De l’opressió exterior i de la llibertat íntima que pot aparèixer, precisament, quan tot sembla tancat.', 'Em trobo en un moment en què em mostro amb més honestedat i menys por. En els meus treballs apareixen, cada vegada més, aquelles parts que durant molt temps han estat tabú o que jo mateix he reprimit. Una d’elles és la sexualitat.', 'Vull mirar-la de manera natural, bella i sincera; amb afecte, però sense amagar-ne la força. Per a Marc i Laia, el sexe no és una fugida del món: és una manera desesperada i tendra de continuar vius dins d’ell.'],
    buildLabel: '04 — Construcció i rodatge', buildTitle: 'Un refugi construït des de la càmera', buildBody: 'L’espai es resol amb una estructura cenital mínima, materials assequibles i elements prestats. La càmera converteix una construcció oberta i funcional en un amagatall tancat, físic i creïble.',
    materials: 'Materials i pressupost', item: 'Element', quantity: 'Quantitat', price: 'Preu', source: 'Enllaç', see: 'Veure',
    total: 'Total estimat', totalMain: '24,02 € amb plàstic recomanat', totalAlt: '23,81 € amb l’alternativa', prices: 'Preus consultats el 9 de setembre de 2026. Recollida local recomanada.',
    shipping: 'Si cal enviament: palla +4 €; plàstic +2,90–3,90 €. El transport de la fusta pot encarir molt el conjunt.',
    mounting: 'Muntatge en set gestos', safety: 'La fusta és només un recurs visual per al pla cenital: no suportarà actors ni càmera. Cal revisar estelles, treballar amb llum LED i mantenir la palla lluny de qualsevol font de calor.',
    depth: 'Un sac de 50 L crea aproximadament 1,25 cm sobre 4 m² o 1 cm sobre 5 m².',
    previousLabel: 'Referència de treball anterior', previousTitle: 'Claustrofòbia en anamòrfic', previousBody: 'Una peça realitzada fa tres anys. No és una referència exacta d’il·luminació, però sí del format anamòrfic i de la sensació d’espai tancat. Aquí, la diferència essencial és que el confinament contindrà també una forma d’alliberament.', youtube: 'Veure a YouTube',
    scriptLabel: '05 — Guió literari', scriptIntro: 'Lectura completa · 6 pàgines · català i castellà', page: 'Pàgina', original: 'Obrir el PDF original', footer: 'Guió i direcció — Enrike Segarra · Setembre 2026',
    enlarge: 'Ampliar imatge', closeImage: 'Imatge ampliada', light: 'Mode clar', dark: 'Mode fosc',
  },
  es: {
    nav: ['Mirada', 'Referencias', 'Dirección', 'Construcción', 'Guion'],
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
    drive: 'Ver los materiales originales en Drive', noteLabel: '03 — Nota de dirección', noteTitle: 'Mostrarme sin miedo',
    note: ['Este corto nace del contraste. De la guerra y del deseo. De la opresión exterior y de la libertad íntima que puede aparecer, precisamente, cuando todo parece cerrado.', 'Me encuentro en un momento en el que me muestro con más honestidad y menos miedo. En mis trabajos aparecen, cada vez más, aquellas partes que durante mucho tiempo han sido tabú o que yo mismo he reprimido. Una de ellas es la sexualidad.', 'Quiero mirarla de manera natural, bella y sincera; con afecto, pero sin esconder su fuerza. Para Marc y Laia, el sexo no es una huida del mundo: es una manera desesperada y tierna de continuar vivos dentro de él.'],
    buildLabel: '04 — Construcción y rodaje', buildTitle: 'Un refugio construido desde la cámara', buildBody: 'El espacio se resuelve con una estructura cenital mínima, materiales asequibles y elementos prestados. La cámara convierte una construcción abierta y funcional en un escondite cerrado, físico y creíble.',
    materials: 'Materiales y presupuesto', item: 'Elemento', quantity: 'Cantidad', price: 'Precio', source: 'Enlace', see: 'Ver',
    total: 'Total estimado', totalMain: '24,02 € con plástico recomendado', totalAlt: '23,81 € con la alternativa', prices: 'Precios consultados el 9 de septiembre de 2026. Recogida local recomendada.',
    shipping: 'Si hace falta envío: paja +4 €; plástico +2,90–3,90 €. El transporte de la madera puede encarecer mucho el conjunto.',
    mounting: 'Montaje en siete gestos', safety: 'La madera es solo un recurso visual para el plano cenital: no soportará actores ni cámara. Hay que revisar astillas, trabajar con luz LED y mantener la paja lejos de cualquier fuente de calor.',
    depth: 'Un saco de 50 L crea aproximadamente 1,25 cm sobre 4 m² o 1 cm sobre 5 m².',
    previousLabel: 'Referencia de trabajo anterior', previousTitle: 'Claustrofobia en anamórfico', previousBody: 'Una pieza realizada hace tres años. No es una referencia exacta de iluminación, pero sí del formato anamórfico y de la sensación de espacio cerrado. Aquí, la diferencia esencial es que el encierro contendrá también una forma de liberación.', youtube: 'Ver en YouTube',
    scriptLabel: '05 — Guion literario', scriptIntro: 'Lectura completa · 6 páginas · catalán y castellano', page: 'Página', original: 'Abrir el PDF original', footer: 'Guion y dirección — Enrike Segarra · Septiembre 2026',
    enlarge: 'Ampliar imagen', closeImage: 'Imagen ampliada', light: 'Modo claro', dark: 'Modo oscuro',
  },
} as const;

const ids = ['mirada', 'referencies', 'direccio', 'construccio', 'guio'];
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

const materials = [
  { cat: 'Pack de 9 llistons d’avet', es: 'Pack de 9 listones de abeto', detail: '22 × 13 × 2.000 mm · sense tractar / sin tratar', qty: '1', price: '9,29 €', url: 'https://www.leroymerlin.es/productos/pack-de-9-listones-de-abeto-2-2x1-3x200cm-83988609.html' },
  { cat: 'Mantell Geolia', es: 'Mantillo Geolia', detail: '50 L', qty: '1', price: '6,13 €', url: 'https://www.leroymerlin.es/productos/mantillo-geolia-50-l-86487846.html' },
  { cat: 'Palla natural', es: 'Paja natural', detail: '1 kg', qty: '1', price: '3,40 €', url: 'https://www.tiendanimal.es/paja-para-roedores-sabor-neutro/MRK000003859_M.html' },
  { cat: 'Plàstic cubretot fort', es: 'Plástico cubretodo fuerte', detail: 'PE · 4 × 5 m', qty: '1', price: '5,20 €', url: 'https://www.leroymerlin.es/productos/plastico-cubretodo-fuerte-4x5m-85882091.html' },
  { cat: 'Alternativa: plàstic LDPE', es: 'Alternativa: plástico LDPE', detail: '40 μm · 4 × 5 m', qty: '1', price: '4,99 €', url: 'https://www.leroymerlin.es/productos/plastico-cubretodo-ldpe-40my-4-x-5m-translucido-93405684.html' },
  { cat: 'Tela fosca de fons', es: 'Tela oscura de fondo', detail: 'llençol o manta reutilitzada / sábana o manta reutilizada', qty: '1', price: '0 €' },
  { cat: 'Taules prestades', es: 'Mesas prestadas', detail: 'una a cada costat / una a cada lado', qty: '2', price: '0 €' },
];

const mounting = {
  cat: ['Estendre el plàstic per protegir el terra.', 'Cobrir el fons amb una manta fosca.', 'Repartir el mantell sec només a la zona visible.', 'Afegir palla de manera escassa i irregular.', 'Col·locar dues taules, una davant de l’altra.', 'Recolzar els llistons entre les taules, sense tallar ni cargolar.', 'Deixar separacions irregulars per crear la reixa i la sensació de trapa.'],
  es: ['Extender el plástico para proteger el suelo.', 'Cubrir el fondo con una manta oscura.', 'Repartir el mantillo seco solo en la zona visible.', 'Añadir paja de manera escasa e irregular.', 'Colocar dos mesas, una frente a la otra.', 'Apoyar los listones entre las mesas, sin cortar ni atornillar.', 'Dejar separaciones irregulares para crear la rejilla y la sensación de trampilla.'],
};

function ScriptPage({ text, index, lang }: { text: string; index: number; lang: Lang }) {
  return <article className="script-page" id={`script-page-${index + 1}`} aria-label={`${copy[lang].page} ${index + 1}`}><span className="script-page-number">{String(index + 1).padStart(2, '0')}</span><div className="script-lines">{text.split('\n').map((line, n) => { const s = line.trim(); const scene = /^(INT\.|EXT\.|CORTE|FUNDIDO|AL MISMO|AL MATEIX)/.test(s); const cue = s.length > 0 && s.length < 36 && s === s.toUpperCase(); const paren = s.startsWith('(') && s.endsWith(')'); return <p key={n} className={scene ? 'scene-line' : cue ? 'cue-line' : paren ? 'paren-line' : ''}>{line || '\u00a0'}</p>; })}</div></article>;
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
    <section className="construction-section" id="construccio"><div className="construction-intro"><div><p className="eyebrow">{t.buildLabel}</p><h2>{t.buildTitle}</h2></div><p>{t.buildBody}</p></div><button className="construction-image" onClick={() => setSelected({ src: '/images/construccion-cenital.png', alt: { cat: 'Esquema real de construcció per al pla cenital', es: 'Esquema real de construcción para el plano cenital' } })} aria-label={t.enlarge}><img src="/images/construccion-cenital.png" alt={lang === 'cat' ? 'Esquema real de construcció per al pla cenital' : 'Esquema real de construcción para el plano cenital'}/><span>{t.enlarge} ＋</span></button><div className="construction-grid"><div className="budget"><h3>{t.materials}</h3><div className="budget-table"><div className="budget-row budget-head"><span>{t.item}</span><span>{t.quantity}</span><span>{t.price}</span><span>{t.source}</span></div>{materials.map((material) => <div className="budget-row" key={material.es}><span><strong>{material[lang]}</strong><small>{material.detail}</small></span><span>{material.qty}</span><span>{material.price}</span><span>{material.url ? <a href={material.url} target="_blank" rel="noreferrer">{t.see} ↗</a> : '—'}</span></div>)}</div><div className="total"><span>{t.total}</span><strong>{t.totalMain}</strong><small>{t.totalAlt}</small></div><p className="budget-note">{t.prices}<br/>{t.shipping}</p></div><div className="mounting"><h3>{t.mounting}</h3><ol>{mounting[lang].map((step) => <li key={step}>{step}</li>)}</ol><p className="depth-note">{t.depth}</p><p className="safety-note">{t.safety}</p></div></div></section>
    <section className="previous-work"><div className="youtube-frame"><iframe src="https://www.youtube-nocookie.com/embed/hAgSa0w1bzY?rel=0" title={t.previousTitle} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/></div><div className="previous-copy"><p className="eyebrow">{t.previousLabel}</p><h2>{t.previousTitle}</h2><p>{t.previousBody}</p><a className="text-link" href="https://www.youtube.com/watch?v=hAgSa0w1bzY" target="_blank" rel="noreferrer">{t.youtube}<Play size={15}/></a></div></section>
    <section className="script-section" id="guio"><div className="script-header"><div><p className="eyebrow">{t.scriptLabel}</p><h2>L’últim clau</h2><p>{t.scriptIntro}</p></div><a className="pdf-link" href={lang === 'cat' ? '/documents/guio-catala.pdf' : '/documents/guion-castellano.pdf'} target="_blank"><FileText size={18}/>{t.original}</a></div><div className="script-language"><button className={lang === 'cat' ? 'active' : ''} onClick={() => changeLanguage('cat')}>Versió catalana</button><button className={lang === 'es' ? 'active' : ''} onClick={() => changeLanguage('es')}>Versión castellana</button></div><div className="script-reader">{script.map((page, index) => <ScriptPage key={`${lang}-${index}`} text={page} index={index} lang={lang}/>)}</div></section>
    <footer><span>L’ÚLTIM CLAU</span><p>{t.footer}</p><a href="#top">↑</a></footer>
    <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}><DialogContent className="lightbox"><DialogTitle className="sr-only">{t.closeImage}</DialogTitle><DialogDescription className="sr-only">{selected?.alt[lang]}</DialogDescription>{selected && <img src={selected.src} alt={selected.alt[lang]}/>}</DialogContent></Dialog>
  </main>;
}
