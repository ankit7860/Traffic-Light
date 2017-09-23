window.onload = function() {
  var count = 10,
      time = 1000;
      lightCount = 1;
  var sign = document.getElementById('sign');

  function timeout() {
    time =1000;
    console.log(`in timeout ${count}`);
    var interval = setInterval(function () {
          count -= 1;
          console.log(count , time);

          if(count == 0){
            clearInterval(interval);
            manageLights();
          }

          document.getElementById('timer').textContent = count;
      }, time);
  };

  function manageLights(){
    time = 1000;
    if(lightCount%3 === 1){
      color = 'red';
      sign.textContent = 'STOP';
      sign.style.color = color;
      count = 5;
    } else if(lightCount%3 === 2){
      color = 'yellow';
      sign.textContent = 'WAIT';
      sign.style.color = color;
      count = 10;
    } else {
      color = 'green';
      sign.textContent = 'GO';
      sign.style.color = color;
      count = 15;
    }

    timeout();
    light(color);
    console.log(`in extra ${count}  lightCount ==${lightCount}`);
    lightCount += 1;

  }

  function light(color){
    var lightColors = ['red', 'yellow', 'green'];
    lightColors.forEach(function(lightColor){
      if(lightColor === color){
        var light = document.getElementById(lightColor);
        light.style.backgroundColor = `${color}`;
      } else{
        var light = document.getElementById(lightColor);
        light.style.backgroundColor = 'grey';
      }
    });
  }
  manageLights();
}