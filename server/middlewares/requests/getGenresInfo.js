const getGenresInfo = async (req, res) => {
	const data = require('./../../data/genres.json')
	res.send(JSON.stringify(data));
}

module.exports = getGenresInfo;
