QR Code Generator API
============

QR Code Generator is a simple tool for generating QR codes. It returns a PNG image of the QR code.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [QR Code Generator API](https://apiverve.com/marketplace/api/qrcodegenerator)

---

## Installation
	npm install @apiverve/qrcodegenerator --save

---

## Configuration

Before using the qrcodegenerator API client, you have to setup your account and obtain your API Key.  
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Usage

The QR Code Generator API documentation is found here: [https://docs.apiverve.com/api/qrcodegenerator](https://docs.apiverve.com/api/qrcodegenerator).  
You can find parameters, example responses, and status codes documented here.

### Setup

```
var qrcodegeneratorAPI = require('@apiverve/qrcodegenerator');
var api = new qrcodegeneratorAPI({
    api_key: [YOUR_API_KEY],
    secure: true //(Optional, defaults to true)
});
```

---


### Perform Request
Using the API client, you can perform requests to the API.

###### Define Query

```
var query = {
  "value": "https://myspace.com",
  "type": "url",
  "format": "png",
  "margin": "0"
};
```

###### Simple Request (using Callback)

```
api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

###### Example Response

```
{
  "status": "ok",
  "error": null,
  "data": {
    "id": "a70afcc3-4312-444e-86e8-c2ead93adbd6",
    "format": "png",
    "type": "url",
    "correction": "M",
    "size": 5,
    "margin": 0,
    "expires": 1725356234817,
    "downloadURL": "https://storage.googleapis.com/apiverve.appspot.com/qrcodegenerator/5397ce9e-e836-4054-8818-affe900fdf08.png?GoogleAccessId=635500398038-compute%40developer.gserviceaccount.com&Expires=1725356234&Signature=R1xB3a98C84ErpGbMLU0cbQkAjKuGMci2escPqjJS98czgoBpaet77o3fZJqbce39EM5zD8eBKUvfqo1O4Lcsxm8mJaD2jQzYhUfuUFU9R89PmnZCQPTsELW2Q%2BnA4sKyQaRBTT2el8Ul9tuqz83jMwrB2JQSeDGKkeY4bIiDWNkcA%2BigLpYbxshYLmensgnkZewaa%2FIhu%2F8S7W89mwIPpeMQhJW4FMNdIVgVRnmQnAeBIrKWdYLNfuOZ0mgbSoFN7S3VIj4EkOfB%2BW04IWQlwKfof9QAamJRCdBHGFX1fTbMEYyFruVj6Iec4r%2BHQxwkNspO%2FvRZy0Na5Rv5I8MFg%3D%3D"
  },
  "code": 200
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2024 APIVerve, and Evlar LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.