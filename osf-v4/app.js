var createError = require('http-errors');
var express = require('express');
var path = require('path');
var fs = require('fs');
const history = require('connect-history-api-fallback')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(history(
  {
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
  }
));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3007);
console.log(`Server running at http://127.0.0.1:3007/`);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
