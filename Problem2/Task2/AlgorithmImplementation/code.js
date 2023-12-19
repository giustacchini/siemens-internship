const QUESTIONS = [
    {
        id: 0,
        question: "What is the capital of France?",
        answers: ["Paris", "Berlin", "Rome", "Madrid"],
        solutions: [true, false, false, false]
    },
    {
        id: 1,
        question: "Solve the equation: 3x + 5 = 20",
        answers: ["5", "3", "4", "7"],
        solutions: [true, false, false, false]
    },
    {
        id: 2,
        question: "Who wrote Romeo and Juliet?",
        answers: ["Shakespeare", "Dickens", "Austen", "Twain"],
        solutions: [true, false, false, false]
    },
    {
        id: 3,
        question: "What is the chemical symbol for gold?",
        answers: ["Au", "Ag", "Fe", "Hg"],
        solutions: [true, false, false, false]
    },
    {
        id: 4,
        question: "In what year did World War II end?",
        answers: ["1945", "1918", "1939", "1941"],
        solutions: [true, false, false, false]
    },
    {
        id: 5,
        question: "What is the formula for the area of a circle?",
        answers: ["pi*r^2", "2*pi*r", "12*pi*r^2", "2*pi*r^2"],
        solutions: [true, false, false, false]
    },
    {
        id: 6,
        question: "Who discovered penicillin?",
        answers: ["Fleming", "Einstein", "Newton", "Curie"],
        solutions: [true, false, false, false]
    },
    {
        id: 7,
        question: "What is the largest planet in our solar system?",
        answers: ["Jupiter", "Saturn", "Mars", "Venus"],
        solutions: [true, false, false, false]
    },
    {
        id: 8,
        question: "Solve: 2^2 + 3 x 4 - 1",
        answers: ["13", "14", "15", "16"],
        solutions: [false, false, true, false]
    },
    {
        id: 9,
        question: "Who painted the Mona Lisa?",
        answers: ["Da Vinci", "Van Gogh", "Picasso", "Rembrandt"],
        solutions: [true, false, false, false]
    },
    {
        id: 10,
        question: "What is the square root of 64?",
        answers: ["8", "6", "10", "12"],
        solutions: [true, false, false, false]
    },
    {
        id: 11,
        question: "In what year did Christopher Columbus sail to the Americas?",
        answers: ["1492", "1620", "1776", "1812"],
        solutions: [true, false, false, false]
    },
    {
        id: 12,
        question: "What is the capital of Japan?",
        answers: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        solutions: [true, false, false, false]
    },
    {
        id: 13,
        question: "How many continents are there?",
        answers: ["7", "5", "6", "8"],
        solutions: [true, false, false, false]
    },
    {
        id: 14,
        question: "What is the speed of light?",
        answers: ["299792 km/s", "150000 km/s", "200000 km/s", "250000 km/s"],
        solutions: [true, false, false, false]
    },
    {
        id: 15,
        question: "Who wrote To Kill a Mockingbird?",
        answers: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        solutions: [true, false, false, false]
    },
    {
        id: 16,
        question: "What is the formula for water?",
        answers: ["H2O", "CO2", "O2", "CH4"],
        solutions: [true, false, false, false]
    },
    {
        id: 17,
        question: "What is the capital of Brazil?",
        answers: ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Buenos Aires"],
        solutions: [true, false, false, false]
    },
    {
        id: 18,
        question: "Solve: 4x - 7 = 17",
        answers: ["6", "5", "4", "3"],
        solutions: [true, false, false, false]
    },
    {
        id: 19,
        question: "Who is known as the Father of Physics?",
        answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        solutions: [false, true, false, false]
    },
    {
        id: 20,
        question: "What is the currency of Australia?",
        answers: ["Australian Dollar", "Euro", "Yen", "Peso"],
        solutions: [true, false, false, false]
    },
    {
        id: 21,
        question: "What is the largest ocean on Earth?",
        answers: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        solutions: [true, false, false, false]
    },
    {
        id: 22,
        question: "Who discovered the theory of relativity?",
        answers: ["Albert Einstein", "Isaac Newton", "Stephen Hawking", "Galileo Galilei"],
        solutions: [true, false, false, false]
    },
    {
        id: 23,
        question: "What is the largest mammal on Earth?",
        answers: ["Blue Whale", "Elephant", "Giraffe", "Rhinoceros"],
        solutions: [true, false, false, false]
    },
    {
        id: 24,
        question: "Who wrote 1984?",
        answers: ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "F. Scott Fitzgerald"],
        solutions: [true, false, false, false]
    },
    {
        id: 25,
        question: "What is the square of 9?",
        answers: ["81", "64", "100", "121"],
        solutions: [true, false, false, false]
    },
    {
        id: 26,
        question: "Who was the first President of the United States?",
        answers: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
        solutions: [true, false, false, false]
    },
    {
        id: 27,
        question: "What is the smallest prime number?",
        answers: ["2", "1", "3", "5"],
        solutions: [true, false, false, false]
    },
    {
        id: 28,
        question: "Who painted Starry Night?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Claude Monet", "Leonardo da Vinci"],
        solutions: [true, false, false, false]
    },
    {
        id: 29,
        question: "What is the boiling point of water in Celsius?",
        answers: ["100C", "0C", "50C", "200C"],
        solutions: [true, false, false, false]
    },
    {
        id: 30,
        question: "What is the capital of Canada?",
        answers: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
        solutions: [true, false, false, false]
    },
    {
        id: 31,
        question: "Who is the author of The Great Gatsby?",
        answers: ["F. Scott Fitzgerald", "Ernest Hemingway", "J.K. Rowling", "Harper Lee"],
        solutions: [true, false, false, false]
    },
    {
        id: 32,
        question: "What is the powerhouse of the cell?",
        answers: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic Reticulum"],
        solutions: [true, false, false, false]
    },
    {
        id: 33,
        question: "In which year did the Titanic sink?",
        answers: ["1912", "1901", "1923", "1936"],
        solutions: [true, false, false, false]
    },
    {
        id: 34, 
        question: "In which country can you find the tallest structure in the European Union?", 
        answers: ["Romania", "Germany", "Latvia", "Slovenia"], 
        solutions: [false, false, true, false]
    },
    {
        id: 35,
        question: "Who was the first woman to win a Nobel Prize?",
        answers: ["Marie Curie", "Amelia Earhart", "Jane Goodall", "Rosa Parks"],
        solutions: [true, false, false, false]
    },
    {
        id: 36,
        question: "What is the capital of China?",
        answers: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
        solutions: [true, false, false, false]
    },
    {
        id: 37,
        question: "Solve: 2x + 8 = 16",
        answers: ["4", "3", "2", "1"],
        solutions: [true, false, false, false]
    },
    {
        id: 38,
        question: "Who invented the telephone?",
        answers: ["Alexander Graham Bell", "Thomas Edison", "Guglielmo Marconi", "James Clerk Maxwell"],
        solutions: [true, false, false, false]
    },
    {
        id: 39,
        question: "What is the largest organ in the human body?",
        answers: ["Skin", "Heart", "Brain", "Liver"],
        solutions: [true, false, false, false]
    },
    {   id: 40, 
        question: "Which of these countries belongs to the European Union?", 
        answers: ["Russia", "Moldova", "Serbia", "Slovenia"], 
        solutions: [false, false, false, true]
    },
    {
        id: 41,
        question: "What is the currency of Japan?",
        answers: ["Yen", "Euro", "Dollar", "Pound"],
        solutions: [true, false, false, false]
    },
    {
        id: 42,
        question: "Who was the first woman in space?",
        answers: ["Valentina Tereshkova", "Sally Ride", "Yuri Gagarin", "Amelia Earhart"],
        solutions: [true, false, false, false]
    },
    {
        id: 43,
        question: "What is the capital of Australia?",
        answers: ["Canberra", "Sydney", "Melbourne", "Brisbane"],
        solutions: [true, false, false, false]
    },
    {
        id: 44,
        question: "Solve: 3^2 - 4 x 2",
        answers: ["1", "5", "6", "7"],
        solutions: [true, false, false, false]
    },
    {
        id: 45,
        question: "Who wrote Pride and Prejudice?",
        answers: ["Jane Austen", "Charles Dickens", "Emily Bronte", "Charlotte Bronte"],
        solutions: [true, false, false, false]
    },
    {
        id: 46,
        question: "What is the chemical symbol for oxygen?",
        answers: ["O2", "H2O", "CO2", "N2"],
        solutions: [true, false, false, false]
    },
    {
        id: 47,
        question: "In what year did the Declaration of Independence happen?",
        answers: ["1776", "1789", "1801", "1812"],
        solutions: [true, false, false, false]
    },
    {
        id: 48,
        question: "What is the speed of sound in air?",
        answers: ["343 meters per second", "300 meters per second", "400 meters per second", "500 meters per second"],
        solutions: [true, false, false, false]
    },
    {
        id: 49,
        question: "Who discovered the laws of motion?",
        answers: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Johannes Kepler"],
        solutions: [true, false, false, false]
    }
]


