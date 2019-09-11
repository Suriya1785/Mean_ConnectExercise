/*
 * This is node server js to build http connect to serve html page from root 
 * / -> /public/index.html
 * /leagues -> /data/leagues.json
 * /teams -> /data/teams.json
 * Author: HartCode programmer
 */
// Node built in modules
const http = require('http');
const url = require('url');
const path = require('path');
const fs = require("fs");

// Node third party modules
const connect = require('connect');

//Host and port
const host = '127.0.0.1';
const port = 3000;

var app = connect();
app.use(function(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    let clientURL = request.url;
    console.log(clientURL);
    let parsedURL = url.parse(clientURL);
    console.log(parsedURL);
    let { pathname } = url.parse(request.url);
    console.log(url.parse(request.url));
    let href = parsedURL.href;

    if (href === '/') {
        response.writeHead(200, { 'Content-type': 'text/html' });
        response.end(fs.readFileSync('./public/index.html'));
    } else if (pathname === '/leagues') {
        // set Content-Type for JSON
        response.setHeader('Content-Type', 'application/json');
        response.end(fs.readFileSync('./data/leagues.json'));
    } else if (pathname === '/teams') {
        //set Content-Type for JSON
        response.setHeader('Content-Type', 'application/json');
        response.end(fs.readFileSync('./data/teams.json'));
    } else {
        response.writeHead(404);
        response.end('404: Page Not Found!');
    }
})

//create node.js http server and listen on port
http.createServer(app).listen(port, host);

// http://127.0.0.1:3000
console.log(`http://${host}:${port}`);