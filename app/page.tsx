'use client';
/* oxlint-disable next/no-img-element */

import { useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, FileText, Play } from 'lucide-react';
import { screenplayCat, screenplayEs } from './screenplay-data';

type Lang = 'cat' | 'es';

const copy = {
  cat: {
    nav: ['Mirada', 'Referències', 'Nota de direcció', 'Guió'],
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
    previousLabel: 'Referència de treball anterior', previousTitle: 'Claustrofòbia en anamòrfic', previousBody: 'Una peça realitzada fa tres anys. No és una referència exacta d’il·luminació, però sí del format anamòrfic i de la sensació d’espai tancat. Aquí, la diferència essencial és que el confinament contindrà també una forma d’alliberament.', youtube: 'Veure a YouTube',
    scriptLabel: '04 — Guió literari', scriptIntro: 'Lectura completa · 6 pàgines · català i castellà', page: 'Pàgina', original: 'Obrir el PDF original', footer: 'Guió i direcció — Enrike Segarra · Setembre 2026',
  },
  es: {
    nav: ['Mirada', 'Referencias', 'Nota de dirección', 'Guion'],
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
    previousLabel: 'Referencia de trabajo anterior', previousTitle: 'Claustrofobia en anamórfico', previousBody: 'Una pieza realizada hace tres años. No es una referencia exacta de iluminación, pero sí del formato anamórfico y de la sensación de espacio cerrado. Aquí, la diferencia esencial es que el encierro contendrá también una forma de liberación.', youtube: 'Ver en YouTube',
    scriptLabel: '04 — Guion literario', scriptIntro: 'Lectura completa · 6 páginas · catalán y castellano', page: 'Página', original: 'Abrir el PDF original', footer: 'Guion y dirección — Enrike Segarra · Septiembre 2026',
  },
} as const;

const ids = ['mirada', 'referencies', 'direccio', 'guio'];
const groups = [
  ['/images/videoframe_541466.png', '/images/videoframe_615658.png', '/images/videoframe_528024.png'],
  ['/images/videoframe_601064.png', '/images/videoframe_635352.png'],
  ['/images/videoframe_1110535.png', '/images/videoframe_1133213.png', '/images/videoframe_1136191.png', '/images/videoframe_1138085.png', '/images/videoframe_630811.png'],
];
const alts = {
  cat: ['Ulls vistos entre fustes', 'Figura amagada sota una taula', 'Espai fosc i tancat', 'Dos rostres molt pròxims', 'Rostre estirat a la foscor', 'Dues persones abraçades', 'Petó en primeríssim pla', 'Dits sobre la pell', 'Dit pressionant la pell', 'Pell eriçada en macro'],
  es: ['Ojos vistos entre maderas', 'Figura escondida bajo una mesa', 'Espacio oscuro y cerrado', 'Dos rostros muy próximos', 'Rostro tumbado en la oscuridad', 'Dos personas abrazadas', 'Beso en primerísimo plano', 'Dedos sobre la piel', 'Dedo presionando la piel', 'Piel erizada en macro'],
};

