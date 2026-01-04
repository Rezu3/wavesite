// ==================== CONFIGURATION - EDIT HERE ====================
const CONFIG = {
    subjects: [
        {
            id: "life-science",
            name: "Life Science",
            icon: "fas fa-dna",
            marks: 20,
            duration: 10, // minutes
            questionsCount: 20,
            type: "Examination",
            questions: [
                {
                    id: 1,
                    question: "উদ্ভিদের ট্রপিক চলন নিয়ন্ত্রণকারী হরমোন কোনটি?",
                    options: ["সাইটোকাইনিন", "জিব্বেরেলিন", "অক্সিন", "ইথিলিন"],
                    correctAnswer: 2
                },
                {
                    id: 2,
                    question: "সূর্যশিশির উদ্ভিদের পাতার চলন কোন ধরনের?",
                    options: ["থার্মোন্যাস্টি", "সিসমোন্যাস্টি", "কেমোন্যাস্টি", "ফটোন্যাস্টি"],
                    correctAnswer: 2
                },
                {
                    id: 3,
                    question: "মানুষের চোখে উপযোজন (Accommodation) হয় কোন অংশের মাধ্যমে?",
                    options: ["রেটিনা", "কর্নিয়া", "লেন্স", "আইরিস"],
                    correctAnswer: 2
                },
                {
                    id: 4,
                    question: "নিচের কোনটি মিশ্র গ্রন্থি?",
                    options: ["থাইরয়েড", "পিটুইটারি", "অগ্ন্যাশয়", "অ্যাড্রিনাল"],
                    correctAnswer: 2
                },
                {
                    id: 5,
                    question: "DNA-এর গঠনগত একক কী?",
                    options: ["অ্যামাইনো অ্যাসিড", "নিউক্লিওটাইড", "নিউক্লিওসাইড", "গ্লাইকোজেন"],
                    correctAnswer: 1
                },
                {
                    id: 6,
                    question: "কোষ বিভাজনের কোন দশায় ক্রোমোজোম বিষুব অঞ্চলে অবস্থান করে?",
                    options: ["প্রোফেজ", "মেটাফেজ", "অ্যানাফেজ", "টেলোফেজ"],
                    correctAnswer: 1
                },
                {
                    id: 7,
                    question: "মেন্ডেল কত জোড়া বিপরীত বৈশিষ্ট্য নির্বাচন করেছিলেন?",
                    options: ["৩ জোড়া", "৫ জোড়া", "৭ জোড়া", "১০ জোড়া"],
                    correctAnswer: 2
                },
                {
                    id: 8,
                    question: "স্বাভাবিক পিতা ও বর্ণান্ধ বাহক মাতার পুত্র বর্ণান্ধ হওয়ার সম্ভাবনা কত?",
                    options: ["০%", "২৫%", "৫০%", "১০০%"],
                    correctAnswer: 2
                },
                {
                    id: 9,
                    question: "'অস্তিত্বের জন্য সংগ্রাম' ধারণাটি কে দেন?",
                    options: ["ল্যামার্ক", "ডারউইন", "মেন্ডেল", "ওপারিন"],
                    correctAnswer: 1
                },
                {
                    id: 10,
                    question: "তিমির ফ্লিপার ও পাখির ডানা কী ধরনের অঙ্গ?",
                    options: ["সমসংস্থ", "সমবৃত্তীয়", "নিষ্ক্রিয়", "কোনটিই নয়"],
                    correctAnswer: 0
                },
                {
                    id: 11,
                    question: "ডিনাইট্রিফাইং ব্যাকটেরিয়া কোনটি?",
                    options: ["নাইট্রোসোমোনাস", "অ্যাজোটোব্যাকটর", "সিউডোমোনাস", "রাইজোবিয়াম"],
                    correctAnswer: 2
                },
                {
                    id: 12,
                    question: "প্রধান গ্রিনহাউস গ্যাস কোনটি?",
                    options: ["CH₄", "N₂O", "CO₂", "CFC"],
                    correctAnswer: 2
                },
                {
                    id: 13,
                    question: "ভারতের প্রথম বায়োস্ফিয়ার রিজার্ভ কোনটি?",
                    options: ["নীলগিরি", "সুন্দরবন", "মানস", "নন্দাদেবী"],
                    correctAnswer: 0
                },
                {
                    id: 14,
                    question: "মস্তিষ্কের প্রধান রিলে স্টেশন কোনটি?",
                    options: ["হাইপোথ্যালামাস", "থ্যালামাস", "পনস", "সেরিবেলাম"],
                    correctAnswer: 1
                },
                {
                    id: 15,
                    question: "জলে ভাসমান অনুবীক্ষণিক জীবদের কী বলা হয়?",
                    options: ["নেক্টন", "বেনথস", "প্লাঙ্কটন", "হাইড্রোফাইট"],
                    correctAnswer: 2
                },
                {
                    id: 16,
                    question: "রেড ডেটা বুক প্রকাশ করে কোন সংস্থা?",
                    options: ["WWF", "IUCN", "UNESCO", "WHO"],
                    correctAnswer: 1
                },
                {
                    id: 17,
                    question: "উদ্ভিদের কোষ বিভাজনে সাহায্যকারী হরমোন কোনটি?",
                    options: ["অক্সিন", "সাইটোকাইনিন", "জিব্বেরেলিন", "ABA"],
                    correctAnswer: 1
                },
                {
                    id: 18,
                    question: "থ্যালাসেমিয়ায় কোন ধাতু জমে শরীরের ক্ষতি হয়?",
                    options: ["কপার", "আয়রন", "ক্যালসিয়াম", "ম্যাগনেসিয়াম"],
                    correctAnswer: 1
                },
                {
                    id: 19,
                    question: "মাছের হূৎপিণ্ডে কয়টি প্রকোষ্ঠ থাকে?",
                    options: ["১ টি", "২ টি", "৩ টি", "৪ টি"],
                    correctAnswer: 1
                },
                {
                    id: 20,
                    question: "পায়রার ডানায় পালকের সংখ্যা কত?",
                    options: ["২৩ টি", "১২ টি", "১০ টি", "২১ টি"],
                    correctAnswer: 0
                }
            ]
        },
        {
            id: "mathematics",
            name: "Mathematics",
            icon: "fas fa-calculator",
            marks: 20,
            duration: 15,
            questionsCount: 20,
            type: "Examination",
            questions: [
                {
                    id: 1,
                    question: "বার্ষিক r% সরল সুদের হারে P টাকার n বছরের সুদ I টাকা হলে—",
                    options: [
                        "I = Pnr",
                        "PnrI = 100",
                        "I = Pnr/100",
                        "n = 100I/Pr"
                    ],
                    correctAnswer: 2
                },
                {
                    id: 2,
                    question: "x ∝ y হলে নিচের কোনটি সঠিক?",
                    options: [
                        "x² ∝ y³",
                        "x³ ∝ y³",
                        "x ∝ y²",
                        "x² ∝ y"
                    ],
                    correctAnswer: 1
                },
                {
                    id: 3,
                    question: "ax² + bx + c = 0 সমীকরণের বীজদ্বয় সমান হলে—",
                    options: [
                        "b² = 4ac",
                        "b² = ac",
                        "a = c",
                        "b² = -4ac"
                    ],
                    correctAnswer: 0
                },
                {
                    id: 4,
                    question: "একটি ঘনকের একটি ধারের দৈর্ঘ্য a একক হলে, তার কর্ণের দৈর্ঘ্য কত?",
                    options: [
                        "√2a একক",
                        "√3a একক",
                        "3a একক",
                        "6a² একক"
                    ],
                    correctAnswer: 1
                },
                {
                    id: 5,
                    question: "sin θ = cos θ হলে, θ-এর মান কত?",
                    options: [
                        "30°",
                        "60°",
                        "45°",
                        "90°"
                    ],
                    correctAnswer: 2
                },
                {
                    id: 6,
                    question: "ওজাইভ (Ogive) অঙ্কনের জন্য ক্ষুদ্রতর সূচক ক্রমযৌগিক পরিসংখ্যাকে কোন অক্ষ বরাবর বসানো হয়?",
                    options: [
                        "X-অক্ষ",
                        "Y-অক্ষ",
                        "উভয় অক্ষ",
                        "কোনোটিই নয়"
                    ],
                    correctAnswer: 1
                },
                {
                    id: 7,
                    question: "দুটি বৃত্ত পরস্পরকে বহিঃস্পর্শ করলে বৃত্ত দুটির সাধারণ স্পর্শকের সংখ্যা—",
                    options: [
                        "১টি",
                        "২টি",
                        "৩টি",
                        "৪টি"
                    ],
                    correctAnswer: 2
                },
                {
                    id: 8,
                    question: "একটি লম্ব বৃত্তাকার চোঙের ব্যাসার্ধ r এবং উচ্চতা h হলে, তার আয়তন হবে—",
                    options: [
                        "πr²h",
                        "2πrh",
                        "1/3 πr²h",
                        "πrh"
                    ],
                    correctAnswer: 0
                },
                {
                    id: 9,
                    question: "2, 8, 2, 3, 8, 5, 9, 5, 6, 2, 8 তথ্যটির সংখ্যাগুরু মান (Mode) হলো—",
                    options: [
                        "2",
                        "5",
                        "8",
                        "2 এবং 8 উভয়ই"
                    ],
                    correctAnswer: 3
                },
                {
                    id: 10,
                    question: "একটি ব্যবসাতে A, B ও C এর মূলধনের অনুপাত 1/2 : 1/3 : 1/4 হলে, বছরের শেষে 1080 টাকা লাভ হলে A কত পাবে?",
                    options: [
                        "480 টাকা",
                        "360 টাকা",
                        "540 টাকা",
                        "270 টাকা"
                    ],
                    correctAnswer: 0
                },
                {
                    id: 11,
                    question: "tan 1° × tan 2° × tan 88° × tan 89° এর মান কত?",
                    options: [
                        "0",
                        "1",
                        "2",
                        "1/2"
                    ],
                    correctAnswer: 1
                },
                {
                    id: 12,
                    question: "বৃত্তস্থ চতুর্ভুজের বিপরীত কোণদ্বয় পরস্পর—",
                    options: [
                        "সমান",
                        "পূরক",
                        "সম্পূরক",
                        "একান্তর"
                    ],
                    correctAnswer: 2
                },
                {
                    id: 13,
                    question: "x² - 6x + 2 = 0 সমীকরণের বীজদ্বয়ের সমষ্টি কত?",
                    options: [
                        "2",
                        "-6",
                        "6",
                        "3"
                    ],
                    correctAnswer: 2
                },
                {
                    id: 14,
                    question: "একটি গোলকের ব্যাসার্ধ দ্বিগুণ করলে আয়তন কতগুণ হবে?",
                    options: [
                        "2 গুণ",
                        "4 গুণ",
                        "8 গুণ",
                        "16 গুণ"
                    ],
                    correctAnswer: 2
                },
                {
                    id: 15,
                    question: "যদি cos A = 4/5 হয়, তবে tan A-এর মান কত?",
                    options: [
                        "3/5",
                        "3/4",
                        "4/3",
                        "5/3"
                    ],
                    correctAnswer: 1
                },
                {
                    id: 16,
                    question: "একটি সমকোণী ত্রিভুজের অতিভুজ 15 সেমি হলে, তার পরিব্যাসার্ধ কত?",
                    options: [
                        "15 সেমি",
                        "7.5 সেমি",
                        "30 সেমি",
                        "5 সেমি"
                    ],
                    correctAnswer: 1
                },
                {
                    id: 17,
                    question: "কোণ পরিমাপের বৃত্তীয় পদ্ধতি অনুযায়ী 180°-এর মান—",
                    options: [
                        "π/2 রেডিয়ান",
                        "π রেডিয়ান",
                        "2π রেডিয়ান",
                        "π/4 রেডিয়ান"
                    ],
                    correctAnswer: 1
                },
                {
                    id: 18,
                    question: "k-এর কোন মানের জন্য x² - kx + 4 = 0 সমীকরণের বীজদ্বয় বাস্তব ও সমান হবে?",
                    options: [
                        "±2",
                        "±4",
                        "±16",
                        "0"
                    ],
                    correctAnswer: 1
                },
                {
                    id: 19,
                    question: "একটি শঙ্কুর ভূমির ব্যাসার্ধ r এবং তির্যক উচ্চতা l হলে, তার পার্শ্বতলের ক্ষেত্রফল—",
                    options: [
                        "πrl",
                        "πr²h",
                        "2πrl",
                        "1/3 πrl"
                    ],
                    correctAnswer: 0
                },
                {
                    id: 20,
                    question: "মধ্যগামিতার মাপক নয় নিচের কোনটি?",
                    options: [
                        "গড়",
                        "মধ্যমা",
                        "সংখ্যাগুরু মান",
                        "সংখ্যাবিচ্যুতি"
                    ],
                    correctAnswer: 3
                }
            ]
        },
        {
            id: "physical-science",
            name: "Physical Science",
            icon: "fas fa-atom",
            marks: 20,
            duration: 10,
            questionsCount: 20,
            type: "Examination",
            questions: [
                {
                    id: 1,
                    question: "বয়েলের সূত্রে ধ্রুবক রাশিটি কী?",
                    options: ["গ্যাসের ভর ও চাপ", "গ্যাসের আয়তন ও উষ্ণতা", "গ্যাসের ভর ও উষ্ণতা", "কোনোটিই নয়"],
                    correctAnswer: 2
                },
                {
                    id: 2,
                    question: "বোল্টজম্যান ধ্রুবকের (k) মান কত?",
                    options: ["R × N", "R/N", "N/R", "R + N"],
                    correctAnswer: 1
                },
                {
                    id: 3,
                    question: "গাড়ির ভিউ-ফাইন্ডার হিসেবে কোন দর্পণ ব্যবহৃত হয়?",
                    options: ["উত্তল দর্পণ", "অবতল দর্পণ", "সমতল দর্পণ", "অবতল লেন্স"],
                    correctAnswer: 0
                },
                {
                    id: 4,
                    question: "মানুষের চোখের যে অংশে প্রতিবিম্ব গঠিত হয়, সেটি হলো—",
                    options: ["কর্ণিয়া", "রেটিনা", "আইরিস", "পিউপিল"],
                    correctAnswer: 1
                },
                {
                    id: 5,
                    question: "কোন বর্ণের আলোর বিচ্ছুরণ সবচেয়ে বেশি হয়?",
                    options: ["লাল", "হলুদ", "নীল", "বেগুনি"],
                    correctAnswer: 3
                },
                {
                    id: 6,
                    question: "১ বি.ও.টি (1 BOT) ইউনিট বলতে কী বোঝায়?",
                    options: ["1 Wh", "100 Wh", "1 kWh", "10 kWh"],
                    correctAnswer: 2
                },
                {
                    id: 7,
                    question: "গৃহস্থালীর সংযোগে ফিউজ তারকে কোন তারের সঙ্গে যুক্ত করা হয়?",
                    options: ["নিউট্রাল তার", "আর্থ তার", "লাইভ তার", "সবকটি"],
                    correctAnswer: 2
                },
                {
                    id: 8,
                    question: "একটি তেজস্ক্রিয় নিষ্ক্রিয় গ্যাস হলো—",
                    options: ["হিলিয়াম", "আর্গন", "রেডন", "জেনন"],
                    correctAnswer: 2
                },
                {
                    id: 9,
                    question: "পর্যায় সারণির কোন গ্রুপকে 'হ্যালোজেন' বলা হয়?",
                    options: ["গ্রুপ ১", "গ্রুপ ২", "গ্রুপ ১৬", "গ্রুপ ১৭"],
                    correctAnswer: 3
                },
                {
                    id: 10,
                    question: "নিচের কোনটি আয়নীয় বা তড়িৎযোজী যৌগ?",
                    options: ["HCl", "CH₄", "NaCl", "CO₂"],
                    correctAnswer: 2
                },
                {
                    id: 11,
                    question: "অ্যামোনিয়া গ্যাস শুষ্ক করতে কোনটি ব্যবহৃত হয়?",
                    options: ["পোড়াচুন (CaO)", "P₂O₅", "গাঢ় H₂SO₄", "CaCl₂"],
                    correctAnswer: 0
                },
                {
                    id: 12,
                    question: "থার্মিট পদ্ধতিতে বিজারক হিসেবে কাজ করে কোনটি?",
                    options: ["C", "Al", "CO", "Mg"],
                    correctAnswer: 1
                },
                {
                    id: 13,
                    question: "সবুজ ঘর বা গ্রিন হাউস প্রভাবের জন্য প্রধান দায়ী গ্যাস কোনটি?",
                    options: ["N₂", "CO₂", "O₂", "H₂"],
                    correctAnswer: 1
                },
                {
                    id: 14,
                    question: "আদর্শ গ্যাসের অণুগুলির মোট স্থিতিশক্তি কত?",
                    options: ["খুব বেশি", "খুব কম", "শূন্য", "১-এর সমান"],
                    correctAnswer: 2
                },
                {
                    id: 15,
                    question: "লেন্সের আলোককেন্দ্র দিয়ে যাওয়ার সময় আলোক রশ্মির চ্যুতি হয়—",
                    options: ["0°", "30°", "45°", "90°"],
                    correctAnswer: 0
                },
                {
                    id: 16,
                    question: "রোধের SI একক কী?",
                    options: ["ভোল্ট", "অ্যাম্পিয়ার", "ওহম", "ওয়াট"],
                    correctAnswer: 2
                },
                {
                    id: 17,
                    question: "নিচের কোনটি তড়িৎ বিশ্লেষ্য পদার্থ নয়?",
                    options: ["চিনির দ্রবণ", "লবণের দ্রবণ", "ক্ষার মিশ্রিত জল", "অ্যাসিড মিশ্রিত জল"],
                    correctAnswer: 0
                },
                {
                    id: 18,
                    question: "ওসওয়াল্ড পদ্ধতিতে কোন অ্যাসিড প্রস্তুত করা হয়?",
                    options: ["HCl", "H₂SO₄", "HNO₃", "CH₃COOH"],
                    correctAnswer: 2
                },
                {
                    id: 19,
                    question: "একটি কৃত্রিম পলিমারের উদাহরণ হলো—",
                    options: ["প্রোটিন", "স্টার্চ", "সেলুলোজ", "পিভিসি (PVC)"],
                    correctAnswer: 3
                },
                {
                    id: 20,
                    question: "সরল ক্যামেরায় কোন ধরনের লেন্স ব্যবহার করা হয়?",
                    options: ["উত্তল লেন্স", "অবতল লেন্স", "বেলনাকার লেন্স", "কোনোটিই নয়"],
                    correctAnswer: 0
                }
            ]
        },
        {
            id: "biology",
            name: "Biology",
            icon: "fas fa-microscope",
            marks: 30,
            duration: 20,
            questionsCount: 25,
            type: "Not Active",
            questions: []
        },
        {
            id: "physics",
            name: "Physics",
            icon: "fas fa-bolt",
            marks: 25,
            duration: 15,
            questionsCount: 20,
            type: "Not Active",
            questions: []
        },
        {
            id: "chemistry",
            name: "Chemistry",
            icon: "fas fa-flask",
            marks: 20,
            duration: 10,
            questionsCount: 15,
            type: "Not Active",
            questions: []
        }
    ],
    
    security: {
        blockTime: 5, // Block time in minutes for individual users
        blockIndividual: true
    },
    
    // ===== USER CREDENTIALS - ADD/EDIT HERE =====
    validCredentials: [
        { username: "Tanu", password: "8795" },
        { username: "Ajmira", password: "7972" },
        { username: "Sangeeta", password: "6054" },
        { username: "Hasen", password: "4974" },
        { username: "Rejaul", password: "9918" }
    ]
};

