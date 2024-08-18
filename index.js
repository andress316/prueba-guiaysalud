import express from "express"
import dotenv from "dotenv" //<-- Se agrega acá

import http from "http" //<-- Paso 1
import https from "https" //<-- Paso 2
import cors from "cors" //<-- Paso 3
import fs from "fs"

// Configuración de las variables de entorno
dotenv.config() //<-- Se agrega acá

// Inicialización de la APP
const app = express()
app.use(express.json()) // Para que la app utilice json

// Opciones para el servidor https, para usar el certificado TLS
// const httpsServerOptions = {
//     key: fs.readFileSync(process.env.KEY_PATH),
//     cert: fs.readFileSync(process.env.CERT_PATH),
//     };


// Configuramos CORS //<-- Paso 5
app.use(cors())

// Definición del puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})

// Servidor HTTP
// const serverHttp = http.createServer(app);
// serverHttp.listen(process.env.HTTP_PORT, process.env.IP);

// Servidor HTTPS
// const serverHttps = https.createServer(httpsServerOptions, app);
// serverHttps.listen(process.env.HTTPS_PORT, process.env.IP);


app.get('/', function (req,res) {res.send({msg: "Bienvenido a las pruebas"})})
app.post('/', function (req,res) {res.send(req.body)})