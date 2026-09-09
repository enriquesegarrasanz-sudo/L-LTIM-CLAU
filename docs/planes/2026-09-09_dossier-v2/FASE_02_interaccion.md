# FASE 02: Portada, galería y temas

**Plan-slug**: `dossier-v2`
**Ruta del repo**: `C:/Users/i-gamer/Videos/ACTOR/EL ÚLTIMO POLVO/L-LTIM-CLAU`

## Objetivo

Aplicar la portada A, reorganizar la galería, añadir visor ampliado y permitir alternar entre modo oscuro y claro.

## Criterios de aceptación

- [ ] La portada usa `videoframe_1110535.png` y comunica liberación corporal; no repite una imagen presente en el moodboard.
- [ ] Las nueve imágenes únicas se ven completas o con recorte editorial explícitamente controlado, sin cajas vacías ni una fila huérfana.
- [ ] Pulsar una imagen abre un `Dialog` grande con imagen completa, texto alternativo, cierre, Escape y foco accesible.
- [ ] El selector basado en `Switch` alterna modo oscuro/claro, actualiza su etiqueta y persiste en `localStorage`.
- [ ] CAT/ES, navegación, vídeos y lector mantienen su funcionamiento.
- [ ] A 360 px no hay desplazamiento horizontal.

## Prompt ejecutable

```text
Lee CONTEXTO.md, app/page.tsx, app/globals.css, components/ui/dialog.tsx y components/ui/switch.tsx.
Sustituye la imagen hero por videoframe_1110535.png y retírala del grupo Cuerpo para evitar repetición entre portada y galería.
Redistribuye las imágenes restantes con proporciones intrínsecas y CSS responsive, evitando alturas rígidas que corten el sujeto.
Implementa selectedImage y el visor con Dialog; cada figure debe ser un botón accesible.
Implementa theme dark/light con Switch y localStorage, usando data-theme en el elemento raíz.
Define tokens completos para ambos temas; no apliques filtros a las imágenes.
Mantén el selector de idioma y conserva posición del guion.
No añadas librerías ni modifiques componentes ui vendorizados.
Valida con npm run build y npx oxlint app.
```

## Skills y subagentes

- Skills: `sites:sites-building`.
- Skills a crear: ninguna.
- Subagentes: ninguno.

## Riesgos y rollback

- Los `Dialog` dentro de un `.map` pueden crear árboles redundantes; usar un único diálogo controlado al final de la página.
- Inicializar tema solo tras montar para evitar discrepancias de render.
- Commit sugerido: `feat: improve gallery and add theme switcher`.

