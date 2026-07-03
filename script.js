/* =========================================================
   Honda Motors — Shared JavaScript
   Handles the onclick behaviours for buttons across pages
   ========================================================= */

/* HOME PAGE ------------------------------------------------
   Smoothly scrolls to the model line-up and gives feedback. */
function exploreModels() {
  var target = document.getElementById('lineup');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
  alert("Welcome to Honda Motors!\nScroll down to explore our 2026 line-up.");
}

/* HOME PAGE ------------------------------------------------
   Toggles a short "Why Honda" detail panel open/closed. */
function toggleDetails() {
  var box = document.getElementById('why-details');
  var btn = document.getElementById('why-btn');
  if (!box) return;
  if (box.style.display === 'block') {
    box.style.display = 'none';
    btn.textContent = 'Show reliability facts';
  } else {
    box.style.display = 'block';
    btn.textContent = 'Hide reliability facts';
  }
}

/* PRODUCTS PAGE -------------------------------------------
   Builds an instant estimated quote for the chosen model. */
function getQuote(model, price) {
  var out = document.getElementById('quote-out');
  if (!out) return;
  var tax = Math.round(price * 0.05);          // 5% registration
  var total = price + tax;
  out.innerHTML =
    'Estimated on-road price for the <strong>' + model + '</strong>: ' +
    '$' + price.toLocaleString() + ' + $' + tax.toLocaleString() +
    ' reg. = <strong>$' + total.toLocaleString() + '</strong>. ' +
    'A specialist will confirm final pricing.';
  out.classList.add('show');
  out.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* CONTACT PAGE --------------------------------------------
   Validates the enquiry form without leaving the page. */
function submitEnquiry() {
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();
  var msg = document.getElementById('form-msg');
  var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (name === '' || email === '' || message === '') {
    msg.className = 'form-msg err';
    msg.textContent = 'Please fill in your name, email and message.';
    return;
  }
  if (!emailOk) {
    msg.className = 'form-msg err';
    msg.textContent = 'That email address does not look right — please check it.';
    return;
  }

  msg.className = 'form-msg ok';
  msg.textContent = 'Thanks, ' + name + '! Your enquiry has been received. We will reply within one business day.';

  // clear the fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
  var phone = document.getElementById('phone');
  if (phone) phone.value = '';
}
