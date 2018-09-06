const URL = '/api';
const AUTH_URL = `${URL}/auth`;
const TWEETS_URL = `${URL}/tweets`;
const ISSUES_URL = `${URL}/issues`;
const STATES_URL = `${URL}/states`;

function responseHandler(response) {
  if(response.ok) return response.json();
  return response.json().then(body => { 
    throw body.error; 
  });
}

let token = '';

function getHeaders() {
  const headers = { 'Content-Type': 'application/json' };
  if(token) headers['Authorization'] = token;
  return headers;
}

export function signUp(credentials) {
  console.log('auth', AUTH_URL);
  return fetch(`${AUTH_URL}/signup`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(credentials)
  })
    .then(responseHandler)
    .then(user => {
      storeUser(user);
      return user;
    });
}

export function signIn(credentials) {
  return fetch(`${AUTH_URL}/signin`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(credentials)
  })
    .then(responseHandler)
    .then(user => {
      storeUser(user);
      return user;
    });
}

function storeUser(user) {
  token = user.id;
  window.localStorage.setItem('user', JSON.stringify(user));
}

export function signOut() {
  token = '';
  window.localStorage.removeItem('user');
}

export function checkForToken() {
  const json = window.localStorage.getItem('user');
  if(!json) {
    return null;
  }

  const user = JSON.parse(json);
  token = user.id;
  return user;
}

export function getIssues() {
  return fetch(ISSUES_URL, {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function addIssue(issue) {
  return fetch(ISSUES_URL, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(issue)
  })
    .then(responseHandler);
}

export function updateIssue(issue) {
  return fetch(ISSUES_URL, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(issue)
  })
    .then(responseHandler);
}

export function deleteIssue(issue) {
  return fetch(ISSUES_URL, {
    method: 'DELETE',
    headers: getHeaders(),
    body: JSON.stringify(issue)
  })
    .then(responseHandler);
}

export function getIssueById(id) {
  return fetch(`/api/issues/${id}`, 
    {
      headers: getHeaders()
    })
    .then(response => response.json());
}

export function getStates() {
  return fetch(STATES_URL, {
    headers: getHeaders()
  })
    .then(responseHandler);
}

export function getStateById(id) {
  return fetch(`/api/states/${id}`, 
    {
      headers: getHeaders()
    })
    .then(response => response.json());
}

export function getTweets(screenName) {
  console.log('dsa', screenName);
  return fetch(TWEETS_URL, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(screenName)
  })
    .then(response => response.json());
}
