function getNumber(){
//description des variables
var firstNumber = document.getElementById('firstNumber').value;
var secondNumber = document.getElementById('secondNumber').value;
var result = firstNumber / secondNumber;
//description regex
  var regex = /[0-9]/
  if((regex.test(firstNumber) == true) && (regex.test(secondNumber) == true) ){
    alert(result);
  }else{
    alert('ATTENTION')
  }
}
