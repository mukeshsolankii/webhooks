const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.set('view engine','ejs');

app.get('/',(req ,res)=>{
    res.render('index');
});

var data = null;
app.post('/send', (req ,res)=>{
	data = req.body;
	console.log(data);
	email();
    res.send('your name is : '+req.body.name + ' and email is : '+ req.body.email+' !!');

});

////////////////////////////////////////////////////
//This function send request to the zapier webhook.....
function email(){
	request.post('https://hooks.zapier.com/hooks/catch/2826160/8hwppe/', {form:{key:data.email}})
};

//////////////////////////////////////////////////
var port = 5432;
app.listen(5432,()=>{ console.log(`app is running at port ${port}!!`) });