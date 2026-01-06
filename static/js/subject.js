// শ্রেণি এবং বিষয়ের ডেটা
const classData = {
    9: {
        name: "শ্রেণি ৯",
        subjects: [
            {
                id: 1,
                name: "গণিত",
                description: "এই বিষয়ে গাণিতিক সমস্যা ও সমাধান পদ্ধতি আলোচনা করা হয়।",
                icon: "fas fa-calculator",
                color: "#3498db"
            },
            {
                id: 2,
                name: "ভৌতবিজ্ঞান",
                description: "প্রকৃতি ও বস্তুর মৌলিক বৈশিষ্ট্য নিয়ে আলোচনা করা হয়।",
                icon: "fas fa-atom",
                color: "#2ecc71"
            },
            {
                id: 3,
                name: "জীবনবিজ্ঞান",
                description: "জীব ও জীবনের বিভিন্ন প্রক্রিয়া নিয়ে আলোচনা করা হয়।",
                icon: "fas fa-dna",
                color: "#e74c3c"
            }
        ]
    },
    10: {
        name: "শ্রেণি ১০",
        subjects: [
            {
                id: 1,
                name: "গণিত",
                description: "এই বিষয়ে গাণিতিক সমস্যা ও সমাধান পদ্ধতি আলোচনা করা হয়।",
                icon: "fas fa-calculator",
                color: "#3498db"
            },
            {
                id: 2,
                name: "ভৌতবিজ্ঞান",
                description: "প্রকৃতি ও বস্তুর মৌলিক বৈশিষ্ট্য নিয়ে আলোচনা করা হয়।",
                icon: "fas fa-atom",
                color: "#2ecc71"
            },
            {
                id: 3,
                name: "জীবনবিজ্ঞান",
                description: "জীব ও জীবনের বিভিন্ন প্রক্রিয়া নিয়ে আলোচনা করা হয়।",
                icon: "fas fa-dna",
                color: "#e74c3c"
            }
        ]
    },
    11: {
        name: "শ্রেণি ১১",
        subjects: [
            {
                id: 1,
                name: "Mathematica",
                description: "Advanced mathematical concepts and problem solving techniques.",
                icon: "fas fa-square-root-alt",
                color: "#3498db"
            },
            {
                id: 2,
                name: "Physics",
                description: "Study of matter, energy, and the fundamental forces of nature.",
                icon: "fas fa-magnet",
                color: "#2ecc71"
            },
            {
                id: 3,
                name: "Chemistry",
                description: "Study of substances, their properties, and transformations.",
                icon: "fas fa-flask",
                color: "#9b59b6"
            },
            {
                id: 4,
                name: "Biology",
                description: "Study of living organisms and their vital processes.",
                icon: "fas fa-microscope",
                color: "#e74c3c"
            }
        ]
    },
    12: {
        name: "শ্রেণি ১২",
        subjects: [
            {
                id: 1,
                name: "Mathematica",
                description: "Advanced mathematical concepts and problem solving techniques.",
                icon: "fas fa-square-root-alt",
                color: "#3498db"
            },
            {
                id: 2,
                name: "Physics",
                description: "Study of matter, energy, and the fundamental forces of nature.",
                icon: "fas fa-magnet",
                color: "#2ecc71"
            },
            {
                id: 3,
                name: "Chemistry",
                description: "Study of substances, their properties, and transformations.",
                icon: "fas fa-flask",
                color: "#9b59b6"
            },
            {
                id: 4,
                name: "Biology",
                description: "Study of living organisms and their vital processes.",
                icon: "fas fa-microscope",
                color: "#e74c3c"
            }
        ]
    }
};

// নির্বাচিত শ্রেণি এবং বিষয় ট্র্যাক রাখার জন্য ভেরিয়েবল
let selectedClass = null;
let selectedSubject = null;

// শ্রেণি নির্বাচন ফাংশন
function selectClass(classId) {
    selectedClass = classId;
    
    // শ্রেণি সেকশন লুকানো এবং বিষয় সেকশন দেখানো
    document.getElementById('classGrid').parentElement.style.display = 'none';
    document.getElementById('subjectSection').style.display = 'block';
    
    // নির্বাচিত শ্রেণির নাম আপডেট করা
    document.getElementById('selectedClassText').textContent = classData[classId].name;
    
    // বিষয়ের তালিকা তৈরি করা
    const subjectGrid = document.getElementById('subjectGrid');
    subjectGrid.innerHTML = '';
    
    classData[classId].subjects.forEach(subject => {
        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-card';
        subjectCard.setAttribute('data-subject-id', subject.id);
        
        subjectCard.innerHTML = `
            <div class="subject-card-header">
                <div class="subject-icon" style="color: ${subject.color}; background-color: ${subject.color}20;">
                    <i class="${subject.icon}"></i>
                </div>
                <h3>${subject.name}</h3>
            </div>
            <p>${subject.description}</p>
            <div class="subject-actions">
                <button class="action-btn read-btn" onclick="selectSubject(${subject.id})">বিষয় দেখুন</button>
            </div>
        `;
        
        subjectGrid.appendChild(subjectCard);
    });
}

