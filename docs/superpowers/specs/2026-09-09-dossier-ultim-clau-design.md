# Disseny del dossier web de L'últim clau

## Objectiu

Crear un dossier web públic i compartible per presentar el curt a l'actriu i a col·laboradors. Ha de comunicar sobretot a través d'imatges i ritme cinematogràfic, amb el català com a idioma inicial i canvi immediat al castellà.

## Direcció aprovada

La direcció visual és **editorial cinematogràfica**: fons gairebé negre, composició anamòrfica, tipografia editorial, imatges panoràmiques i ús molt contingut del text. L'experiència ha de transmetre el contrast entre el perill exterior i la llibertat íntima que apareix dins del confinament.

## Estructura narrativa

1. **Portada**: títol, una imatge panoràmica i selector CAT/ES sempre accessible.
2. **Moodboard**: seqüència visual dividida en confinament, intimitat i cos. Les imatges fixes explicaran el tipus de pla: mirades interrompudes, proximitat, pell, gestos i detalls.
3. **Referències audiovisuals**: vídeos disponibles localment o a Drive, presentats al costat dels fotogrames corresponents. Els enllaços originals de Drive quedaran disponibles com a font del material.
4. **Nota de direcció**: text breu en primera persona sobre sexualitat, repressió, honestedat i alliberament, connectat amb la guerra i l'opressió del relat. La veu serà íntima però continguda.
5. **Treball anterior**: vídeo de YouTube com a exemple de format anamòrfic i sensació claustrofòbica. S'indicarà que no és una referència exacta d'il·luminació.
6. **Guió**: lectura completa dins la web, amb canvi CAT/ES sense perdre la posició i accés als dos PDF originals.

## Interacció i navegació

- Navegació discreta per seccions, amb desplaçament suau.
- Selector d'idioma global que actualitza tots els textos i el guió.
- Vídeos amb controls nadius, sense reproducció automàtica amb so.
- Galeria responsive que conserva la proporció cinematogràfica de les imatges.
- El guió tindrà una columna de lectura còmoda i jerarquia clara per escenes, accions, personatges i diàlegs.

## Contingut i fonts

- Els dos PDF proporcionats són la font autoritativa del guió: `../L_ultim_clau_Guio_Catala.pdf` i `../L_ultim_clau_Guion_Castellano (1).pdf`.
- Les deu imatges `../videoframe_*.png` formen el moodboard. Es copiaran al paquet públic, amb text alternatiu contextual.
- `../ESCENA REFERENCIA 1.mp4`, `2.mp4` i `3.mp4` són les tres referències audiovisuals principals. Es publicaran com a còpies web optimitzades a 720p; els originals no es modificaran.
- La carpeta pública de Drive és `https://drive.google.com/drive/folders/1eA5orkN2y5Q9VWg16eNaC7R_IL-2ZKsJ?usp=sharing`. S'ha verificat que conté els mateixos tres vídeos, els dos guions i les deu imatges. Com que el visor anònim de Drive no reprodueix de manera fiable el vídeo, el dossier usarà les còpies web locals i oferirà un enllaç secundari "Veure materials originals a Drive".
- El vídeo de treball anterior és `https://www.youtube.com/watch?v=hAgSa0w1bzY` i s'integrarà amb el reproductor oficial de YouTube i un enllaç alternatiu.
- Els dos PDF es copiaran al paquet públic perquè el lector els pugui obrir o descarregar sense dependre de permisos de Drive.

### Correspondència audiovisual

- Referència 1: confinament, foscor, mirades interrompudes i amenaça exterior; fotogrames `videoframe_528024.png`, `541466.png`, `615658.png`.
- Referència 2: proximitat, tendresa i tensió entre els personatges; fotogrames `videoframe_601064.png`, `635352.png`.
- Referència 3: sexualitat suggerida mitjançant fragments i textura de la pell; fotogrames `videoframe_1110535.png`, `1133213.png`, `1136191.png`, `1138085.png` i `630811.png`.

## Model del guió bilingüe

- El contingut s'extraurà dels sis fulls de cada PDF i es transformarà en blocs semàntics: portada, capçalera d'escena, acció, personatge, acotació, diàleg, transició i títol final.
- Cada bloc català i castellà rebrà el mateix identificador estable segons l'ordre narratiu. La correspondència es validarà per tipus de bloc i posició dins de l'única escena.
- Si hi ha una diferència real entre versions, es conserva cada text tal com apareix al seu PDF i s'associa al bloc narratiu més proper, sense reescriure el guió.
- En canviar d'idioma, la pàgina mantindrà a la vista el mateix identificador. Si aquest no existeix en una versió, conservarà el percentatge aproximat de lectura dins del guió.
- La nota de direcció serà contingut nou, una primera versió redactada a partir de les paraules del director i presentada com a text editable en futures iteracions.

## Estats i errors

- Si un vídeo local no carrega, el seu marc mostrarà un missatge breu i l'enllaç a la carpeta de Drive.
- Si YouTube bloqueja la incrustació, es mostrarà la miniatura o un marc editorial amb l'enllaç "Veure a YouTube".
- Si una imatge no carrega, es mantindrà el peu i un fons neutre; cap secció quedarà desestructurada.
- Si falla l'extracció d'un PDF o no coincideix el recompte dels sis fulls, la publicació es bloqueja fins a revisar el contingut.
- Els PDF originals sempre quedaran disponibles com a fallback del lector web.

## Qualitat i verificació

- Plataforma de publicació: OpenAI Sites, amb una URL pública verificable i compartible.
- La versió de producció ha de compilar sense errors i la URL publicada ha de respondre correctament.
- Català és l'idioma inicial; el selector CAT/ES ha d'actualitzar tot el contingut i conservar el bloc de lectura del guió.
- Les sis pàgines de cada PDF han d'estar representades i el principi i final de cada versió s'han de comprovar contra l'original.
- Els tres vídeos locals, YouTube, la carpeta de Drive i els dos PDF han de tenir una ruta funcional o el fallback descrit.
- Compatibilitat mínima: versions actuals de Chrome, Edge, Safari i Firefox; amplada mínima revisada de 360 px.
- Cap desplaçament horitzontal a 360 px; text principal mínim de 16 px; controls accessibles amb teclat, focus visible i contrast suficient.
- Les imatges es carregaran de manera diferida fora de la primera pantalla i els vídeos no es descarregaran abans que l'usuari els activi.

## Límits de la primera versió

No inclou formularis, comptes, analítica, base de dades ni eines d'edició. És un dossier narratiu i visual, pensat per compartir i iterar ràpidament amb el director.
