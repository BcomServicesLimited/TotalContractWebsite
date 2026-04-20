/* ============================================================
   TOTAL CONTRACT SERVICES — Main JS
   ============================================================ */

// Contact form — simple validation & fake submit
const form = document.getElementById('contactForm');
if (form) {
  const formSuccess = document.getElementById('formSuccess');

  form.addEventListener('submit', e => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.reset();
      submitBtn.textContent = 'Send';
      submitBtn.disabled = false;
      if (formSuccess) {
        formSuccess.classList.add('visible');
        setTimeout(() => formSuccess.classList.remove('visible'), 5000);
      }
    }, 1200);
  });
}
