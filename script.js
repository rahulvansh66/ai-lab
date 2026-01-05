// Tab Switching Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Function to switch tabs
    function switchTab(tabName) {
        // Remove active class from all buttons and contents
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Add active class to clicked button and corresponding content
        const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
        const activeContent = document.getElementById(tabName);
        
        if (activeButton && activeContent) {
            activeButton.classList.add('active');
            activeContent.classList.add('active');
            
            // Store active tab in localStorage for persistence
            localStorage.setItem('activeTab', tabName);
        }
    }
    
    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            switchTab(tabName);
        });
    });
    
    // Check if there's a saved active tab in localStorage
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        switchTab(savedTab);
    }
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Get current active tab index
        const activeButton = document.querySelector('.tab-button.active');
        const currentIndex = Array.from(tabButtons).indexOf(activeButton);
        
        // Arrow key navigation
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % tabButtons.length;
            const nextTab = tabButtons[nextIndex].getAttribute('data-tab');
            switchTab(nextTab);
            tabButtons[nextIndex].focus();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + tabButtons.length) % tabButtons.length;
            const prevTab = tabButtons[prevIndex].getAttribute('data-tab');
            switchTab(prevTab);
            tabButtons[prevIndex].focus();
        }
    });
    
    // Add smooth scroll to top when switching tabs
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // Add animation class when tab content becomes visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe all item cards for animation
    const itemCards = document.querySelectorAll('.item-card');
    itemCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
    
    // Add accessibility attributes
    tabButtons.forEach((button, index) => {
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', button.classList.contains('active'));
        button.setAttribute('tabindex', button.classList.contains('active') ? '0' : '-1');
    });
    
    tabContents.forEach(content => {
        content.setAttribute('role', 'tabpanel');
    });
    
    // Console message for developers
    console.log('%c👋 Welcome to Rahul Vansh\'s Portfolio!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
    console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'color: #8b5cf6; font-size: 12px;');
});

