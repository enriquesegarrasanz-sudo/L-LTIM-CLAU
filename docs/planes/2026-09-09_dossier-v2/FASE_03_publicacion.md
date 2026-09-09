# FASE 03: QA y publicación

> Fase manual: incluye comprobación visual y despliegue público.

**Plan-slug**: `dossier-v2`
**Ruta del repo**: `C:/Users/i-gamer/Videos/ACTOR/EL ÚLTIMO POLVO/L-LTIM-CLAU`

## Objetivo

Validar la segunda versión completa y reemplazar la publicación actual sin cambiar su URL ni su audiencia.

## Criterios de aceptación

- [ ] `npm run build` y `npx oxlint app` terminan sin errores nuevos.
- [ ] Portada, nueve imágenes únicas, visor, tema, sección low cost, CAT/ES, tres vídeos y seis páginas de guion funcionan.
- [ ] La URL pública mantiene `access_mode: public` y sirve la nueva versión.
- [ ] GitHub contiene el mismo commit publicado.
- [ ] Si falla la publicación, la versión pública anterior continúa disponible.

## Prompt ejecutable

```text
Lee CONTEXTO.md, PLAN_MAESTRO.md y el diff completo de la fase.
Ejecuta build y lint de app; corrige solo fallos causados por esta versión.
Comprueba visualmente escritorio y 360 px, ambos temas y ambos idiomas.
Comprueba apertura/cierre del visor por clic y Escape.
Prueba reproducción/pausa de los tres vídeos y los enlaces PDF, YouTube y Drive.
Haz commit y push a GitHub cuando todos los criterios pasen.
Empaqueta la build, guarda una nueva versión del Site existente y despliega manteniendo acceso público.
Espera estado succeeded y abre la URL pública final en la pestaña existente.
No cambies slug, project_id ni audiencia.
```

## Skills y subagentes

- Skills: `sites:sites-building`, `sites:sites-hosting`.
- Skills a crear: ninguna.
- Subagentes: ninguno.

## Rollback

Si la nueva versión falla en producción, volver a desplegar la versión 2 ya guardada y conservar el commit para diagnóstico.

