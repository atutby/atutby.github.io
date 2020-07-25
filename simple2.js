console.log(navigator.userAgent);
console.log(navigator.platform);
console.log(location);

alert(location.href);
if (confirm("Перейти на Wikipedia?")) {
  location.href = "https://wikipedia.org";
}