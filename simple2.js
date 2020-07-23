let date = new Date(2014, 11, 31, 12, 30, 055);

let formatter = new Intl.DateTimeFormat("ru");
alert( formatter.format(date) );

formatter = new Intl.DateTimeFormat("en-US");
alert( formatter.format(date) );

formatter = new Intl.DateTimeFormat("ru", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});
alert( formatter.format(date) );