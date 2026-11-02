const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
// Replace placeholder GitHub and LinkedIn URLs in index.html before publishing.
// Add assets/resume.pdf when ready; until then, hide the resume button.
const resumeLink = document.querySelector('#resume-link');
resumeLink.addEventListener('click', event => {
  if (!resumeLink.dataset.ready) {
    event.preventDefault();
    alert('Add your resume as assets/resume.pdf, then set data-ready="true" on the resume link in index.html.');
  }
});
document.querySelectorAll('[data-placeholder="true"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    alert('Replace this link with your public project repository URL, then remove data-placeholder="true".');
  });
});
