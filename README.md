# Furgonetas de trabajo en Bilbao

Guía para empresas y autónomos que alquilan furgonetas en Bilbao y Bizkaia. Incluye un simulador del coste de alquiler, kilometraje y extras. La web se genera con Astro. Las consultas de disponibilidad y las reservas se realizan en la [web de la oficina de Sondika](https://www.iberfurgo.com/oficinas/alquiler-furgonetas-bilbao/).

## Desarrollo

Con Node.js 24 y npm, ejecuta `npm ci` y `npm run dev`. Abre la dirección que imprime Astro.

`npm run build` genera los archivos estáticos en `dist/`. Por defecto usa la dirección del proyecto en GitHub Pages, `https://tete-cordobes.github.io/alquilerdefurgonetasenbilbao/`. Para probar la futura dirección en local, ejecuta lo siguiente y abre la URL que indica la vista previa.

```sh
export PAGES_BASE_URL=https://alquilerdefurgonetasenbilbao.es/
npm run build
npm run preview
```

## Publicación

En **Settings → Pages → Build and deployment**, selecciona **GitHub Actions**. Cada cambio en `main` ejecuta el flujo **Deploy to GitHub Pages**. El flujo obtiene la dirección de Pages y la usa para generar los enlaces, las etiquetas canónicas, los datos estructurados y el sitemap. El despliegue muestra la URL publicada.

### Conectar alquilerdefurgonetasenbilbao.es

Guarda el dominio en **Settings → Pages → Custom domain** y configura los registros del dominio raíz en tu proveedor DNS. Si habilitas `www`, el destino de su registro DNS `CNAME` es `tete-cordobes.github.io`. GitHub gestiona la asociación del dominio mediante los ajustes del repositorio. Con este flujo de Actions puedes prescindir del archivo `CNAME`. [Instrucciones de GitHub para dominios personalizados](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

Cuando el dominio y el certificado estén activos, habilita **Enforce HTTPS** y ejecuta de nuevo **Actions → Deploy to GitHub Pages → Run workflow** en `main`. Comprueba la portada, un artículo y `/sitemap.xml` en el nuevo dominio.
