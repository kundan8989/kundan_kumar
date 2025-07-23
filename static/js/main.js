document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const res = await fetch('/contact', { method: 'POST', body: data });
  const result = await res.json();
  alert(result.status === 'sent' ? 'Message Sent!' : 'Error occurred');
  form.reset();
});
