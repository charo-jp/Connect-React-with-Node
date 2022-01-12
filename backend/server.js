const express = require("express");
const app = express();

app.use(express.urlencoded({urlencoded: true}));

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
})

app.get("/api/todo", (req, res) => {
  const todo = [
    {id: 1, firstName: "Yuya", lastName: "Dog"},
    {id: 2, firstName: "Charo", lastName: "WanBark"},
    {id: 3, firstName: "Wan", lastName: "Dog"}];
  res.json(todo);
})

const PORT = process.env.PORT || 8080;

app.listen(8080, () => {
  console.log("Server started on port 8080");
})