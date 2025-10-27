if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

let deferredPrompt;
const installButton = document.getElementById('installButton');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installButton.classList.remove('hidden');
});

installButton.addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  installButton.classList.add('hidden');
});

window.addEventListener('appinstalled', () => {
  installButton.classList.add('hidden');
});
