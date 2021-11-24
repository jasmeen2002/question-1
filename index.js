const express = require("express");
const PORT = process.env.PORT || 8007;
const app = express();
const fs = require('fs')

// Don't worry about these 4 lines below
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("createcard");
});
app.get("/people/:id", (req, res) => {
  res.render("people");
});

app.get("/:id/photos", (req, res) => {
  const id = req.params.id;
});


app.post('/', (req,res) => {
  let data = {
    name : req.body.name,
    about: req.body.about,
    gitHub : req.body.git_hub_url,
    twitter : req.body.twitter_url


  }
  console.log(data)
  let data_json = JSON.stringify(data)
  fs.appendFile ('database.json', data_json, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }


});
res.render('homepage' , {userdata: data})


}
)

app.listen(PORT, () => {
  console.log(`Server now is running at http://localhost:${PORT} 🚀`);
});