function ScriptPage({ text, index, lang }: { text: string; index: number; lang: Lang }) {
  return <article className="script-page" id={`script-page-${index + 1}`} aria-label={`${copy[lang].page} ${index + 1}`}><span className="script-page-number">{String(index + 1).padStart(2, '0')}</span><div className="script-lines">{text.split('\n').map((line, n) => { const s = line.trim(); const scene = /^(INT\.|EXT\.|CORTE|FUNDIDO|AL MISMO|AL MATEIX)/.test(s); const cue = s.length > 0 && s.length < 36 && s === s.toUpperCase(); const paren = s.startsWith('(') && s.endsWith(')'); return <p key={n} className={scene ? 'scene-line' : cue ? 'cue-line' : paren ? 'paren-line' : ''}>{line || '\u00a0'}</p>; })}</div></article>;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('cat');
  const t = copy[lang];
  const script = useMemo(() => lang === 'cat' ? screenplayCat : screenplayEs, [lang]);
  const changeLanguage = (next: Lang) => { if (next === lang) return; const current = Array.from(document.querySelectorAll<HTMLElement>('.script-page')).find(p => { const r = p.getBoundingClientRect(); return r.top <= innerHeight * .45 && r.bottom >= innerHeight * .45; }); const id = current?.id; setLang(next); requestAnimationFrame(() => id && document.getElementById(id)?.scrollIntoView({ block: 'center' })); };
  let alt = 0;
  return <main>
    <header className="site-header"><a href="#top" className="wordmark">L’ÚLTIM CLAU</a><nav aria-label="Dossier">{t.nav.map((n,i)=><a key={n} href={`#${ids[i]}`}>{n}</a>)}</nav><div className="language-switch" aria-label="Idioma"><button className={lang==='cat'?'active':''} onClick={()=>changeLanguage('cat')} aria-pressed={lang==='cat'}>CAT</button><span>/</span><button className={lang==='es'?'active':''} onClick={()=>changeLanguage('es')} aria-pressed={lang==='es'}>ES</button></div></header>
    <section className="hero" id="top"><img src="/images/videoframe_541466.png" alt="" className="hero-image"/><div className="hero-shade"/><div className="hero-copy"><p className="eyebrow">{t.eyebrow}</p><h1>L’ÚLTIM<br/>CLAU</h1><p className="hero-subtitle">{t.subtitle}</p></div><a href="#mirada" className="scroll-cue"><span>{t.scroll}</span><ArrowDown size={18}/></a></section>
    <section className="intro-section" id="mirada"><div className="section-heading"><p className="eyebrow">{t.miradaLabel}</p><h2>{t.miradaTitle}</h2></div><p className="lead-copy">{t.miradaBody}</p></section>
    <section className="moodboard" aria-label="Moodboard">{groups.map((images,i)=><div className={`mood-chapter chapter-${i+1}`} key={i}><div className="chapter-copy"><span>0{i+1}</span><h3>{t.chapters[i][0]}</h3><p>{t.chapters[i][1]}</p></div><div className={`image-composition images-${images.length}`}>{images.map(src=><figure key={src}><img src={src} alt={alts[lang][alt++]} loading="lazy"/></figure>)}</div></div>)}</section>
    <section className="references-section" id="referencies"><div className="section-heading"><p className="eyebrow">{t.refsLabel}</p><h2>{t.refsTitle}</h2></div><div className="video-list">{[1,2,3].map((n,i)=><article className="video-reference" key={n}><div className="video-frame"><video controls muted preload="metadata" poster={groups[i][0]}><source src={`/media/referencia-${n}.mp4`} type="video/mp4"/></video><span className="video-index">0{n}</span></div><div className="video-copy"><h3>{t.refTitles[i]}</h3><p>{t.refTexts[i]}</p></div></article>)}</div><a className="text-link" href="https://drive.google.com/drive/folders/1eA5orkN2y5Q9VWg16eNaC7R_IL-2ZKsJ?usp=sharing" target="_blank" rel="noreferrer">{t.drive}<ArrowUpRight size={16}/></a></section>
    <section className="director-section" id="direccio"><div className="director-sticky"><p className="eyebrow">{t.noteLabel}</p><h2>{t.noteTitle}</h2></div><div className="director-copy">{t.note.map((p,i)=><p key={i}>{p}</p>)}</div></section>
    <section className="previous-work"><div className="youtube-frame"><iframe src="https://www.youtube-nocookie.com/embed/hAgSa0w1bzY?rel=0" title={t.previousTitle} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/></div><div className="previous-copy"><p className="eyebrow">{t.previousLabel}</p><h2>{t.previousTitle}</h2><p>{t.previousBody}</p><a className="text-link" href="https://www.youtube.com/watch?v=hAgSa0w1bzY" target="_blank" rel="noreferrer">{t.youtube}<Play size={15}/></a></div></section>
    <section className="script-section" id="guio"><div className="script-header"><div><p className="eyebrow">{t.scriptLabel}</p><h2>L’últim clau</h2><p>{t.scriptIntro}</p></div><a className="pdf-link" href={lang==='cat'?'/documents/guio-catala.pdf':'/documents/guion-castellano.pdf'} target="_blank"><FileText size={18}/>{t.original}</a></div><div className="script-language"><button className={lang==='cat'?'active':''} onClick={()=>changeLanguage('cat')}>Versió catalana</button><button className={lang==='es'?'active':''} onClick={()=>changeLanguage('es')}>Versión castellana</button></div><div className="script-reader">{script.map((p,i)=><ScriptPage key={`${lang}-${i}`} text={p} index={i} lang={lang}/>)}</div></section>
    <footer><span>L’ÚLTIM CLAU</span><p>{t.footer}</p><a href="#top">↑</a></footer>
  </main>;
}
