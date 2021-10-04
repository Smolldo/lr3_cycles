
const calculate = () =>{
    //y = ( sinx^2x + 0.5)^0.5; інтервал : відрізок [0,0.2], крок 0.025.
    for(let x = 0; x < 0.2; x+= 0.025){
        let y  = Math.pow(Math.pow(Math.sin(x),2 *x) + 0.5, 0.5);
         let list = document.querySelector('.step_list');
        let item = document.createElement("li");
        item.textContent = y.toFixed(2);
        list.appendChild(item);
    } 

    var x = 0;
    do{
        x+=0.025;
        let y  = Math.pow(Math.pow(Math.sin(x),2 *x) + 0.5, 0.5);
        let list2 = document.querySelector('.doWhile');
        let item2 = document.createElement("li");
        item2.textContent = y.toFixed(2);
        list2.appendChild(item2)
    }
        while( x >= 0 && x < 0.2)

    var x = 0;
    while ( x < 0.2) {
        x += 0.025;
        let y  = Math.pow(Math.pow(Math.sin(x),2 *x) + 0.5, 0.5);
        let list3 = document.querySelector('.whileC');
        let item3 = document.createElement("li");
        item3.textContent = y.toFixed(2);
        list3.appendChild(item3);
    }
}
//canvas
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
let z = 90;
let y = x =>Math.pow(Math.pow(Math.sin(x),2 *x) + 0.5, 0.5);;
ctx.beginPath();
for (let i = 0; i <= 0.2; i += 0.025) {
     
  ctx[i?'lineTo':'moveTo'](i*z, y(i)*z);
}
ctx.stroke();
