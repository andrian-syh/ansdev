document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // CONTACT FORM LOGIC
  // ==========================================
  const contactForm = document.getElementById('premium-contact-form');
  const statusMsg = document.getElementById('contact-status-msg');
  const submitBtn = document.getElementById('contact-submit-btn');

  if (contactForm && statusMsg && submitBtn) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      // ReCAPTCHA Verification Request
      const captchaResponse = typeof grecaptcha !== 'undefined' ? grecaptcha.getResponse() : '';
      if (!captchaResponse) {
        statusMsg.textContent = 'Please complete the reCAPTCHA validation first.';
        statusMsg.className = 'form-status error';
        return;
      }

      // Impose UI loading state
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;
      statusMsg.className = 'form-status';

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('https://formspree.io/f/mldbznzv', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          statusMsg.textContent = 'Transmission sent successfully! I will reply shortly.';
          statusMsg.className = 'form-status success';
          contactForm.reset();
          if (typeof grecaptcha !== 'undefined') grecaptcha.reset(); // Flush captcha token state
        } else {
          const data = await response.json();
          if (Object.hasOwn(data, 'errors')) {
            statusMsg.textContent = data.errors.map(err => err.message).join(', ');
          } else {
            statusMsg.textContent = 'Oops! There was a problem sending your message.';
          }
          statusMsg.className = 'form-status error';
        }
      } catch (error) {
        statusMsg.textContent = 'Oops! Network error. Please try again later.';
        statusMsg.className = 'form-status error';
      }

      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    });
  }

});
