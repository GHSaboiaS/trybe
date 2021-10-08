const fetch = require('node-fetch')

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    })
    .catch((err) => {
      console.log(err)
    })
};

module.exports = getRepos