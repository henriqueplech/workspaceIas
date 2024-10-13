// create a REST API server with express 
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { createAdapter } from '@socket.io/redis-adapter';
import { createClient } from 'redis';

const app = express();
const server = createServer(app);
const io = new Server(server);

const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();
const redisAdapter = createAdapter(pubClient, subClient);

io.adapter(redisAdapter);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});