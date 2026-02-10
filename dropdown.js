document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const dropdown = button.parentElement;
    const expanded = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', !expanded);
    dropdown.classList.toggle('open');
  });
});
