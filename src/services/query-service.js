let apiBase = '/api'

const getQuery = async (url, params = {}) => {
  let paramsForQuery = '';

  for (let prop in params) {
    paramsForQuery += `${prop}=${params[prop]}&`
  }
  if (paramsForQuery.length > 0) {
    paramsForQuery = `?${paramsForQuery.slice(0, -1)}`;
  }

  const res = await fetch(`${apiBase}${url}${paramsForQuery}`);
  const json = await res.json();
  return json;
}

const postQuery = async (url, body) => {

  const res = await fetch(`${apiBase}${url}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
  const json = await res.json();
  return json;
}

export { getQuery, postQuery };
