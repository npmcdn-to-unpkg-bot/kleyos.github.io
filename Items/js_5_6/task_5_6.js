var timer = document.getElementById('timer');
var startBtn = document.getElementById('start');
var splitBtn = document.getElementById('split');
var clearBtn = document.getElementById('clear');

var watch = new Stopwatch(timer);

startBtn.addEventListener('click',function(){
    if (watch.isOn) {
      watch.stop();
      startBtn.textContent = 'Start';
    } else {
      watch.start();
      startBtn.textContent = 'Pause';
    }
});

splitBtn.addEventListener('click',function(){
    if (watch.isOn) {
      watch.split();
    }
});

clearBtn.addEventListener('click',function(){
  watch.reset();
});