import { createClient } from 'redis';

const client = createClient({
  url: process.env.REDIS_URL, // Example: redis://default:pwd@host:port
  socket: {
    tls: true, // Required for Upstash and Redis Cloud
  },
});

client.on('error', (err) => console.error('Redis Error:', err));

await client.connect(); // Only in ESM or use IIFE in CommonJS

export default client;
