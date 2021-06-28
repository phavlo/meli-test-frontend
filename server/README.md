# Servidor - Meli prueba técnica

Construir los siguientes endpoints para ser utilizados desde las vistas:

## Endpoints:

`/api/items?q=​:query`

Debe consultar el siguiente endpoint: 
https://api.mercadolibre.com/sites/MLA/search?q=​:query

Y devolver los resultados en el formato indicado:

````
{
    "author": {
        "name": String
        "lastname": String
    },  
    categories: [String, String, String, ...],  
    items: [
        {
            "id": String,
            "title": String,
            "price": {
                "currency": String,
                "amount": Number,
                "decimals": Number
            },
            "picture": String,
            "condition": String,
            "free_shipping": Boolean
        },
        {...},
        {...},
        {...}
    ]
}
````

`/api/items/​:id`

Debe consultar los siguientes endpoints:

1. https://api.mercadolibre.com/items/​:id
2. https://api.mercadolibre.com/items/​:id​/description

Y devolver los resultados en el formato indicado:

````
{
    "author": {
        "name": String,
        "lastname": String
    },
    "item": {
        "id": String,
        "title": String,
        "price": {
            "currency": String,
            "amount": Number,
            "decimals": Number
        },
        "picture": String,
        "condition": String,
        "free_shipping": Boolean,
        "sold_quantity": Number,
        "description": String
    }
}
````

## Correr servidor:

1. Comando `npm install` para instalar todas las dependecias
2. Comando `npm start` para iniciar el servidor

## Notas:

1. El servidor busca el **build** en el package `client` y lo corre en `/`. Recomendamos primero realizar el `build de producción` de dicho package.

2. En algunos casos se consultaron recursos extras para trer info como `categories` para formar el "path" (breadcrumbs) en el item y `currencies` para traer info de la moneda.