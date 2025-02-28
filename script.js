document
  .querySelector('.burger')
  .addEventListener('click', () =>
    document.querySelector('header nav').classList.toggle('nav-mobile')
  );
