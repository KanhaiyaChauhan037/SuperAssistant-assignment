const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const mcqRoutes = require("./Routes/Mcqroute");
const Cloze = require("./Routes/Cloze");
const Auth = require("./Routes/Authroute");
const Categories = require("./Routes/Cat")
const app = express();
const port = 4000;

// Connect to MongoDB 
mongoose.connect("mongodb+srv://super:super@cluster0.qh9lc37.mongodb.net/", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

app.use("/api/mcq", mcqRoutes);
app.use("/api/questions", Cloze);
app.use("/api", Auth);
app.use("/api/categories", Categories);


app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
});