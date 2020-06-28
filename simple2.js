let promise = Promise.reject(new Error("Ошибка в промисе!"));

setTimeout(() => promise.catch(err => alert('поймана')), 1000);

// Ошибка в промисе!
window.addEventListener('unhandledrejection', event => alert(event.reason));