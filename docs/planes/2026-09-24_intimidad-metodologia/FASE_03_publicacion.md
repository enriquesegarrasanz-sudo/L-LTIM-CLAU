# FASE 03: Publicación

> ⚠️ Fase manual — publicar cambia el sitio público y requiere confirmación del usuario inmediatamente antes.

## Objetivo

Publicar la revisión validada en el sitio existente y confirmar que la URL pública muestra los cambios.

## ✅ Criterios de aceptación

- [ ] El usuario confirma expresamente la publicación en ese momento.
- [ ] La revisión se publica en el sitio existente.
- [ ] La URL pública muestra la nueva sección y no muestra presupuesto.

## 📝 Prompt ejecutable

```
Antes de publicar, pide confirmación explícita indicando que el cambio se hará visible en https://lultim-clau-dossier.enriquesegarrasanz.chatgpt.site/. Tras recibirla, usa el flujo de publicación configurado por OpenAI Sites para publicar la revisión validada. Abre la URL pública y confirma que existe el capítulo de intimidad y que no existe el bloque de presupuesto. No cambies permisos ni dominio.
```

## 🧩 Skills y subagentes

- Skills existentes que aplican: `sites-hosting` si está disponible.
- Skills a crear: ninguna.
- Subagentes: ninguno.

## ⚠️ Riesgos

- Una publicación modifica contenido público. Si la comprobación posterior falla, detenerse y comunicarlo.

