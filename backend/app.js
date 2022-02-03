
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
// import sequelize from './db/db';
import routes from './Router/routes';
import { sequelize } from './db/sequelize';


const app = express();

// app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.use(function (req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept",
        "Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE",
        "Access-Control-Allow-Origin",
        "*"
    );
    next();
});


// app.use(routes)
app.use(routes)
// app.use(sequelize)

// app.get('/', (req, res) => {
//     console.log("home is called");
//     res.send('home is called');
// })

const PORT = 6000;

// app.listen(PORT, () => {
//     console.log(`Running on PORT ${PORT}`);
// })
// process.setMaxListeners(0);

sequelize
    .sync()
    .then((result) => {
        console.log("-----------database successfully get it");
        // console.log("------result", result)
        app.listen(PORT, () => { return true, console.log(`pLort lisnnning on ${PORT}`); });
    })
    .catch((err) => {
        console.log("-----err appjs sequlize", err);
    });











