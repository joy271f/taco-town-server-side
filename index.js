const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const chef = require("./data/chef.json");
const chefDetails = require("./data/chefDetails.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});
app.get("/chef-details", (req, res) => {
  res.send(chefDetails);
});

app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChef = chef.find((c) => parseInt(c.id) === id);
  res.send(selectedChef);
});

app.get("/chef-details/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedChefDetails = chefDetails.filter(
    (c) => parseInt(c.chef_id) === id
  );
  res.send(selectedChefDetails);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
