import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
/*import path from "path";*/

/*import { config } from "./settings/config.js";
import { startConnection } from "./settings/database.js";*/

import { authRoute } from "./routes/auth.js";
import { categoryRoute } from "./routes/categories.js";
import { postRoute } from "./routes/posts.js";
import { userRoute } from "./routes/users.js";

const app = express();

dotenv.config();
app.use(express.json());
/*app.use("/images", express.static(path.join(__dirname, "/images")));*/

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);

/*app.listen(config.port, async () => {
  await startConnection({ url: config.mongo, database: config.database });
  console.log("Server is running on port: http://localhost:" + config.port);
});*/

mongoose
  .connect(process.env.MONGO_URl)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen("3000", () => {
  console.log("Backend is running.");
});
