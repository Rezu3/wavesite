// static/js/pyq.js

// PYQ (Bengali) Questions for Group C/D
 const pyqQuestions = [
    // Section I: General Knowledge (1-15)
    {
        question: "JPEG একটি ছবির ফরমাট – JPEG-এর পূরা কথাটি কি?",
        options: [
            "Joy Prakash Energy Group",
            "Joint Photographic Extension Group",
            "Joint Photographic Experts Group",
            "Joint Programming for Ecological Goal"
        ],
        correctAnswer: 2,
        explanation: "JPEG stands for Joint Photographic Experts Group."
    },
    {
        question: "'রামসর সাইট' কথাটি যেটির সঙ্গে সম্পর্কিত সেটি হল",
        options: ["জলাভূমি", "তৃণভূমি", "বনভূমি", "উপতাকা"],
        correctAnswer: 0,
        explanation: "Ramsar sites are wetlands of international importance."
    },
    {
        question: "হিমোগ্লোবিনের কাজ হল",
        options: [
            "অক্সিজেন পরিবহন করা",
            "ব্যাকটেরিয়া ধ্বংস করা",
            "রক্তাল্পতা প্রতিরোধ করা",
            "শক্তির ব্যবহার করা"
        ],
        correctAnswer: 0,
        explanation: "Hemoglobin carries oxygen in the blood."
    },
    {
        question: "ভিটামিন A-র ঘাটতির ফলে যে রোগ হয়, সেটি হল",
        options: ["রাতকানা", "রিকেট", "স্কার্ভি", "চুল পড়া"],
        correctAnswer: 0,
        explanation: "Vitamin A deficiency causes night blindness."
    },
    {
        question: "মানুষের শরীরে মোট হাড়ের সংখ্যা হল",
        options: ["208", "206", "209", "204"],
        correctAnswer: 1,
        explanation: "An adult human has 206 bones."
    },
    {
        question: "মাউন্ট এভারেস্ট .................... -এ অবস্থিত।",
        options: ["ভারত", "চীন", "নেপাল", "ভুটান"],
        correctAnswer: 2,
        explanation: "Mount Everest is located in Nepal."
    },
    {
        question: "'ধরিত্রী দিবস' পালিত হয়",
        options: ["5 ই জুন", "22 এপ্রিল", "16 ই সেপ্টেম্বর", "12 ই মে"],
        correctAnswer: 1,
        explanation: "Earth Day is celebrated on April 22."
    },
    {
        question: "আলফ্রেড নোবেল আবিষ্কার করেছিলেন",
        options: ["X-রশ্মি", "ডিজেল ইঞ্জিন", "ডিনামাইট", "ডায়নামো"],
        correctAnswer: 2,
        explanation: "Alfred Nobel invented dynamite."
    },
    {
        question: "ভিক্টোরিয়া জলপ্রপাত যেখানে অবস্থিত",
        options: ["রাশিয়া", "অস্ট্রেলিয়া", "আফ্রিকা", "ব্রাজিল"],
        correctAnswer: 2,
        explanation: "Victoria Falls is in Africa (Zimbabwe/Zambia border)."
    },
    {
        question: "যে গ্যাসটি সর্বাধিক মাত্রায় বায়ুতে উপস্থিত, সেটি হল",
        options: ["অক্সিজেন", "নাইট্রোজেন", "হাইড্রোজেন", "কার্বন ডাইঅক্সাইড"],
        correctAnswer: 1,
        explanation: "Nitrogen is the most abundant gas in air (~78%)."
    },
    {
        question: "সি. এন. জি. (CNG)-র অর্থ হল",
        options: [
            "Converted Natural Gas",
            "Conduced Natural Gas",
            "Conducted Natural Gas",
            "Compressed Natural Gas"
        ],
        correctAnswer: 3,
        explanation: "CNG stands for Compressed Natural Gas."
    },
    {
        question: "ভারতের প্রথম পরমাণু অস্ত্রবাহী আন্তঃমহাদেশীয় ব্যালিস্টিক মিসাইল (ICBM) হল",
        options: ["আকাশ", "পৃথ্বী-III", "অগ্নি-V", "ব্রহ্মোস"],
        correctAnswer: 2,
        explanation: "Agni-V is India's first intercontinental ballistic missile."
    },
    {
        question: "নাসার মহাকাশযান যেটি বৃহস্পতির চারদিকে প্রদক্ষিণ করছে তার নাম কি?",
        options: ["গ্যালিলিও", "ইউরোপা", "জুনো", "ডন"],
        correctAnswer: 2,
        explanation: "Juno is NASA's spacecraft orbiting Jupiter."
    },
    {
        question: "13 আগস্ট 2014 সালে পরিকল্পনা কমিশনের বদলে যে সংস্থা স্থাপিত হয়েছে তা হল",
        options: [
            "National Institution for Transforming India Aayog",
            "National Development Council",
            "Finance Commission",
            "CAG"
        ],
        correctAnswer: 0,
        explanation: "NITI Aayog replaced the Planning Commission."
    },
    {
        question: "26 নভেম্বর 2014 সালে 18তম SAARC শীর্ষ সম্মেলন অনুষ্ঠিত হয়",
        options: ["ইসলামাবাদ", "কাঠমান্ডু", "ঢাকায়", "কলম্বোয়"],
        correctAnswer: 1,
        explanation: "18th SAARC summit was held in Kathmandu, Nepal."
    },

    // Section I continues (16-30)
    {
        question: "সর্বশেষ গঠিত ভারতীয় রাজ্যটির নাম কি?",
        options: ["ছত্তিশগড়", "ঝাড়খণ্ড", "উত্তরাখণ্ড", "তেলঙ্গানা"],
        correctAnswer: 3,
        explanation: "Telangana was formed in 2014 (most recent at that time)."
    },
    {
        question: "রজার ফেডারার যে খেলার সাথে যুক্ত তা হল",
        options: ["ব্যাডমিন্টন", "হকি", "টেনিস", "ফুটবল"],
        correctAnswer: 2,
        explanation: "Roger Federer is a tennis player."
    },
    {
        question: "নিম্নলিখিত বিজ্ঞানীদের মধ্যে কে আপেক্ষিকতাবাদ তত্ত্বের সঙ্গে জড়িত?",
        options: ["নিলস বোর", "হাইজেনবার্গ", "আইনস্টাইন", "মাদাম কুরী"],
        correctAnswer: 2,
        explanation: "Albert Einstein proposed the theory of relativity."
    },
    {
        question: "মৈত্রী এক্সপ্রেস 2 কোন দুটি জায়গার মধ্যে দিয়ে চলবে?",
        options: [
            "কলকাতা - ঢাকা",
            "কলকাতা - খুলনা",
            "কলকাতা - বরিশাল",
            "কলকাতা - রাজশাহী"
        ],
        correctAnswer: 1,
        explanation: "Maitri Express II runs between Kolkata and Khulna."
    },
    {
        question: "তেলঙ্গানা রাজ্যটি গঠিত হয়েছে যে সালে তা হল",
        options: ["2011", "2012", "2013", "2014"],
        correctAnswer: 3,
        explanation: "Telangana was formed in 2014."
    },
    {
        question: "ভারতের জাতীয় পক্ষী হল",
        options: ["ঈগল", "কাক", "ময়ূর", "বক"],
        correctAnswer: 2,
        explanation: "The national bird of India is the peacock."
    },
    {
        question: "কোন জাতীয় নেতা 2014 সালে মরণোত্তর ভারতরত্ন পুরস্কারে ভূষিত হয়েছেন?",
        options: [
            "বল্লভভাই প্যাটেল",
            "মৌলানা আবুল কালাম আজাদ",
            "গোপীনাথ বরদলৈ",
            "মদনমোহন মালব্য"
        ],
        correctAnswer: 3,
        explanation: "Madan Mohan Malaviya received Bharat Ratna posthumously in 2014."
    },
    {
        question: "কোনটি দেশের 13তম প্রধান বন্দর হতে চলেছে?",
        options: ["পোর্ট ব্লেয়ার", "পারাদীপ", "এনায়েম", "কোচি"],
        correctAnswer: 2,
        explanation: "Enayem was proposed to be the 13th major port."
    },
    {
        question: "আনন্দমঠ গ্রন্থের লেখক হলেন",
        options: [
            "মধুসূদন দত্ত",
            "স্বামী বিবেকানন্দ",
            "নবীনচন্দ্র সেন",
            "বঙ্কিমচন্দ্র চট্টোপাধ্যায়"
        ],
        correctAnswer: 3,
        explanation: "Ananda Math was written by Bankim Chandra Chattopadhyay."
    },
    {
        question: "এর মধ্যে কোন দেশ গ্রীষ্মকালে ক্রিসমাস উৎসব পালন করে?",
        options: ["USA", "কানাডা", "গ্রেট ব্রিটেন", "অস্ট্রেলিয়া"],
        correctAnswer: 3,
        explanation: "Australia celebrates Christmas in summer (December)."
    },
    {
        question: "মহেঞ্জোদারো ধ্বংসাবশেষ কে আবিষ্কার করেন?",
        options: [
            "জন মার্শাল",
            "দয়ারাম সাহানি",
            "রাখালদাস বন্দ্যোপাধ্যায়",
            "বি. বি. লাল"
        ],
        correctAnswer: 1,
        explanation: "Mohenjodaro was discovered by Dayaram Sahani."
    },

    // Section IV: Arithmetic (46-57+)
    {
        question: "500 টাকার উপর 40% ছাড় এবং 500 টাকার উপর পরপর 36% এবং 4% ছাড়ের পার্থক্য হল",
        options: ["2 টাকা", "7.20 টাকা", "0 টাকা", "18 টাকা"],
        correctAnswer: 1,
        explanation: "40% of 500 = 200. Successive discounts: First 36% = 180, then 4% of remaining 320 = 12.8. Total discount = 192.8. Difference = 200 - 192.8 = 7.20."
    },
    {
        question: "16 টি মেশিন 1000 টি যন্ত্রাংশ তৈরি করতে 27 দিন লাগে। আরও 2 টি মেশিন বসানো হলে একই সংখ্যক যন্ত্রাংশ তৈরি করতে কত দিন কম লাগবে?",
        options: ["3 দিন", "7 দিন", "2 দিন", "4 দিন"],
        correctAnswer: 0,
        explanation: "More machines, less days. Inverse proportion calculation gives 3 days less."
    },
    {
        question: "পাঁচটি ঘন্টা একসাথে বাজার পর যথাক্রমে 9, 6, 4, 10 এবং 8 সেকেন্ড বিরতিতে বাজে। প্রথম একসাথে বাজার পর থেকে এক ঘন্টায় সেগুলি কতবার একসাথে বাজবে?",
        options: ["11 বার", "8 বার", "12 বার", "9 বার"],
        correctAnswer: 0,
        explanation: "LCM of intervals = 360 sec = 6 min. In 60 min, they ring together 60/6 + 1 = 11 times."
    },
    {
        question: "একটি অংশীদারী ব্যবসায় A 1200 টাকা 5 মাসের জন্য এবং B 750 টাকা 4 মাসের জন্য দেয়। লাভ 450 টাকা হলে A ও B এর লাভের অনুপাত কত?",
        options: ["3:2", "5:3", "2:1", "4:3"],
        correctAnswer: 2,
        explanation: "A's investment: 1200×5 = 6000; B's investment: 750×4 = 3000. Ratio = 6000:3000 = 2:1."
    },
    {
        question: "1.7, 0.51 এবং 0.153 সংখ্যাগুলির গ.সা.গু. হল",
        options: ["0.17", "1.7", "0.017", "0.0017"],
        correctAnswer: 0,
        explanation: "HCF of 1.7, 0.51, 0.153 = 0.17."
    },
    {
        question: "14 জন লোক 12 দিনে একটি নলকূপ বসাতে পারে। যদি 8 দিনে নলকূপটি বসাতে হয় তাহলে অতিরিক্ত কতজন লোক লাগবে?",
        options: ["9 জন", "7 জন", "3 জন", "6 জন"],
        correctAnswer: 1,
        explanation: "14×12 = 168 man-days needed. For 8 days: 168/8 = 21 persons needed. Extra = 21-14 = 7 persons."
    },
    {
        question: "একটি দ্রব্যের উপর পরপর 10%, 20% এবং 30% ছাড়ের সমতুল্য ছাড় হল",
        options: ["45.4%", "49.6%", "52.7%", "58.2%"],
        correctAnswer: 1,
        explanation: "Equivalent discount = 100 - (0.9×0.8×0.7×100) = 100 - 50.4 = 49.6%."
    },
    {
        question: "একটি দ্রব্যের ক্রয়মূল্য 620 টাকা এবং এটি ধার্যমূল্যের থেকে 25% কম। দ্রব্যটি যদি 15% ছাড়ে বিক্রি করা হয় তবে শতকরা লাভ কত?",
        options: [
            "12 2/3%",
            "13 1/3%",
            "11 1/3%",
            "14 2/3%"
        ],
        correctAnswer: 1,
        explanation: "Marked price = 620/0.75 = 826.67. Selling price after 15% discount = 826.67×0.85 = 702.67. Profit % = ((702.67-620)/620)×100 ≈ 13.33% = 13 1/3%."
    },
    {
        question: "তিনটি ভগ্নাংশের যোগফল 2 11/24। যদি বড় ও ছোট ভগ্নাংশের অনুপাত 7:6 হয় এবং এই অনুপাতটি মধ্যম ভগ্নাংশ থেকে 1/3 বেশি হয় তবে ভগ্নাংশ তিনটি হবে",
        options: [
            "7/8, 3/10, 7/9",
            "7/9, 2/3, 3/5",
            "3/5, 4/7, 2/3",
            "7/8, 5/6, 3/4"
        ],
        correctAnswer: 3,
        explanation: "Let fractions be a, b, c where a>c. a/c = 7/6, a = b + 1/3. Solving gives fractions 7/8, 5/6, 3/4."
    },
    {
        question: "একটি আয়তক্ষেত্রের দৈর্ঘ্য 15% বাড়লে এবং প্রস্থ 15% কমলে, ক্ষেত্রফলের শতকরা পরিবর্তন হবে",
        options: [
            "1.5% বৃদ্ধি",
            "2 2/3% হ্রাস",
            "4/9% বৃদ্ধি",
            "2 1/4% হ্রাস"
        ],
        correctAnswer: 3,
        explanation: "Area change = (1.15 × 0.85 - 1) × 100 = (0.9775 - 1) × 100 = -2.25% = 2 1/4% decrease."
    },
    {
        question: "একটি 70 মিটার লম্বা ট্রেন ঘণ্টায় 75 কিমি বেগে 105 মিটার লম্বা একটি প্ল্যাটফর্ম পার হতে সময় নেয়",
        options: [
            "4 1/5 সেকেন্ড",
            "8 2/5 সেকেন্ড",
            "5 2/3 সেকেন্ড",
            "3 1/2 সেকেন্ড"
        ],
        correctAnswer: 1,
        explanation: "Total distance = 70+105 = 175 m. Speed = 75 km/h = 75×5/18 = 20.83 m/s. Time = 175/20.83 ≈ 8.4 sec = 8 2/5 sec."
    }
];

