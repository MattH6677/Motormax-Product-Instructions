document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', e => {
    e.stopPropagation();
    const dropdown = button.parentElement;
    dropdown.classList.toggle('open');
  });
});
