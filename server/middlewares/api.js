module.exports = function setup(app) {
  app.post('/api/getFilms', require('./requests/getFilms'));
  app.get('/api/getGenresInfo', require('./requests/getGenresInfo'));
};