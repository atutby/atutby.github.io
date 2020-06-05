let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- when an error occurs...
  alert( user.name ); // doesn't work

} catch (e) {
  // ...the execution jumps here
  console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
  console.log( e.name );
  console.log( e.message );
}