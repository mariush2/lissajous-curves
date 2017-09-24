// Version 0.7

let a, b, a_p, a_b, delta, delta_p;
let draw_x, draw_y;
let t = 1;
let amp_x = 200;
let amp_y = 200;

function setup() {
  createCanvas(700, 700);
  delta = PI;
  background(51);
  let div = createDiv("");
  draw_x = createP("");
  draw_y = createP("");
  draw_x.elt.setAttribute("class", "function");
  draw_y.elt.setAttribute("class", "function");

  a_p = createP("a: ");
  a = createSlider(-0.1, 0.1, 0.1, 0.005);

  b_p = createP("b: ");
  b = createSlider(-0.1, 0.1, -0.05, 0.005);

  a.size(300);
  b.size(300);

  div.child(a_p);
  div.child(a);
  div.child(b_p);
  div.child(b);

  table(div);
  drawFunc();

  a.elt.addEventListener('change', ev => {
    background(51);
    a_p.elt.innerHTML = "a: " + a.elt.value;
  });
  b.elt.addEventListener('change', ev => {
    background(51);
    b_p.elt.innerHTML = "b: " + b.elt.value;
  });
}

function draw() {
  background(51, 5);
  let x, y;
  x = amp_x * sin((Number(a.elt.value) * t) + delta);
  y = amp_y * sin(Number(b.elt.value) * t);

  translate(width / 2, height / 2);
  colorMode(HSB);
  let hue = map(sin(t / 300), -1, 1, 0, 360);

  fill(hue, 100, 100);
  let circle = ellipse(x, y, 50, 50);
  colorMode(RGB);
  t += 0.5;

  a_p.elt.innerHTML = "a: " + a.elt.value;
  b_p.elt.innerHTML = "b: " + b.elt.value;

  drawFunc();
}

function table(div){
  let table = createElement("table");

  let twopi_p= createElement("th");
  let span1 = createElement("span");
  span1.elt.setAttribute("class", "left");
  span1.elt.style = "display: block;"
  span1.elt.value = TWO_PI;
  span1.elt.innerHTML = "2π";

  twopi_p.child(span1);
  twopi_p.elt.value = TWO_PI;
  twopi_p.elt.addEventListener('click', changeDelta);
  table.child(twopi_p);

  let pi_p= createElement("th");
  let span2 = createElement("span");
  span2.elt.setAttribute("class", "left");
  span2.elt.style = "display: block;"
  span2.elt.value = PI;
  span2.elt.innerHTML = "π";

  pi_p.child(span2);
  pi_p.elt.value = PI;
  pi_p.elt.addEventListener('click', changeDelta);
  table.child(pi_p);

  let halfpi_p= createElement("th");
  let span3 = createElement("span");
  span3.elt.style = "display: block;"
  span3.elt.value = HALF_PI;
  span3.elt.innerHTML = "π";

  let span4 = createElement("span");
  span4.elt.style = "display: block; border-top: 1px solid";
  span4.elt.value = HALF_PI;
  span4.elt.innerHTML = "2";

  halfpi_p.child(span3);
  halfpi_p.child(span4);
  halfpi_p.elt.value = HALF_PI;
  halfpi_p.elt.addEventListener('click', changeDelta);
  table.child(halfpi_p);

  let quarterpi_p= createElement("th");
  let span5 = createElement("span");
  span5.elt.style = "display: block;"
  span5.elt.value = QUARTER_PI;
  span5.elt.innerHTML = "π";

  let span6 = createElement("span");
  span6.elt.style = "display: block; border-top: 1px solid";
  span6.elt.value = QUARTER_PI;
  span6.elt.innerHTML = "4";

  quarterpi_p.child(span5);
  quarterpi_p.child(span6);
  quarterpi_p.elt.value = QUARTER_PI;
  quarterpi_p.elt.addEventListener('click', changeDelta);
  table.child(quarterpi_p);

  delta_p = createP("Delta: π");
  div.child(delta_p);
  div.child(table);
}

function changeDelta(e){
  let value = Number(e.srcElement.value)

  if(value > 6){
    delta_p.elt.innerHTML = "Delta: 2π";
  }else if(value > 3){
    delta_p.elt.innerHTML = "Delta: π";
  }else if(value > 1.5){
    delta_p.elt.innerHTML = "Delta: π / 2";
  }else{
    delta_p.elt.innerHTML = "Delta: π / 4";
  }
  delta = value;
  background(51);
}


function drawFunc(){
  let delta_print;
  if(delta > 6){
    delta_print = "2π";
  }else if(delta > 3){
    delta_print = "π";
  }else if(delta > 1.5){
    delta_print = "π / 2";
  }else{
    delta_print = "π / 4";
  }

  draw_x.elt.innerHTML = "x = " + String(amp_x) + " sin(" + String(a.elt.value) + " t + " + delta_print + "),";
  draw_y.elt.innerHTML = "y = " + String(amp_y) + " sin(" + String(b.elt.value) + " t)";


}
