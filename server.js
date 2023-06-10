const fs = require("fs");

var express = require("express");

var app = express();

app.use(express.static("public"));

//make way for some custom css, js and images
app.use("/css", express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/images", express.static(__dirname + "/images"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.use("/data", express.static(__dirname + "/data"));
const setAccessOrigin = (res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
};
app.get("/data/pool/:id", (req, res) => {
  setAccessOrigin(res);
  fs.readFile(__dirname + "/data/pools.json", "utf8", (err, data) => {
    if (err) {
      res.send(err);
      return;
    }
    const json = JSON.parse(data);
    res.setHeader("Content-Type", "application/json");
    let find = false;
    json.pools.forEach((element) => {
    //   console.log(element.id + " " + req.query.id + " " + req.params.id);
      if (element.id == req.params.id) {
        res.send(JSON.stringify(element, null, 2));
        find = true;
        return;
      }
    });
    if (!find) {
      console.log("noop");
      res.send(JSON.stringify({}, null, 2));
    }
  });
});
app.get("/data/pools", (req, res) => {
    setAccessOrigin(res);
    let count = 10;
    if (req.query.count) count = parseInt(req.query.count);
    fs.readFile(__dirname + "/data/pools.json", "utf8", (err, data) => {
      if (err) {
        res.send(err);
        return;
      }
      const json = JSON.parse(data);
      const returnArray = [];
      res.setHeader("Content-Type", "application/json");
      json.pools.forEach((element, i) => {
        if (i < count) {
          returnArray.push(element);
        }
      });
      res.send(JSON.stringify(returnArray, null, 2));
    });
  });
  
  app.get("/data/faq", (req, res) => {
    setAccessOrigin(res);
    fs.readFile(__dirname + "/data/faq.json", "utf8", (err, data) => {
      if (err) {
        res.send(err);
        return;
      }
      const json = JSON.parse(data);
      const returnArray = [];
      res.setHeader("Content-Type", "application/json");
      json.data.forEach((element, i) => {
          returnArray.push(element);
      });
      res.send(JSON.stringify(returnArray, null, 2));
    });
  });
  
  const PORT = process.env.PORT || 8080;
var server = app.listen(PORT, function () {
  //   console.log(process.env.PORT);
  var port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});
