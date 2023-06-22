const fs = require("fs");


const _public_folder = "public";
const _root_dirname = __dirname + "/" + _public_folder;
const _parent_dirname = __dirname + "/../" + _public_folder;


console.log('COPY')
let oldPath = _parent_dirname + "/data/pools.json"
let newPath = _root_dirname + "/data/pools.json"
fs.copyFile(oldPath, newPath, (err) => {
    if (err) {
      console.log("Error Found:", err);
    }
    else {
      console.log("\nFile copied : " + newPath );
    }
  });