
/**
 * Module dependencies.
 */

var express  = require('express')
  , routes   = require('./router.js')
  , http     = require('http')
  , path     = require('path')

var app = express()

app.configure(function(){
  app.set('port', process.env.port || 3000)
  app.set('views', __dirname + '/views')
  app.set('view engine', 'hjs')
  app.use(express.favicon())
  app.use(express.logger('dev'))
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  app.use(express.cookieParser('your secret here'))
  app.use(express.session())
  app.use(app.router)
  app.use(express['static'](path.join(__dirname, 'public')))
})

app.configure('development', function(){
  app.use(express.errorHandler())
})

app.get    ('/',          routes.index)
app.get    ('/users',     routes.users.list)
// app.get    ('/user/:id',  routes.users.find)
app.get    ('/user/add',  routes.users.createForm)
app.post   ('/user',      routes.users.create)
// app.delete ('/user/:id',  routes.users.delete)

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'))
})
