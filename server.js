const express = require('express');
const sassMiddleware = require('node-sass-middleware')
const path = require('path');
const app = express();
app.use('/styles', sassMiddleware({
	src: path.join(__dirname, 'sass'),
	dest: path.join(__dirname, 'public/styles'),
	debug: true,
	indentedSyntax: false
}));

const port = 3002;

app.use('/', express.static(path.join(__dirname, './public')));

app.listen(port, () => {
	console.log(`app listening at: http://localhost:${port}`);
});