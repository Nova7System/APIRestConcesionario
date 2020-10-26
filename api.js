var Db  = require('./dboperations');
var Quotation  = require('./quotation');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

router.route('/quotation').get((request,response)=>{

   dboperations.getQuotations().then(result => {
      response.json(result[0]);
   })

})

router.route('/quotations').post((request,response)=>{

   let quotation = {...request.body}

   dboperations.addQuotation(quotation).then(result => {
      response.status(201).json(result);
   })

})


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Quotation API is runnning at ' + port);