// Note: Some questions from the original PDF were incomplete/unreadable in the provided text.
// This array contains all readable questions with estimated correct answers where necessary.























// Timer function (same as gk.js)
function initTimer(seconds, onTimeUpCallback) {
    let timeLeft = seconds;
    let timerInterval;
    
    function updateDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.textContent = timeLeft;
            
            // Update progress bar
            const progressBar = document.querySelector('.progress');
            if (progressBar) {
                const progressPercentage = (timeLeft / seconds) * 100;
                progressBar.style.width = `${progressPercentage}%`;
                
                // Change color based on time
                if (timeLeft <= 10) {
                    progressBar.style.backgroundColor = '#ff4757';
                } else if (timeLeft <= 20) {
                    progressBar.style.backgroundColor = '#ffa502';
                } else {
                    progressBar.style.backgroundColor = '#2ed573';
                }
            }
        }
    }
    
    function startTimer() {
        updateDisplay();
        timerInterval = setInterval(() => {
            timeLeft--;
            updateDisplay();
            
            if (timeLeft <= 0) {
                stopTimer();
                if (onTimeUpCallback) onTimeUpCallback();
            }
        }, 1000);
    }
    
    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
        }
    }
    
    function resetTimer(newSeconds = seconds) {
        stopTimer();
        timeLeft = newSeconds;
        updateDisplay();
    }
    
    return {
        startTimer,
        stopTimer,
        resetTimer,
        getTimeLeft: () => timeLeft
    };
}

