var root2Dom = document.getElementById('root2');

let customDom = document.createElement('div');
let count = 0;

customDom.innerHTML = `<h1 id='counterJS'>Counter 1 count: ${++count}</h1>
<button onclick="counter()" style="color:blue" >Click me</button>`;
root2Dom.appendChild(customDom)


counterDom = document.getElementById('counterJS')
function counter() {
  counterDom.innerHTML = count++;
}

setInterval(counter, 1000);