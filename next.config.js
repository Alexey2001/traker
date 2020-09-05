const { parsed: localyEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localyEnv));
        return config
    }
}