var height = document.getElementById('height'); // 身長入力欄
var weight = document.getElementById('weight'); // 体重入力欄
var button = document.getElementById('button-submit'); // 計測開始ボタン

var output = document.getElementById('bmi-output'); // BMI表示場所

var calcBmi = function () {
  var h_value = height.value;
  var w_value = weight.value;
  h_value /= 100;
  var bmi = w_value / (h_value * h_value);
  bmi = Math.floor(bmi * 10) / 10;
  output.innerHTML = bmi;
}

button.addEventListener('click', calcBmi);