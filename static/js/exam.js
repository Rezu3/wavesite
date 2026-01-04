// ==================== CONFIGURATION - EDIT HERE ====================
const CONFIG = {
    examInfo: {
        subject: "Life Science",
        marks: 20,
        duration: 10, // Exam duration in minutes
        type: "Examination"
    },
    
    security: {
        blockTime: 5, // Block time in minutes for individual users
        blockIndividual: true
    },
    
    // ===== USER CREDENTIALS - ADD/EDIT HERE =====
    validCredentials: [
        { username: "Tanu", password: "8795" },
        { username: "Ajmira", password: "7972" },
        { username: "teacher", password: "teacher123" },
        { username: "admin", password: "admin123" }
    ],
    
    // ===== EXAM QUESTIONS - ADD/EDIT HERE =====
     questions: [
        {
            id: 1,
            question: "উদ্ভিদের ট্রপিক চলন নিয়ন্ত্রণকারী হরমোন কোনটি?",
            options: ["সাইটোকাইনিন", "জিব্বেরেলিন", "অক্সিন", "ইথিলিন"],
            correctAnswer: 2
        },
        {
            id: 2,
            question: "'মাস্টার গ্ল্যান্ড' (Master Gland) কাকে বলা হয়?",
            options: ["থাইরয়েড", "অ্যাড্রিনাল", "পিটুইটারি", "অগ্ন্যাশয়"],
            correctAnswer: 2
        },
        {
            id: 3,
            question: "মানুষের চোখের লেন্সের ফোকাস দৈর্ঘ্য পরিবর্তন করতে সাহায্য করে কোন পেশি?",
            options: ["আইরিস পেশি", "রেটিনা পেশি", "সিলিয়ারি পেশি", "কর্নিয়া পেশি"],
            correctAnswer: 2
        },
        {
            id: 4,
            question: "নিচের কোনটি নিউরোট্রান্সমিটার?",
            options: ["হরমোন", "অ্যাসিটাইলকোলিন", "উৎসেচক", "রড কোষ"],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "কোশ বিভাজনের সময় বেম তন্তু (spindle fibre) সৃষ্টিতে সাহায্য করে কোন অঙ্গাণু?",
            options: ["মাইটোকনড্রিয়া", "সেন্ট্রোজোম", "রাইবোজোম", "নিউক্লিয়াস"],
            correctAnswer: 1
        },
        {
            id: 6,
            question: "DNA-তে অ্যাডেনিন (A)-এর পরিপূরক ক্ষারক কোনটি?",
            options: ["গুয়ানিন (G)", "সাইটোসিন (C)", "থাইমিন (T)", "ইউরাসিল (U)"],
            correctAnswer: 2
        },
        {
            id: 7,
            question: "যৌন জননের একক কী?",
            options: ["রেণু", "দেহকোশ", "গ্যামেট", "জাইগোট"],
            correctAnswer: 2
        },
        {
            id: 8,
            question: "মানবদেহে ক্রোমোজোমের সংখ্যা কত জোড়া?",
            options: ["২২ জোড়া", "২৪ জোড়া", "২৩ জোড়া", "৪৫ জোড়া"],
            correctAnswer: 2
        },
        {
            id: 9,
            question: "মেন্ডেলের দ্বিসংকর জনন পরীক্ষায় F2 জনুতে ফিনোটাইপ অনুপাত কত?",
            options: ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"],
            correctAnswer: 2
        },
        {
            id: 10,
            question: "কোন রোগটিকে 'রয়্যাল ডিজিজ' বলা হয়?",
            options: ["থ্যালাসেমিয়া", "বর্ণান্ধতা", "হিমোফিলিয়া", "ম্যালেরিয়া"],
            correctAnswer: 2
        },
        {
            id: 11,
            question: "অ্যালিল (Allele) বলতে কী বোঝায়?",
            options: ["একই ক্রোমোজোমে অবস্থিত জিন", "একই জিনের বিভিন্ন রূপ", "একটি সম্পূর্ণ ক্রোমোজোম সেট", "DNA-এর একটি খণ্ড"],
            correctAnswer: 1
        },
        {
            id: 12,
            question: "থ্যালাসেমিয়া রোগীর দেহে কোন উপাদানটি কম উৎপন্ন হয়?",
            options: ["শ্বেত রক্তকণিকা", "প্লাজমা", "হিমোগ্লোবিন", "হরমোন"],
            correctAnswer: 2
        },
        {
            id: 13,
            question: "'অরিজিন অফ স্পিসিস' (Origin of Species) বইটি কার লেখা?",
            options: ["ল্যামার্ক", "হুগো দ্য ভ্রিস", "ডারউইন", "মেন্ডেল"],
            correctAnswer: 2
        },
        {
            id: 14,
            question: "ঘোড়ার বিবর্তন প্রক্রিয়ায় আদিমতম পূর্বপুরুষ কোনটি?",
            options: ["মেরিচিপ্পাস", "ইকুয়াস", "মেগাহি্প্পাস", "ইওহিপ্পাস"],
            correctAnswer: 3
        },
        {
            id: 15,
            question: "তিমির ফ্লিপার এবং পাখির ডানা হলো কীসের উদাহরণ?",
            options: ["সমবৃত্তীয় অঙ্গ", "সমসংস্থ অঙ্গ", "লুপ্তপ্রায় অঙ্গ", "জীবাশ্ম"],
            correctAnswer: 1
        },
        {
            id: 16,
            question: "উট-এর মূত্রে জলের পরিমাণ কম থাকে, এটি হলো একপ্রকার কী?",
            options: ["আচরণগত অভিযোজন", "শারীরবৃত্তীয় অভিযোজন", "গঠনগত অভিযোজন", "জীবনচক্রীয় অভিযোজন"],
            correctAnswer: 1
        },
        {
            id: 17,
            question: "বায়ুমণ্ডলে নাইট্রোজেনের স্বাভাবিক পরিমাণ কত?",
            options: ["21%", "78%", "0.03%", "0.9%"],
            correctAnswer: 1
        },
        {
            id: 18,
            question: "ওজোন স্তরের ক্ষয়ের জন্য প্রধানত দায়ী কোনটি?",
            options: ["কার্বন ডাই অক্সাইড", "সালফার ডাই অক্সাইড", "মিথেন", "CFC (ক্লোরোফ্লোরোকার্বন)"],
            correctAnswer: 3
        },
        {
            id: 19,
            question: "পশ্চিমবঙ্গের একটি ব্যাঘ্র সংরক্ষণ প্রকল্প (Tiger Reserve) কোনটি?",
            options: ["জলদাপাড়া", "চাপরামারি", "সুন্দরবন", "গরুমারা"],
            correctAnswer: 2
        },
        {
            id: 20,
            question: "ইন সিটু সংরক্ষণ (In situ conservation)-এর একটি উদাহরণ হলো:",
            options: ["বোটানিক্যাল গার্ডেন", "চিড়িয়াখানা", "জাতীয় উদ্যান", "বীজ ব্যাঙ্ক"],
            correctAnswer: 2
        }
    ]
};
// ==================== END CONFIGURATION ====================

