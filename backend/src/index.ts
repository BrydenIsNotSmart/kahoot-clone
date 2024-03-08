import express, {Response, Request} from "express";

const app = express();
app.set("trust proxy", true)

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ message: "Hi", ip: req.ip})
})

app.listen(3001, () => {
 console.log("Running on port 3001")
})