// Application State
let currentState = {
    currentUser: null,
    currentSubject: null,
    currentSection: 'login',
    examStarted: false,
    examSubmitted: false,
    examBlocked: false,
    blockEndTime: null,
    currentQuestionIndex: 0,
    answers: {},
    startTime: null,
    timerInterval: null,
    timeRemaining: 0,
    isReviewMode: false
};

// DOM Elements
const sections = {
    login: document.getElementById('login-section'),
    subjectSelection: document.getElementById('subject-selection-section'),
    examInfo: document.getElementById('exam-info-section'),
    exam: document.getElementById('exam-section'),
    result: document.getElementById('result-section'),
    blocked: document.getElementById('blocked-section')
};

// ==================== SUBJECT MANAGEMENT ====================

// Load subjects into the selection screen
function loadSubjects() {
    const subjectList = document.getElementById('subject-list');
    subjectList.innerHTML = '';
    
    CONFIG.subjects.forEach(subject => {
        if (subject.type === "Not Active") return;
        
        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-card';
        subjectCard.dataset.subjectId = subject.id;
        
        subjectCard.innerHTML = `
            <div class="subject-icon">
                <i class="${subject.icon}"></i>
            </div>
            <h3 class="subject-name">${subject.name}</h3>
            <div class="subject-info">
                <div class="info-row">
                    <i class="fas fa-clock"></i>
                    <span>Duration: ${subject.duration} minutes</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-star"></i>
                    <span>Marks: ${subject.marks}</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-list-ol"></i>
                    <span>Questions: ${subject.questionsCount}</span>
                </div>
                <div class="info-row">
                    <i class="fas fa-book"></i>
                    <span>Type: ${subject.type}</span>
                </div>
            </div>
            <button class="subject-start-btn" data-subject-id="${subject.id}">
                <i class="fas fa-play-circle"></i> Start Exam
            </button>
        `;
        
        subjectList.appendChild(subjectCard);
        
        // Add click event to subject card
        subjectCard.addEventListener('click', function(e) {
            if (!e.target.closest('.subject-start-btn')) {
                selectSubject(subject.id);
            }
        });
        
        // Add click event to start button
        const startBtn = subjectCard.querySelector('.subject-start-btn');
        startBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            selectSubject(subject.id);
            showExamInfo(subject);
        });
    });
    
    // Initialize scroll functionality for mobile
    initSubjectScroll();
}