// Application State
let currentState = {
    currentUser: null,
    currentSection: 'login',
    examStarted: false,
    examSubmitted: false,
    examBlocked: false,
    blockEndTime: null,
    currentQuestionIndex: 0,
    answers: {},
    startTime: null,
    timerInterval: null,
    timeRemaining: CONFIG.examInfo.duration * 60
};

// DOM Elements
const sections = {
    login: document.getElementById('login-section'),
    examInfo: document.getElementById('exam-info-section'),
    exam: document.getElementById('exam-section'),
    result: document.getElementById('result-section'),
    blocked: document.getElementById('blocked-section')
};

// ==================== USER SPECIFIC BLOCK SYSTEM ====================

// Check if specific user is blocked
function isUserBlocked(username) {
    const blockData = localStorage.getItem('exam_blocked_users');
    if (blockData) {
        const blockedUsers = JSON.parse(blockData);
        
        if (blockedUsers[username]) {
            const blockEndTime = blockedUsers[username];
            if (Date.now() < blockEndTime) {
                return {
                    blocked: true,
                    endTime: blockEndTime,
                    remainingTime: Math.max(0, blockEndTime - Date.now())
                };
            } else {
                delete blockedUsers[username];
                localStorage.setItem('exam_blocked_users', JSON.stringify(blockedUsers));
                return { blocked: false };
            }
        }
    }
    return { blocked: false };
}

