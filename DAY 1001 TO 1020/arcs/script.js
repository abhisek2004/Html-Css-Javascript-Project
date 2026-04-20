import {Vector2, Clock, Path} from "https://unpkg.com/three@0.158.0/build/three.module.js";

console.clear();

class Alphabet {
  constructor(){
    this.letters = {
      a: [
        new Path()
      ],
      c: null,
      r: null,
      s: null
    }
  }
}

let unit = (val) => Math.min(innerHeight, innerWidth) * 0.01 * val;

let c = cnv;
let $ = c.getContext("2d");
let center = new Vector2();

function resize(){
  c.height = unit(95);
  c.width = c.height * 0.75;
  center.x = unit(95 * 0.5);
  center.y = unit(95 * 0.5);
}
resize();

window.addEventListener("resize", event => {
  resize();
});

let arcs = new Array(35).fill().map((p, pIdx) => {
  let rand = Math.random() < 0.25;
  let outer = rand == false ? rand : Math.random() < 0.5;
  let width = 2;
  return {
    radius: 15 + width * pIdx,
    angle: (outer ? 1 : (Math.floor(Math.random() * 1) + 2)) * Math.PI * 0.5,
    phase: (Math.random() - 0.5) * Math.PI * 2,
    speed: (Math.random() * 3 + 1) * 0.1,
    width: width * (outer ? 0.5 : 1),
    color: rand ? "#a00" : "black",
    outer: outer
  }
});
console.log(arcs);

let arcsBounded = arcs.filter(a => a.outer == false);
let arcsUnbounded = arcs.filter(a => a.outer == true);

let base = new Vector2(1, 0);
let vCenter = new Vector2();
let v2 = new Vector2();

let clock = new Clock();
let t = 0;

$.strokeStyle = "black";

draw();

function draw(){
  requestAnimationFrame(draw);
  let dt = clock.getDelta();
  t += dt;
  $.clearRect(0, 0, c.width, c.height);
  
  $.save();
    $.translate(unit(25 * 0.75), unit(75));
    arcsBounded.forEach((a, idx) => {
      arc(a, idx);
    })
  $.restore();
  
  frame(unit(5), unit(2.5), "white");
  frame(unit(1), unit(2), "black");
  frame(unit(0.25), unit(4), "black");
  
  $.save();
    $.translate(unit(25 * 0.75), unit(75));
    arcsUnbounded.forEach((a, idx) => {
      arc(a, idx, true);
    })
  $.restore();
}

function arc(a, idx, unBounded = false){
  let angle = a.phase + t * a.speed * Math.sign(a.phase);
  
  let r1 = unit(a.radius);
  v2.copy(base).setLength(r1).rotateAround(vCenter, angle);
  $.beginPath();
  $.moveTo(v2.x, v2.y);
  $.arc(0, 0, r1, angle, angle + a.angle);
  v2.copy(base).setLength(r1).rotateAround(vCenter, angle + a.angle);
  $.lineTo(v2.x, v2.y);
  $.stroke();
  if (unBounded){
    $.lineCap = "round";
    $.lineWidth = unit(a.width * 2) - 1;
    $.strokeStyle = "white";
    $.stroke();
  }
  $.lineCap = "butt";
  $.strokeStyle = a.color;
  $.lineWidth = unit(a.width) + 1;
  $.stroke();
}

function frame(width, shift, color){
  $.lineWidth = width;
  $.strokeStyle = color;
  $.strokeRect(shift, shift, c.width - shift * 2, c.height - shift * 2);
}