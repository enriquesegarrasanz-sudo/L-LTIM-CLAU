# FASE 03: verificación de implementación

**Plan-slug**: `guion-cinematografico`  
**Ruta del repo**: `C:\Users\i-gamer\Videos\ACTOR\EL ÚLTIMO POLVO\L-LTIM-CLAU`

## Objetivo

Confirmar que todo el formato de guion previsto está implementado, compilado y publicado sin afectar al resto del dossier.

## ✅ Criterios de aceptación

- [ ] La implementación coincide punto por punto con la especificación aprobada.
- [ ] `npm.cmd run build` termina correctamente.
- [ ] Las dos versiones conservan texto, orden de páginas y selector de idioma.
- [ ] No se han modificado las secciones de intimidad, construcción, referencias o dirección.
- [ ] El despliegue de Sites consta como correcto.

## 🛠️ Herramienta recomendada

**Ejecutar con**: Codex — gpt-5.5, esfuerzo medio.

## 📝 Prompt ejecutable

```text
Revisa la especificación, los tres archivos modificados y el diff. Ejecuta el build completo. Comprueba una muestra representativa de personajes, diálogos multilínea, acotaciones, acciones en mayúsculas y transiciones en CAT y ES, en escritorio y móvil. Confirma el estado final de Sites. Si falta un requisito, corrígelo y repite la validación antes de cerrar.
```

## 🧩 Skills y subagentes

- **Skills existentes que aplican**: `web-accessibility-wcag`, `verificador-implementacion-codex`.
- **Skills a crear**: ninguna.
- **Subagentes**: ninguno.

## 🛡️ Verificación de esta fase

- Build completo, revisión de diff, navegador en escritorio y móvil, estado de despliegue.
- Regresión a vigilar: cambio de idioma preserva la página visible del lector.

## 🌿 Git en esta fase

- **Antes**: commit de Fase 01 y despliegue de Fase 02.
- **Estado final**: repositorio limpio y versión publicada confirmada.
