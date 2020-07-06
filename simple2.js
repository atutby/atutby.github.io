async function load() {
  let say = await import('./say.js');
  say.hi();
  say.bye();
  say.default();
}
