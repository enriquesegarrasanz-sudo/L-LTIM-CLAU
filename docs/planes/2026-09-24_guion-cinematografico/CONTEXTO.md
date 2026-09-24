# Contexto compartido del plan

**Proyecto**: L-LTIM-CLAU
**Ruta absoluta del repo**: `C:\Users\i-gamer\Videos\ACTOR\EL ÚLTIMO POLVO\L-LTIM-CLAU`
**Stack**: React 19, TypeScript, Vinext/Vite y CSS global.
**Estructura relevante**: `app/page.tsx` contiene el lector y el cambio de idioma; `app/screenplay-data.ts` alberga los textos; `app/globals.css` define la maqueta. El sitio se publica con Sites.
**Convenciones**: componentes locales pequeños, datos estáticos tipados y CSS concentrado por secciones.
**Estado inicial**: rama `main`, especificación aprobada en `docs/superpowers/specs/2026-09-24-guion-formato-cinematografico-design.md` (commit `39eebc4`).

## 📍 Snapshot de archivos clave

| Archivo | LOC | Qué hace | Riesgo |
|---|---:|---|---|
| `app/page.tsx` | 140 | Renderiza el dossier y clasifica las líneas del guion. | ✅ Normal |
| `app/screenplay-data.ts` | 18 | Contiene el texto literal de las páginas CAT y ES. | ✅ Normal |
| `app/globals.css` | 20 | Define el aspecto responsive del sitio y del lector. | ✅ Normal |

## Estructura de datos relevante

```ts
// Estado actual
screenplayCat: readonly string[]
screenplayEs: readonly string[]

// Objetivo: anotaciones no destructivas junto al texto literal.
type ScriptRole = 'character' | 'parenthetical' | 'dialogue'
type ScriptLineRoles = Record<number, ScriptRole>
type ScriptRolePages = readonly ScriptLineRoles[]
scriptRolePages: { cat: ScriptRolePages; es: ScriptRolePages }
```

Las líneas sin anotación seguirán siendo acción; las cabeceras y transiciones se reconocerán mediante reglas concretas. El texto original no se reescribe.
