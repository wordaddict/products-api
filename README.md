This is the Product API

Author: Adeyinka Micheal

**Environments**
Node version - v8.12.0 (LTS)

NPM version - v6.4.1

**Install all dependencies**
```
npm install
```
**Start the application**
```
npm run start
```

1) The first endpoint is a GET method-
**Endpoint**
``
products-ugo.herokuapp.com/products
``
- Gets vehicle data with
``
     - Name
     - Price
     - Id
``


as Response format

application/json

#with a sample response#
``
{
    "error": false,
    "code": 200,
    "data": [
        {
            "name": "Adeyinka Micheal",
            "price": 33,
            "Id": "7d402a09-390d-46d1-9dd7-c951f216b563"
        },
    ]
}
``

2) With an addition query parameter https://products-ugo.herokuapp.com/products?id=01ef8bb3-1c28-485d-a52a-360878c6570c
**Endpoint**
``
/products
``

``
{
    "error": false,
    "code": 200,
    "data": {
        "img": {
            "data": {
                "type": "Buffer",
                "data": [
                    255,
                    216,
                    255,
                    224,
                    0,
                    16,
                ]
            }
        }
    }
}
``

3) second endpoint posts the data as multiform data and gets back product data
**Endpoint**
``
/vehicles
``

#with a sample multiform keys#
``
photo(file)
name
description
price
color
category
``

#with a sample response#
``
{
    "error": false,
    "code": 200,
    "data": {
        "name": "postman",
        "category": "sport",
        "description": "Test",
        "price": 600,
        "color": "blue",
        "Id": "d1eac9a2-9939-4368-b58c-ec27ab112efc"
    },
    "message": "products added successfully"
}
``

#-------------------------------Environment variables--------------------------------------------------

 Just as provided in sample.env

``
MONGODB_URI=''
``
``
PORT=''
``
