module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactSimpleTabs',
      externals: {
        react: 'React'
      }
    }
  }
}
