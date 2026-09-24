# FASE 02: publicación supervisada

> ⚠️ Fase manual — requiere confirmación explícita del usuario antes del despliegue público.

**Plan-slug**: `guion-cinematografico`  
**Ruta del repo**: `C:\Users\i-gamer\Videos\ACTOR\EL ÚLTIMO POLVO\L-LTIM-CLAU`

## Objetivo

Publicar la versión validada del lector en el sitio público de L’últim clau.

## ✅ Criterios de aceptación

- [ ] El usuario confirma el despliegue justo antes de hacerlo.
- [ ] Se publica una versión desde el commit que contiene la mejora.
- [ ] Sites confirma que el despliegue ha terminado correctamente.

## 🛠️ Herramienta recomendada

**Ejecutar con**: Codex — gpt-5.5, esfuerzo medio.

## 📝 Prompt ejecutable

```text
Solicita confirmación explícita antes de desplegar. Tras recibirla, publica el commit validado con Sites, espera el estado final y comunica la URL pública. No edites el contenido durante esta fase.
```

## 🧩 Skills y subagentes

- **Skills existentes que aplican**: `sites:sites-building`, `sites:sites-hosting`.
- **Skills a crear**: ninguna.
- **Subagentes**: ninguno.

## 🛡️ Verificación de esta fase

- Confirma el estado de despliegue proporcionado por Sites.
- No sustituye la verificación de código de la fase 03.

## 🌿 Git en esta fase

- No crea cambios de producto.
- **Rollback**: desplegar la versión anterior si Sites reporta una incidencia.
