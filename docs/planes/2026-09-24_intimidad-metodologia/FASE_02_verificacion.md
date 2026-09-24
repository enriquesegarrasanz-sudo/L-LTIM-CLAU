# FASE 02: Verificación de implementación y QA

## Objetivo

Comprobar build, lint, contenido, navegación e idiomas antes de publicar.

## ✅ Criterios de aceptación

- [ ] `npm run lint` termina sin errores.
- [ ] `npm run build` termina sin errores nuevos.
- [ ] El contenido de intimidad y la eliminación del presupuesto se verifican mediante búsqueda en fuentes y revisión local.
- [ ] Se comprueba escritorio y móvil si la vista previa está disponible.

## 📝 Prompt ejecutable

```
Ejecuta npm run lint y npm run build. Revisa app/page.tsx para confirmar que CAT y ES incluyen los cinco bloques de intimidad, que nav e ids coinciden, que el guion está etiquetado como 06 y que no existen cadenas de materiales, precios, envío, total o enlaces de compra. Conserva y verifica el esquema cenital y la lista de montaje. No publiques ni modifiques archivos no necesarios.
```

## 🧩 Skills y subagentes

- Skills existentes que aplican: `web-frontend-implementation`.
- Skills a crear: ninguna.
- Subagentes: ninguno.

## 🛡️ Verificación de esta fase

- Repetir build completo y revisar el diff.
- Vigilar regresiones en galería, guion, selector de idioma y modo claro.

