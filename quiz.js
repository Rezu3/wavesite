// ========= QUIZ DATA ========
const quizData =  [
  {
    question: "ওহমের সূত্র অনুযায়ী V–I গ্রাফের ঢাল কী নির্দেশ করে?",
    options: ["রোধ", "তড়িৎ প্রবাহ", "তড়িৎ চাপ", "ক্ষমতা"],
    answer: 0
  },
  {
    question: "একটি পরিবাহীর রোধ কোনটির উপর নির্ভর করে না?",
    options: ["দৈর্ঘ্য", "ব্যাস", "তাপমাত্রা", "তড়িৎ প্রবাহ"],
    answer: 3
  },
  {
    question: "একই উপাদানের তারের দৈর্ঘ্য দ্বিগুণ করলে রোধ কত হবে?",
    options: ["অর্ধেক", "অপরিবর্তিত", "দ্বিগুণ", "চারগুণ"],
    answer: 2
  },
  {
    question: "বিদ্যুৎ শক্তির SI একক কী?",
    options: ["ওয়াট", "জুল", "কুলম্ব", "ভোল্ট"],
    answer: 1
  },
  {
    question: "বিদ্যুৎ ক্ষমতা নির্ণয়ের সঠিক সূত্র কোনটি?",
    options: ["P = VI", "P = IR", "P = V/R", "P = I/R"],
    answer: 0
  },
  {
    question: "একটি বাল্বে ব্যবহৃত ফিলামেন্ট সাধারণত কোন ধাতুর তৈরি?",
    options: ["তামা", "লোহা", "টাংস্টেন", "অ্যালুমিনিয়াম"],
    answer: 2
  },
  {
    question: "সিরিজ সংযোগে মোট রোধ কেমন হয়?",
    options: ["কমে যায়", "গড় মান হয়", "বেশি হয়", "শূন্য হয়"],
    answer: 2
  },
  {
    question: "প্যারালাল সংযোগে কোন রাশি অপরিবর্তিত থাকে?",
    options: ["রোধ", "বিদ্যুৎ শক্তি", "তড়িৎ চাপ", "ক্ষমতা"],
    answer: 2
  },
  {
    question: "একটি বৈদ্যুতিক হিটারে তাপ উৎপন্ন হয় কোন প্রভাবে?",
    options: ["চৌম্বক প্রভাব", "রাসায়নিক প্রভাব", "তাপীয় প্রভাব", "আলোক প্রভাব"],
    answer: 2
  },
  {
    question: "একটি বৈদ্যুতিক ফিউজ কোন ধাতু দিয়ে তৈরি হয়?",
    options: ["তামা", "অ্যালুমিনিয়াম", "টিন-সীসা সংকর", "লোহা"],
    answer: 2
  },

  // --------- আলো ---------

  {
    question: "আলো কোন পথে গমন করে?",
    options: ["বক্র পথে", "জিগজ্যাগ পথে", "সরল রেখায়", "বৃত্তাকার পথে"],
    answer: 2
  },
  {
    question: "প্রতিফলনের সূত্র অনুযায়ী আপতন কোণ ও প্রতিফলন কোণের সম্পর্ক কী?",
    options: ["সমান", "দ্বিগুণ", "অর্ধেক", "কোন সম্পর্ক নেই"],
    answer: 0
  },
  {
    question: "সমতল দর্পণে গঠিত প্রতিবিম্ব কেমন হয়?",
    options: ["বাস্তব ও উল্টো", "অবাস্তব ও সোজা", "বাস্তব ও সোজা", "অবাস্তব ও উল্টো"],
    answer: 1
  },
  {
    question: "সমতল দর্পণে প্রতিবিম্বের আকার কেমন হয়?",
    options: ["বড়", "ছোট", "বস্তুর সমান", "পরিবর্তনশীল"],
    answer: 2
  },
  {
    question: "অবতল দর্পণ কখন বাস্তব প্রতিবিম্ব গঠন করে?",
    options: ["ফোকাসের মধ্যে বস্তু রাখলে", "পোল এ বস্তু রাখলে", "ফোকাসের বাইরে বস্তু রাখলে", "যেকোনো অবস্থায়"],
    answer: 2
  },
  {
    question: "অবতল দর্পণ সাধারণত কোথায় ব্যবহৃত হয়?",
    options: ["গাড়ির আয়নায়", "শেভিং আয়নায়", "দোকানের কাচে", "জানালায়"],
    answer: 1
  },
  {
    question: "উত্তল দর্পণের প্রধান বৈশিষ্ট্য কী?",
    options: ["বাস্তব প্রতিবিম্ব", "ছোট প্রতিবিম্ব", "উল্টো প্রতিবিম্ব", "বড় প্রতিবিম্ব"],
    answer: 1
  },
  {
    question: "গাড়ির রিয়ার ভিউ মিরর হিসেবে কোন দর্পণ ব্যবহৃত হয়?",
    options: ["সমতল", "অবতল", "উত্তল", "সিলিন্ড্রিক্যাল"],
    answer: 2
  },
  {
    question: "প্রতিসরণের সময় আলো কোনটি পরিবর্তন করে?",
    options: ["ফ্রিকোয়েন্সি", "তরঙ্গদৈর্ঘ্য", "বেগ", "শক্তি"],
    answer: 2
  },
  {
    question: "জলের প্রতিসরণাঙ্ক বায়ুর তুলনায় কেমন?",
    options: ["কম", "সমান", "বেশি", "শূন্য"],
    answer: 2
  },
  {
    question: "লেন্সের ক্ষমতার SI একক কী?",
    options: ["ওয়াট", "ডায়প্টার", "মিটার", "জুল"],
    answer: 1
  },
  {
    question: "উত্তল লেন্স সাধারণত কেমন প্রতিবিম্ব গঠন করে?",
    options: ["শুধু বাস্তব", "শুধু অবাস্তব", "বাস্তব ও অবাস্তব উভয়ই", "কোনোটাই নয়"],
    answer: 1
  },
  {
    question: "চশমায় ব্যবহৃত লেন্স সাধারণত কী দিয়ে তৈরি?",
    options: ["ধাতু", "প্লাস্টিক বা কাচ", "কাঠ", "রাবার"],
    answer: 1
  },
  {
    question: "নিকটদৃষ্টিদোষ সংশোধনে কোন লেন্স ব্যবহৃত হয়?",
    options: ["উত্তল লেন্স", "অবতল লেন্স", "সিলিন্ড্রিক্যাল লেন্স", "সমতল লেন্স"],
    answer: 1
  },
  {
    question: "দূরদৃষ্টিদোষ সংশোধনে কোন লেন্স ব্যবহৃত হয়?",
    options: ["অবতল", "উত্তল", "সমতল", "প্রিজম"],
    answer: 1
  },
  {
    question: "রেইনবো গঠনের প্রধান কারণ কোনটি?",
    options: ["প্রতিফলন", "প্রতিসরণ ও বিচ্ছুরণ", "ব্যতিচার", "ধ্রুবণ"],
    answer: 1
  }
];

