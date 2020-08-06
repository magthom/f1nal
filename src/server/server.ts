import * as express from "express";
import * as path from "path";
import * as morgan from "morgan";
import * as cors from 'cors';
import * as compression from "compression";
import * as passport from "passport";
import routes from "./routes";

const app = express();

//compress req/res objects

app.use(cors());
app.use(compression());
app.use(morgan('dev'));
app.use(express.static("public"));
app.use(express.json());
app.use(passport.initialize());
app.use(routes);

//front-end routes for server to catch
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
