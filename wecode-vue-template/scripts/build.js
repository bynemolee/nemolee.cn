const Service = require('@vue/cli-service');
const service = new Service(process.cwd());

function build({ env }) {
  delete require.cache[require.resolve('../vue.config.js')];
  process.env.WECODE_ENV = env;
  const buildPath = `/build/apps/123456789012345/${env}`;
  return new Promise(async (resolve, reject) => {
    service
      .run('build')
      .then(() => {
        resolve({ buildPath });
      })
      .catch(() => {
        reject('编译出错！');
      });
  });
}

module.exports = build;
