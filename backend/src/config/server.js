import express from "express";
import cors from "cors";
import router from "../routes/clientRoutes.js";

export const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router)

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello World!"})
})