// in this section all the global components are declared
let totalScore = 0;
let achievedScore = 0;
let currentIndex = 0;
let currentQuestion = 0;
let sortedAnswers = [];
let sortedAnswerSolutions = [];
let questionsAnsweredCorrectly = [];
let availableQuestions = [];
let questionNumber = 0;
let selectedAnswers = [];
let selectedAnswersNumber = 0;

function showScoreTab() {
    document.getElementById("score").style.display = "flex";
    document.getElementById("quiz").style.display = "none";

}

function showQuizTab() {
    document.getElementById("score").style.display = "none";
    document.getElementById("quiz").style.display = "flex";

}

function showSubmitAnswerButton() {
    document.getElementById("submitAnswerButton").style.display = "block";
    document.getElementById("nextQuestionButton").style.display = "none";
}

function showNextQuestionButton() {
    document.getElementById("submitAnswerButton").style.display = "none";
    document.getElementById("nextQuestionButton").style.display = "block";
}

// this function is used to reset all the components that are needed
// to make all the questions available again at their default value 
// and start the game from the beginning
function resetQuestions() {
    totalScore = 0;
    currentIndex = 0;
    currentQuestion = 0;
    sortedAnswers = [];
    sortedAnswerSolutions = [];
    questionsAnsweredCorrectly = [];

    availableQuestions = [];

    // the availableQuestions array will get at first all the positions in the QUESTIONS array
    for (let i = 0; i < QUESTIONS.length; i++)
        availableQuestions[i] = i;
    
    questionNumber = Math.floor(Math.random() * availableQuestions.length);

    resetAnswerState();
    showQuizTab();
}

