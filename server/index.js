express = require('express');
bodyParser = require('body-parser');
mongoose = require('mongoose');

const app = express();

const route = require('./route/posts.js');
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));

app.use("/api", route);

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://Rivatus:tH2fSILAEOJBNyPb@cluster0.2s51y.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server started on port ${PORT}`)))
    .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);
console.log("hi");
