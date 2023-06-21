
let music1 = new Audio('https://raunak1089.github.io/Required-files/dip.wav');
let music2 = new Audio('https://raunak1089.github.io/Required-files/dido.wav');
let music3 = new Audio('https://raunak1089.github.io/Required-files/done.mp3');
let music4 = new Audio('https://raunak1089.github.io/Required-files/error.mp3');

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

// X = [12, 13, 14.000000000000002, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28.000000000000004, 28.999999999999996, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
// Y = [553, 672, 913, 995, 1172, 1341, 1453, 1633, 1753, 1933, 2019, 2193, 2369, 2532, 2713, 2832, 3013, 3079, 3251, 3429, 3553, 3733, 3853, 4032, 4213, 4309, 4487, 4632, 4813, 4933, 5113, 5293, 5364, 5535, 5652, 5833, 6012, 6132, 6312, 6425, 6613, 6792, 9287, 9328, 9508, 9748, 10186, 10420, 10588, 10888, 11068, 11308, 11668, 11815, 12113, 12328, 12628, 12868, 13592, 13708, 14062, 14308, 14728, 15088, 15328, 15688, 15924, 16305, 16588, 17068, 17608, 18028, 18487];


// X = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
// Y = [73, 39, 1, 87, 59, 51, 60, 10, 54, 24, 13, 49, 81, 35, 19, 100, 40, 49, 35, 84, 82, 5, 89, 99, 89, 33, 12, 48, 71, 5, 53, 34, 48, 49, 17, 6, 51, 61, 9, 49, 94, 91, 43, 93, 59, 3, 63, 11, 98, 79];
// Y = [17903, 6397, 3285, 3, 4, 14782, 1, 20154, 3, 17, 4595, 101, 3751, 42, 4, 11795, 14, 2, 42, 7203, 258, 1447, 417, 8076, 32, 78, 12165, 21, 6, 253, 61, 103, 20, 601, 123, 11, 16, 11144, 158, 19, 2277, 41, 2677, 595, 60, 220, 684, 371, 726, 25, 105, 2, 3362, 7680, 210, 262, 27, 257, 8, 653, 35, 938, 107, 425, 21184, 71, 6599, 125, 1, 7008, 13, 1, 524, 23, 27, 1, 6, 22, 86, 5002, 5703, 1, 12, 2314, 19015, 9, 1157, 1, 1454, 406, 37, 10479, 28, 1, 4964, 77, 8542, 1789, 11817, 2];

function count(arr, l, u){
val=0;
for (x of arr){
if (x>=l && x<u){
val++
}
}
return val;
}

/*
for (i=0;i<100;i++){
console.log(`${i*100} - ${i*100+100} : ${count(Y,i*100,i*100+100)}`);
}
*/

  ok.addEventListener("click", graduate); 
  canvas.addEventListener("click", plot);
  
  function go() {
  if (done == false) {
  	var inp_point = document.getElementById("inp_point").value;
    let rect = canvas.getBoundingClientRect();
  	points = inp_point.replace(/ /g, '').split(','); 
		X.push(eval(points[0])); Y.push(eval(points[1]));

  draw_point(X[X.length-1], Y[Y.length-1], 3);

  document.getElementById("inp_point").value = "";

//console.log(X);
  //console.log(Y);
  n = X.length;
  }}
  
  function play_audio(link){
  var put = document.createElement('audio');
  put.id = 'firesound';
  put.src = 'https://raunak1089.github.io/Required-files/' + link; 
  document.body.appendChild(put);
  put.play();
  setTimeout(function(){document.getElementById("firesound").remove(); }, 1000);
  }
  
  let dragged;
  function plot(event) {
    if (!dragged){
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
  }
  }


	function undo(){
	if (done == false) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
			
    if(X.length>0){
      redo_list_X.push(X[X.length-1]); redo_list_Y.push(Y[Y.length-1]);
			X.pop(); Y.pop();
    }

			for (i in X) {
			 	draw_point(X[i], Y[i], 3);
			}
			
                      ctx.putImageData(xax, originx-1, 0);
                      ctx.putImageData(yax, 0, originy-1);

  //console.log(X);
  //console.log(Y);
  n = X.length;
	}}


	function redo(){
	if (done == false) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
			
    if(redo_list_X.length>0){
			X.push(redo_list_X[redo_list_X.length-1]); Y.push(redo_list_Y[redo_list_Y.length-1]);
			redo_list_X.pop(); redo_list_Y.pop();
    }

			for (i in X) {
			 	draw_point(X[i], Y[i], 3);
			}
			
                      ctx.putImageData(xax, originx-1, 0);
                      ctx.putImageData(yax, 0, originy-1);

  //console.log(X);
  //console.log(Y);
  n = X.length;
	}}


function excel() {	

  navigator.clipboard.readText().then((str)=>{
 	
    pairs = str.split('\r\n');
    for (i of pairs) {
      s = i.split('\t');
      X.push(Number(s[0]));
      Y.push(Number(s[1]));
    }
    X.pop();Y.pop();
    for (i in X) {
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
  done = false;
  document.title="Fit your curve!";
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
        for (i in X) {
        	 draw_point(X[i], Y[i], 3);
        }
draw_axes();

if (done == false) {play_audio('done.mp3'); document.title="Curve fitted!"}

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
        
        			for (i in X) {
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
        for (x of errors) {
          RSS.push(x ** 2)
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
        for (i in X) {
        	 draw_point(X[i], Y[i]);
        }
draw_axes();

        play_audio('error.mp3');
        document.getElementById("results").innerHTML = 
        "Curve doesn't exist";
        
        done = false;
        canvas.addEventListener("click", plot);

    }

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
dragged = false;
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

      if((ev.clientX - xv_pc)*(ev.clientY - yv_pc)!=0){dragged=true}
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
  dragged=false;
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

   document.title=`${X.length} points plotted!`;

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

for (i in X) {
	 draw_point(X[i], Y[i]);
}





}





