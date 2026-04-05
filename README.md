# Mi portafolio — SebastianSosaDev

Soy **Sebastián Sosa**, ingeniero de software, y este repositorio es **mi espacio en la web**: el lugar donde muestro quién soy, qué hago y cómo puedes contactarme. No es una plantilla genérica que copié y pegué; es un proyecto que fui armando con intención, para que quede **claro, rápido y honesto** con lo que ofrezco.

## Por qué existe este proyecto

Quería un portafolio que se sintiera **mío**: oscuro, legible, sin ruido. Algo donde pueda contar mi historia en pocas frases, dejar una guía de qué suele funcionar en un buen portafolio técnico (por si a alguien le sirve de referencia), ir colgando **proyectos que de verdad me representen** y cerrar con un contacto directo. Todo en **una sola página** con secciones: el menú solo me ayuda a **moverme** por el home, sin complicar rutas de más.

## Qué utilicé (y por qué me gusta)

Elegí herramientas con las que disfruto trabajar y que me dan base sólida para seguir creciendo:

| Tecnología | Para qué la uso aquí |
|------------|----------------------|
| **[Angular](https://angular.dev) 19** | La app completa con componentes **standalone**; es el framework con el que me siento cómodo para estructurar algo mantenible. |
| **[Tailwind CSS](https://tailwindcss.com) 3** | Estilos en línea con utilidades: itero rápido y mantengo un **tema oscuro** coherente sin pelearme con CSS suelto por todos lados. |
| **Angular SSR** | Render en servidor y prerender de la entrada: me importa que la primera carga sea **razonable** y SEO-friendly. |
| **TypeScript** | Tipado en todo el proyecto; me ahorra dolores cuando el portafolio crece. |

Lo levanté con [Angular CLI](https://angular.dev/tools/cli) 19.2.x.

## Cómo lo organicé (mi forma de pensar el código)

```
src/app/
├── app.component.*      # Mi “cascarón”: header, contenido y footer
├── app.routes.ts        # De momento solo la ruta raíz → home (carga diferida)
├── features/home/       # Mi página principal y todas las secciones con anclas
└── shared/
    ├── components/      # Header y footer reutilizables
    ├── data/site.ts     # Aquí centralizo **mis** datos: nombre, bio, menú, redes
    └── services/        # Scroll suave entre secciones del home
```

Separé **`features`** (lo que es “pantalla”) de **`shared`** (layout y datos comunes). Los textos y enlaces del menú viven en **`site.ts`**: si cambio algo de “mí”, lo toco ahí y se refleja en el sitio. Los `sectionId` del menú tienen que coincidir con los `id` de cada bloque en el HTML del home (`inicio`, `que-mostrar`, `proyectos`, `contacto`).

### Mis secciones en el home

1. **Inicio** — Presentación, ubicación y botones que me llevan al resto de la página.  
2. **Qué mostrar** — Ideas que yo mismo uso como checklist para no olvidar nada importante en un portafolio.  
3. **Proyectos** — Zona reservada para ir sumando trabajos con capturas, stack y enlaces.  
4. **Contacto** — Forma directa de escribirme (correo desde `site.ts`).

Si quiero **personalizar colores o la fuente**, retoco `tailwind.config.js` y `src/styles.css`.

## Cómo lo corro en mi máquina

```bash
npm install
ng serve
```

Luego abro [http://localhost:4200/](http://localhost:4200/).

**Build de producción** (salida en `dist/portafolio/`):

```bash
ng build
```

**Build en desarrollo** (más fácil de depurar):

```bash
ng build --configuration=development
```

**Probar el SSR** después de compilar:

```bash
npm run serve:ssr:portafolio
```

**Tests** (necesito Chrome o definir `CHROME_BIN`):

```bash
ng test
```

## Si clonas esto

Puedes usar la estructura como base, pero los textos y enlaces son **personales**: cambia `src/app/shared/data/site.ts` por los tuyos y adapta las secciones en `features/home/`. El espíritu del repo es el mismo: **un solo lugar donde te presentes bien**.

## Enlaces que consulto seguido

- [Angular](https://angular.dev)  
- [CLI de Angular](https://angular.dev/tools/cli)  
- [Tailwind](https://tailwindcss.com/docs)

---

*Este README lo escribí en primera persona a propósito: quien entre al repo que entienda de inmediato **qué es esto y quién está detrás**.*
