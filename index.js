const express = require("express");
const app = express();

const apiRouter = require('./routes/api_routes');

app.use(express.json());
app.use('/api', apiRouter)


const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Server is listening on ${port}`)
});

module.exports = app;