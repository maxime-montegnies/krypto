const fs = require("fs");

var express = require("express");

console.log(process.env.npm_config_yolo)
var app = express();

const _public_folder = "public";
const _root_dirname = __dirname + "/" + _public_folder;

//make way for some custom css, js and images
app.use(function(req, res, next) {
  setAccessOrigin(res);
  next();
});
app.use(express.static(_public_folder));
// 
app.use("/pools", express.static(_root_dirname + "/"));
app.use("/marketplace", express.static(_root_dirname + "/"));
app.use("/faq", express.static(_root_dirname + "/"));
app.use("/mint", express.static(_root_dirname + "/"));
app.use("/create_account", express.static(_root_dirname + "/"));
// app.use("/data", express.static(_root_dirname + "/data"));
// app.use("/css", express.static(__dirname + "/css"));
// app.use("/js", express.static(__dirname + "/js"));
// app.use("/images", express.static(__dirname + "/images"));
// app.use("/fonts", express.static(__dirname + "/fonts"));
// app.use("/data", express.static(__dirname + "/data"));
const setAccessOrigin = (res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
};

// app.get("/", (req, res) => {
//   res.send("Swag");
// });
app.get("/data/pool/:id", (req, res) => {
//   setAccessOrigin(res);
  fs.readFile(_root_dirname + "/data/pools.json", "utf8", (err, data) => {
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
const orderResult = (req, returnArray, key)=> {
  const key_order = 'order-'+key;
  if(req.query[key_order] && req.query[key_order]!='') {
    if(req.query[key_order]=="1") {
      // console.log(`order by ${key} ASC`);
      returnArray.sort((a,b)=>a[key]-b[key]);
    }
    if(req.query[key_order]=="-1") {
      // console.log(`order by ${key} DESC`);
      returnArray.sort((a,b)=>b[key]-a[key]);
    }
  }
  return returnArray;
}
app.get("/data/pools", (req, res) => {
    // setAccessOrigin(res);
    let count = 10;
    if (req.query.count) count = parseInt(req.query.count);
    fs.readFile(_root_dirname + "/data/pools.json", "utf8", (err, data) => {
      if (err) {
        res.send(err);
        return;
      }
      res.setHeader("Content-Type", "application/json");
      const json = JSON.parse(data);
      let tmpArray = [];
      const returnArray = [];
      json.pools.forEach((element, i) => {
        if(req.query.location && req.query.location!="") {
          if(req.query.location.toLowerCase() == element.location.city.toLowerCase()){
            tmpArray.push(element);
          }
        } else {
          tmpArray.push(element);
        }
      });
      // FITER LOCATION
      
      // ORDER
      tmpArray = orderResult(req, tmpArray, "investmentValue");
      tmpArray = orderResult(req, tmpArray, "expertValue");
      tmpArray = orderResult(req, tmpArray, "numberOfNFTs");
      tmpArray = orderResult(req, tmpArray, "initialShareValue");
      tmpArray = orderResult(req, tmpArray, "currentShareValue");
      tmpArray = orderResult(req, tmpArray, "expectedReturnPerYear");
      tmpArray = orderResult(req, tmpArray, "amountOfCurrentRents");
      tmpArray = orderResult(req, tmpArray, "amountOfPotentialRents");
      tmpArray = orderResult(req, tmpArray, "treasury");
      tmpArray = orderResult(req, tmpArray, "potentialReturnPerYear");
      // FILTER COUNT
      tmpArray.forEach((element, i) => {
        if (i < count) {
          returnArray.push(element);
        }
      });
      res.send(JSON.stringify(returnArray, null, 2));
    });
  });
  
//   app.get("/data/faq", (req, res) => {
//     setAccessOrigin(res);
//     fs.readFile(__dirname + "/data/faq.json", "utf8", (err, data) => {
//       if (err) {
//         res.send(err);
//         return;
//       }
//       const json = JSON.parse(data);
//       const returnArray = [];
//       res.setHeader("Content-Type", "application/json");
//       json.data.forEach((element, i) => {
//           returnArray.push(element);
//       });
//       res.send(JSON.stringify(returnArray, null, 2));
//     });
//   });
// app.use("/*", express.static(_root_dirname + "/"));  
// app.get("/*", (req, res) => { res.redirect(_root_dirname + "/index.htm");});  

  const PORT = process.env.PORT || process.env.npm_config_port || 8080;
var server = app.listen(PORT, function () {
  //   console.log(process.env.PORT);
  var port = server.address().port;
  console.log("Server started at http://localhost:%s", port);
});
