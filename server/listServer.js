const express = require('express');

const app = express();

app.get('/getList',(req,res)=>{
    res.send(['吃饭','睡觉','打豆豆'])
})
app.get('/userInfo',(req,res)=>{
    res.send({id: 1202, name: 'xiang', age: 30})
})

app.listen(8989,()=>{console.log('listen on 8989')})