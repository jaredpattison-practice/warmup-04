

`use strict`;

const express = require('express');
const app = express();
const pg = require('pg');
const superagent = require('superagent');

let urls = [];

function Urls(url) {
  this.url = url;
  urls.push(this);
}

function getNames(request, response) {
  const url = 'https://swapi.co/api/people/';
  superagent.get(url)
    .then(result => {
      console.log(result.results)
    })
      
    
    .catch(error => console.log(error, response));
}

console.log(getNames());