// ========= GLOBAL VARIABLES =========
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 60;
let timerInterval = null;

// ========= DOM ELEMENTS =========
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const resultModal = document.getElementById('result-modal');
const finalScoreEl = document.getElementById('final-score');
const totalQuestionsEl = document.getElementById('total-questions');
const percentageEl = document.getElementById('percentage');
const performanceText = document.getElementById('performance-text');
const restartBtn = document.getElementById('restart-btn');

// ========= INITIALIZE QUIZ =========
function initQuiz() {
    console.log("Quiz initialized");
    currentQuestion = 0;
    score = 0;
    loadQuestion();
    updateScore();
}

// ========= LOAD QUESTION =========
function loadQuestion() {
    console.log("Loading question:", currentQuestion);
    
    if (currentQuestion >= quizData.length) {
        console.log("No more questions");
        return;
    }
    
    const currentQuiz = quizData[currentQuestion];
    answered = false;
    
    // Reset timer
    clearInterval(timerInterval);
    timeLeft = 60;
    updateTimer();
    
    // Load question text
    questionEl.textContent = currentQuiz.question;
    
    // Clear previous options
    optionsEl.innerHTML = '';
    
    // Load new options
    currentQuiz.options.forEach((option, index) => {
        const optionBtn = document.createElement('div');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionBtn.dataset.index = index;
        
        optionBtn.addEventListener('click', () => selectAnswer(index, optionBtn));
        optionsEl.appendChild(optionBtn);
    });
    
    // Update UI elements
    updateProgress();
    updateQuestionCounter();
    nextButton.disabled = true;
    nextButton.textContent = 'পরবর্তী প্রশ্ন →';
    
    // Start timer
    startTimer();
    console.log("Question loaded successfully");
}

