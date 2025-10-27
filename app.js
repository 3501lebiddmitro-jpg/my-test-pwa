if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js') 
      .then(reg => console.log('SW активований:', reg.scope))
      .catch(err => console.error('Помилка реєстрації SW:', err));
  });
}
