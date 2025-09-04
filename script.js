const select = document.getElementById('citySelect');
const goBtn = document.getElementById('goBtn');

function updateButtonState() {
  goBtn.disabled = !select.value;
}
updateButtonState();

select.addEventListener('change', updateButtonState);

goBtn.addEventListener('click', () => {
  const url = select.value;
  if (url) window.location.assign(url);
});

select.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === 'NumpadEnter') && select.value) {
    e.preventDefault();
    window.location.assign(select.value);
  }
});
