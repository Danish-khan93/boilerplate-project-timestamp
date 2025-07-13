const app = require("express");

console.log("danish");

app.get("api/:date", (req, res) => {
    console.log(res.params);
    
  res.json({ unix: req.params?.unix });
});
