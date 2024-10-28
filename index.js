const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/public`));

app.use(express.json());

port = 8000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
	res.send('Hello World! Get all users. It is getting hot reload');
});
