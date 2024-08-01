const express=require('express');
const path=require('path');
const fs=require('fs');
const cors=require('cors');
const app=express();
app.use(express.static(path.join(__dirname,'public')));
app.use(cors());
const PORT=4000;

const data=JSON.parse(fs.readFileSync(path.join(__dirname,'data','data.json')));

app.get('/api/details',(req,res)=>{
    res.json(data);
});

app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
});

