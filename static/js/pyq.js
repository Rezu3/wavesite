// static/js/pyq.js

// PYQ (Bengali) Questions for Group C/D
const pyqQuestions = [
    {
        question: "সিন্ধু সভ্যতার কোন শহরটি 'মৃতের স্তূপ' নামে পরিচিত?",
        options: ["হরপ্পা", "লোথাল", "মহেঞ্জোদারো", "কালিবঙ্গান"],
        correctAnswer: 2,
        explanation: "মহেঞ্জোদারো শহরটির একটি অংশ বহু স্তরে ধ্বংসাবশেষ ও দেহাবশেষ পাওয়ায় প্রত্নতাত্ত্বিকরা একে 'মৃতের স্তূপ' নাম দেন।"
    },
    {
        question: "কোন মুঘল সম্রাট 'দীন-ই-ইলাহি' ধর্ম প্রবর্তন করেন?",
        options: ["বাবর", "হুমায়ুন", "আকবর", "জাহাঙ্গীর"],
        correctAnswer: 2,
        explanation: "মুঘল সম্রাট আকবর ১৫৮২ সালে 'দীন-ই-ইলাহি' নামে একটি নতুন ধর্ম প্রবর্তন করেন।"
    },
    {
        question: "বাংলাদেশের মুক্তিযুদ্ধ শুরু হয় কত সালে?",
        options: ["১৯৭০", "১৯৭১", "১৯৭২", "১৯৬৯"],
        correctAnswer: 1,
        explanation: "বাংলাদেশের মুক্তিযুদ্ধ ১৯৭১ সালের ২৬ মার্চ শুরু হয়।"
    },
    {
        question: "কোন সালে ভারতে প্রথম চা-বাগান তৈরি হয়?",
        options: ["১৮৩৫", "১৮৪০", "১৮৫০", "১৮২৩"],
        correctAnswer: 3,
        explanation: "১৮২৩ সালে আসামের চাবুয়াতে প্রথম চা-বাগান তৈরি হয়।"
    },
    {
        question: "সাঁওতাল বিদ্রোহ কত সালে সংঘটিত হয়?",
        options: ["১৮৫৫-৫৬", "১৮৫৭-৫৮", "১৮৪৫-৪৬", "১৮৭৫-৭৬"],
        correctAnswer: 0,
        explanation: "সাঁওতাল বিদ্রোহ ১৮৫৫-৫৬ সালে সংঘটিত হয়।"
    },
    {
        question: "ভারতের প্রথম মহিলা প্রধানমন্ত্রী কে ছিলেন?",
        options: ["সোনিয়া গান্ধী", "মমতা ব্যানার্জী", "ইন্দিরা গান্ধী", "প্রতিভা পাটিল"],
        correctAnswer: 2,
        explanation: "ইন্দিরা গান্ধী ভারতের প্রথম মহিলা প্রধানমন্ত্রী ছিলেন।"
    },
    {
        question: "বাংলা ভাষা আন্দোলন কত সালে সংঘটিত হয়?",
        options: ["১৯৪৭", "১৯৫২", "১৯৬৫", "১৯৭১"],
        correctAnswer: 1,
        explanation: "বাংলা ভাষা আন্দোলন ১৯৫২ সালে সংঘটিত হয়।"
    },
    {
        question: "কোন সালে কলকাতা ভারতের রাজধানী ছিল?",
        options: ["১৯০১-১৯১১", "১৮৫৮-১৯১১", "১৭৭২-১৯১১", "১৮৫৭-১৯৪৭"],
        correctAnswer: 2,
        explanation: "১৭৭২ থেকে ১৯১১ সাল পর্যন্ত কলকাতা ভারতের রাজধানী ছিল।"
    },
    {
        question: "'আনন্দমঠ' উপন্যাসের রচয়িতা কে?",
        options: ["রবীন্দ্রনাথ ঠাকুর", "বঙ্কিমচন্দ্র চট্টোপাধ্যায়", "শরৎচন্দ্র চট্টোপাধ্যায়", "মাইকেল মধুসূদন দত্ত"],
        correctAnswer: 1,
        explanation: "'আনন্দমঠ' উপন্যাস বঙ্কিমচন্দ্র চট্টোপাধ্যায় রচনা করেন।"
    },
    {
        question: "বাংলাদেশের জাতীয় প্রতীক কী?",
        options: ["শাপলা", "চা গাছ", "পদ্ম", "ধান"],
        correctAnswer: 0,
        explanation: "বাংলাদেশের জাতীয় প্রতীক শাপলা ফুল।"
    }
];

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
        let totalSeconds = 300; // 5 minutes
        
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