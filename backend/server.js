const express=require('express');
const app=express();
app.use(express.json());
const PORT=process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('TaskFlow API is running');
});
app.get('/api/test',(req,res)=>{
    res.status(200).json({
        success:true,
        message:'API is running correctly'
    });
});
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});



