# Commander Gulp Templates Dynamic

<p>Compilación de pug dinámicamente</p>

![commander: version (tag)](https://img.shields.io/badge/commander-v3.0.2-blue?style=for-the-badge)
![gulp: version (tag)](https://img.shields.io/badge/gulp-v4.0.2-orange?style=for-the-badge)
![MIT License](https://img.shields.io/badge/lincense-MIT-yellow?style=for-the-badge) 
![npm: version (tag)](https://img.shields.io/badge/npm-v7.0.15-red?style=for-the-badge)
![node: version (tag](https://img.shields.io/badge/node-v15.4.0-green?style=for-the-badge)

### Instalación

```bash
$ npm install commander-gulp-templates
```


### Comando a ejecutar

- Comando para Developer
```bash
$ commander-gulp-templates templates 'entry' --t 'ouput' 
```

- Comando para Producción
```bash
$ commander-gulp-templates prod:templates 'entry' --t 'ouput' 
```

### Configuración por el package.json

```bash
 "scripts": {
    "templates": "commander-gulp-templates templates \"frontend/src/templates/*.pug\" \"frontend/src/templates/**/*.pug\"  \"frontend/src/mail/**/*.pug\" \"frontend/src/mail/*.pug\" --t \"docs/\"",
    "prod:templates": "commander-gulp-templates prod:templates \"frontend/src/templates/*.pug\" \"frontend/src/templates/**/*.pug\"  \"frontend/src/mail/**/*.pug\" \"frontend/src/mail/*.pug\" --t \"docs/\"",
  }
```
### Link
https://jugaz.github.io/commander-gulp-templates/