const app = require('./index');

/* CONFIGURE HOSTNAME AND PORT  */
// const hostname = "https://studentia-api.herokuapp.com";
// const port = 5000;

const hostname = "localhost";
const port = 3001;


app.listen(port || 5000, hostname, () => {

	console.log(`Server started on http://${hostname}:${port}`);

});