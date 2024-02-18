import express, { Express, Request, Response } from "express";
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'
import routerMaster from "../route/master.route";

const port = process.env.PORT || 3001
const app: Express = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST']
}))

app.use(routerMaster)

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST']
    }
})

server.listen(port, () => {
    console.log('The server is running on http://localhost:' + port)
})
