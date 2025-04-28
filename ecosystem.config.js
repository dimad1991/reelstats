module.exports = {
  apps: [{
    name: 'telegram-bot',
    script: 'src/index.js',
    env: {
      NODE_ENV: 'production',
      DEBUG: 'telegram-bot'
    },
    watch: false,
    instances: 1,
    autorestart: true,
    max_restarts: 3,
    exec_mode: 'fork'
  }]
}