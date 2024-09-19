const questions = [
    {
        "que": "What is Markup Language?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "PHP",
        "correctOpt": "a"
    },
    {
        "que": "Who is father of JavaScript?",
        "a": "Hakon Wium Lie",
        "b": "Tim Berners-Lee",
        "c": "Brendan Eich",
        "d": "Jordan Walke",
        "correctOpt": "c"
    },{
        "que": "What is React js?",
        "a": "JS Library",
        "b": "JS Framework",
        "c": "JS and Java Framework",
        "d": "JS and Java Library",
        "correctOpt": "a"
    }
]

let index = 0;
let correct = 0,
    incorrect = 0;

const totalQuestion = questions.length

const question = document.getElementById('question');
const options = document.querySelectorAll('.options');
const quesbox = document.querySelector(".container");

const reset = () => {
    options.forEach((opt)=>{
        opt.checked = false;
    })
}

const showQuestion = () => {
    if(index == totalQuestion){
       return showResult();
    }
    reset();
    question.innerText = `${index+1}) ${questions[index].que}`
    options[0].nextElementSibling.innerText = questions[index].a 
    options[1].nextElementSibling.innerText = questions[index].b
    options[2].nextElementSibling.innerText = questions[index].c 
    options[3].nextElementSibling.innerText = questions[index].d 
}

//initial execution
showQuestion();


const showResult = () => {
quesbox.innerHTML = `<div class="col">
            <h3 class="w-100"> Hii, you've scored ${correct} / ${totalQuestion} </h3>
        </div>`

}

const getAnswer = () => {
    let ans;
    options.forEach((opt)=>{
        if(opt.checked){
            ans = opt.value;
        }
    })
    return ans;
}



const btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    const data = questions[index];
    const ans = getAnswer();

    if(ans == data.correctOpt){
        correct++;
    }
    else{
        incorrect++;
    }
    console.log(`you select ${ans} and answer is ${data.correctOpt}`);
    
    index++;
    showQuestion();
});