// ========= SELECT ANSWER =========
function selectAnswer(selectedIndex, selectedBtn) {
    console.log("Answer selected:", selectedIndex);
    if (answered) return;
    
    answered = true;
    const correctIndex = quizData[currentQuestion].answer;
    const allOptions = document.querySelectorAll('.option-btn');
    
    // Disable all options
    allOptions.forEach(option => {
        option.classList.add('disabled');
        option.style.pointerEvents = 'none';
    });
    
    // Show correct/wrong answers
    if (selectedIndex === correctIndex) {
        selectedBtn.classList.add('correct');
        score++;
        updateScore();
        console.log("Correct answer!");
    } else {
        selectedBtn.classList.add('wrong');
        allOptions[correctIndex].classList.add('correct');
        console.log("Wrong answer!");
    }
    
    // Enable next button
    nextButton.disabled = false;
    
    // Change button text if last question
    if (currentQuestion === quizData.length - 1) {
        nextButton.textContent = 'ফলাফল দেখুন →';
    }
    
    // Stop timer
    clearInterval(timerInterval);
}

// ========= NEXT QUESTION =========
nextButton.addEventListener('click', () => {
    console.log("Next button clicked");
    if (!answered) {
        alert('দয়া করে প্রথমে একটি উত্তর নির্বাচন করুন।');
        return;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// ========= TIMER FUNCTIONS =========
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (!answered) {
                autoSkipQuestion();
            }
        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Change color when time is running out
    if (timeLeft <= 10) {
        timeEl.style.color = '#e74c3c';
        timeEl.style.animation = 'pulse 0.5s infinite alternate';
    } else {
        timeEl.style.color = '';
        timeEl.style.animation = '';
    }
}

function autoSkipQuestion() {
    if (!answered) {
        const correctIndex = quizData[currentQuestion].answer;
        const allOptions = document.querySelectorAll('.option-btn');
        
        allOptions.forEach(option => {
            option.classList.add('disabled');
            option.style.pointerEvents = 'none';
        });
        
        // Mark correct answer
        allOptions[correctIndex].classList.add('correct');
        
        answered = true;
        nextButton.disabled = false;
        
        // Change button text if last question
        if (currentQuestion === quizData.length - 1) {
            nextButton.textContent = 'ফলাফল দেখুন →';
        }
    }
}

// ========= UPDATE UI =========
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function updateQuestionCounter() {
    questionCounter.textContent = `প্রশ্ন ${currentQuestion + 1}/${quizData.length}`;
}

function updateScore() {
    scoreEl.textContent = score;
}

// ========= SHOW RESULTS =========
function showResults() {
    console.log("Showing results");
    const percentage = Math.round((score / quizData.length) * 100);
    
    finalScoreEl.textContent = score;
    totalQuestionsEl.textContent = quizData.length;
    percentageEl.textContent = `${percentage}%`;
    
    // Set performance text based on score
    if (percentage >= 80) {
        performanceText.textContent = 'অসাধারণ! আপনি একজন জ্ঞানী ব্যক্তি।';
        performanceText.style.color = '#2ecc71';
    } else if (percentage >= 60) {
        performanceText.textContent = 'ভালো হয়েছে! আপনার জ্ঞান প্রশংসনীয়।';
        performanceText.style.color = '#3498db';
    } else if (percentage >= 40) {
        performanceText.textContent = 'সাধারণ। আরও পড়াশুনা করুন।';
        performanceText.style.color = '#f39c12';
    } else {
        performanceText.textContent = 'আপনাকে আরও বেশি করে পড়াশুনা করতে হবে।';
        performanceText.style.color = '#e74c3c';
    }
    
    // Show modal
    resultModal.style.display = 'flex';
}

// ========= MODAL CONTROLS =========
if (restartBtn) {
    restartBtn.addEventListener('click', () => {
        resultModal.style.display = 'none';
        initQuiz();
    });
}

// ========= KEYBOARD CONTROLS =========
document.addEventListener('keydown', (e) => {
    // A, B, C, D keys for options
    if (e.key >= 'a' && e.key <= 'd' && !answered) {
        const optionIndex = e.key.charCodeAt(0) - 97; // a=0, b=1, c=2, d=3
        const options = document.querySelectorAll('.option-btn');
        if (optionIndex < options.length) {
            options[optionIndex].click();
        }
    }
    
    // Enter for next button
    if (e.key === 'Enter' && !nextButton.disabled) {
        nextButton.click();
    }
    
    // Escape to close modal
    if (e.key === 'Escape' && resultModal && resultModal.style.display === 'flex') {
        resultModal.style.display = 'none';
    }
    
    // 1,2,3,4 keys for options
    if (e.key >= '1' && e.key <= '4' && !answered) {
        const optionIndex = parseInt(e.key) - 1;
        const options = document.querySelectorAll('.option-btn');
        if (optionIndex < options.length) {
            options[optionIndex].click();
        }
    }
});

// ========= INITIALIZE =========
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded, initializing quiz...");
    initQuiz();
});