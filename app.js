const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT||8000;
const staticPath=path.join(__dirname,'./public');
app.use(express.static(staticPath));
app.get("/api/timestamp/", function(req, res) {
    var resDate = new Date();
    res.json({ unix: resDate.valueOf(), utc: resDate.toUTCString() });
  });
app.get("/api/timestamp/:date?", function(req, res) {
    var reqString = req.params.date;
    var resDate;
    if (!/^\d{4}-/.test(reqString)) reqString = parseInt(reqString);
    resDate = new Date(reqString);
    if (resDate.getTime() !== resDate.getTime()) {
      res.json({ error: "Invalid Date" });
    }
    res.json({ unix: resDate.valueOf(), utc: resDate.toUTCString() });
  });




//   app.get('/api/timestamp',(req,res)=>{
//     let date=new Date();
//     console.log("Before date ",date);
//     date.setMinutes(date.getMinutes()-3);
//     res.json({
//         'unix': date.getTime(), 
//     'utc': date.toUTCString()
//     }
//     )
// })
// app.get("/api/timestamp/:date",(req,res)=>{
//     let inputDate='';
//     if (!/^\d{4}-/.test(req.params.date))
//     {
//          reqString = parseInt(reqString);
//          console.log(reqString);
//     }
//     inputDate=new Date(req.params.date);
    
//     if(inputDate.toString() == "Invalid Date"){
//         inputDate = new Date(parseInt(req.params.date));
//       }
//       if(inputDate.toString() == "Invalid Date"){
//         inputDate=new Date().now;
//         console.log(inputDate);
//         res.json({ error : "Invalid Date" });
//       }
//       else{
//     inputDate={
//         'unix': inputDate.getTime(), 
//     'utc': inputDate.toUTCString()
//     }
// }
//     res.json(inputDate);
// })
app.listen(port,()=>{
    console.log("Listening to this port ",port);
})
