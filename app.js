// Data
let counter=0;
let retunedEventFromStart;
// Cashing DOM
const display=document.querySelector('#display');
const startButton=document.querySelector('#start');
const stopButton=document.querySelector('#stop');
const resetButton=document.querySelector('#reset');
const hourDisplay=document.querySelector('#hours');
const minutesDisplay=document.querySelector('#minutes');
const secDisplay=document.querySelector('#sec');
// Adding Listners
startButton.addEventListener('click',inc);
stopButton.addEventListener('click',stop);
resetButton.addEventListener('click',reset);
// Initializers
render();

// Functions
function render(){
    let h=Math.floor(counter/(60*60));
    let m=Math.floor((counter-(h*60*60))/60);
    let s=Math.floor((counter-(h*60*60)-(m*60))%60);
    obj=butify(h,m,s);
    console.log(obj);
    h=obj.H;
    m=obj.M;
    s=obj.S;
    console.log(h,m,s);
    hourDisplay.textContent=h;
    minutesDisplay.textContent=m;
    secDisplay.textContent=s;
}

    // callback on start button Click
function inc(){
    retunedEventFromStart=setInterval(()=>{
        counter+=1;
        render();
    },100);
}
    // callback on stop button Click
function stop(){
    clearInterval(retunedEventFromStart);
}
    // callback on reset button Click
function reset(){
    stop();
    counter=0;
    render();
}
    // function to append 0 in front of single digit noumber
function butify(h,m,s){
    let H=h;
    let M=m;
    let S=s;
    if(Math.floor(h/10)===0){
        H=`0${h}`;
    }
    if(Math.floor(m/10)===0){
        M=`0${m}`;
    }
    if(Math.floor(s/10)===0){
        S=`0${s}`;
    }
    // console.log(H,M,S);
    return {H,M,S} ;
} 