// === 🌙 Part 1: Event Handling and Interactivity ===

// Toggle dark mode
document.getElementById('toggle-theme').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// === 🎮 Part 2: Interactive Features ===

// Counter logic
let counter = 0;

document.getElementById('increase').addEventListener('click', function () {
  counter++;
  document.getElementById('counter').textContent = counter;
});

document.getElementById('decrease').addEventListener('click', function () {
  counter--;
  document.getElementById('counter').textContent = counter;
});

// === 📋✅ Part 3: Custom Form Validation ===

document.getElementById('signup-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission

  let isValid = true;

  // Clear previous errors
  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('password-error').textContent = '';
  document.getElementById('form-success').textContent = '';

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Name validation
  if (name.length < 2) {
    document.getElementById('name-error').textContent = 'Name must be at least 2 characters.';
    isValid = false;
  }

  // Email validation using regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('email-error').textContent = 'Enter a valid email address.';
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById('password-error').textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('form-success').textContent = 'Form submitted successfully!';
    // Reset form (optional)
    document.getElementById('signup-form').reset();
  }
});
