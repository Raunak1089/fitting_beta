
let music1 = new Audio('https://raunak1089.github.io/Required-files/dip.wav');
let music2 = new Audio('https://raunak1089.github.io/Required-files/dido.wav');
let music3 = new Audio('https://raunak1089.github.io/Required-files/done.wav');
let music4 = new Audio('https://raunak1089.github.io/Required-files/error.wav');

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var done = false;

  // // DEFINE VARIABLES AND FUNCTIONS

let scale = 5;
let ini_scale, ini_dist;
let final, degree;

  let X = [];
  let Y = [];
  let n;
  let redo_list_X = []; let redo_list_Y = [];


  function inc(){
  play_audio('dido.wav');
   document.getElementById('deg').innerHTML -= -1;
   degree = Number(document.getElementById('deg').innerHTML);
   done = false;
   }
  
  function dec(){
  play_audio('dido.wav');
   document.getElementById('deg').innerHTML -= 1;
   degree = Number(document.getElementById('deg').innerHTML);
   done = false;
   }

  
// degree = 5;
degree = Number(document.getElementById('deg').innerHTML);

// X = [29, 32, 43, 31, 30, 32, 33, 43, 55, 61, 44, 32, 21, 47, 39, 49, 34, 40, 35, 38, 30, 33, 40, 37, 21, 34, 35, 31, 43, 44];
// Y = [33, 36, 44, 38, 34, 27, 34, 35, 53, 45, 40, 29, 22, 39, 28, 41, 22, 39, 22, 39, 26, 35, 19, 32, 17, 34, 27, 34, 36, 39];
// X = [-29, -27, -25, -23, -21, -19, -17, -15, -13, -11, -9, -7, -5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]
// Y = [-4, -4, -1, -7, -4, 5, -1, 8, 2, 16, 4, 3, -1, 8, 11, 8, 12, 1, 13, -1, 4, -2, 21, 5, 4, 0, 8, -3, 7, 5];

// X = [1, 9, 22, 28];
// Y = [6, 11, 13, 23];


  ok.addEventListener("click", graduate); 
  canvas.addEventListener("click", plot);
  
  function go() {
  if (done == false) {
  	var inp_point = document.getElementById("inp_point").value;
    let rect = canvas.getBoundingClientRect();
  	points = inp_point.replace(/ /g, '').split(','); 
		X.push(eval(points[0])); Y.push(eval(points[1]));

  draw_point(X[X.length-1], Y[Y.length-1], 3);

  //console.log(X);
  //console.log(Y);
  n = X.length;
  document.title = n + " point(s) plotted";

  }}
  
  function play_audio(link){
  var put = document.createElement('audio');
  put.id = 'firesound';
  put.src = 'https://raunak1089.github.io/Required-files/' + link; 
  document.body.appendChild(put);
  put.play();
  setTimeout(function(){document.getElementById("firesound").remove(); }, 1000);
  }
  
  function plot(event) {
  play_audio('dip.wav');

            let rect = canvas.getBoundingClientRect();
            let selectedx = event.clientX - rect.left;
            let selectedy = event.clientY - rect.top;
	
	let new_x = Math.round((selectedx-originx)/scale);
	let new_y = Math.round((originy-selectedy)/scale);
  X.push(new_x);
  Y.push(new_y);
  redo_list_X = []; redo_list_Y = [];

  
  draw_point(new_x, new_y);

  //console.log(X);
  //console.log(Y);
  n = X.length;
  document.title = n + " point(s) plotted";

  }


	function undo(){
	if (done == false) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
			
    if(X.length>0){
      redo_list_X.push(X[X.length-1]); redo_list_Y.push(Y[Y.length-1]);
			X.pop(); Y.pop();
    }

			for (let i = 0; i < X.length; i++) {
			 	draw_point(X[i], Y[i], 3);
			}
			
                      ctx.putImageData(xax, originx-1, 0);
                      ctx.putImageData(yax, 0, originy-1);

  //console.log(X);
  //console.log(Y);
  n = X.length;
  document.title = n + " point(s) plotted";

	}}


	function redo(){
	if (done == false) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
			
    if(redo_list_X.length>0){
			X.push(redo_list_X[redo_list_X.length-1]); Y.push(redo_list_Y[redo_list_Y.length-1]);
			redo_list_X.pop(); redo_list_Y.pop();
    }

			for (let i = 0; i < X.length; i++) {
			 	draw_point(X[i], Y[i], 3);
			}
			
                      ctx.putImageData(xax, originx-1, 0);
                      ctx.putImageData(yax, 0, originy-1);

  //console.log(X);
  //console.log(Y);
  n = X.length;
  document.title = n + " point(s) plotted";

	}}


