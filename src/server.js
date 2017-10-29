const path = require('path');
const express = require('express');

module.exports = {
    app: function () {
        const app = express();
        const indexPath = path.join(__dirname, '/../public/index.html');
        const  lolkekPath = path.join(__dirname, '/../public/views/lolkek.html');
        const publicPath = express.static(path.join(__dirname, '../public'));

        app.use('/public', publicPath);
        app.get('/', function(_, res) {res.sendfile(indexPath);});
        app.get('/lolkek', function (req, res) {res.sendfile(lolkekPath);});

        return app;
    }
};