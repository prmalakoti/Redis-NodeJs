import redis from 'redis';
import dotenv from 'dotenv';
dotenv.config();

const client = redis.createClient({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

await client.connect();

export default client;
