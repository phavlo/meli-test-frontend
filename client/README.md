# Cliente - Meli prueba técnica

Este proyecto se inició con [Create React App](https://github.com/facebook/create-react-app).

## Para correr el proyecto en modo dev:

### `npm start`

Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

## Para realizar el `build` de producción:

### `npm run build`

El `build` de la app se guardara en la carpeta `build`

## Notas:

1. El servidor levanta el `build` de este package como contenido estático. De esta forma podemos correr tanto el cliente como el servidor en la misma instancia del servidor.
2. Se configuró un proxy a: `http://localhost:4000` que es el por defecto del servidor.