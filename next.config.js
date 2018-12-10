const dotenv = require("dotenv")
const path = require("path")

module.exports = {
  exportPathMap: () => {
    return { "/": { page: "/" } }
  },
  publicRuntimeConfig: {
    env: process.env.NODE_ENV,
  },
  serverRuntimeConfig: {},
}
