// Select all dropdown toggle buttons
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(button => {
  button.addEventListener('click', e => {
    e.stopPropagation(); // Prevent the click from bubbling
    const dropdown = button.parentElement;
    
    // Close other open dropdowns (optional)
    document.querySelectorAll('.dropdown, .sub-dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });

    // Toggle this dropdown
    dropdown.classList.toggle('open');
  });
});

// Close dropdowns if clicking outside
document.addEventListener('click', function() {
  document.querySelectorAll('.dropdown, .sub-dropdown').forEach(d => d.classList.remove('open'));
});
