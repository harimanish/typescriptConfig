import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("hey crap");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`server is running at port ${port} in ${process.platform}`);
});
