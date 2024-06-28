const { watch } = require("fs");

const envArgIndex = process.argv.indexOf("--env");
const envArg = (envArgIndex !== -1 && process.argv[envArgIndex + 1]) || 'local';
const RUN_ENV_MAP = {
    local: {
        instances: 1,
        max_memory_restart: '256M',
        watch: true
    },
    dev: {
        instances: 1,
        max_memory_restart: '256M',
        watch: true
    },
    prod: {
        instances: 2,
        max_memory_restart: '512M',
        watch: false
    }
}
const runEnv = RUN_ENV_MAP[envArg];
module.exports = {
  apps: [
    {
      name: "springboot-react",
      script: "node_modules/next/dist/bin/next",
      args: "start",
      exec_mode: "cluster",
      instances: runEnv.instances,
      watch: runEnv.watch,
      max_memory_restart: runEnv.max_memory_restart,
      env_local: {
        APP_ENV: "local",
      },
      env_dev: {
        APP_ENV: "dev",
      },
      env_prod: {
        APP_ENV: "prod",
      }
    }
  ]
};
