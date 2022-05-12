// jshint esversion:6
const consoleStamp = require('console-stamp');
consoleStamp(console, {
  pattern: 'HH:MM:ss.l',
  colors: {
    stamp: 'yellow',
    label: 'blue'
  }
});




const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});



app.post("/bmicalculator",function(req,res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height)/100;
  var bmi = weight / (height * height);
  var result = " - No result - ";

  if (18.5 > bmi) {
    result = "Underweight";
  } else if (25 > bmi) {
    result = "Healthy Weight";
  } else if (30 > bmi) {
    result = "Overweight";
  } else if (30 <= bmi){
    result = "Obese";
  }

  res.send(
    "<html>"+
      "<head>"+
        '<meta charset="utf-8">'+
        '<title>BMI Calculator</title>'+
        // Bootstrap
        '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">'+
        '<style media="screen">'+
           // Challenge footer style
          '.attribution { font-size: 11px; text-align: center; margin: 0;}'+
          '.attribution a { color: hsl(228, 45%, 44%); }'+
        '</style>'+
      "</head>"+
      '<body class="text-center">'+
        "<h1>BMI calculator</h1>" +
        '<div class="mt-5 mb-5">'+
          "<h3>Your result:</h3>" +
          "<p>BMI: " + bmi.toPrecision(4) + "</p> " +
          "<p>Weight Status: " + result + "</p> " +
        '</div>'+
        '<div>'+
          "<p>The standard weight status categories associated with BMI ranges for adults are shown in the following table.</p>" +
          '<table class="table ml-auto mr-auto w-75">'+
            '<thead class="thead-dark">'+
              "<tr>"+
                "<th>BMI</th>"+
                "<th>Weight Status</th>"+
              "</tr>"+
            "</thead>"+
            "<tbody>"+
              "<tr>"+
                "<td>Below 18.5</td>"+
                "<td>Underweight</td>"+
              "</tr>"+
              "<tr>"+
                "<td>18.5 – 24.9</td>"+
                "<td>Normal or Healthy Weight</td>"+
              "</tr>"+
              "<tr>"+
                "<td>25.0 – 29.9</td>"+
                "<td>Overweight</td>"+
              "</tr>"+
              "<tr>"+
                "<td>30.0 and Above</td>"+
                "<td>Obese</td>"+
              "</tr>"+
            "</tbody>"+
          "</table>"+
        '</div>'+
        '<footer>'+
          '<p class="attribution">Coded by <a href="https://harshjhasd.github.io/portfolio/" target="_blank">Harsh Jha</a> in 2020.</p>'+
        '</footer>'+
      "</body>"+
    "</html>"
  );
});

app.listen(3000,function(){
  console.log("Application listening at http://localhost:"+port+"/bmicalculator");
});
//
// /**
//  * log - colorfull console.log() for "description: object" style logging
//  *
//  * @param  {string} msg description of the object
//  * @param  {any}    obj will be logged using util.inspect()
//  * @return {undefined}
//  */
// function log(msg, obj) {
//   if (typeof obj === 'undefined') {
//     return console.log('\x1b[36m' + msg + '\x1b[0m');
//   }
//   return console.log('\x1b[36m' + msg + '\x1b[0m' +
//     util.inspect(obj, {
//       colors: true
//     }));
// }