// Initialize horizontal scrolling for subjects
function initSubjectScroll() {
    const container = document.querySelector('.subject-scroll-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });

    // Touch events for mobile
    container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
}

// Select a subject
function selectSubject(subjectId) {
    // Remove selection from all subjects
    document.querySelectorAll('.subject-card').forEach(card => {
        card.classList.remove('selected');
    });
    
    // Add selection to clicked subject
    const selectedCard = document.querySelector(`.subject-card[data-subject-id="${subjectId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
        selectedCard.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
}

// Show exam info for selected subject
function showExamInfo(subject) {
    currentState.currentSubject = subject;
    
    // Update exam info display
    document.getElementById('selected-subject-name').textContent = subject.name;
    document.getElementById('exam-duration').textContent = `${subject.duration} minutes`;
    document.getElementById('exam-marks').textContent = `${subject.marks} marks`;
    document.getElementById('exam-questions').textContent = `${subject.questionsCount} multiple choice questions`;
    
    showSection('examInfo');
}

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
            subject: currentState.currentSubject.id,
            answers: currentState.answers,
            timeSpent: currentState.currentSubject.duration * 60 - currentState.timeRemaining,
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
    document.getElementById('logged-in-user-subject').textContent = username;
    loadSubjects();
    showSection('subjectSelection');
}

// ==================== EXAM SYSTEM ====================

// Start exam
function startExam() {
    if (!currentState.currentUser || !currentState.currentSubject) {
        alert('Please select a subject first');
        return;
    }
    
    const examSession = {
        username: currentState.currentUser,
        subject: currentState.currentSubject.id,
        startTime: Date.now(),
        status: 'started'
    };
    localStorage.setItem('current_exam_session', JSON.stringify(examSession));
    
    // Update exam display
    document.getElementById('exam-subject').textContent = currentState.currentSubject.name;
    document.getElementById('exam-info-display').textContent = 
        `${currentState.currentSubject.marks} Marks | ${currentState.currentSubject.duration} Minutes`;
    
    startTimer();
    loadQuestions();
    setupPageLeaveDetection();
    showSection('exam');
    currentState.examStarted = true;
    currentState.startTime = Date.now();
    currentState.isReviewMode = false;
}

// Start timer
function startTimer() {
    currentState.timeRemaining = currentState.currentSubject.duration * 60;
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
    
    // Reset current question index
    currentState.currentQuestionIndex = 0;
    
    // Remove review mode
    document.querySelector('.exam-container').classList.remove('review-mode');
    
    currentState.currentSubject.questions.forEach((q, index) => {
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
        
        // Only add event listeners in regular exam mode
        if (!currentState.isReviewMode) {
            questionCard.querySelectorAll('.option').forEach(option => {
                option.addEventListener('click', handleOptionSelect);
            });
        }
    });
    
    document.getElementById('total-questions').textContent = currentState.currentSubject.questions.length;
    document.getElementById('current-question').textContent = 1;
    updateAnsweredCount();
    updateNavigationButtons();
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
    if (currentState.currentQuestionIndex < currentState.currentSubject.questions.length - 1) {
        document.getElementById(`question-${currentState.currentSubject.questions[currentState.currentQuestionIndex].id}`).classList.remove('active');
        currentState.currentQuestionIndex++;
        document.getElementById(`question-${currentState.currentSubject.questions[currentState.currentQuestionIndex].id}`).classList.add('active');
        document.getElementById('current-question').textContent = currentState.currentQuestionIndex + 1;
        updateNavigationButtons();
        scrollToCurrentQuestion();
    }
}

// Show previous question
function showPreviousQuestion() {
    if (currentState.currentQuestionIndex > 0) {
        document.getElementById(`question-${currentState.currentSubject.questions[currentState.currentQuestionIndex].id}`).classList.remove('active');
        currentState.currentQuestionIndex--;
        document.getElementById(`question-${currentState.currentSubject.questions[currentState.currentQuestionIndex].id}`).classList.add('active');
        document.getElementById('current-question').textContent = currentState.currentQuestionIndex + 1;
        updateNavigationButtons();
        scrollToCurrentQuestion();
    }
}

// Update navigation buttons
function updateNavigationButtons() {
    document.getElementById('prev-btn').disabled = currentState.currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = currentState.currentQuestionIndex === currentState.currentSubject.questions.length - 1;
}

// Scroll to current question
function scrollToCurrentQuestion() {
    const questionCard = document.getElementById(`question-${currentState.currentSubject.questions[currentState.currentQuestionIndex].id}`);
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
    let total = currentState.currentSubject.questions.length;
    
    currentState.currentSubject.questions.forEach(q => {
        if (currentState.answers[q.id] === q.correctAnswer) {
            correct++;
        }
    });
    
    const percentage = (correct / total) * 100;
    const timeTaken = currentState.currentSubject.duration * 60 - currentState.timeRemaining;
    
    return {
        correct,
        total,
        percentage,
        timeTaken,
        marks: Math.round((correct / total) * currentState.currentSubject.marks)
    };
}

// Show results
function showResults(score) {
    // Update result subject name
    document.getElementById('result-subject').textContent = 
        `${currentState.currentSubject.name} - Examination`;
    
    document.getElementById('score-percentage').textContent = `${Math.round(score.percentage)}%`;
    document.getElementById('correct-answers').textContent = `${score.correct}/${score.total}`;
    document.getElementById('wrong-answers').textContent = score.total - score.correct;
    document.getElementById('marks-obtained').textContent = `${score.marks}/${currentState.currentSubject.marks}`;
    
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
        text = `<p>Excellent work! You have demonstrated a strong understanding of ${currentState.currentSubject.name} concepts. Your score of ${score.marks} out of ${currentState.currentSubject.marks} places you in the top percentile.</p>`;
    } else if (score.percentage >= 60) {
        text = `<p>Good job! You have a solid grasp of the fundamental concepts. With a score of ${score.marks} out of ${currentState.currentSubject.marks}, you're well on your way to mastering ${currentState.currentSubject.name}.</p>`;
    } else if (score.percentage >= 40) {
        text = `<p>You've passed the exam with a score of ${score.marks} out of ${currentState.currentSubject.marks}. Consider reviewing the areas where you struggled to improve your understanding.</p>`;
    } else {
        text = `<p>Your score of ${score.marks} out of ${currentState.currentSubject.marks} indicates that you need to review the fundamental concepts of ${currentState.currentSubject.name}. Don't get discouraged - use this as a learning opportunity!</p>`;
    }
    performanceText.innerHTML = text;
    
    showSection('result');
}

// Review answers - FIXED VERSION
function reviewAnswers() {
    const container = document.getElementById('questions-container');
    container.innerHTML = '';
    
    // Set review mode flag
    currentState.isReviewMode = true;
    
    // Add review mode class to exam container
    document.querySelector('.exam-container').classList.add('review-mode');
    
    // Hide navigation and timer
    document.querySelector('.timer-container').style.display = 'none';
    document.querySelector('.navigation-buttons').style.display = 'none';
    document.querySelector('.submit-area').style.display = 'none';
    
    // Update exam title for review mode
    document.querySelector('.exam-title h1').textContent = 'Review Answers';
    document.querySelector('.exam-desc').textContent = 'Exam Review Mode';
    
    // Calculate score for stats
    const score = calculateScore();
    
    // Load all questions for review
    currentState.currentSubject.questions.forEach(q => {
        const userAnswer = currentState.answers[q.id];
        const isCorrect = userAnswer === q.correctAnswer;
        
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-question';
        reviewCard.id = `review-question-${q.id}`;
        
        // Generate options with proper styling
        const optionsHTML = q.options.map((option, optIndex) => {
            let optionClass = '';
            let badge = '';
            
            if (optIndex === q.correctAnswer) {
                optionClass = 'correct-answer';
                badge = '<span class="option-badge badge-correct">Correct Answer</span>';
            } else if (optIndex === userAnswer && !isCorrect) {
                optionClass = 'user-incorrect';
                badge = '<span class="option-badge badge-user-incorrect">Your Answer</span>';
            } else if (optIndex === userAnswer && isCorrect) {
                optionClass = 'user-correct';
                badge = '<span class="option-badge badge-user-correct">Your Correct Answer</span>';
            }
            
            return `
                <div class="review-option ${optionClass}">
                    <input type="radio" disabled ${userAnswer === optIndex ? 'checked' : ''}>
                    <div class="review-option-label">
                        <div>
                            <strong>${String.fromCharCode(65 + optIndex)}.</strong> ${option}
                        </div>
                        ${badge}
                    </div>
                </div>
            `;
        }).join('');
        
        // Explanation text
        const explanationText = userAnswer !== undefined 
            ? `You selected <strong>${String.fromCharCode(65 + userAnswer)}</strong>. ${isCorrect ? 'This answer is correct!' : `The correct answer is <strong>${String.fromCharCode(65 + q.correctAnswer)}</strong>.`}`
            : 'You did not answer this question.';
        
        reviewCard.innerHTML = `
            <div class="review-question-header">
                <div class="review-question-number">Question ${q.id}</div>
                <div class="review-result-indicator ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-times-circle"></i>'}
                    ${isCorrect ? 'Correct' : 'Incorrect'}
                </div>
            </div>
            
            <div class="question-text">${q.question}</div>
            
            <div class="review-options-container">
                ${optionsHTML}
            </div>
            
            <div class="review-explanation">
                <div class="review-explanation-title">
                    <i class="fas fa-lightbulb"></i>
                    Explanation
                </div>
                <div class="review-explanation-text">
                    ${explanationText}
                </div>
            </div>
        `;
        
        container.appendChild(reviewCard);
    });
    
    // Add navigation buttons at bottom
    const reviewNavigation = document.createElement('div');
    reviewNavigation.className = 'review-navigation';
    reviewNavigation.innerHTML = `
        <button class="review-nav-btn" onclick="showSection('result')">
            <i class="fas fa-arrow-left"></i> Back to Results
        </button>
        <button class="review-nav-btn primary" onclick="location.reload()">
            <i class="fas fa-home"></i> Return to Login
        </button>
    `;
    
    container.parentNode.appendChild(reviewNavigation);
    
    // Show the exam section
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
    
    // Back to subjects
    document.getElementById('back-to-subjects-btn').addEventListener('click', () => {
        showSection('subjectSelection');
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

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

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

// Make debug functions available globally
window.clearAllBlocks = clearAllBlocks;
window.showBlockedUsersList = showBlockedUsersList;

