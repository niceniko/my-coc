

const diceButton = document.querySelector("main button");
const talkWindows = document.querySelector(".main__section__talkwindow");


diceButton.addEventListener("click", (e)=>{
    diceButton.setAttribute("class", "light");
    let num;
    num = Math.floor(Math.random()*100);
    const p = document.createElement("p");
    p.textContent = `${num}`;
    talkWindows.appendChild(p);
});
