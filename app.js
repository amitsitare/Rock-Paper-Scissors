let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let useScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");


const drawMatch=()=>{
    msg.innerText="Match Draw";
    msg.style.backgroundColor=" #081b31"
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        useScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    
    // Generate the computer choice;
    const compChoice=genCopmChoice();
    if(userChoice==compChoice){
        drawMatch();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            // scissors,paper
            userWin=compChoice=="Paper" ? false : true;
        } else if(userChoice=="Paper"){
                // scissors,rock
                userWin=compChoice=="Scissors" ? false : true;
            }else{
                //rock,paper;
                userWin=compChoice=="rock" ? false:true;
            }
            showWinner(userWin,userChoice,compChoice);
    }
}
const genCopmChoice=()=>{
    const options=["rock","Paper","Scissors"];
    const randInt=Math.floor(Math.random()*3);
    return options[randInt];
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})