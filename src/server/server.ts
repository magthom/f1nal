import * as express from "express";
import * as path from "path";
import apiRouter from "./routes";

const app = express();

app.use(express.static("public"));

app.use(express.json());

app.use('/api', apiRouter);

<<<<<<< HEAD
//app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/')));

=======
>>>>>>> 3ce01ba2e2b4a10491e9b7019dfc6b8db7d357bd

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));