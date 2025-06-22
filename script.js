const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const themeName = document.getElementById('themeName');

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeToggle.checked = true;
  themeName.textContent = 'Dark';
}

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('dark');
    themeName.textContent = 'Dark';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    themeName.textContent = 'Light';
    localStorage.setItem('theme', 'light');
  }
});
