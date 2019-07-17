// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Contentful + Gridsome Live Preview',
  host: process.env.JAM_PREVIEW_HOST ? process.env.JAM_PREVIEW_HOST : 'localhost',
  // port: '8080',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: '86fj6tympkmv', // required
        accessToken: 'ZCuc306V_6Bk3mrmeRvxE6onoY1n45FDbIhWSdEVqrY', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    }
  ]
}