// Block specific user
function blockUser(username) {
    const blockEndTime = Date.now() + (CONFIG.security.blockTime * 60 * 1000);
    const blockedUsers = JSON.parse(localStorage.getItem('exam_blocked_users') || '{}');
    blockedUsers[username] = blockEndTime;
    localStorage.setItem('exam_blocked_users', JSON.stringify(blockedUsers));
}

// Unblock user
function unblockUser(username) {
    const blockedUsers = JSON.parse(localStorage.getItem('exam_blocked_users') || '{}');
    delete blockedUsers[username];
    localStorage.setItem('exam_blocked_users', JSON.stringify(blockedUsers));
}

// Show user-specific blocked screen
function showUserBlockedScreen(username, remainingTime) {
    document.getElementById('blocked-username').textContent = username;
    showSection('blocked');
    startUserBlockCountdown(remainingTime);
}

// Start countdown for specific user
function startUserBlockCountdown(remainingTime) {
    const countdownElement = document.getElementById('countdown-timer');
    
    function updateCountdown() {
        const remaining = remainingTime;
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        
        countdownElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (remaining > 1000) {
            remainingTime -= 1000;
            setTimeout(updateCountdown, 1000);
        } else {
            document.querySelector('.blocked-message').innerHTML = `
                <span id="blocked-username">${currentState.currentUser}</span>, 
                you can now retake the exam.
            `;
            document.querySelector('.countdown-box').innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span style="color: #28a745;">Block time completed! You can now login again.</span>
            `;
            document.getElementById('return-login-btn').innerHTML = `<i class="fas fa-sign-in-alt"></i> Login Now`;
        }
    }
    
    updateCountdown();
}

// Setup page leave detection
function setupPageLeaveDetection() {
    history.pushState(null, null, location.href);
    window.onpopstate = function() {
        if (currentState.examStarted && !currentState.examSubmitted && currentState.currentUser) {
            handleUserLeavingExam();
            return false;
        }
    };
    
    window.onbeforeunload = function(e) {
        if (currentState.examStarted && !currentState.examSubmitted && currentState.currentUser) {
            handleUserLeavingExam();
            const message = "Are you sure you want to leave? You will be blocked from re-entering for 5 minutes.";
            e.returnValue = message;
            return message;
        }
    };
    
    window.addEventListener('pagehide', function() {
        if (currentState.examStarted && !currentState.examSubmitted && currentState.currentUser) {
            handleUserLeavingExam();
        }
    });
}

// Handle when user leaves exam
function handleUserLeavingExam() {
    if (!currentState.examSubmitted && currentState.currentUser) {
        blockUser(currentState.currentUser);
        
        const examState = {
            username: currentState.currentUser,
            answers: currentState.answers,
            timeSpent: CONFIG.examInfo.duration * 60 - currentState.timeRemaining,
            leftAt: Date.now()
        };
        localStorage.setItem('exam_left_state', JSON.stringify(examState));
        
        if (currentState.timerInterval) {
            clearInterval(currentState.timerInterval);
        }
    }
}

// Return to login from blocked screen
function returnFromBlocked() {
    localStorage.removeItem('current_exam_user');
    currentState.currentUser = null;
    currentState.examBlocked = false;
    showSection('login');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// ==================== LOGIN SYSTEM ====================

// Handle login
function handleLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorElement = document.getElementById('login-error');
    
    errorElement.style.display = 'none';
    
    // Check if user is blocked
    const blockStatus = isUserBlocked(username);
    if (blockStatus.blocked) {
        currentState.currentUser = username;
        currentState.examBlocked = true;
        currentState.blockEndTime = blockStatus.endTime;
        showUserBlockedScreen(username, blockStatus.remainingTime);
        return;
    }
    
    // Validate credentials
    const isValid = CONFIG.validCredentials.some(cred => 
        cred.username === username && cred.password === password
    );
    
    if (!isValid) {
        errorElement.textContent = 'Invalid username or password. Please try again.';
        errorElement.style.display = 'block';
        return;
    }
    
    // Set current user
    currentState.currentUser = username;
    localStorage.setItem('current_exam_user', username);
    document.getElementById('logged-in-user').textContent = username;
    showSection('examInfo');
}

// ==================== EXAM SYSTEM ====================

// Start exam
function startExam() {
    if (!currentState.currentUser) {
        alert('Please login first');
        showSection('login');
        return;
    }
    
    const examSession = {
        username: currentState.currentUser,
        startTime: Date.now(),
        status: 'started'
    };
    localStorage.setItem('current_exam_session', JSON.stringify(examSession));
    
    startTimer();
    loadQuestions();
    setupPageLeaveDetection();
    showSection('exam');
    currentState.examStarted = true;
    currentState.startTime = Date.now();
}

// Start timer
function startTimer() {
    currentState.timeRemaining = CONFIG.examInfo.duration * 60;
    updateTimerDisplay();
    
    currentState.timerInterval = setInterval(() => {
        currentState.timeRemaining--;
        updateTimerDisplay();
        
        if (currentState.timeRemaining <= 0) {
            clearInterval(currentState.timerInterval);
            submitExam();
        }
    }, 1000);
}

// Update timer display
function updateTimerDisplay() {
    const minutes = Math.floor(currentState.timeRemaining / 60);
    const seconds = currentState.timeRemaining % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Load questions
function loadQuestions() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    CONFIG.questions.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = `question-card ${index === 0 ? 'active' : ''}`;
        questionCard.id = `question-${q.id}`;
        
        questionCard.innerHTML = `
            <div class="question-number">Question ${q.id}</div>
            <div class="question-text">${q.question}</div>
            <div class="options-container">
                ${q.options.map((option, optIndex) => `
                    <div class="option" data-question="${q.id}" data-option="${optIndex}">
                        <input type="radio" 
                               name="question-${q.id}" 
                               id="q${q.id}-opt${optIndex}"
                               ${currentState.answers[q.id] === optIndex ? 'checked' : ''}>
                        <label class="option-label" for="q${q.id}-opt${optIndex}">
                            ${String.fromCharCode(65 + optIndex)}. ${option}
                        </label>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(questionCard);
        
        questionCard.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', handleOptionSelect);
        });
    });
    
    document.getElementById('total-questions').textContent = CONFIG.questions.length;
    document.getElementById('current-question').textContent = 1;
    updateAnsweredCount();
}

// Handle option selection
function handleOptionSelect(e) {
    const optionDiv = e.currentTarget;
    const questionId = parseInt(optionDiv.dataset.question);
    const optionIndex = parseInt(optionDiv.dataset.option);
    
    currentState.answers[questionId] = optionIndex;
    
    const questionCard = document.getElementById(`question-${questionId}`);
    questionCard.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    optionDiv.classList.add('selected');
    
    const radio = optionDiv.querySelector('input[type="radio"]');
    radio.checked = true;
    
    updateAnsweredCount();
}

// Update answered count
function updateAnsweredCount() {
    const answered = Object.keys(currentState.answers).length;
    document.getElementById('answered-count').textContent = answered;
}

// Show next question
function showNextQuestion() {
    if (currentState.currentQuestionIndex < CONFIG.questions.length - 1) {
        document.getElementById(`question-${CONFIG.questions[currentState.currentQuestionIndex].id}`).classList.remove('active');
        currentState.currentQuestionIndex++;
        document.getElementById(`question-${CONFIG.questions[currentState.currentQuestionIndex].id}`).classList.add('active');
        document.getElementById('current-question').textContent = currentState.currentQuestionIndex + 1;
        updateNavigationButtons();
        scrollToCurrentQuestion();
    }
}

// Show previous question
function showPreviousQuestion() {
    if (currentState.currentQuestionIndex > 0) {
        document.getElementById(`question-${CONFIG.questions[currentState.currentQuestionIndex].id}`).classList.remove('active');
        currentState.currentQuestionIndex--;
        document.getElementById(`question-${CONFIG.questions[currentState.currentQuestionIndex].id}`).classList.add('active');
        document.getElementById('current-question').textContent = currentState.currentQuestionIndex + 1;
        updateNavigationButtons();
        scrollToCurrentQuestion();
    }
}

// Update navigation buttons
function updateNavigationButtons() {
    document.getElementById('prev-btn').disabled = currentState.currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = currentState.currentQuestionIndex === CONFIG.questions.length - 1;
}

// Scroll to current question
function scrollToCurrentQuestion() {
    const questionCard = document.getElementById(`question-${CONFIG.questions[currentState.currentQuestionIndex].id}`);
    questionCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Submit exam
function submitExam() {
    if (currentState.timerInterval) {
        clearInterval(currentState.timerInterval);
    }
    
    currentState.examSubmitted = true;
    
    if (currentState.currentUser) {
        unblockUser(currentState.currentUser);
    }
    
    localStorage.removeItem('current_exam_session');
    localStorage.removeItem('exam_left_state');
    
    const score = calculateScore();
    showResults(score);
    
    window.onbeforeunload = null;
}

// Calculate score
function calculateScore() {
    let correct = 0;
    let total = CONFIG.questions.length;
    
    CONFIG.questions.forEach(q => {
        if (currentState.answers[q.id] === q.correctAnswer) {
            correct++;
        }
    });
    
    const percentage = (correct / total) * 100;
    const timeTaken = CONFIG.examInfo.duration * 60 - currentState.timeRemaining;
    
    return {
        correct,
        total,
        percentage,
        timeTaken,
        marks: Math.round((correct / total) * CONFIG.examInfo.marks)
    };
}

// Show results
function showResults(score) {
    document.getElementById('score-percentage').textContent = `${Math.round(score.percentage)}%`;
    document.getElementById('correct-answers').textContent = `${score.correct}/${score.total}`;
    document.getElementById('wrong-answers').textContent = score.total - score.correct;
    document.getElementById('marks-obtained').textContent = `${score.marks}/${CONFIG.examInfo.marks}`;
    
    const minutes = Math.floor(score.timeTaken / 60);
    const seconds = score.timeTaken % 60;
    document.getElementById('time-taken').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    
    const circle = document.getElementById('score-circle');
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (score.percentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    const performanceText = document.getElementById('performance-text');
    let text = '';
    if (score.percentage >= 80) {
        text = `<p>Excellent work! You have demonstrated a strong understanding of Physical Science concepts. Your score of ${score.marks} out of ${CONFIG.examInfo.marks} places you in the top percentile.</p>`;
    } else if (score.percentage >= 60) {
        text = `<p>Good job! You have a solid grasp of the fundamental concepts. With a score of ${score.marks} out of ${CONFIG.examInfo.marks}, you're well on your way to mastering Physical Science.</p>`;
    } else if (score.percentage >= 40) {
        text = `<p>You've passed the exam with a score of ${score.marks} out of ${CONFIG.examInfo.marks}. Consider reviewing the areas where you struggled to improve your understanding.</p>`;
    } else {
        text = `<p>Your score of ${score.marks} out of ${CONFIG.examInfo.marks} indicates that you need to review the fundamental concepts of Physical Science. Don't get discouraged - use this as a learning opportunity!</p>`;
    }
    performanceText.innerHTML = text;
    
    showSection('result');
}

// Review answers
function reviewAnswers() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    CONFIG.questions.forEach(q => {
        const userAnswer = currentState.answers[q.id];
        const isCorrect = userAnswer === q.correctAnswer;
        
        const reviewCard = document.createElement('div');
        reviewCard.className = 'question-card';
        
        reviewCard.innerHTML = `
            <div class="question-number">Question ${q.id} 
                <span style="color: ${isCorrect ? '#4CAF50' : '#f44336'}; margin-left: 10px;">
                    ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
                </span>
            </div>
            <div class="question-text">${q.question}</div>
            <div class="options-container">
                ${q.options.map((option, optIndex) => {
                    let style = '';
                    if (optIndex === q.correctAnswer) {
                        style = 'background-color: #d4edda; border-color: #c3e6cb;';
                    } else if (optIndex === userAnswer && !isCorrect) {
                        style = 'background-color: #f8d7da; border-color: #f5c6cb;';
                    }
                    
                    return `
                        <div class="option" style="${style}">
                            <input type="radio" disabled ${userAnswer === optIndex ? 'checked' : ''}>
                            <label class="option-label">
                                ${String.fromCharCode(65 + optIndex)}. ${option}
                                ${optIndex === q.correctAnswer ? ' (Correct Answer)' : ''}
                                ${optIndex === userAnswer && !isCorrect ? ' (Your Answer)' : ''}
                            </label>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
        
        container.appendChild(reviewCard);
    });
    
    document.querySelector('.exam-title h1').textContent = 'Review Answers';
    document.querySelector('.exam-desc').textContent = 'Exam Review Mode';
    document.querySelector('.navigation-buttons').style.display = 'none';
    document.querySelector('.submit-area').style.display = 'none';
    showSection('exam');
}

// ==================== UTILITY FUNCTIONS ====================

// Show specific section
function showSection(sectionName) {
    Object.values(sections).forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    
    if (sections[sectionName]) {
        sections[sectionName].classList.remove('hidden');
        sections[sectionName].classList.add('active');
        currentState.currentSection = sectionName;
    }
}

// Disable back button
function disableBackButton() {
    history.pushState(null, null, location.href);
    window.onpopstate = function() {
        if (currentState.examStarted && !currentState.examSubmitted) {
            alert("You cannot go back during the exam!");
            history.pushState(null, null, location.href);
        }
    };
}

// Update exam info display
function updateExamInfoDisplay() {
    const examInfo = CONFIG.examInfo;
    
    document.querySelectorAll('.exam-details').forEach(el => {
        el.innerHTML = `
            <p><strong>Subject:</strong> ${examInfo.subject}</p>
            <p><strong>Marks:</strong> ${examInfo.marks}</p>
            <p><strong>Duration:</strong> ${examInfo.duration} minutes</p>
            <p><strong>Type:</strong> ${examInfo.type}</p>
        `;
    });
}

// ==================== INITIALIZATION ====================

// Initialize the application
function init() {
    localStorage.removeItem('exam_blocked');
    
    const previousUser = localStorage.getItem('current_exam_user');
    if (previousUser) {
        const blockStatus = isUserBlocked(previousUser);
        if (blockStatus.blocked) {
            currentState.currentUser = previousUser;
            currentState.examBlocked = true;
            currentState.blockEndTime = blockStatus.endTime;
            showUserBlockedScreen(previousUser, blockStatus.remainingTime);
            return;
        }
    }
    
    updateExamInfoDisplay();
    setupEventListeners();
    showSection('login');
    disableBackButton();
}

// Setup event listeners
function setupEventListeners() {
    // Login
    document.getElementById('login-btn').addEventListener('click', handleLogin);
    document.getElementById('username').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
    document.getElementById('password').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLogin();
    });
    
    // Start exam
    document.getElementById('start-exam-btn').addEventListener('click', startExam);
    
    // Exam navigation
    document.getElementById('prev-btn').addEventListener('click', showPreviousQuestion);
    document.getElementById('next-btn').addEventListener('click', showNextQuestion);
    document.getElementById('submit-exam-btn').addEventListener('click', submitExam);
    
    // Results
    document.getElementById('review-btn').addEventListener('click', reviewAnswers);
    document.getElementById('new-exam-btn').addEventListener('click', () => {
        localStorage.removeItem('exam_blocked_users');
        localStorage.removeItem('current_exam_user');
        location.reload();
    });
    
    // Blocked section
    document.getElementById('return-login-btn').addEventListener('click', returnFromBlocked);
}

// Debug functions (optional)
function clearAllBlocks() {
    localStorage.removeItem('exam_blocked_users');
    localStorage.removeItem('current_exam_user');
    localStorage.removeItem('current_exam_session');
    localStorage.removeItem('exam_left_state');
    console.log('All blocks cleared');
    alert('All blocks cleared. All users can now login.');
}

function showBlockedUsersList() {
    const blockedUsers = JSON.parse(localStorage.getItem('exam_blocked_users') || '{}');
    let message = "Currently blocked users:\n\n";
    
    for (const username in blockedUsers) {
        const endTime = blockedUsers[username];
        const remaining = Math.max(0, endTime - Date.now());
        const minutes = Math.floor(remaining / 60000);
        const seconds = Math.floor((remaining % 60000) / 1000);
        
        message += `${username}: ${minutes}:${seconds.toString().padStart(2, '0')} remaining\n`;
    }
    
    if (Object.keys(blockedUsers).length === 0) {
        message += "No users are currently blocked.";
    }
    
    alert(message);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
