# Contexto compartido del plan

**Proyecto**: L’últim clau — dossier visual  
**Ruta absoluta del repo**: `C:\Users\i-gamer\Videos\ACTOR\EL ÚLTIMO POLVO\L-LTIM-CLAU`  
**Stack**: React 19, TypeScript, Vinext/Vite y Cloudflare via OpenAI Sites.  
**Estructura relevante**: `app/page.tsx` contiene la copia bilingüe, la navegación y todas las secciones; `app/globals.css` contiene el estilo global; `public/` almacena los medios y PDFs.  
**Convenciones**: contenido CAT/ES concentrado en `copy`; estado local con React; componentes semánticos y estilos de clase existentes.  
**Estado inicial**: rama `main`, último commit `d5cef3d` (especificación de este cambio). Existe `tmp/` sin seguimiento, ajeno al plan.

## 📍 Snapshot de archivos clave

| Archivo | LOC | Qué hace | Riesgo |
|---|---:|---|---|
| `app/page.tsx` | 128 | Dossier completo, copia bilingüe, secciones y navegación. | ✅ Normal |
| `app/globals.css` | 18 | Importa la hoja global del dossier. | ✅ Normal |
| `vite.config.ts` | 49 | Configura Vinext, Cloudflare y OpenAI Sites. | ✅ Normal |

## Estructura de datos relevante

```ts
type Lang = 'cat' | 'es';
copy[lang]: {
  nav: string[];
  buildLabel: string;
  buildTitle: string;
  buildBody: string;
  // La nueva copia de intimidad seguirá esta misma estructura CAT/ES.
}
```