function excel() {	

  navigator.clipboard.readText().then((str)=>{
 	
  pairs = str.split('\n'); 
  h = str.split('	');
  for (i=0; i<h.length-1; i++) {
     s = pairs[i].split('	');
     X.push(Number(s[0]));
     Y.push(Number(s[1]));
	}
	
	for (let i = 0; i < X.length; i++) {
	 draw_point(X[i], Y[i]);
}
    });

}


function copyElementContents(el) {
	var body = document.body, range, sel;
	if (document.createRange && window.getSelection) {
		range = document.createRange();
		sel = window.getSelection();
		sel.removeAllRanges();
		try {
			range.selectNodeContents(el);
			sel.addRange(range);
		} catch (e) {
			range.selectNode(el);
			sel.addRange(range);
		}
	} else if (body.createTextRange) {
		range = body.createTextRange();
		range.moveToElementText(el);
		range.select();
	}
	document.execCommand('copy');


function clearSelection() {
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    } else if (document.selection) {
        document.selection.empty();
    }
}
	clearSelection();


}



function inv_exc() {	

let tab = document.createElement('table');
document.body.appendChild(tab); tab.id = 'tab';

  
for (i=0; i < X.length; i++) {
  var row = tab.insertRow(i);
    for (j=0; j < 2; j++) {
      row.insertCell(j);
    }
}

for (i=0; i<X.length; i++){
  tab.rows[i].cells[0].innerHTML = X[i];
  tab.rows[i].cells[1].innerHTML = Y[i];
}

copyElementContents(tab);

let yoyo = document.querySelector('table#tab td');

yoyo.style.cssText = `
  border: 20px solid;
  font-size: 30pt;
  `;

document.body.removeChild(tab);

}


function copyit(x){

  // REDUCE BRIGHTNESS

x.style.filter = "brightness(50%)";

  // WRITE COPIED

let ripple = document.createElement('span');
ripple.innerHTML=x.innerHTML;
ripple.id= "copied";
           x.appendChild(ripple);


  // REMOVE THINGS

setTimeout(function(){
          x.style.filter = "brightness(100%)";
          x.removeChild(ripple);
          }, 500)
}



function clr(){
  X = []; Y = [];
  redo_list_X = []; redo_list_Y = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  originx = canvas.width/5;
  originy = canvas.height*4/5;
  scale = 5;
  draw_axes();
  final = '';
  document.getElementById("results").innerHTML = '';
  ok.addEventListener("click", graduate); 
  canvas.addEventListener("click", plot);
  document.title = "Fit your curve!";
  done = false;
}



  // GRADUATE FORMULA