// Format time (same as gk.js)
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Sound effects (same as gk.js)
function playSound(type) {
    // Create audio context for simple beeps
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        if (type === 'correct') {
            oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } else if (type === 'incorrect') {
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        }
    } catch (e) {
        console.log("Audio not supported");
    }
}

// Confetti effect (same as gk.js)
function createConfetti() {
    const confettiContainer = document.querySelector('.quiz-container');
    if (!confettiContainer) return;
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            top: -20px;
            left: ${Math.random() * 100}%;
            opacity: 0.8;
            z-index: 1000;
        `;
        
        confettiContainer.appendChild(confetti);
        
        // Animation
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 1000 + Math.random() * 2000,
            easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}

// Main quiz logic (same structure as gk.js)
document.addEventListener('DOMContentLoaded', function() {
    // Quiz state variables
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    let quizTimer;
    let questionTimer;
    let quizStartTime;
    let quizCompleted = false;
    let autoAdvanceInterval;
    let advanceProgressInterval;

    // DOM elements
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestionElement = document.getElementById('current-question');
    const scoreElement = document.getElementById('score');
    const totalTimeElement = document.getElementById('total-time');
    const timerElement = document.getElementById('timer');
    const feedbackElement = document.getElementById('feedback');
    const resultContainer = document.getElementById('result-container');
    const finalScoreElement = document.getElementById('final-score');
    const resultMessageElement = document.getElementById('result-message');
    const correctCountElement = document.getElementById('correct-count');
    const incorrectCountElement = document.getElementById('incorrect-count');
    const timeTakenElement = document.getElementById('time-taken');
    const percentageElement = document.getElementById('percentage');
    const restartBtn = document.getElementById('restart-btn');
    const homeBtn = document.getElementById('home-btn');

    // Initialize the quiz
    function initQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizCompleted = false;
        quizStartTime = Date.now();
        
        // Hide result container
        resultContainer.style.display = 'none';
        
        // Show quiz elements
        document.querySelector('.question-container').style.display = 'block';
        document.querySelector('.timer-container').style.display = 'block';
        
        // Update UI
        updateScore();
        updateQuestionCounter();
        updateTotalTime();
        
        // Load first question
        loadQuestion(currentQuestionIndex);
        
        // Start quiz timer
        startQuizTimer();
    }

    // Load a question
    function loadQuestion(index) {
        if (index >= pyqQuestions.length) {
            endQuiz();
            return;
        }
        
        const question = pyqQuestions[index];
        
        // Update question text
        questionText.textContent = question.question;
        
        // Clear options container
        optionsContainer.innerHTML = '';
        
        // Create option elements
        const optionLetters = ['A', 'B', 'C', 'D'];
        
        question.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = i;
            
            // Check if user has already answered this question
            if (userAnswers[index] !== undefined) {
                if (userAnswers[index] === i) {
                    optionElement.classList.add('selected');
                }
                if (i === question.correctAnswer) {
                    optionElement.classList.add('correct');
                } else if (userAnswers[index] === i && userAnswers[index] !== question.correctAnswer) {
                    optionElement.classList.add('incorrect');
                }
            }
            
            optionElement.innerHTML = `
                <div class="option-letter">${optionLetters[i]}</div>
                <div class="option-text">${option}</div>
            `;
            
            // Add click event if not already answered
            if (userAnswers[index] === undefined) {
                optionElement.addEventListener('click', () => selectOption(i));
            }
            
            optionsContainer.appendChild(optionElement);
        });
        
        // Update UI
        updateQuestionCounter();
        updateProgressBar(index + 1, pyqQuestions.length);
        
        // Reset feedback
        feedbackElement.className = 'feedback';
        feedbackElement.textContent = '';
        
        // Start question timer
        startQuestionTimer();
    }

    // Select an option
    function selectOption(optionIndex) {
        // Prevent multiple selections
        if (userAnswers[currentQuestionIndex] !== undefined) return;
        
        // Mark the selected option
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.classList.remove('selected');
            option.style.pointerEvents = 'none'; // Disable further clicks
        });
        
        options[optionIndex].classList.add('selected');
        
        // Check answer
        const isCorrect = optionIndex === pyqQuestions[currentQuestionIndex].correctAnswer;
        userAnswers[currentQuestionIndex] = optionIndex;
        
        if (isCorrect) {
            score++;
            updateScore();
            showFeedback(true);
            
            // Highlight correct answer
            options[pyqQuestions[currentQuestionIndex].correctAnswer].classList.add('correct');
        } else {
            showFeedback(false, pyqQuestions[currentQuestionIndex].options[pyqQuestions[currentQuestionIndex].correctAnswer]);
            
            // Highlight correct and incorrect answers
            options[pyqQuestions[currentQuestionIndex].correctAnswer].classList.add('correct');
            options[optionIndex].classList.add('incorrect');
        }
        
        // Stop question timer
        if (questionTimer && questionTimer.stopTimer) {
            questionTimer.stopTimer();
        }
        
        // Auto advance to next question after 2 seconds
        startAutoAdvance(2000);
    }

    // Auto advance to next question
    function startAutoAdvance(duration) {
        // Create or show auto-advance progress bar
        let progressBar = document.querySelector('.auto-advance-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'auto-advance-progress';
            progressBar.innerHTML = '<div class="advance-progress"></div>';
            feedbackElement.parentNode.insertBefore(progressBar, feedbackElement.nextSibling);
        }
        
        const progressFill = progressBar.querySelector('.advance-progress');
        progressBar.classList.add('active');
        progressFill.style.width = '0%';
        
        // Clear any existing intervals
        if (autoAdvanceInterval) clearTimeout(autoAdvanceInterval);
        if (advanceProgressInterval) clearInterval(advanceProgressInterval);
        
        // Start progress bar animation
        let progress = 0;
        const increment = 100 / (duration / 50);
        
        advanceProgressInterval = setInterval(() => {
            progress += increment;
            progressFill.style.width = `${Math.min(progress, 100)}%`;
        }, 50);
        
        // Auto advance after duration
        autoAdvanceInterval = setTimeout(() => {
            progressBar.classList.remove('active');
            clearInterval(advanceProgressInterval);
            goToNextQuestion();
        }, duration);
    }

    // Go to next question
    function goToNextQuestion() {
        currentQuestionIndex++;
        
        if (currentQuestionIndex < pyqQuestions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            endQuiz();
        }
    }

    // Start question timer (30 seconds)
    function startQuestionTimer() {
        // Stop previous timer if exists
        if (questionTimer && questionTimer.stopTimer) {
            questionTimer.stopTimer();
        }
        
        questionTimer = initTimer(30, onTimeUp);
        if (questionTimer) {
            questionTimer.startTimer();
        }
    }

    // Handle time up for a question
    function onTimeUp() {
        // Disable all options
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Mark the correct answer
        const correctIndex = pyqQuestions[currentQuestionIndex].correctAnswer;
        options[correctIndex].classList.add('correct');
        
        // Show feedback
        showFeedback(false, pyqQuestions[currentQuestionIndex].options[correctIndex]);
        
        // Auto advance to next question after 2 seconds
        startAutoAdvance(2000);
    }

    // Show feedback
    function showFeedback(isCorrect, correctAnswer = null) {
        // Update feedback message
        if (isCorrect) {
            feedbackElement.textContent = "Correct! 🎉";
            feedbackElement.className = 'feedback correct show';
            playSound('correct');
            createConfetti();
        } else {
            feedbackElement.textContent = correctAnswer ? 
                `Incorrect. Correct answer: ${correctAnswer}` : 
                "Time's up!";
            feedbackElement.className = 'feedback incorrect show';
            playSound('incorrect');
        }
    }

    // Start quiz timer (5 minutes total)
    function startQuizTimer() {
        let totalSeconds = 1200; // 5 minutes
        
        const updateTimerDisplay = () => {
            totalTimeElement.textContent = formatTime(totalSeconds);
        };
        
        updateTimerDisplay();
        
        const timerInterval = setInterval(() => {
            if (quizCompleted) {
                clearInterval(timerInterval);
                return;
            }
            
            totalSeconds--;
            updateTimerDisplay();
            
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                endQuiz();
            }
        }, 1000);
    }

    // Update question counter
    function updateQuestionCounter() {
        currentQuestionElement.textContent = `${currentQuestionIndex + 1}/${pyqQuestions.length}`;
    }

    // Update score display
    function updateScore() {
        scoreElement.textContent = score;
    }

    // Update total time display
    function updateTotalTime() {
        totalTimeElement.textContent = "05:00";
    }

    // Update progress bar
    function updateProgressBar(current, total) {
        const progressBar = document.querySelector('.progress');
        if (progressBar) {
            const percentage = (current / total) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    }

    // End the quiz
    function endQuiz() {
        quizCompleted = true;
        
        // Stop timers
        if (questionTimer && questionTimer.stopTimer) {
            questionTimer.stopTimer();
        }
        
        // Stop auto-advance
        if (autoAdvanceInterval) clearTimeout(autoAdvanceInterval);
        if (advanceProgressInterval) clearInterval(advanceProgressInterval);
        
        // Calculate quiz duration
        const quizDuration = Math.floor((Date.now() - quizStartTime) / 1000);
        
        // Calculate results
        const correctCount = score;
        const incorrectCount = pyqQuestions.length - score;
        const percentage = Math.round((score / pyqQuestions.length) * 100);
        
        // Update result display
        finalScoreElement.textContent = `${score}/${pyqQuestions.length}`;
        correctCountElement.textContent = correctCount;
        incorrectCountElement.textContent = incorrectCount;
        timeTakenElement.textContent = formatTime(quizDuration);
        percentageElement.textContent = `${percentage}%`;
        
        // Set result message based on performance
        let message = "";
        if (percentage >= 90) {
            message = "অসাধারণ! আপনি সত্যিই একজন জ্ঞানী! 🎉";
        } else if (percentage >= 70) {
            message = "চমৎকার! আপনার জ্ঞানের ভাণ্ডার সমৃদ্ধ! 👍";
        } else if (percentage >= 50) {
            message = "ভালো হয়েছে! আপনি বেশ কিছু জানেন! 👏";
        } else {
            message = "চেষ্টা চালিয়ে যান! পরবর্তীতে আরও ভালো করবেন! 💪";
        }
        resultMessageElement.textContent = message;
        
        // Show result container with animation
        document.querySelector('.question-container').style.display = 'none';
        document.querySelector('.timer-container').style.display = 'none';
        resultContainer.style.display = 'block';
        
        // Create confetti for good scores
        if (percentage >= 70) {
            createConfetti();
        }
    }

    // Event Listeners for result buttons
    restartBtn.addEventListener('click', function() {
        initQuiz();
    });

    homeBtn.addEventListener('click', function() {
        window.location.href = "/subject";  // Change this to your subject page URL
    });

    // Initialize the quiz when page loads
    initQuiz();

});