// বিষয় নির্বাচন ফাংশন
function selectSubject(subjectId) {
    selectedSubject = subjectId;
    const subject = classData[selectedClass].subjects.find(s => s.id === subjectId);
    
    // বিষয় সেকশন লুকানো এবং বিস্তারিত সেকশন দেখানো
    document.getElementById('subjectSection').style.display = 'none';
    document.getElementById('subjectDetailSection').style.display = 'block';
    
    // নির্বাচিত বিষয়ের তথ্য আপডেট করা
    document.getElementById('selectedSubjectText').textContent = subject.name;
    document.getElementById('selectedSubjectClassText').textContent = classData[selectedClass].name;
    document.getElementById('detailSubjectTitle').textContent = subject.name;
    document.getElementById('detailSubjectDescription').textContent = subject.description;
    
    // আইকন আপডেট করা
    const subjectIconLarge = document.getElementById('subjectIconLarge');
    subjectIconLarge.innerHTML = `<i class="${subject.icon}"></i>`;
    subjectIconLarge.style.color = subject.color;
    subjectIconLarge.style.backgroundColor = `${subject.color}20`;
    
    // বিষয় অপশন তৈরি করা
    const subjectOptions = document.getElementById('subjectOptions');
    subjectOptions.innerHTML = '';
    
    const options = [
        {
            id: 1,
            name: "বই পড়ুন",
            description: "এই বিষয়ের প্রাসঙ্গিক বই পড়ুন এবং শিখুন",
            icon: "fas fa-book-open",
            color: "#3498db",
            action: "readBook"
        },
        {
            id: 2,
            name: "নোট পড়ুন",
            description: "এই বিষয়ের গুরুত্বপূর্ণ নোট পড়ুন",
            icon: "fas fa-sticky-note",
            color: "#2ecc71",
            action: "readNote"
        },
        {
            id: 3,
            name: "পরীক্ষার অবস্থা",
            description: "আপনার পরীক্ষার ফলাফল ও অবস্থা দেখুন",
            icon: "fas fa-chart-bar",
            color: "#e74c3c",
            action: "examStatus"
        }
    ];
    
    options.forEach(option => {
        const optionCard = document.createElement('div');
        optionCard.className = 'option-card';
        
        optionCard.innerHTML = `
            <div class="option-icon" style="color: ${option.color}">
                <i class="${option.icon}"></i>
            </div>
            <h4>${option.name}</h4>
            <p>${option.description}</p>
            <button class="option-btn" style="background-color: ${option.color}" onclick="${option.action}('${subject.name}')">
                ${option.name} দেখুন
            </button>
        `;
        
        subjectOptions.appendChild(optionCard);
    });
}

// শ্রেণি তালিকায় ফিরে যাওয়ার ফাংশন
function goBackToClasses() {
    selectedClass = null;
    document.getElementById('subjectSection').style.display = 'none';
    document.getElementById('classGrid').parentElement.style.display = 'block';
}

// বিষয় তালিকায় ফিরে যাওয়ার ফাংশন
function goBackToSubjects() {
    selectedSubject = null;
    document.getElementById('subjectDetailSection').style.display = 'none';
    document.getElementById('subjectSection').style.display = 'block';
}

// অপশন একশন ফাংশন
function readBook(subjectName) {
    alert(`${subjectName} বিষয়ের বই পড়ার পৃষ্ঠা খোলা হবে।`);
    // এখানে আসলে বই পড়ার পৃষ্ঠা খোলার কোড যোগ করতে হবে
}

function readNote(subjectName) {
    alert(`${subjectName} বিষয়ের নোট পড়ার পৃষ্ঠা খোলা হবে।`);
    // এখানে আসলে নোট পড়ার পৃষ্ঠা খোলার কোড যোগ করতে হবে
}

function examStatus(subjectName) {
    alert(`${subjectName} বিষয়ের পরীক্ষার অবস্থা দেখানো হবে।`);
    // এখানে আসলে পরীক্ষার অবস্থা পৃষ্ঠা খোলার কোড যোগ করতে হবে
}

// পেজ লো
