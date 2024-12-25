import express from "express"
import config from "config"

import "./utils/dbConnect.js"
import userRouter from "./controllers/users/index.js"
import adminRouter from "./controllers/admin/index.js"
import blogRouter from "./controllers/blogs/index.js"

const app = express()
const PORT = config.get("PORT")
app.use(express.json())

app.get("/", (req, res) => {
    try {
        res.status(200).json({msg: "Hello World"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error})
    }
})

app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/blog", blogRouter)

app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
})