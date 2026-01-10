// quiz.js - Shared quiz functionality

// Utility functions for all quiz pages
document.addEventListener('DOMContentLoaded', function() {
    // Add confetti effect for correct answers
    window.createConfetti = function() {
        const colors = ['#4361ee', '#7209b7', '#4cc9f0', '#f72585', '#f8961e'];
        const confettiCount = 100;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = Math.random() * 10 + 5 + 'px';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation completes
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    };
    
    // Add bounce animation to elements
    window.addBounceAnimation = function(element) {
        element.style.animation = 'bounce 0.8s';
        setTimeout(() => {
            element.style.animation = '';
        }, 800);
    };
    
    // Format time from seconds to MM:SS
    window.formatTime = function(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    
    // Update progress bar
    window.updateProgressBar = function(current, total) {
        const progressBar = document.querySelector('.progress');
        if (progressBar) {
            const percentage = (current / total) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    };
    
    // Play sound effects
    window.playSound = function(type) {
        // In a real app, you would load actual sound files
        // For this demo, we'll just simulate with a beep
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            if (type === 'correct') {
                oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            } else if (type === 'incorrect') {
                oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            } else if (type === 'timer') {
                oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            }
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.2);
        } catch (e) {
            console.log("Audio context not supported");
        }
    };
    
    // Add visual feedback for answer selection
    window.showFeedback = function(isCorrect, correctAnswer = null) {
        const feedbackElement = document.querySelector('.feedback');
        if (!feedbackElement) return;
        
        // Update feedback message
        if (isCorrect) {
            feedbackElement.textContent = "Correct! Well done! 🎉";
            feedbackElement.className = 'feedback correct show';
            playSound('correct');
            createConfetti();
        } else {
            feedbackElement.textContent = correctAnswer ? 
                `Incorrect. The correct answer is: ${correctAnswer}` : 
                "Incorrect. Try the next one!";
            feedbackElement.className = 'feedback incorrect show';
            playSound('incorrect');
        }
        
        // Auto-hide feedback after 3 seconds
        setTimeout(() => {
            feedbackElement.classList.remove('show');
        }, 3000);
    };
    
    // Initialize timer display
    window.initTimer = function(seconds, onTimeUp) {
        const timerElement = document.querySelector('.timer');
        const timerContainer = document.querySelector('.timer-container');
        
        if (!timerElement) return null;
        
        let timeLeft = seconds;
        let timerInterval;
        
        const updateTimerDisplay = () => {
            timerElement.textContent = formatTime(timeLeft);
            
            // Change color based on time left
            if (timeLeft <= 10) {
                timerElement.classList.add('danger');
                timerElement.classList.remove('warning');
                
                // Blink effect for last 5 seconds
                if (timeLeft <= 5) {
                    timerElement.style.animation = 'pulse 1s infinite';
                }
            } else if (timeLeft <= 20) {
                timerElement.classList.add('warning');
                timerElement.classList.remove('danger');
                timerElement.style.animation = '';
            } else {
                timerElement.classList.remove('warning', 'danger');
                timerElement.style.animation = '';
            }
        };
        
        const startTimer = () => {
            updateTimerDisplay();
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();
                
                // Play warning sound at 10, 5, 3, 2, 1 seconds
                if ([10, 5, 3, 2, 1].includes(timeLeft)) {
                    playSound('timer');
                }
                
                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    if (onTimeUp) onTimeUp();
                }
            }, 1000);
        };
        
        const stopTimer = () => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        };
        
        const resetTimer = (newSeconds = seconds) => {
            stopTimer();
            timeLeft = newSeconds;
            updateTimerDisplay();
        };
        
        return { startTimer, stopTimer, resetTimer, timeLeft: () => timeLeft };
    };
    
    // Highlight the selected subject on the main page
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'index.html' || currentPage === '') {
        // Add hover effects to subject cards
        const subjectCards = document.querySelectorAll('.subject-card');
        subjectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const icon = this.querySelector('.card-icon');
                addBounceAnimation(icon);
            });
        });
    }
});



