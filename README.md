# IRIS — Landing page (GitHub Pages)

Landing page bilingüe (ES/EN) de **IRIS — Insightful Restaurant Intelligence System**,
el primer proyecto de **Greenhole Insightful Joint Holdings (GIJH)**.

- Estática y autocontenida: HTML + CSS + JS vanilla, sin dependencias ni build.
- Rutas **relativas**: funciona en `usuario.github.io/<repo>`, en la raíz de un
  `usuario.github.io` o con dominio propio, sin tocar nada.
- Contenido bilingüe con selector ES/EN (guarda la preferencia en el navegador).
- Sin datos de contacto ni referencias a terceros.

## Estructura

```
iris-landing/
├── index.html          ← página completa (secciones + textos base en español)
├── README.md
└── assets/
    ├── styles.css      ← identidad visual (base oscura IRIS + acentos verdes GIJH)
    ├── main.js         ← selector ES/EN, animaciones, contadores, FAQ
    └── favicon.svg
```

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (p. ej. `iris-landing`) y súbete el
   **contenido de esta carpeta** (no la carpeta en sí: `index.html` debe quedar
   en la raíz del repo).
   - Desde la web: *Add file → Upload files* y arrastra `index.html`, `README.md`
     y la carpeta `assets/`.
   - O por git:
     ```bash
     git init
     git add .
     git commit -m "Landing de IRIS (primer proyecto GIJH)"
     git branch -M main
     git remote add origin https://github.com/<tu-usuario>/iris-landing.git
     git push -u origin main
     ```
2. En el repo: **Settings → Pages**.
3. En *Build and deployment → Source* elige **Deploy from a branch**.
4. En *Branch* selecciona `main` y la carpeta `/ (root)`, y guarda.
5. En 1–2 minutos la página estará en:
   `https://<tu-usuario>.github.io/iris-landing/`

> Si tu repo se llama exactamente `<tu-usuario>.github.io`, la URL será la raíz:
> `https://<tu-usuario>.github.io/`

## Cómo editar contenido

- **Textos visibles (español)**: están en `index.html` y también en el bloque
  `I18N.es` de `assets/main.js`. Cuando cambies un texto, cámbialo en los dos
  lugares (el `data-i18n` del HTML debe coincidir con la clave del diccionario).
- **Textos en inglés**: bloque `I18N.en` de `assets/main.js`.
- **Colores/estética**: variables al inicio de `assets/styles.css`
  (`--accent-*` IRIS, `--green` GIJH, etc.).

## Estado del contenido

La página declara explícitamente que IRIS está **en construcción** y que GIJH
tiene **sede en Estados Unidos**. No incluye datos de contacto ni menciones a
terceros.
