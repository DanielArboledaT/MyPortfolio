const express = require('express');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.engine('html', require('ejs').renderFile);
app.use(require('./routes/main'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('servidor escuchando en el puerto ', app.get('port'));
});

module.exports = app;