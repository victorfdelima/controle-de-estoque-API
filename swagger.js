const swaggerAutogen = require('swagger-autogen')();

const outputFile = './documentation/swagger_output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles);