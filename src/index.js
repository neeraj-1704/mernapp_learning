import connectDB from "./db/connectionDb.js";
import dotenv from "dotenv";
import app from './app.js';
dotenv.config({
    path: './env'
});

connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8001;
        app.listen(PORT, () => {
            console.log(`Server is running at port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB CONNECTION FAILED !!!", err);
    });



















// // if in the code base
// // ;(async () => {})()  => () excute after this  ()