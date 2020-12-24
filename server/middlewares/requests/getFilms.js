const { axiosGet } = require("../../services/axios");

const getFilms = async (req, res) => {
	const ids = req.body.ids || [];
	const page = req.body.page || 1;
	const films = await axiosGet(res, `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-filters?genre=${ids.toString()}&order=RATING&type=ALL&ratingTo=10&yearFrom=1888&yearTo=2020&page=${page}`);
	res.send(JSON.stringify(films));
}

module.exports = getFilms;
