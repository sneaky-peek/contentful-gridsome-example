// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.configureServer(app => {
    app.get('/refresh', async (req, res) => {
      Object.keys(api._app.store.collections).forEach(key => emptyCollection(api._app.store.collections[key]));
      await api._app.loadSources();
      await api._app.createPages();
      await api._app.broadcast('New content', true);
      res.send('Refreshing');
    })
  })
}

function emptyCollection(collection) {
  collection.data().forEach(node => collection.removeNode(node.id));
}
