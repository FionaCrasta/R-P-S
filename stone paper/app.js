let user=0;
let computer=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorep= document.querySelector("#user-score");
const compScorep= document.querySelector("#computer-score");

const gencomputer=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const draw=()=>{
    msg.innerText="Game was Draw! Play Again";
        msg.style.backgroundColor="skyblue"
};

const showWinner=(userwin, userchoice, compchoice) => {
    if(userwin){
        user++;
        userScorep.innerText=user;
        msg.innerText=`Win Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"
    }else{
        computer++;
        compScorep.innerText=computer;
        console.log("You Lose");
        msg.innerText=`Lose Your ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red"
    }
};

const playgame=(userchoice)=>{
    //user choice
//computer choice
    const compchoice=gencomputer();

    if(userchoice === compchoice){
        draw();
    } else{
        let userwin=true;
        if(userchoice === "rock"){
            userwin= compchoice === "paper" ? false:true;
        }
        else if(userchoice === "paper"){
            userwin= compchoice === "scissors" ? false:true;
        }
        else{
            userwin=compchoice ==="rock" ? false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};

choices.forEach(choice => {
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
    
});