# Plan Maestro: lector de guion en formato cinematográfico

**Fecha**: 2026-09-24  
**Proyecto**: L-LTIM-CLAU  
**Plan-slug**: `guion-cinematografico`

## 🎯 Objetivo general

Presentar el guion bilingüe con las convenciones visuales de cine para que acción, personaje, diálogo, acotación y transición se distingan con claridad, y publicar el resultado cuando el usuario lo confirme.

## 📍 Estado actual del código

`ScriptPage` en `app/page.tsx:98-100` considera personaje cualquier línea corta en mayúsculas. Por ello puede convertir una acción como `PASOS` en personaje. Los textos viven como páginas literales en `app/screenplay-data.ts` y el lector ya emplea Courier, aunque a un tamaño y jerarquía no plenamente estándar.

## 🤖 Modelo y esfuerzo globales

**Claude Code / API**
- **Modelo**: Sonnet 4.6
- **Esfuerzo**: Medio
- **Justificación**: cambio de presentación localizado con revisión visual.

**Codex (OpenAI)**
- **Modelo**: gpt-5.5
- **Esfuerzo (`reasoning.effort`)**: medium
- **Justificación**: requiere anotación precisa de texto bilingüe, CSS responsive y verificación.

| Rol funcional | Claude Code | Codex equivalente | Cuándo usar |
|---|---|---|---|
| Implementación | Sonnet 4.6 | gpt-5.5 | Datos semánticos y lector |
| QA | Sonnet 4.6 | gpt-5.5 | Build, revisión visual y regresiones |
| Publicación | Sonnet 4.6 | gpt-5.5 | Despliegue supervisado |

## 🗺️ Fases

| # | Fase | Herramienta | Claude | Codex | Depende de | Documento |
|---|---|---|---|---|---|---|
| 01 | Estructura y formato | Codex | Sonnet 4.6 | gpt-5.5 | — | `FASE_01_formato-lector.md` |
| 02 | Publicación supervisada | Codex | Sonnet 4.6 | gpt-5.5 | 01 | `FASE_02_publicacion.md` |
| 03 | Verificación de implementación | Codex | Sonnet 4.6 | gpt-5.5 | 01, 02 | `FASE_03_verificacion-implementacion.md` |

## 🔀 Análisis de paralelización

Las fases son secuenciales: la publicación exige el resultado validado de la implementación y la verificación final depende del despliegue.

```
F01 → F02 → F03
```

| Grupo | Fases | Archivos exclusivos | Riesgo | Herramienta |
|---|---|---|---|---|
| Secuencial | F01 → F02 → F03 | F01: código; F02: Sites; F03: verificación | 🔒 Dependencia explícita | Codex |

## 🚀 Despliegue

La fase 02 es manual: inmediatamente antes de poner cambios en la web pública se solicitará confirmación explícita del usuario.

## ⚠️ Riesgos globales

- Los saltos de línea provienen de PDF y no delimitan diálogos de forma fiable.
- El lector debe conservar todo el texto original en los dos idiomas.
- Los márgenes del formato de cine deben adaptarse sin crear desplazamiento horizontal en móvil.

## 🌿 Estrategia de Git

- Commits: uno para implementación y, si procede, otro para documentación de verificación.
- Rollback: revertir el commit del lector y publicar la versión anterior de Sites.
