require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const handle404Error = require('./src/middlewares/handle404Error');
const app = express();

const itemRoute = require('./src/routes/item.route');
const fornecedorRoute = require('./src/routes/fornecedor.route');
const usuarioRoute = require('./src/routes/usuario.route');
const entradaRoute = require('./src/routes/entrada.route');
const saidaRoute = require('./src/routes/saida.route');
const itemReportRoute = require('./src/routes/item-report.route');
const handleError = require('./src/middlewares/handleError');
const swaggerFile = require('./documentation/swagger_output.json')
const swaggerUi = require('swagger-ui-express');


app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/usuarios', usuarioRoute);
app.use('/api/itens', itemRoute);
app.use('/api/entradas', entradaRoute);
app.use('/api/saidas', saidaRoute);
app.use('/api/item-reports', itemReportRoute);
app.use('/api/fornecedores', fornecedorRoute);
app.use(handle404Error);
app.use(handleError);
app.listen(3000, () => { console.log('rodando') })