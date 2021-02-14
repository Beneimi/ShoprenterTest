require('dotenv').config();
var fs = require('fs');

var mysql = require("mysql");
var connection = mysql.createConnection({
  host     : "localhost",
  user     : "root",
  password : "",
  database : "shoprenter_test"
});
 
connection.connect(function(err) {
  if (err) {
    console.error("Error on connection: " + err.stack);
    return;
  }
 });


if(process.env.SUM_METHOD == "MYSQL"){
  connection.query("SELECT SUM("+process.env.COLUMN+") as sum FROM "+process.env.TABLE+" where "+process.env.COLUMN+" < "+process.env.LIMIT, function (err, result) {
    if (err) {
      console.error("Error on query: " + err.stack)
      return;
    };
    logResult(result[0].sum ?? "0");
  });
}else if(process.env.SUM_METHOD == "JS"){
  connection.query("SELECT "+process.env.COLUMN+" as value FROM "+process.env.TABLE+" where "+process.env.COLUMN+" < "+process.env.LIMIT, function (err, result) {
    if (err) {
      console.error("Error on query: " + err.stack)
      return;
    };
    logResult(result.reduce((a,b)=>a+b.value,0));
  });
}else{
  console.error(new Error("Invalid value of SUM_METHOD variable. Set it to JS or MYSQL"))
}


function logResult(result){
  console.log("Sum of "+process.env.COLUMN+" in the"+process.env.TABLE+" table with a limit of "+process.env.LIMIT+": "+result+". Calculated with "+process.env.SUM_METHOD);
  fs.appendFile("Log.txt",new Date().toString()+"\nSum = "+result+"\n\n",(err)=>{
    if(err){
      console.error(err);
      return;
    }
  });
}