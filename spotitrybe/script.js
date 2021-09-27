const CLIENT_ID = '66db9ace617f4468b94bfe6f4e890412';
const CLIENT_SECRET = '378ed500fe494a63a75e1a7091ad0da2';

let token;

async function getToken() {
  const idAndSecret = `${CLIENT_ID}:${CLIENT_SECRET}`;
  const authorizationHeader = `Basic ${btoa(idAndSecret)}`;

  const headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');
  headers.append('Authorization', authorizationHeader);

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers,
  })

  const data = await response.json();

  token = data.access_token;
}

async function getGenres() {
  
}

window.onload = function() {
  getToken();
}