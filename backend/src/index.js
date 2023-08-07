const express = require('express');

const app = express();

app.get('/', (request, response) => response.status(200).send('Hello world!'));

app.listen(3333, () => console.log('Server is running in port 3333'));