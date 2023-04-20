module.exports = {
  apps : [{
    name   : "Duald client",
    script : "yarn start",
    env_production: {
      APP_API: process.env.APP_API,
      MAILERSEND_TOKEN: process.env.MAILERSEND_TOKEN,
      APP_DOMAIN: process.env.APP_DOMAIN
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : ['164.90.191.142'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/desua-clientv2.git',
      path : '/var/www/client',
      'post-deploy' : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
