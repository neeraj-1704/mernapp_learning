import  express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
const app = express();

// backend frontend connection by cors
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit : "16kb"}))

app.use(express.urlencoded({extended : true, limit : "16kb"}))

// we are storing the stttic file in public folder
app.use(express.static("public"));
//what is the url encoded ? 

app.use(cookieParser());






export default app;