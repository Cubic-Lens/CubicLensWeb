/**
 * CubicLens - Main JavaScript
 * Handles mobile navigation toggle, contact form, and auth state
 */

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Navigation Toggle
  var navToggle = document.querySelector('.nav-toggle');
  var navList = document.querySelector('.nav-list');
  
  if (navToggle && navList) {
    navToggle.addEventListener('click', function() {
      navList.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
        navList.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  }
  
  // Check auth state and show/hide admin links
  updateAuthState();
  
  // Contact form handler
  initContactForm();
  
  // Add scroll effect to header
  var header = document.querySelector('.header');
  var lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    var currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
  
  // Intersection Observer for animations
  var observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  document.querySelectorAll('.feature-card, .game-card, .team-card, .stat-card, .faq-item').forEach(function(el) {
    observer.observe(el);
  });
});

// Update auth state - show/hide admin and logout links
function updateAuthState() {
  var isLoggedIn = localStorage.getItem('cubiclens_admin') === 'true';
  
  // Show/hide admin nav link
  var adminNavItems = document.querySelectorAll('.admin-nav');
  var logoutNavItems = document.querySelectorAll('.logout-nav');
  
  if (isLoggedIn) {
    adminNavItems.forEach(function(item) {
      item.style.display = 'list-item';
    });
    logoutNavItems.forEach(function(item) {
      item.style.display = 'list-item';
    });
  } else {
    adminNavItems.forEach(function(item) {
      item.style.display = 'none';
    });
    logoutNavItems.forEach(function(item) {
      item.style.display = 'none';
    });
  }
  
  // Handle logout link
  var logoutLink = document.getElementById('logout-link');
  if (logoutLink && isLoggedIn) {
    logoutLink.addEventListener('click', function(e) {
      e.preventDefault();
      localStorage.removeItem('cubiclens_admin');
      localStorage.removeItem('cubiclens_user');
      window.location.href = 'index.html';
    });
  }
}

// Initialize contact form
function initContactForm() {
  var contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var successDiv = document.getElementById('contact-success');
    var errorDiv = document.getElementById('contact-error');
    var submitBtn = this.querySelector('button[type="submit"]');
    
    // Hide previous messages
    successDiv.style.display = 'none';
    errorDiv.style.display = 'none';
    
    // Validation
    if (!name || !email || !subject || !message) {
      errorDiv.textContent = 'All fields are required.';
      errorDiv.style.display = 'block';
      return;
    }
    
    // Disable button
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Store message in localStorage (simulating submission)
    var messages = JSON.parse(localStorage.getItem('cubiclens_messages') || '[]');
    messages.push({
      id: Date.now(),
      name: name,
      email: email,
      subject: subject,
      message: message,
      date: new Date().toISOString()
    });
    localStorage.setItem('cubiclens_messages', JSON.stringify(messages));
    
    // Show success
    setTimeout(function() {
      successDiv.textContent = 'Message sent successfully!';
      successDiv.style.display = 'block';
      contactForm.reset();
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }, 500);
  });
}
