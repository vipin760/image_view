const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const app = express();
dotenv.config({ path: "./config/.env" });
const DB = require("./Config/database");
const port = 3000;
app.use(cors({
    origin:["https://dancing-dasik-cd4b60.netlify.app","http://localhost:5173"]
}));
DB();
app.use(express.json());
const img_route = require("./Routes/image.router");
app.use("/api/v2", img_route);
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
