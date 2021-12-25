const app = require("./index");

/* CONFIGURE HOSTNAME AND PORT  */
// const hostname = "https://studentia-api.herokuapp.com";
// const port = 5000;

const hostname = "localhost";
const port = 3001;

const server = app.listen(process.env.PORT || port, () => {
  console.log(`Server now up and running on port ${port}`);
});
