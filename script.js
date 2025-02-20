const countDown=document.getElementById("countDown");
const resetValues=document.querySelector(".resetValues");
let StartCount=0;
let intervalID;
const startTimer=()=>{
     intervalID=setInterval(()=>{countDown.innerText=StartCount++;},1000);
    
};

const stopTimer=()=>{
    getTimer();
    clearInterval(intervalID);

};

const resetTimer=()=>{
    StartCount=0;
    countDown.innerText=StartCount;
    clearInterval(intervalID);

};

const getTimer=()=>{
    const newPara=document.createElement("p");
    newPara.innerText=`The stop time is ${StartCount-1}`;
    resetValues.append(newPara);
};

const clearTimer=()=>{
    resetValues.innerHTML="";
};

document.querySelector(".sbtn").addEventListener("click",startTimer);
document.querySelector(".rbtn").addEventListener("click",resetTimer);
document.querySelector(".stbtn").addEventListener("click",stopTimer);
document.querySelector(".gbtn").addEventListener("click",getTimer);
document.querySelector(".cbtn").addEventListener("click",clearTimer);