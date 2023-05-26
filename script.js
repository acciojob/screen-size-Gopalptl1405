//your JS code here. If required.
// const sizeElement = document.createElement("h1");
// sizeElement.innerText = `Width: ${window.innerwidth} and Height: ${window.innerheight}`;
// document.body.append(sizeElement);

// window.onresize = function () {
// 	sizeElement.innerText = `Width: ${window.innerwidth} and Height: ${window.innerheight}`;
	
// }
// let div=document.createElement('div');
// div.id="sizeInfo";
// let h1=document.createElement('h1');
// h1.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

// // console.log(h1.innerText);
// document.body.append(div);
// div.append(h1);


// window.onresize=function(){
//     h1.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
// };
let div = document.createElement("div");
div.id= "sizeInfo";
let h1 = document.createElement("h1");
h1.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;

document.body.append(div);
div.append(h1);

window.onresize = function(){
 h1.innerText = `Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
};
