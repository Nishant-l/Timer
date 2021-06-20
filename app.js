// Data
let counter=66;
// Cashing DOM
const display=document.querySelector('#display');
const startButton=document.querySelector('#start');
const stopButton=document.querySelector('#stop');
const resetButton=document.querySelector('#reset');
const hourDisplay=document.querySelector('#hours');
const minutesDisplay=document.querySelector('#minutes');
const secDisplay=document.querySelector('#sec');
// Adding Listners
startButton.addEventListener('click',()=>{});
stopButton.addEventListener('click',()=>{});
resetButton.addEventListener('click',()=>{});
// Initializers
render();

// Functions
function render(){
    let h=Math.floor(counter/(60*60));
    let m=Math.floor((counter-(h*60*60))/60);
    let s=Math.floor((counter-(h*60*60)-(m*60))%60);
    hourDisplay.textContent=h;
    minutesDisplay.textContent=m;
    secDisplay.textContent=s;
}

console.log('--------------');