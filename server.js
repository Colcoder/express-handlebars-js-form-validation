 const express = require ('express');
 const path = require ('path');
 const exphbs = require('express-handlebars');

 const app = express();

 //middlewares
 app.engine('hbs',exphbs({extname:'hbs', defaultLayout: 'layout', layoutsDir:__dirname + '/views/layouts'}))
 app.use(express.static(path.join(__dirname,'/public')));
 app.use('/css',express.static(path.join(__dirname,'/node_modules/bootstrap/dist/css')));
 app.use('/js',express.static(path.join(__dirname,'/node_modules/bootstrap/dist/js')));
 app.set('view engine', 'hbs')
 
 

//dashboard page rendering
 app.get('/',(req,res)=>{
    res.render('main',{title:'Dashboard'})
});

//registration route
const registrationRoute = express.Router();
app.use('/registration',registrationRoute);

   registrationRoute.route('/').
      get((req,res)=>{
          res.sendFile(path.join(__dirname, '/views/layouts/registration.html'))
      })
 
 
 //proof server is started
 app.listen(3000,()=>{
     console.log('server is running on port 3000....')
 });
