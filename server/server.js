const exress = require('express');
const app = exress();
const cors = require('cors');
require('./config/mongoose.config');
app.use(cors());
app.use(exress.json());
app.use(exress.urlencoded({extended:true}));
require('./routes/car.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})