var myQuestions = [{
        question: "What is the day before Mardi Gras called?",
        answers: {
            a: 'Lundi Gras',
            b: 'Monday Gras',
            c: 'Monday Fest',
            d: 'Mercredi Gras'
        },
        correctAnswer: 'a'
    },
    {
        question: "What day comes after Mardi Gras?",
        answers: {
            a: 'Lundi',
            b: 'Mercredi',
            c: 'Ash Wednesday',
            d: 'Fire Wednesday'
        },
        correctAnswer: 'c'
    },
    {
        question: "Where was the first known carnival celebration?",
        answers: {
            a: 'Madrid ,Spain',
            b: 'Utrecht, Holland',
            c: 'Lille, France',
            d: 'Nice, France'
        },
        correctAnswer: 'd'
    },
    {
        question: "When was the earliest known carnival celebration?",
        answers: {
            a: '1584 bc',
            b: '1960',
            c: '1294',
            d: '1992'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the signature Mardi Gras dessert?",
        answers: {
            a: 'Masked Muffins',
            b: 'King Cake',
            c: 'Galette des rois',
            d: 'Lemon Cake'
        },
        correctAnswer: 'b'
    },
    {
        question: "What is traditionally hidden inside a king cake?",
        answers: {
            a: 'Money',
            b: 'A tiny crown',
            c: 'A plastic baby',
            d: 'Nothing, people would choke'
        },
        correctAnswer: 'c'
    },
    {
        question: "What are the groups that organize New Orleans Mardi Gras parades called?",
        answers: {
            a: 'Krewes',
            b: 'Krewela',
            c: 'Kraken',
            d: 'Krocoloco'
        },
        correctAnswer: 'a'
    },
    {
        question: "Bacchus is the Roman god of what?",
        answers: {
            a: 'Life',
            b: 'Love',
            c: 'Grapes',
            d: 'Wine'
        },
        correctAnswer: 'd'
    },
    {
        question: "What states recognize Fat Tuesday as a holiday?",
        answers: {
            a: 'North-Carolina, New-Jersey and New-York',
            b: 'New-Mexico, Illanoy and Idaho',
            c: 'California, Texas and Arizona',
            d: 'Louisiana, Florida and Alabama'
        },
        correctAnswer: 'd'
    },
    {
        question: "What is the most popular food for Fat Tuesday?",
        answers: {
            a: 'Pancakes',
            b: 'Crepes',
            c: 'Fish',
            d: 'Hot dogs'
        },
        correctAnswer: 'a'
    },
    {
        question: "What does purple signify during Mardi Gras?",
        answers: {
            a: 'Justice',
            b: 'Power',
            c: 'Faith',
            d: 'Love'
        },
        correctAnswer: 'a'
    },
    {
        question: "What does green signify during Mardi Gras?",
        answers: {
            a: 'Justice',
            b: 'Power',
            c: 'Faith',
            d: 'Love'
        },
        correctAnswer: 'c'
    },
    {
        question: "What does gold signify during Mardi Gras?",
        answers: {
            a: 'Justice',
            b: 'Power',
            c: 'Faith',
            d: 'Love'
        },
        correctAnswer: 'b'
    },
    {
        question: "When was the first known New Orleans Mardi Gras parade?",
        answers: {
            a: '1442',
            b: '1837',
            c: '1937',
            d: '1920'
        },
        correctAnswer: 'b'
    },
    {
        question: "When were floats first introduced to New Orleans Mardi Gras parades?",
        answers: {
            a: '1957',
            b: '1854',
            c: '1660',
            d: '1857'
        },
        correctAnswer: 'd'
    },
    {
        question: "What is the most popular Mardi Gras saying?",
        answers: {
            a: 'Happy Mardi Gras',
            b: 'Laissez les bon temps rouler',
            c: 'May the Gras be in your favor',
            d: 'Happy Holiday'
        },
        correctAnswer: 'b'
    }, 
    {
        question: "Mardi Gras beads used to be made of what material?",
        answers: {
            a: 'Glass',
            b: 'Plastic',
            c: 'Wood',
            d: 'Stone'
        },
        correctAnswer: 'a'
    }, 
    {
        question: "King cake is typically made with what sort of dough?",
        answers: {
            a: 'Velvet',
            b: 'Cookie',
            c: 'Brioche',
            d: 'Sponge'
        },
        correctAnswer: 'c'
    }, 
    {
        question: "After Mardi Gras parades were canceled for 2021 in New Orleans, what did krewes decorate instead of floats?",
        answers: {
            a: 'Pets',
            b: 'Street Lamps',
            c: 'Cars',
            d: 'Houses'
        },
        correctAnswer: 'd'
    }, 
    {
        question: "When was Mardi Gras first declared a holiday in general?",
        answers: {
            a: '1942',
            b: '1582',
            c: '1688',
            d: '1374'
        },
        correctAnswer: 'b'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submitQuiz');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        for (var i = 0; i < questions.length; i++) {
            answers = [];
            for (letter in questions[i].answers) {
                answers.push(
                    '<label>' +
                    '<input type="radio" name="question' + i + '" value="' + letter + '">' +
                    letter + ': ' +
                    questions[i].answers[letter] +
                    '</label>' + "<br>"
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>' +
                '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {
        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for (var i = 0; i < questions.length; i++) {
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {})
                .value;
            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            } else {
                answerContainers[i].style.color = 'red';
            }
        }
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }
    showQuestions(questions, quizContainer);
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }

}