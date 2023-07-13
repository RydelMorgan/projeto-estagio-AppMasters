module.exports = (on: Cypress.PluginEvents, config: Cypress.ConfigOptions) => {
  require('@cypress/code-coverage/task')(on, config)

  return config
}
