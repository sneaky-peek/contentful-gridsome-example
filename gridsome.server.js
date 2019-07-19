// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // console.log(api);
  api.loadSource(({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    console.log('Loadddddddd')
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })

  api.configureServer(app => {
    app.get('/my-endpoint', (req, res) => {
      console.log(api._app.store.store.collections);
      api._app.store.store.collections
        .filter((collection) => !collection.name.includes('core'))
        .forEach((collection) => console.log(collection.find()));
      res.send('Hello, world!')
      // api._app.init();
      setTimeout(() => {
        api._app.bootstrap();
      },2000);
    })
  })
}
