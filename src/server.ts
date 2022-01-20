import  express, { json }  from "express";
import {router} from './routes/index'


const app = express()
const port = 8080;

app.use(json());

app.use(router)


app.listen(port, () => console.log("server is running on port", port))