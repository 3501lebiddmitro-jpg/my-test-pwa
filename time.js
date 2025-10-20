
const btn = document.getElementById('showTimeBtn');
const box = document.getElementById('timeBox');
let timerId = null;

function formatKyivNow() {
  try {
    const fmt = new Intl.DateTimeFormat('uk-UA', {
      timeZone: 'Europe/Kyiv',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      day: '2-digit', month: '2-digit', year: 'numeric'
    });
    return fmt.format(new Date());
  } catch (e) {
    // Фолбэк, если вдруг нет Intl/таймзоны
    return new Date().toLocaleString('uk-UA');
  }
}

btn.addEventListener('click', () => {
  box.classList.remove('hidden');
  box.textContent = formatKyivNow();

  // Обновляем каждую секунду после первого клика
  clearInterval(timerId);
  timerId = setInterval(() => {
    box.textContent = formatKyivNow();
  }, 1000);
});
