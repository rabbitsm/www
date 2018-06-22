import express from 'express'
require('dotenv-safe').config()
import { Router } from './router'

const server = express()

Router(server)

server.listen(process.env.SERVER_PORT, console.log(`Listening on ${process.env.SERVER_PORT}`))