function graduate() {

//ok.removeEventListener("click", graduate);
canvas.removeEventListener("click", plot);

    n = X.length;
    let effective_X = [];
    for (x in X){
        if (effective_X.includes(X[x]) == false) {
            effective_X.push(X[x])
        }
    }

    let effective_n = effective_X.length;

    if (0 <= degree & degree < effective_n) {

  n = X.length;

           ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < X.length; i++) {
        	 draw_point(X[i], Y[i], 3);
        }
draw_axes();

if (done == false) {play_audio('done.mp3');}

/*
    t = []
    if (n % 2 == 0) {
        for (let i=1-n; i<=n; i+=2){
            t.push(i);
        }
    }
    else{
        for (let i=(1-n)/2; i<=(n-1)/2; i++){
            t.push(i)
        }
    }
*/

t = X;

    t_powers = []
    for  (let i=0; i<=2*degree; i++){
        t_powers.push([])
        for (let j=0; j<n; j++){
            t_powers[t_powers.length-1].push(t[j]**(i))
        }
    }


    yt_prod = []
    for (let i=0; i<=degree; i++){
        yt_prod.push([])
        for (let j=0; j<n; j++){
            yt_prod[yt_prod.length-1].push(Y[j]*(t[j]**i))
        }
    }


    let eq = '';
    all = [];
    for (let i=0; i<=degree; i++){
        eq += `\n\n${sum(yt_prod[i])} = 0 `
        all.push([])
        for (let j=0; j<=degree; j++){
//            if ((i+j) % 2 == 0){
                eq += `+ a${j}*${sum(t_powers[i+j])} `;
                all[all.length-1].push(sum(t_powers[i+j]));
/*            }
            else{
                eq += '+ 0 '
                all[all.length-1].push(0)
            }
*/
        }

        all[all.length-1].push(sum(yt_prod[i]))
    }

//console.log(eq);


let delta, delta_c;

    a = [];
    delta = [];
    for (let i=0; i<=degree; i++){
        for (let j=0; j<=degree; j++){
            delta.push(all[i][j]);
        }
    }


let v = delta.toString();
    
    for (let i=0; i<=degree; i++){
        delta_c = eval(`[${v}]`);
        for (let j=0; j<=degree; j++){
            delta_c[i+(degree+1)*j] = all[j][all[j].length-1]
        }
        a.push(det(delta_c)/det(delta));
        //console.log(`a${i} = ${det(delta_c)/det(delta)}`)
    }
    
    
        final = `${a[0]}`
        for (let i=1; i<=degree; i++){
            final += ` + (${a[i]})*((t)**${i})`
        }
    
     
        //console.log('\n\nGraduated function:\n')
        //console.log(final)


        function funct(num){
           return eval(final.replace(/t/g, num))
        }
        
        
        let pred_Y = [];
        
        			for (let i = 0; i < X.length; i++) {
        			 	pred_Y.push(funct(X[i]));
        			}
        			
        let r2 = Var(pred_Y)/Var(Y);
        
        console.log('r^2 = ', r2)
        
        
        // POLYNOMIAL TO SHOW ____________
        
            show = `y = ${a[0]}`;
            if (degree > 0) { show += ` + (${a[1]} . x)`};
            for (let i=2; i<=degree; i++){
                show += ` + (${a[i]} . x<sup>${i}</sup>)`
            }
        
        document.getElementById("results").innerHTML = 
        "Curve : "+show+"<br><br>r<sub>"+degree+"</sub><sup>2</sup> = "+ (Math.round(r2*(10**8)))/(10**8);
        
        
        errors = [];
        
        			for (let i = 0; i < n; i++) {
        			 	errors.push(Y[i]-pred_Y[i]);
        			}
        

        all_table = [];
        
        all_table.push(X);
        all_table.push(Y);
        all_table.push(errors);
        
        
        
        console.table(transpose_table(all_table));
        
        RSS = []
        for (x in errors) {
          RSS.push(errors[x] ** 2)
        }
        
        console.log("RSS : ", sum(RSS))



// CURVE

ctx.lineWidth= 1;
ctx.strokeStyle='red';

ctx.beginPath();

    ctx.moveTo(0,originy-scale*funct(-originx));

    for (let x = -originx/scale; x <= (canvas.width-originx)/scale; x+=1/scale) {
      ctx.lineTo(scale*x+originx,originy-scale*funct(x));
    }

ctx.stroke();
    }

    else {
           ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < X.length; i++) {
        	 draw_point(X[i], Y[i]);
        }
draw_axes();

        play_audio('error.mp3');
        document.getElementById("results").innerHTML = 
        "Curve doesn't exist";
        
        done = false;
        canvas.addEventListener("click", plot);

    }


  document.title = degree + " degree curve fitted!";
done = true;


}





// MAKING THE GRAPH 

// SET ORIGIN

let originx = canvas.width/5;
let originy = canvas.height*4/5;
let xax, yax;

function home(){
  originx = canvas.width/5;
  originy = canvas.height*4/5;
  scale = 5;
             ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  draw_axes();
}


draw_axes();

