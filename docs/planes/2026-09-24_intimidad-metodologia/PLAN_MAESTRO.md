# Plan Maestro: intimidad y metodología de rodaje

**Fecha**: 2026-09-24  
**Proyecto**: L’últim clau — dossier visual  
**Plan-slug**: `intimidad-metodologia`

## 🎯 Objetivo general

Eliminar materiales y presupuesto del dossier e incorporar un capítulo bilingüe independiente que explique el protocolo de intimidad, sin alterar las funciones existentes del sitio.

## 🤖 Modelo y esfuerzo globales

**Claude Code / API**: Sonnet 4.6 · Medio.  
**Codex (OpenAI)**: gpt-5.5 · `high`. Implementación localizada, validación de build y publicación.

| Rol | Claude | Codex |
|---|---|---|
| Implementación | Sonnet 4.6 | gpt-5.5 |
| Verificación | Sonnet 4.6 | gpt-5.5 |
| Publicación | Sonnet 4.6 | gpt-5.5 |

## 🗺️ Fases

| # | Fase | Herramienta | Depende de | Documento |
|---|---|---|---|---|
| 01 | Contenido y estructura | Codex | — | `./FASE_01_contenido-estructura.md` |
| 02 | Verificación | Codex | 01 | `./FASE_02_verificacion.md` |
| 03 | Publicación | Codex | 02 | `./FASE_03_publicacion.md` |

## 🔀 Análisis de paralelización

Las fases son secuenciales: la validación depende del cambio de `app/page.tsx` y la publicación depende de la validación. No hay trabajo paralelo seguro.

```
F01 → F02 → F03
```

## 🔍 Análisis de automatización

| Fase | Clasificación | Razón |
|---|---|---|
| 01 | ✅ Auto-encolable | Cambio local y build disponible. |
| 02 | ✅ Auto-encolable | Lint/build y revisión de contenido local. |
| 03 | ⚠️ Manual | Publicar un sitio público requiere confirmación justo antes de esa acción. |

## 🛡️ Verificación global

El build y lint deben pasar; la navegación y ambos idiomas deben mostrar la sección completa; no debe quedar ninguna referencia a precios, compras o presupuesto.

## 🌿 Estrategia de Git

- Commits: implementación y validación documentada por separado.
- Rollback: revertir el commit de implementación conserva el resto del sitio intacto.

## 🚀 Despliegue

Publicar únicamente tras una confirmación explícita en el momento de hacer visible la revisión.

## ⚠️ Riesgos globales

- `app/page.tsx` centraliza copia y markup: editar con cuidado para mantener CAT/ES sincronizados.
- La publicación es una acción externa; no se ejecuta sin confirmación en el punto final.

