const express = require("express");
const cors = require("cors");
const app = express();
const DB = require("./Config/database");
const port = 3000;
app.use(cors());
DB();
app.use(express.json());
const img_route = require("./Routes/image.router");
app.use("/api/v2", img_route);
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
