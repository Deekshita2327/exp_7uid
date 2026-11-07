const express=require('express');
const app=express();
app.use(express.json());
app.get('/hello',(req,res)=>{
    res.send("hello world");
});
app.post('/add',(req,res)=>{
    let a=req.body.a;
    let b=req.body.b;
    res.json({
        result: a+b
    });
});
app.listen(4002,()=>{
    console.log("server running at http://localhost:4002");
})
curl -X POST http://localhost:4002/add -H "Content-Type: application/json" -d "{\"a\":10,\"b\":30}"
