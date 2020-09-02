// Loading local packages
const path = require('path');
const cors = require('cors');

// Loading installed packages
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

// Loading the routers
const indexRouter = require('./routes/index');
// setting up the server
const app = express();


app.use(compression());
app.use(helmet({
    contentSecurityPolicy: false,
}));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'online-app/build')));

// Serve the static files from the React app
const allowedOrigins = ['http://localhost:5000',
'https://localhost:5000',
'https://fun-science-game.herokuapp.com/'
];
app.use(cors({
origin: (origin, callback) => {
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
        var msg = 'The CORS policy for this site does not ' +
            'allow access from the specified Origin. ' + origin;
        return callback(new Error(msg), false);
    }
    return callback(null, true);
}
}));

app.use(indexRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log('Server is up!!')
});
