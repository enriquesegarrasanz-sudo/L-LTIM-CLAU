# L’últim clau — lector en formato cinematográfico

## Objetivo

Hacer inequívoca la diferencia entre acción y diálogo en el lector web del guion, respetando el formato de presentación habitual del guion cinematográfico y manteniendo las dos versiones: catalana y castellana.

## Decisión de diseño aprobada

El lector reproducirá la convención de lectura de un guion de cine:

- **Tipografía:** Courier New (o la fuente monoespaciada equivalente del sistema), a 12 puntos en escritorio. Es la familia y medida de referencia más reconocible en guion literario.
- **Cabecera de escena:** líneas que empiezan por `INT.` o `EXT.`, en mayúsculas, separadas del bloque anterior y alineadas a la izquierda.
- **Acción:** descripción de lo visible, sonido o movimiento, alineada a la izquierda y a todo el ancho útil de la página.
- **Personaje:** solo los nombres de personajes que hablan, en mayúsculas y centrados en la zona de diálogo.
- **Diálogo:** texto inmediatamente posterior a cada personaje, situado en una columna más estrecha y centrada. Nunca se aplicará este estilo a una acción en mayúsculas como `PASOS` o `CORTE A BLANCO`.
- **Acotación:** paréntesis asociados al diálogo, en cursiva y dentro de la misma zona de diálogo.
- **Transición:** indicaciones como `CORTE A BLANCO` o `AL MISMO TIEMPO`, diferenciadas visualmente de un nombre de personaje y conservadas como indicaciones de realización.

El estilo será de lectura y no pretende remaquetar ni reescribir el guion original. Su función es hacer visible su estructura ya existente.

## Arquitectura

`ScriptPage` pasará de inferir cualquier línea breve en mayúsculas como personaje a clasificar cada línea en categorías explícitas:

1. cabecera de escena;
2. transición;
3. nombre de personaje incluido en una lista cerrada de personajes y voces del texto;
4. acotación;
5. diálogo, únicamente cuando sigue a un personaje o a su acotación;
6. acción, para todo lo demás.

La lista de voces contempla los personajes y voces en fuera de campo presentes en ambos idiomas, incluidos los sufijos `(OFF)`. Así, palabras expresivas en mayúsculas —por ejemplo `PASOS`, `MANS`, `FUSTA` o `LUZ BLANCA`— conservan correctamente su condición de acción.

### Anotación semántica de cada intervención

El texto del guion seguirá siendo su fuente literal y no se reescribirá. Junto a él habrá una anotación pequeña por idioma, página y número de línea que marcará de forma explícita los rangos de `character`, `parenthetical` y `dialogue`; las cabeceras y transiciones seguirán reglas deterministas. Todo lo no anotado será `action`.

Esta anotación evita confundir saltos de línea heredados de los PDF con cambios de bloque. Permite conservar correctamente:

- diálogos que ocupan varias líneas;
- acotaciones de una o varias líneas, incluidas las de subtitulado;
- las voces compuestas en fuera de campo (`CORONEL NAZI (OFF)`, `SARGENTO/SERGENT NAZI (OFF)`, `SOLDADO/SOLDAT NAZI (OFF)`, `GRANJERO/GRANGER (OFF)`);
- el regreso inmediato a una acción después de una intervención.

## Presentación adaptable

En escritorio, cada página mantendrá una hoja clara con márgenes generosos, texto Courier de 12 puntos y columnas de diálogo centradas. En móvil, seguirá la misma jerarquía, pero se reducirán márgenes, tamaño y sangrías para evitar desbordamientos y mantener una lectura cómoda sin desplazamiento horizontal.

## Accesibilidad

La jerarquía será textual y no dependerá solo del color o de la posición: las categorías llevarán clases explícitas. Se mantendrá orden de lectura natural, contraste alto entre la hoja y el texto, y reflujo a 200 % de zoom sin recorte horizontal.

## Verificación

- Comprobación de que una intervención de LAIA, MARC, CORONEL/SARGENTO/SOLDADO y GRANGER/GRANJERO se muestra como personaje + diálogo, incluidas las voces con `(OFF)`.
- Comprobación de un diálogo de varias líneas y de una acotación de subtitulado en varias líneas.
- Comprobación de que `PASOS`, `CORTINILLA/CORTINETA`, `CORTE/TALL A BLANCO` y los elementos en mayúsculas de acción no se muestran como diálogo.
- Comprobación de que, tras cada diálogo anotado, la siguiente acción vuelve a la columna izquierda.
- Revisión visual en escritorio y móvil de las dos versiones lingüísticas.
- Compilación de producción y revisión específica del código modificado.
