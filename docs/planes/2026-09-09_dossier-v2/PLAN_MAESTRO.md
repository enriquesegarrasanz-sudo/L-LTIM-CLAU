# Plan Maestro: Segunda versión del dossier

**Fecha**: 2026-09-09
**Proyecto**: L'últim clau
**Plan-slug**: `dossier-v2`

## Objetivo general

Mejorar la lectura de las imágenes, retirar el plano duplicado, añadir ampliación accesible, sustituir la portada por la opción A, incorporar tema claro/oscuro y crear un capítulo bilingüe de construcción low cost con presupuesto y montaje. Validar y volver a publicar en la misma URL.

## Modelo y esfuerzo globales

**Claude Code / API**: Sonnet 4.6 · Esfuerzo Alto — cambio visual estándar con varias interacciones y QA.

**Codex (OpenAI)**: gpt-5.5 · `reasoning.effort: high` — implementación, regresión bilingüe y publicación del Site existente.

| Rol | Claude | Codex |
|---|---|---|
| Planificación | Opus 4.7 | gpt-5.5 |
| Implementación | Sonnet 4.6 | gpt-5.5 |
| QA | Sonnet 4.6 | gpt-5.5 |

## Fases

| # | Fase | Herramienta | Modelo Claude | Modelo Codex | Depende de | Paraleliza | Documento |
|---|---|---|---|---|---|---|---|
| 01 | Contenido y activos | Codex | Sonnet 4.6 | gpt-5.5 | — | — | `FASE_01_contenido.md` |
| 02 | Galería, portada y temas | Codex | Sonnet 4.6 | gpt-5.5 | 01 | — | `FASE_02_interaccion.md` |
| 03 | QA y publicación | Codex | Sonnet 4.6 | gpt-5.5 | 02 | — | `FASE_03_publicacion.md` |

## Análisis de paralelización

Las fases son secuenciales porque las dos primeras modifican `app/page.tsx` y `app/globals.css`, y la publicación depende del resultado unido.

```text
F01 → F02 → F03
```

| Grupo | Fases | Archivos | Riesgo | Herramienta |
|---|---|---|---|---|
| Secuencial | F01, F02 | `app/page.tsx`, `app/globals.css`, activos | Solapamiento directo | Codex local |
| Final | F03 | conjunto validado | Depende de todas | Codex local + Sites |

## Verificación global

- La galería muestra nueve imágenes únicas sin distorsión ni recortes que oculten su contenido principal.
- Todas las imágenes del moodboard se abren a gran tamaño mediante ratón, teclado y toque.
- Portada A, selector claro/oscuro y capítulo de producción funcionan en CAT y ES.
- Los vídeos, lector bilingüe, PDF, YouTube y Drive no sufren regresiones.
- La misma URL pública sirve la nueva versión tras build correcto.

## Estrategia Git y despliegue

- Trabajar sobre `main` conservando el Site existente.
- Un commit funcional para contenido/interacción y otro solo si QA exige correcciones.
- Publicar una nueva versión sobre el `project_id` ya guardado, manteniendo acceso público.
- Rollback: volver a desplegar la versión 2 ya guardada si la versión nueva falla.

## Riesgos globales

- `object-fit: cover` y alturas rígidas son la causa de recortes actuales; se sustituirán por proporciones derivadas de cada imagen.
- El duplicado es semántico, no binario: `videoframe_528024` y `videoframe_615658` pertenecen al mismo plano. Se conserva `615658`.
- El tema claro debe cambiar superficies y contraste sin blanquear ni desvirtuar los propios fotogramas.
- Los precios son una fotografía de fecha 9 de septiembre de 2026 y deben mostrarse como estimaciones, no como precios vivos.

