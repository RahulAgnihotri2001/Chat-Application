require("dotenv").config();
var mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI1)
  .then(() => console.log("Connected to database"))
  .catch((error) => console.error("Not connected", error));

const app = require("express")();
const http = require("http").Server(app);

const userRoute = require("./routes/userRoutes");
app.use("/", userRoute);

PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
