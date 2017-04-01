const config = require('./config/webpack.default.config');
const specificConfig = process.env.NODE_ENV === 'prod' ? require('./config/webpack.production.config') : require('./config/webpack.development.config');

function mergeConfigs (config, specificConfig) {
  config.plugins = config.plugins.concat(specificConfig.plugins);
  return config;
}

module.exports = mergeConfigs(config, specificConfig);
