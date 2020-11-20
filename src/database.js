const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/proyecto',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
.then(db => console.log('conectada a la base de datos'))
.catch(err => console.log(err));
