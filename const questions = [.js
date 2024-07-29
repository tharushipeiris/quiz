const questionsByLevel = {
    1: {
        '+': [
            { question: "1. What is 2 + 3?", answer: 5 },
            { question: "2. What is 2 + 2?", answer: 4 },
            { question: "3. What is 3 + 4?", answer: 7 },
            { question: "4. What is 1 + 5?", answer: 6 },
            { question: "5. What is 7 + 1?", answer: 8 },
            { question: "6. What is 8 + 1?", answer: 9 },
            { question: "7. What is 5 + 4?", answer: 9 },
            { question: "8. What is 6 + 2?", answer: 8 },
            { question: "9. What is 5 + 8?", answer: 13 },
            { question: "10. What is 2 + 4?", answer: 6 },
            { question: "11. What is 3 + 3?", answer: 6 },
            { question: "12. What is 6 + 1?", answer: 7 },
            { question: "13. What is 4 + 4?", answer: 8 },
            { question: "14. What is 11 + 2?", answer: 13 },
            { question: "15. What is 5 + 5?", answer: 10 },
            { question: "16. What is 9 + 1?", answer: 10 },
            { question: "17. What is 4 + 1?", answer: 5 },
            { question: "18. What is 8 + 1?", answer: 9 },
            { question: "19. What is 6 + 3?", answer: 9 },
            { question: "20. What is 4 + 6?", answer: 10 },
            { question: "21. What is 7 + 1?", answer: 8 },
            { question: "22. What is 4 + 7?", answer: 11 },
            { question: "23. What is 2 + 9?", answer: 11 },
            { question: "24. What is 7 + 5?", answer: 12 },
            { question: "25. What is 5 + 3?", answer: 8 },
            { question: "26. What is 3 + 7?", answer: 10 },
            { question: "27. What is 5 + 8?", answer: 13 },
            { question: "28. What is 4 + 1?", answer: 5 },
            { question: "29. What is 5 + 5?", answer: 10 },
            { question: "30. What is 1 + 10?", answer: 11 },
            
        ],
        '-': [
            { question: "1. What is 2 - 1?", answer: 1 },
            { question: "2. What is 3 - 1?", answer: 2 },
            { question: "3. What is 5 - 2?", answer: 3 },
            { question: "4. What is 4 - 1?", answer: 3 },
            { question: "5. What is 6 - 3?", answer: 3 },
            { question: "6. What is 8 - 4?", answer: 4 },                
            { question: "7. What is 7 - 2?", answer: 5 },
            { question: "8. What is 9 - 5?", answer: 4 },
            { question: "9. What is 10 - 4?", answer: 6 },
            { question: "10. What is 12 - 6?", answer: 6 },
            { question: "11. What is 11 - 3?", answer: 8 },
            { question: "12. What is 13 - 7?", answer: 6 },
            { question: "13. What is 14 - 5?", answer: 9 },
            { question: "14. What is 15 - 8?", answer: 7 },
            { question: "15. What is 16 - 7?", answer: 9 },
            { question: "16. What is 18 - 9?", answer: 9 },
            { question: "17. What is 17 - 8?", answer: 9 },
            { question: "18. What is 19 - 10?", answer: 9 },
            { question: "19. What is 20 - 10?", answer: 10 },
            { question: "20. What is 21 - 11?", answer: 10 },
            { question: "21. What is 22 - 12?", answer: 10 },
            { question: "22. What is 23 - 13?", answer: 10 },
            { question: "23. What is 24 - 14?", answer: 10 },
            { question: "24. What is 25 - 15?", answer: 10 },
            { question: "25. What is 26 - 16?", answer: 10 },
            { question: "26. What is 27 - 17?", answer: 10 },
            { question: "27. What is 28 - 18?", answer: 10 },
            { question: "28. What is 29 - 19?", answer: 10 },
            { question: "29. What is 30 - 20?", answer: 10 },
            { question: "30. What is 39 - 19?", answer: 20 }
        ],
        '*': [
            { question: "1. What is 1 * 1?", answer: 1 },
            { question: "2. What is 3 * 1?", answer: 3 },
            { question: "3. What is 5 * 2?", answer: 10 },
            { question: "4. What is 4 * 1?", answer: 4 },
            { question: "5. What is 6 * 3?", answer: 18 },
            { question: "6. What is 8 * 4?", answer: 32 },                
            { question: "7. What is 7 * 2?", answer: 14},
            { question: "8. What is 9 * 5?", answer: 45},
            { question: "9. What is 10 * 4?", answer: 40 },
            { question: "10. What is 2 * 6?", answer: 12},
            { question: "11. What is 11 * 3?", answer: 33 },
            { question: "12. What is 3 * 7?", answer: 21 },
            { question: "13. What is 4 * 5?", answer: 20 },
            { question: "14. What is 5 * 8?", answer: 40 },
            { question: "15. What is 6 * 7?", answer: 42 },
            { question: "16. What is 10 * 9?", answer: 90 },
            { question: "17. What is 7 * 8?", answer: 56 },
            { question: "18. What is 9 * 11?", answer: 99 },
            { question: "19. What is 2 * 10?", answer: 20 },
            { question: "20. What is 11 * 6?", answer: 66},
            { question: "21. What is 2 * 15?", answer: 30},
            { question: "22. What is 3 * 8?", answer: 24},
            { question: "23. What is 7 * 4?", answer: 28},
            { question: "24. What is 5 * 5?", answer: 25},
            { question: "25. What is 6 * 6?", answer: 36},
            { question: "26. What is 7 * 7?", answer: 49},
            { question: "27. What is 8 * 8?", answer: 64},
            { question: "28. What is 9 * 9?", answer: 81},
            { question: "29. What is 3 * 2?", answer: 6},
            { question: "30. What is 3 * 10?", answer: 30 }
        ],
        '/': [
            { question: "1. What is 2 ÷ 1?", answer: 2 },
            { question: "2. What is 4 ÷ 2?", answer: 2},
            { question: "3. What is 6 ÷ 3?", answer: 2},
            { question: "4. What is 8 ÷ 4?", answer: 2},              
            { question: "5. What is 10 ÷ 5?",answer: 2},               
            { question: "6. What is 12 ÷ 6?",answer: 2},
            { question: "7. What is 14 ÷ 7?",answer: 2},
            { question: "8. What is 16 ÷ 8?",answer: 2}, 
            { question: "9. What is 18 ÷ 9?",answer: 2},               
            { question: "10. What is 20 ÷ 10?",answer: 2},              
            { question: "What is 21 ÷ 3?",answer: 7},               
            { question: "What is 24 ÷ 6?",answer: 4},               
            { question: "What is 25 ÷ 5?",answer: 5},               
            { question: "What is 28 ÷ 4?",answer: 7},              
            { question: "What is 30 ÷ 6?",answer: 5},             
            { question: "What is 32 ÷ 4?",answer: 8},              
            { question: "What is 35 ÷ 7?",answer: 5},                
            { question: "What is 36 ÷ 6?",answer: 6},             
            { question: "What is 40 ÷ 8?",answer: 5},             
            { question: "What is 42 ÷ 6?",answer: 7},             
            { question: "What is 45 ÷ 5?",answer: 9},              
            { question: "What is 48 ÷ 8?",answer: 6},              
            { question: "What is 49 ÷ 7?",answer: 7},             
            { question: "What is 50 ÷ 10?",answer: 5},            
            { question: "What is 54 ÷ 9?",answer: 6},           
            { question: "What is 56 ÷ 7?",answer: 8},             
            { question: "What is 60 ÷ 10?",answer: 6},              
            { question: "What is 63 ÷ 9?",answer: 7},              
            { question: "What is 64 ÷ 8?",answer: 8},
            { question: "What is 4 ÷ 2?", answer: 2 }
        ]
    },
    2: {
        '+': [
            { question: "What is 205 + 113?", answer: 318 },
            { question: "What is 123 + 452?", answer: 575 },
            { question: "What is 321 + 442?", answer: 763 },
            { question: "What is 421 + 145?", answer: 566 },
            { question: "What is 217 + 141?", answer: 358 },
            { question: "What is 840 + 451?", answer: 1291 },
            { question: "What is 574 + 421?", answer: 995 },
            { question: "What is 651 + 277?", answer: 928 },
            { question: "What is 245 + 821?", answer: 1066 },
            { question: "What is 742 + 432?", answer: 1174 },
            { question: "What is 389 + 365?", answer: 754 },
            { question: "What is 746 + 169?", answer: 915 },
            { question: "What is 478 + 400?", answer: 878 },
            { question: "What is 151 + 782?", answer: 933 },
            { question: "What is 565 + 745?", answer: 1310 },
            { question: "What is 689 + 152?", answer: 841 },
            { question: "What is 484 + 751?", answer: 1235 },
            { question: "What is 845 + 391?", answer: 1236 },
            { question: "What is 675 + 346?", answer: 1021 },
            { question: "What is 400 + 674?", answer: 1074 },
            { question: "What is 657 + 175?", answer: 832 },
            { question: "What is 498 + 747?", answer: 1245 },
            { question: "What is 652 + 974?", answer: 1626 },
            { question: "What is 751 + 745?", answer: 1496 },
            { question: "What is 563 + 743?", answer: 1306 },
            { question: "What is 332 + 147?", answer: 479 },
            { question: "What is 855 + 821?", answer: 1676 },
            { question: "What is 474 + 411?", answer: 885 },
            { question: "What is 525 + 512?", answer: 1037 },
            { question: "What is 107 + 150?", answer: 257 }

        ],
        '-': [
            { question: "What is 484 - 242?", answer: 242 },
            { question: "What is 565 - 274?", answer: 291 },
            { question: "What is 452 - 221?", answer: 231 },
            { question: "What is 385 - 162?", answer: 223 },
            { question: "What is 614 - 307?", answer: 307 },
            { question: "What is 523 - 214?", answer: 309 },
            { question: "What is 489 - 174?", answer: 315 },
            { question: "What is 743 - 289?", answer: 454 },
            { question: "What is 638 - 315?", answer: 323 },
            { question: "What is 571 - 246?", answer: 325 },
            { question: "What is 864 - 429?", answer: 435 },
            { question: "What is 712 - 386?", answer: 326 },
            { question: "What is 945 - 512?", answer: 433 },
            { question: "What is 832 - 407?", answer: 425 },
            { question: "What is 679 - 354?", answer: 325 },
            { question: "What is 798 - 273?", answer: 525 },
            { question: "What is 876 - 451?", answer: 425 },
            { question: "What is 943 - 518?", answer: 425 },
            { question: "What is 712 - 381?", answer: 331 },
            { question: "What is 831 - 476?", answer: 355 },
            { question: "What is 964 - 513?", answer: 451 },
            { question: "What is 759 - 432?", answer: 327 },
            { question: "What is 862 - 529?", answer: 333 },
            { question: "What is 687 - 358?", answer: 329 },
            { question: "What is 792 - 463?", answer: 329 },
            { question: "What is 875 - 446?", answer: 429 },
            { question: "What is 938 - 509?", answer: 429 },
            { question: "What is 751 - 322?", answer: 429 },
            { question: "What is 864 - 423?", answer: 441 },
            { question: "What is 915 - 484?", answer: 431 }

        ],
        '*': [
            { question: "What is 25 * 12?", answer: 300 },
            { question: "What is 14 * 15?", answer: 210 },
            { question: "What is 18 * 11?", answer: 198 },
            { question: "What is 22 * 13?", answer: 286 },
            { question: "What is 19 * 14?", answer: 266 },
            { question: "What is 16 * 17?", answer: 272 },
            { question: "What is 21 * 12?", answer: 252 },
            { question: "What is 20 * 15?", answer: 300 },
            { question: "What is 17 * 16?", answer: 272 },
            { question: "What is 23 * 14?", answer: 322 },
            { question: "What is 18 * 19?", answer: 342 },
            { question: "What is 15 * 20?", answer: 300 },
            { question: "What is 24 * 11?", answer: 264 },
            { question: "What is 25 * 13?", answer: 325 },
            { question: "What is 22 * 15?", answer: 330 },
            { question: "What is 19 * 18?", answer: 342 },
            { question: "What is 21 * 16?", answer: 336 },
            { question: "What is 23 * 17?", answer: 391 },
            { question: "What is 26 * 14?", answer: 364 },
            { question: "What is 20 * 18?", answer: 360 },
            { question: "What is 24 * 15?", answer: 360 },
            { question: "What is 25 * 17?", answer: 425 },
            { question: "What is 19 * 21?", answer: 399 },
            { question: "What is 23 * 20?", answer: 460 },
            { question: "What is 22 * 18?", answer: 396 },
            { question: "What is 24 * 16?", answer: 384 },
            { question: "What is 25 * 14?", answer: 350 },
            { question: "What is 20 * 19?", answer: 380 },
            { question: "What is 21 * 17?", answer: 357 },
            { question: "What is 18 * 22?", answer: 396 }

        ],
        '/': [
            { question: "What is 420 ÷ 20?", answer: 21 },
            { question: "What is 360 ÷ 12?", answer: 30 },
            { question: "What is 540 ÷ 18?", answer: 30 },
            { question: "What is 720 ÷ 24?", answer: 30 },
            { question: "What is 630 ÷ 21?", answer: 30 },
            { question: "What is 660 ÷ 22?", answer: 30 },
            { question: "What is 690 ÷ 23?", answer: 30 },
            { question: "What is 750 ÷ 25?", answer: 30 },
            { question: "What is 840 ÷ 28?", answer: 30 },
            { question: "What is 900 ÷ 30?", answer: 30 },
            { question: "What is 330 ÷ 11?", answer: 30 },
            { question: "What is 390 ÷ 13?", answer: 30 },
            { question: "What is 420 ÷ 14?", answer: 30 },
            { question: "What is 450 ÷ 15?", answer: 30 },
            { question: "What is 480 ÷ 16?", answer: 30 },
            { question: "What is 510 ÷ 17?", answer: 30 },
            { question: "What is 570 ÷ 19?", answer: 30 },
            { question: "What is 600 ÷ 20?", answer: 30 },
            { question: "What is 660 ÷ 22?", answer: 30 },
            { question: "What is 720 ÷ 24?", answer: 30 },
            { question: "What is 780 ÷ 26?", answer: 30 },
            { question: "What is 840 ÷ 28?", answer: 30 },
            { question: "What is 870 ÷ 29?", answer: 30 },
            { question: "What is 900 ÷ 30?", answer: 30 },
            { question: "What is 960 ÷ 32?", answer: 30 },
            { question: "What is 1020 ÷ 34?", answer: 30 },
            { question: "What is 1080 ÷ 36?", answer: 30 },
            { question: "What is 1140 ÷ 38?", answer: 30 },
            { question: "What is 1200 ÷ 40?", answer: 30 },
            { question: "What is 1260 ÷ 42?", answer: 30 }

        ]
    },

    3: {
        '+': [
            { question: "What is 3 + 3?", answer: 6 },
            { question: "What is 4 + 3?", answer: 7 }
        ],
        '-': [
            { question: "What is 6 - 3?", answer: 3 },
            { question: "What is 7 - 3?", answer: 4 }
        ],
        '*': [
            { question: "What is 3 * 3?", answer: 9 },
            { question: "What is 4 * 3?", answer: 12 }
        ],
        '/': [
            { question: "What is 6 ÷ 3?", answer: 2 },
            { question: "What is 9 ÷ 3?", answer: 3 }
        ]
    }
};

let currentQuestionIndex = 0;
let questions = [];
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    questionElement.textContent = questions[currentQuestionIndex].question;
}

function checkAnswer() {
    const answerElement = document.getElementById('answer');
    const resultElement = document.getElementById('result');
    const userAnswer = parseInt(answerElement.value);

    if (userAnswer === questions[currentQuestionIndex].answer) {
        resultElement.textContent = "Correct!";
        resultElement.style.color = "green";
        score++;
        currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
        setTimeout(() => {
            resultElement.textContent = "";
            answerElement.value = "";
            loadQuestion();
        }, 1000);
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
}

function startQuiz() {
    const levelElement = document.getElementById('level');
    const operationElement = document.getElementById('operation');
    const level = parseInt(levelElement.value);
    const operation = operationElement.value;
    
    questions = questionsByLevel[level][operation];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('level-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    const levelDisplay = document.getElementById('level-display');
    levelDisplay.textContent = `Level: ${level}`;
    
    loadQuestion();
}
function endQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const resultElement = document.getElementById('result');
    quizContainer.innerHTML = `<h2>Quiz Finished!</h2><p>Your score is ${score} out of ${questions.length}</p>`;
    
}


window.onload = () => {
    document.getElementById('quiz-container').style.display = 'none';
};
