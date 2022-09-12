var root2Dom = document.getElementById('root2');

let customDom = document.createElement('div');
let count = 0;



function counter() {
  customDom.innerHTML = `<h1>Counter 1 count: ${++count}</h1>
    <button onclick="counter()" style="color:blue" >Click me</button>`;
}

setInterval(counter, 1000);

root2Dom.appendChild(customDom)
