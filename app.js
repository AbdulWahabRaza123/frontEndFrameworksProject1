const express=require('express');
const path=require('path');
const app=express();
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); 
const port=process.env.PORT||8000;
const staticPath=path.join(__dirname,'./public');
app.use(express.static(staticPath));
app.get("/api/", function(req, res) {
    var resDate = new Date();
    res.json({ unix: resDate.valueOf(), utc: resDate.toUTCString() });
  });
app.get("/api/:date_string", function(req, res) {
    resDate = new Date(req.params.date_string);
    // console.log("This is time ",resDate.getTime());
    if(resDate.toString() == "Invalid Date"){
        resDate = new Date(parseInt(req.params.date_string));
    }
    if(resDate.toString() == "Invalid Date"){
        resDate=new Date();
                // console.log(resDate);
                res.json({ error : "Invalid Date" });
              }
    res.json({ unix: resDate.valueOf(), utc: resDate.toUTCString() });
  });
app.listen(port,()=>{
    console.log("Listening to this port ",port);
})
