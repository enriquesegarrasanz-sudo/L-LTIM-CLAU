# FASE 01: estructura y formato del lector

**Plan-slug**: `guion-cinematografico`  
**Ruta del repo**: `C:\Users\i-gamer\Videos\ACTOR\EL ÚLTIMO POLVO\L-LTIM-CLAU`

## Objetivo

Anotar las intervenciones del texto sin reescribirlo y representarlas con el formato visual de un guion cinematográfico.

## 📍 Estado actual del código

- `app/page.tsx:98-100`: `ScriptPage` usa mayúsculas + longitud para inferir un personaje.
- `app/screenplay-data.ts`: expone únicamente `screenplayCat` y `screenplayEs` como páginas de texto.
- `app/globals.css:17,20`: aplica Courier, sangría de personaje y acotación, pero no hay clase específica de diálogo ni transición.

## ✅ Criterios de aceptación

- [ ] LAIA, MARC y cada voz `(OFF)` se muestran como personaje seguido de diálogo, en CAT y ES.
- [ ] Un diálogo y una acotación de varias líneas se mantienen en su columna correspondiente.
- [ ] `PASOS`, `MANS/MANOS`, `CORTE/TALL A BLANCO` y `CORTINILLA/CORTINETA` se muestran como acción o transición, nunca como personaje.
- [ ] El lector usa Courier 12 pt en escritorio, conserva contraste y no presenta scroll horizontal en móvil.
- [ ] `npm.cmd run build` y la comprobación específica de los archivos modificados terminan sin errores nuevos.

## 🛠️ Herramienta recomendada

**Ejecutar con**: Codex — gpt-5.5, esfuerzo medio.

## 📝 Prompt ejecutable

```text
## Objective
Implementa el lector de guion en formato cinematográfico estándar.

## Scope included
- Lee app/page.tsx, app/screenplay-data.ts, app/globals.css y la especificación de formato.
- Añade junto a los textos una estructura tipada de roles por idioma, página y línea para character, parenthetical y dialogue.
- Mantén las páginas literales intactas; toda línea sin rol es action salvo cabeceras INT./EXT. y transiciones explícitas.
- Cambia ScriptPage para combinar anotaciones y reglas deterministas, sin usar «mayúsculas y longitud» como criterio de personaje.
- Aplica Courier New 12 pt en escritorio, acción a la izquierda, personaje y diálogo centrados, acotación en cursiva, transición diferenciada y adaptación móvil.

## Scope excluded
- No cambies el argumento, el contenido literal, las otras secciones ni la navegación del dossier.

## Validation commands
- npm.cmd run build
- npx.cmd oxlint app/page.tsx app/screenplay-data.ts app/globals.css

## Done when
- Se cumplen todos los criterios de aceptación y se revisan ambas versiones en escritorio y móvil.
```

## 🧩 Skills y subagentes

- **Skills existentes que aplican**: `web-frontend-implementation`, `web-accessibility-wcag`.
- **Skills a crear**: ninguna.
- **Subagentes**: ninguno.

## 🛡️ Verificación de esta fase

- Revisa de forma visual una intervención de LAIA, una de CORONEL/SARGENTO y un bloque de `PASOS` en los dos idiomas.
- Comprueba el foco de los conmutadores de idioma y el reflujo a tamaño móvil.

## 🌿 Git en esta fase

- **Commit sugerido**: `feat: format screenplay reader as cinema script`.
- **Rollback**: revertir solo ese commit si las anotaciones alterasen el texto mostrado.

## 🔬 Análisis de causa raíz

- **Qué falló antes**: acciones en mayúsculas podían parecer nombres de personaje.
- **Por qué falló**: el lector infiere semántica a partir de la tipografía del texto procedente de PDF.
- **Qué cambia ahora**: las intervenciones se anotan de forma explícita y el resto conserva el rol de acción.
