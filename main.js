

var ball = document.querySelector('.ball');
var tl1 = new TimelineMax({});

tl1
    .to(ball, 5, { bezier: [{ x: 100, y: 250 }, { x: 300, y: 0 }, { x: window.innerWidth / 2, y: window.innerHeight / 2 }], ease: Bounce.easeOut });


function resized(){
  document.location.reload(true)
var tl2 = new TimelineMax({});

let value1 = window.innerWidth / 2;
let value2 = window.innerHeight / 2;


tl2
  .to(ball, 5, {bezier: [{ x: 100, y: 250 }, { x: 200, y: 0 }, { x: value1, y: value2 }], ease: Bounce.easeOut });

}
























  