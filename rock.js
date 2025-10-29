let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let ussrscr=document.querySelector("#user-score");
let cmpscr=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    // console.log("Game was draw.");
    msg.innerText="Game was draw,play again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        // console.log("You win");
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        ussrscr.innerText++;
    }else{
        // console.log("You loose");
        msg.innerText=`You loose!  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        cmpscr.innerText++;
    }
};

const playGame=(userChoice)=>{
    // console.log("User choice = ",userChoice);
    //Generte computer choice
    const compChoice=genCompChoice();
    // console.log("computer's choice = ",compChoice);
    
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice==="paper" ? false:true; //if compChoice give paper then user loose and computer wins,if compChoice give scissor then user wins and computer loose
        }else if(userChoice==="paper"){
            userWin=compChoice==="rock" ? false:true;
        }else{
            userWin=compChoice==="paper" ? false:true;
        }
    showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});