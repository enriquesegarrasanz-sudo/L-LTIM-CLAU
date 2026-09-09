# Contexto compartido del plan

**Proyecto**: L'últim clau — dossier web bilingüe
**Ruta absoluta del repo**: `C:/Users/i-gamer/Videos/ACTOR/EL ÚLTIMO POLVO/L-LTIM-CLAU`
**Stack**: React 19, TypeScript, Vinext/Vite, CSS global, OpenAI Sites
**Estructura relevante**: una página narrativa en `app/page.tsx`, estilos editoriales en `app/globals.css`, guion bilingüe generado en `app/screenplay-data.ts` y activos públicos en `public/`.
**Convenciones del repo**: estado local con `useState`, copia bilingüe en un objeto `copy`, arrays de recursos junto al componente, CSS por clases semánticas y publicación mediante `.openai/hosting.json`.
**Estado inicial**: rama `main`, último commit local `17cb808`; la versión pública actual está desplegada y el repositorio tiene `tmp/` sin seguimiento.

## Snapshot de archivos clave

| Archivo | LOC | Qué hace | Riesgo |
|---|---:|---|---|
| `app/page.tsx` | 79 | Contiene toda la copia, datos visuales, estado y estructura del dossier. | Normal, pero muy denso por líneas minificadas. |
| `app/globals.css` | 16 | Define todos los temas, composiciones, lector y responsive en reglas compactadas. | Normal, pero difícil de mantener por líneas muy largas. |
| `app/layout.tsx` | 34 | Metadatos y envoltorio HTML. | Bajo. |
| `components/ui/dialog.tsx` | existente | Primitiva accesible para el visor de imágenes. | Bajo. |
| `components/ui/switch.tsx` | existente | Primitiva accesible para modo claro/oscuro. | Bajo. |
| `.openai/hosting.json` | 5 | Identifica el Site publicado. | No modificar salvo necesidad de hosting. |

## Estructura de datos relevante

```ts
type Lang = 'cat' | 'es'
const groups: string[][] // tres capítulos del moodboard
const copy: Record<Lang, Copy> // navegación y textos bilingües
const [lang, setLang] = useState<Lang>('cat')
```

El nuevo estado será `theme: 'dark' | 'light'` persistido en `localStorage`; el visor mantendrá `selectedImage: {src, alt} | null`. El capítulo de producción tendrá materiales con `name`, `spec`, `quantity`, `price`, `url` y traducciones CAT/ES.