// this function will display the random question and its options
function displayQuestion() {
    let trueAnswers = 0;
    for (let i = 0; i < 4; i++) {
        let involvedLabel = "answerlabel" + (i + 1);
        let involvedInput = "answer" + (i + 1);
        
        // no option will be checked at the beginning
        document.getElementById(involvedInput).checked = false;

        // the answers will appear in a random order
        document.getElementById(involvedLabel).innerHTML = sortedAnswers[i];
        if (sortedAnswerSolutions[i] === true)
            trueAnswers++;
    }

    // if there are more solutions, the user will be able to check multiple options
    if (trueAnswers === 1)
        for (let i = 0; i < 4; i++) {
            let involvedInput = "answer" + (i + 1);
            document.getElementById(involvedInput).type = "radio";
        }
    else
        for (let i = 0; i < 4; i++) {
            let involvedInput = "answer" + (i + 1);
            document.getElementById(involvedInput).type = "checkbox";
        }
}

// this function is used to receive input from the user
function receiveUserInput() {
    selectedAnswers = [false, false, false, false];
    let totalInvolvedOptions = 0;
    let correctOptions = 0;

    for (let i = 0; i < 4; i++) {
        let involvedAnswer = "answer" + (i + 1);
        if (document.getElementById(involvedAnswer).checked) {
            selectedAnswers[i] = true;
            selectedAnswersNumber++;
        }

        // if the selected answers correspond to the solution, both the number of correct options and involved options will increase
        // otherwise if there is a selected answer which does not correspond to the solution, only the number of involved options
        // will increase
        // the involved options can be: selected answers which correspond to the solution, selected answers which do not
        // correspond to the solution, and not selected answers which correspond to the solution
        if (selectedAnswers[i] !== sortedAnswerSolutions[i])
            totalInvolvedOptions++;
        else if (selectedAnswers[i] !== false) {
            totalInvolvedOptions++;
            correctOptions++;
        }

        // the achieved score for this question will be calculated so that it will take a value between 0 and 1
        // and is the ratio between correct options and involved options
        achievedScore = correctOptions / totalInvolvedOptions;
    }

    // if all the selected options are correct, the question will be added to the array of correctly answered questions
    if (achievedScore === 1)
        questionsAnsweredCorrectly.push(QUESTIONS[currentIndex].id);
}

// this function is used to show the correct answer and to calculate the score
function verifyAndShowCorrectAnswer() {

    // the score achieved after answering this question is added to the accumulated value of scores achieved while
    // answering to the previous questions
    totalScore += achievedScore;

    for (let i = 0; i < 4; i++) {
        let involvedAnswer = "answer" + (i + 1);
        let involvedAnswerLabel = "answerlabel" + (i + 1);

        // each option is disabled to prevent the user from selecting any other option after submitting the answer
        document.getElementById(involvedAnswer).disabled = true;

        // the correct options will be highlighted in green, and the wrong ones in red
        if (sortedAnswerSolutions[i] === true)
            document.getElementById(involvedAnswerLabel).style.backgroundColor = "#5CD258";
        else if (selectedAnswers[i] === true)
            document.getElementById(involvedAnswerLabel).style.backgroundColor = "#D21B1B";

        // after the "Submit" button has been pressed, the "Next" button will appear instead to make the user
        // go to the next question
        showNextQuestionButton();

    }
}

