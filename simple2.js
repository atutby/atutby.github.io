console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(location);

alert(location.href);
if (confirm("Go to Wikipedia?")) {
  location.href = "https://wikipedia.org";
}

document.body.style.background = 'red';
setTimeout(() => document.body.style.background = '', 3000);