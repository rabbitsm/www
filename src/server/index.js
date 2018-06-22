import express from 'express'
require('dotenv-safe').config()

const server = express()

server.listen(process.env.SERVER_PORT, console.log(`Listening on ${process.env.SERVER_PORT}`))