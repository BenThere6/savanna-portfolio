import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import os from 'os';

function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
  return 'localhost';
}

const localIP = getLocalIPAddress();

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: localIP,
    port: 3000,
  },
});