// this function is used to display the "Submit" button instead of the "Next" one and enable all the options again
function resetAnswerState() {
    for (let i = 0; i < 4; i++) {
        let involvedAnswer = "answer" + (i + 1);
        let involvedAnswerLabel = "answerlabel" + (i + 1);
        document.getElementById(involvedAnswer).disabled = false;
        document.getElementById(involvedAnswerLabel).style.backgroundColor = "";
        showSubmitAnswerButton();
    }
}

// this is the function used to show the quiz score
function showQuizScore() {
    showScoreTab();

    // the accumulated scores achieved while responding to all the questions will appear under percentage form
    document.getElementById("scorePercentage").innerHTML = totalScore / QUESTIONS.length * 100 + "%,";

    // the number of correctly answered questions will also appear
    document.getElementById("number").innerHTML = "which means "
        + questionsAnsweredCorrectly.length
        + " questions answered correctly out of "
        + QUESTIONS.length
        + ".";

}

// this is the function used to generate a random question
function generateQuestion(index) {

    // this counter is used to inform the user about how many questions have been answered so far
    currentQuestion++;
    document.getElementById("question_number").innerHTML = "Question " + currentQuestion + " out of " + QUESTIONS.length;

    // this index is used to track the selected position in the QUESTIONS array 
    currentIndex = availableQuestions[index];
    document.getElementById("question").innerHTML = QUESTIONS[currentIndex].question;

    // these variables are declared so that the options of a question will appear in a random order 
    // every time the question will be appearing
    let answersToSort = [];
    let solutionsToSort = [];
    for (let i = 0; i < 4; i++) {
        answersToSort[i] = QUESTIONS[currentIndex].answers[i];
        solutionsToSort[i] = QUESTIONS[currentIndex].solutions[i];
    }
    for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * answersToSort.length);
        sortedAnswers[i] = answersToSort[randomIndex];
        sortedAnswerSolutions[i] = solutionsToSort[randomIndex];
        answersToSort = answersToSort.filter((answer) => answer !== answersToSort[randomIndex]);
        solutionsToSort = solutionsToSort.filter((solution, i) => solution[i] === solution[i] && i !== randomIndex);

    }

    // the used position will be eliminated from the availableQuestions array so that the question won't appear once again
    // until the quiz will be finished
    availableQuestions = availableQuestions.filter((question) => question !== currentIndex);

    displayQuestion();

}

// ON-CLICK FUNCTIONS

// this is the function that will be called once pressing the "Submit" button
function submitAnswer() {
    selectedAnswersNumber = 0;
    achievedScore = 0;
    receiveUserInput();

    // if there are no selected answers, an alert message will remind you to select an option and disappear after 5 seconds
    if (selectedAnswersNumber !== 0) {
        verifyAndShowCorrectAnswer();
        document.getElementById("pleaseSelectAnswer").style.display = "none";

    }
    else {
        document.getElementById("pleaseSelectAnswer").style.display = "block";
        setTimeout(function(){
            document.getElementById("pleaseSelectAnswer").style.display = "none";
        }, 5000);
    }

    // if there are no available questions, the "Next" button will display "View results" instead of "Next"
    if (availableQuestions.length == 0)
        document.getElementById("nextQuestionButton").innerHTML = "View results";
    else
        document.getElementById("nextQuestionButton").innerHTML = "Next";

}

// this is the function that will be called once pressing the "Next" button 
function nextQuestion() {

    // if there are no available questions, as soon as the "Next" button is pressed, the score will be shown
    if (availableQuestions.length != 0) {
        resetAnswerState();
        questionNumber = Math.floor(Math.random() * availableQuestions.length);
        generateQuestion(questionNumber);
    }
    else {
        showQuizScore();
    }

}

// this is the function that will be called once pressing the "Play Again" button
function playAgain() {
    resetQuestions();
    generateQuestion(questionNumber);

}

// APPLICATION-RELATED FUNCTIONS

// in this section here the form is prevented from refreshing the page once the buttons are pressed
let cancelQuizRefreshing = function (e) {
    e.preventDefault();
}
let quiz = document.getElementById("quiz");
quiz.addEventListener("submit", cancelQuizRefreshing, true);

// in this section these functions are called to load the first question to answer
resetQuestions();
generateQuestion(questionNumber);
