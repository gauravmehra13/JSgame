let a = Math.random() *20 + 1;
let num = Number.parseInt(a);
console.log(num);

let score = 20;
let highscore = 0;

let parent= document.getElementsByClassName('txt2')[0];
let test = document.getElementById('test');
test.innerHTML=`<h3>Start guessing...</h3>
<br>
<h3>💯 Score: ${score}</h3>
<h3>⚡ Highscore: ${highscore}</h3>`

parent.append(test);
// console.log("score = " + score );

let check = document.getElementById('check');
let guess = document.getElementById('guess');
let again = document.getElementById('again');
let answer = document.getElementsByClassName('txt4')[1];

check.addEventListener('click', (e)=>{
    let value = guess.value;
    if(value>num && value<=20){
        answer.innerHTML = `TOO LARGE`;
        let newScore = score - 1;
        score = newScore;
        // console.log("score = " + score );
        test.innerHTML=`<h3>Start guessing...</h3>
        <br>
        <h3>💯 Score: ${score}</h3>
        <h3>⚡ Highscore: ${highscore}</h3>`
    }
    else if(value<num && value>0){
        answer.innerHTML = `TOO SMALL`;
        // `${score} -= 1`;
        let newScore = score - 1;
        score = newScore;
        // console.log("score = " + score );
        test.innerHTML=`<h3>Start guessing...</h3>
        <br>
        <h3>💯 Score: ${score}</h3>
        <h3>⚡ Highscore: ${highscore}</h3>`
    }
    else{
        answer.innerHTML = `Your guess is correct!!`;
        answer.style.color = 'green';
        // answer.style.display = 'inline';
        highscore = score;
        test.innerHTML=`<h3>Start guessing...</h3>
        <br>
        <h3>💯 Score: ${score}</h3>
        <h3>⚡ Highscore: ${highscore}</h3>`
    }
})

again.addEventListener('click', ()=>{
    guess.value = "";
    answer.innerHTML = ``;
    // score -= 1;
})