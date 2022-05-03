let countdown;

function start(){
 countdown = setInterval(timer,1000)  /// HERE WE RUN setInterval()
}

function timer(){
  document.getElementById('countdown').innerText--;
}


function stop(){
  clearInterval(countdown)   /// here we PAUSE  setInterval()  with clearInterval() code
}