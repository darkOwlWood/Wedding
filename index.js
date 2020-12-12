const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 8088;

const { WeddingRoute }  = require('./routes/WeddingRoutes');

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req, res, next) => {
    res.json({
        chekedIn: '/wedding/chekedIn',
        cormfirm: '/weddingcormfirm',
        wating  : '/wedding/wating'  ,
        manually: '/wedding/manually',
    })
})

WeddingRoute(app);

app.listen(PORT,() => console.log(`http://localhost:${PORT}`));