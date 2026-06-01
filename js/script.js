const questions = [
    {
        image: "images/bern.jpg",
        name: "Бернский зенненхунд",
        options: ["Ньюфаундленд", "Бернский зенненхунд", "Австралийская овчарка", "Золотистый ретривер"]
    },
    {
        image: "images/engtoy.jpg",
        name: "Английский той терьер",
        options: ["Чихуахуа", "Карликовый пинчер", "Английский той терьер", "Русский той"]
    },
    {
        image: "images/dach.jpg",
        name: "Такса",
        options: ["Древер", "Такса", "Бассет-хаунд", "Ягдтерьер"]
    },
    {
        image: "images/serbern.jpg",
        name: "Сенбернар",
        options: ["Сенбернар", "Немецкий дог", "Леонбергер", "Московская сторожевая"]
    },
    {
        image: "images/prazh.jpg",
        name: "Пражский крысарик",
        options: ["Папийон", "Пражский крысарик", "Мальтийская болонка", "Чихуахуа"]
    },
    {
        image: "images/york.jpg",
        name: "Йоркширский терьер",
        options: ["Норвич терьер", "Австралийский шелковистый терьер", "Скай терьер", "Йоркширский терьер"]
    },
    {
        image: "images/bull.jpg",
        name: "Бультерьер",
        options: ["Бультерьер", "Бостонский терьер", "Стаффордширский бультерьер", "Американский питбультерьер"]
    },
    {
        image: "images/chau.jpg",
        name: "Чау-чау",
        options: ["Акита-ину", "Шарпей", "Чау-чау", "Сиба-ину"]
    },
    {
        image: "images/kolli.jpg",
        name: "Колли",
        options: ["Австралийская овчарка", "Колли", "Бордер-колли", "Шелти"]
    },

    {
        image: "images/aphgan.jpg",
        name: "Афганская борзая",
        options: ["Афганская борзая", "Салюки", "Русская псовая борзая", "Серая борзая"]
    }
];
let answered = false;
let currentQuestion = 0;
const dogPhoto = document.getElementById("dogPhoto");
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const nextQuestion = document.getElementById('nextQuestion');
const resultButton = document.getElementById('resultButton');
const startAgain = document.getElementById('startAgain');
const Result = document.getElementById('Result');
const ProgressBar = document.getElementById('progressBar');
const progressBarText = document.getElementById('progressBarText');
let rightAnswers = 0
function showResult(){
    nextQuestion.style.visibility = 'hidden';
    document.getElementById('MainDiv').style.visibility = 'hidden';
    document.getElementById('ResultDiv').style.visibility = 'visible';
    Result.innerText = rightAnswers + ' из 10';

};
function showQuestion(){
    nextQuestion.style.visibility = 'hidden';
    if (currentQuestion <= 9){
        const question = questions[currentQuestion];
        dogPhoto.src = question.image;
        a1.style.backgroundColor = 'beige';
        a2.style.backgroundColor = 'beige';
        a3.style.backgroundColor = 'beige';
        a4.style.backgroundColor = 'beige';
        a1.innerText = question['options'][0];
        a2.innerText = question['options'][1];
        a3.innerText = question['options'][2];
        a4.innerText = question['options'][3];
        answered = false;
    }
};
function updateProgress(){
    ProgressBar.value = (rightAnswers /(currentQuestion+1))*100;
    progressBarText.innerText = Math.ceil((rightAnswers /(currentQuestion+1))*100)+ '%';
};
function checkAnswer(){
    
    if (!answered){
        const answer = this.innerText;
        
        if (answer == questions[currentQuestion].name){
            rightAnswers++;
            this.style.backgroundColor = 'green';
        }else{
            this.style.backgroundColor = 'red';
        }
        nextQuestion.style.visibility = 'visible';
        answered = true;
        updateProgress()
        if (currentQuestion == 9){
            nextQuestion.textContent = 'Показать результат';
        }
        currentQuestion++;
    }


};
function nextOrResult() {
   
    if (nextQuestion.textContent == 'Показать результат') {
        showResult();
    } else {
        showQuestion();
    }
};
function Again(){
    rightAnswers = 0;
    currentQuestion = 0;
    updateProgress()
    document.getElementById('MainDiv').style.visibility = 'visible';
    document.getElementById('ResultDiv').style.visibility = 'hidden';
    nextQuestion.textContent = 'Следующий вопрос';
    
    showQuestion();
};
startAgain.addEventListener('click', Again);
nextQuestion.addEventListener('click', nextOrResult);
a1.addEventListener('click', checkAnswer);
a2.addEventListener('click', checkAnswer);
a3.addEventListener('click', checkAnswer);
a4.addEventListener('click', checkAnswer);
window.addEventListener('load', function() {
    showQuestion();
});