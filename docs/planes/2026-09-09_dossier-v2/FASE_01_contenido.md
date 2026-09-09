# FASE 01: Contenido y activos de producción

**Plan-slug**: `dossier-v2`
**Ruta del repo**: `C:/Users/i-gamer/Videos/ACTOR/EL ÚLTIMO POLVO/L-LTIM-CLAU`

## Objetivo

Preparar los recursos únicos y añadir el capítulo bilingüe de construcción low cost sin alterar todavía el comportamiento global de la galería.

## Estado actual y causa raíz

- `app/page.tsx:48` incluye diez imágenes; `videoframe_528024` y `videoframe_615658` son tomas casi idénticas.
- `app/page.tsx:70` usa `videoframe_541466` en portada y prioriza encierro frente a liberación.
- No existe modelo de datos para materiales, presupuesto o montaje.
- La repetición apareció porque los activos se incorporaron por nombre de archivo sin deduplicación visual.

## Criterios de aceptación

- [ ] `groups` contiene nueve rutas únicas y conserva `videoframe_615658`, no `videoframe_528024`.
- [ ] La foto `d6dd76c9-cb4b-48d0-ae41-b55ca04a5dc4.png` está copiada a `public/images/construccion-cenital.png`.
- [ ] Existe una sección CAT/ES con 7 filas de materiales, totales de 24,02 € y 23,81 €, gastos de envío indicados y 7 pasos de montaje.
- [ ] La sección aclara que la madera es solo visual, no soporta personas/cámara, y menciona astillas, LED y paja alejada del calor.
- [ ] El build sigue pasando y el guion/vídeos no cambian.

## Prompt ejecutable

```text
Lee CONTEXTO.md, app/page.tsx y app/globals.css.
Copia la nueva foto cenital desde Downloads a public/images/construccion-cenital.png.
Elimina videoframe_528024 del array groups y conserva videoframe_615658.
Añade datos bilingües para materiales, presupuesto y montaje a copy o a una constante tipada próxima.
Incluye especificaciones, cantidades, precios, enlaces y fecha de consulta entregados por el usuario.
Renderiza la nueva sección entre Nota de dirección y Trabajo anterior.
Mantén los enlaces de compra como externos y describe importes como estimaciones.
No modifiques el guion, PDFs, vídeos ni hosting.
Valida con npm run build y npx oxlint app.
```

## Skills y subagentes

- Skills: `sites:sites-building`, `sites:sites-hosting` solo al final.
- Skills a crear: ninguna.
- Subagentes: ninguno.

## Git

- Commit sugerido: `feat: add low cost production concept`
- Rollback: revertir el commit sin borrar la foto fuente del usuario.

