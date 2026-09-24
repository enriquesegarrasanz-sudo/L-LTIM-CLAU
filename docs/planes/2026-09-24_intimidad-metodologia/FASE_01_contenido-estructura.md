# FASE 01: Contenido y estructura

**Plan-slug**: `intimidad-metodologia`  
**Ruta del repo**: `C:\Users\i-gamer\Videos\ACTOR\EL ÚLTIMO POLVO\L-LTIM-CLAU`

## Objetivo

Crear la sección bilingüe de intimidad como capítulo 05, retirar la tabla de presupuesto y conservar el esquema y montaje de construcción.

## 📍 Estado actual del código

- `app/page.tsx` contiene la matriz `copy`, los `ids` de navegación y la sección de construcción con el bloque `budget`.
- La estructura de copia es un objeto por idioma y la navegación se deriva de `nav` e `ids` por índice.

## ✅ Criterios de aceptación

- [ ] La navegación ofrece `Intimitat`/`Intimidad` y lleva a `#intimitat`.
- [ ] La nueva sección contiene los cinco bloques acordados en CAT y ES.
- [ ] Guion se enumera como capítulo 06.
- [ ] No queda contenido de materiales, enlaces de compra, precios o presupuesto.
- [ ] El esquema cenital y "Montaje en siete gestos" siguen presentes.

## 📝 Prompt ejecutable

```
## Objective
Actualiza app/page.tsx con el capítulo bilingüe de intimidad y elimina el presupuesto.

## Scope included
- Edita solo app/page.tsx, salvo que el estilo existente haga imprescindible un ajuste puntual.
- Añade las claves CAT/ES, la entrada de navegación y el id #intimitat.
- Inserta la sección tras Construcción; numera Guion como 06.
- Elimina materials y todo el markup budget, pero conserva construction-image y mounting.

## Scope excluded
- No cambies guiones, medios, vídeos, dependencias, tema, galería ni lector PDF.

## Constraints
- Mantén la forma del objeto copy y usa HTML semántico: section, h2, h3, p y ul.
- Traduce íntegramente al castellano el contenido catalán aprobado.

## Validation commands
- npm run lint
- npm run build

## Done when
- Se cumplen los criterios de aceptación de esta fase.
```

## 🧩 Skills y subagentes

- Skills existentes que aplican: `web-frontend-implementation`, `web-accessibility-wcag`.
- Skills a crear: ninguna.
- Subagentes: ninguno.

## 🛡️ Verificación de esta fase

- Ejecutar lint y build.
- Confirmar que el selector CAT/ES cubre todo el contenido nuevo.
- Confirmar que el ancla y la navegación usan el mismo id.

## 🌿 Git en esta fase

- Commit sugerido: `feat: add intimacy methodology to dossier`.

