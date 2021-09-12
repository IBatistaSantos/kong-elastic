const express = require('express');


const app = express();


app.get('/', (req, res) =>{
    res.json({
        message: `Service A - Hello World using microservice architecture`});
})

app.listen(3333, () => {
    console.log('Server listening on port 3333')
});