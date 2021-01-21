const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const app = express();
app.use(sassMiddleware({
	src: __dirname,
	dest: path.join(__dirname, 'public'),
	debug: true,
	indentedSyntax: false,
	outputStyle: 'compressed',
	prefix: '/prefix'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));
app.use('/', express.static(path.join(__dirname, './public')));