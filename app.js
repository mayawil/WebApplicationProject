// require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const eventRoutes = require('./routes/eventRoutes');
const mainRoutes = require('./routes/mainRoutes');
const {fileUpload} = require('./middleware/fileUpload');


// create app
const app = express();

// configure app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

// mount middleware
app.use(express.static('public')); //where to locate static files
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny')); //log all requests and responses in the terminal
app.use(methodOverride('_method'));

// set up routes
app.get('/', (req, res)=>{
    res.render('index');
});

app.use('/events', eventRoutes);
app.use('/main', mainRoutes);

app.use((req, res, next) => {
    let error = "Sorry, the server cannot find an existing page with the endpoint " + req.url;
    res.render('./main/error', {error});
});

// start the server
app.listen(port, host, ()=>{
    console.log('Server is running on port', port);
});