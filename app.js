const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT||8000;
const staticPath=path.join(__dirname,'./public');
app.use(express.static(staticPath));

app.get('/api',(req,res)=>{
    let date=new Date();
    console.log("Before date ",date);
    date.setMinutes(date.getMinutes()-3);
    res.json({
        'unix': date.getTime(), 
    'utc': date.toUTCString()
    }
    )
})
app.get("/api/:date",(req,res)=>{
    let inputDate='';
    inputDate=new Date(req.params.date);
    if(inputDate.toString() == "Invalid Date"){
        inputDate = new Date(parseInt(req.params.date));
      }
      if(inputDate.toString() == "Invalid Date"){
        res.json({error:"invalid Date"});
      }
      else{
    inputDate={
        'unix': inputDate.getTime(), 
    'utc': inputDate.toUTCString()
    }
}
    res.json(inputDate);
})
app.listen(port,()=>{
    console.log("Listening to this port ",port);
})
