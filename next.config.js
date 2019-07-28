const withLess = require('@zeit/next-less')

const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withLess({
  target: 'serverless',
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables // make your antd custom effective
  },
  webpack: (config, options) => {
    count++;

    console.log(
      `COUNT IS: ${count} 👉\n`,
      `IS DEV?: ${options.dev}`,
      '\n--------------\n',
      `IS SERVER?: ${options.isServer}`,
      '\n--------------\n',
      `config.externals is function?: ${config.externals ? typeof config.externals[0] : undefined }`,
      config.externals,
      '\n--------------\n',
      `config.externals: ${config.externals}`
    )

    if (options.isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
          replaceAttrValues: {
            // 灰色を変動色にする
            '#24282A': 'currentColor',
            // FIXME: 現在Noneが勝手にcurrentColorに変換されている模様
            //
            // 白色を透過色にする
            // 'white': 'none',
            // '#fff': 'none',
            // '#ffffff': 'none',
          }
        },
      }]
    });
    return config
  },
})
let count = 0