function draw_axes(){

// X-AXIS

 xax = ctx.createImageData(2, canvas.height);

for (let i = 0; i < xax.data.length; i += 4) {
  xax.data[i+0] = 0; //Red
  xax.data[i+1] = 0; //Green
  xax.data[i+2] = 0; //Blue
  xax.data[i+3] = 255; //Opacity
}

// Y-AXIS

 yax = ctx.createImageData(canvas.width, 2);

for (let i = 0; i < yax.data.length; i += 4) {
  yax.data[i+0] = 0; //Red
  yax.data[i+1] = 0; //Green
  yax.data[i+2] = 0; //Blue
  yax.data[i+3] = 255; //Opacity
}

           ctx.putImageData(xax, originx-1, 0);
           ctx.putImageData(yax, 0, originy-1);


/*
for (let i = -100; i < 100; i+=scale*2) {
		draw_lines_x(i)
}
*/

}

// MAKE DRAGGING FUNCTION FOR PC

var dragValue, xv_pc, yv_pc;

canvas.onmousedown = function(e) {
  dragValue = ctx;

xv_pc = e.clientX-originx;
yv_pc = e.clientY-originy;

}

canvas.onwheel = function(e) {
  e.preventDefault();
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(scale-(e.deltaY/10)>=0){
    scale -= (e.deltaY/10);
  }

  draw();
  draw_axes();
}


document.onmouseup = function(){
        dragValue = null;
      }

document.onmousemove = function(ev) {
  if (dragValue == ctx) {
                dragValue.clearRect(0, 0, canvas.width, canvas.height);
          
           originx = ev.clientX - xv_pc; 
           originy = ev.clientY - yv_pc;
                      dragValue.putImageData(xax, originx-1, 0);
                      dragValue.putImageData(yax, 0, originy-1);
                      draw();
  }
}

// MAKE DRAGGING FUNCTION FOR ANDROID

let xv_phn, yv_phn;

canvas.ontouchstart = function(ev) {
           var e = ev.targetTouches[0];
           
xv_phn = e.clientX - originx;
yv_phn = e.clientY - originy;


  try{  ini_dist = two_touch_distance(ev, 1, 20);}catch(err){}


disableScroll();
}


canvas.ontouchmove = function(ev) {
           ctx.clearRect(0, 0, canvas.width, canvas.height);

try{
    fin_dist = two_touch_distance(ev, 1, 20);
 		scale = scale*((fin_dist/ini_dist)**0.1);
}catch(err){}

           originx = ev.touches[0].clientX - xv_phn;
           originy = ev.touches[0].clientY - yv_phn;
           
                      ctx.putImageData(xax, originx-1, 0);
                      ctx.putImageData(yax, 0, originy-1);
                      draw();


}

document.ontouchend = function(){
enableScroll();
}


// DRAWING THE CURVE AND POINTS

draw();

function draw_point(x, y, prec=3) {
	 ctx.lineWidth = 5;
	 ctx.strokeStyle = 'blue'; 
   ctx.beginPath();
   ctx.arc(scale*x+originx, originy-scale*y, 2, 0, 2 * Math.PI);
   ctx.stroke();

   ctx.font = "20px Arial";
   let j = 10**prec;
   var pt = `(${Math.round(x*j)/j}, ${Math.round(y*j)/j})`;
   ctx.fillText(pt,scale*x+originx+10,originy-scale*y+20);

}

/*
function draw_lines_x(x) {
	 ctx.lineWidth = 2;
	 ctx.strokeStyle = 'red'; 
   ctx.beginPath();
   ctx.arc(scale*x+originx, 0, 1, 0, 2 * Math.PI);
   ctx.stroke();

   ctx.font = "20px Arial";
   var pt = x;
   ctx.fillText(pt,scale*x+originx,30);

}
*/

function draw(){

  if (done == true){

    function funct(num){
      return eval(final.replace(/t/g, num))
    }

      // CURVE

    ctx.lineWidth= 1;
    ctx.strokeStyle='red';

    ctx.beginPath();

    ctx.moveTo(0,originy-scale*funct(-originx));

    for (let x = -originx/scale; x <= (canvas.width-(originx))/scale; x+=1/scale) {
      ctx.lineTo(scale*x+originx,originy-scale*funct(x));
    }

    ctx.stroke();

  }


// POINTS

for (let i = 0; i < X.length; i++) {
	 draw_point(X[i], Y[i]);
}





}





