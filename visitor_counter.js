fetch('https://${ServerlessRestApi}.execute-api.us-east-1.amazonaws.com/Prod/count')
.then((response) => response.text())
.then((data) => {
  document.getElementById("number").innerHTML = data;
})