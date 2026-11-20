module.exports = {
  apps: [
    {
      name: process.env.PM2_APP_NAME || "01com-v2",
      cwd: process.env.APP_CWD || "/var/www/01com-v2",
      script: "node_modules/next/dist/bin/next",
      args: "start -H 127.0.0.1 -p 3000",
      instances: 1,
      autorestart: true,
      max_memory_restart: "512M",
      kill_timeout: 10000,
      time: true,
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
