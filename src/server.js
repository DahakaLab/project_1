const path = require('path');
const express = require('express');

module.exports = {
    app: function () {
        const app = express();
        const indexPath = path.join(__dirname, '/../public/views/root.html');
        const notebooks = path.join(__dirname, '/../public/views/notebooks.html');
        const viewText = path.join(__dirname, '/../public/views/viewText.html');
        const publicPath = express.static(path.join(__dirname, '../public'));

        app.use('/public', publicPath);
        app.get('/', function(_, res) {res.sendfile(indexPath);});
        app.get('/notebooks', function (req, res) {res.sendfile(notebooks);});
        app.get('/view_text', function (req, res) { res.sendfile(viewText);});

        return app;
    }
};