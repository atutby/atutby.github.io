let db;
let dbReq = indexedDB.open("myDB", 1);
dbReq.onupgradeneeded = (event) => {
  // Зададим переменной db ссылку на базу данных
  db = event.target.result;
  // Создадим хранилище объектов с именем notes.
  let notes = db.createObjectStore("notes", { autoIncrement: true });
};
dbReq.onsuccess = (event) => {
  db = event.target.result;
};
dbReq.onerror = (event) => {
  alert("error opening database " + event.target.errorCode);
};

const addStickyNote = (db, message) => {
  // Запустим транзакцию базы данных и получите хранилище объектов Notes
  let tx = db.transaction(["notes"], "readwrite");
  let store = tx.objectStore("notes");
  // Добаляем заметку в хранилище объектов
  let note = { text: message, timestamp: Date.now() };
  store.add(note);
  // Ожидаем завершения транзакции базы данных
  tx.oncomplete = () => {
    console.log("stored note!");
    getAndDisplayNotes(db);
  };
  tx.onerror = (event) => {
    alert("error storing note " + event.target.errorCode);
  };
};

const submitNote = () => {
  let message = document.getElementById("newmessage");
  addStickyNote(db, message.value);
  message.value = "";
};

dbReq.onsuccess = (event) => {
  db = event.target.result;

  getAndDisplayNotes(db);
};

const getAndDisplayNotes = (db) => {
  let tx = db.transaction(["notes"], "readonly");
  let store = tx.objectStore("notes");

  // Создать запрос курсора
  let req = store.openCursor();
  let allNotes = [];

  req.onsuccess = (event) => {
    // Результатом req.onsuccess в запросах openCursor является
    // IDBCursor
    let cursor = event.target.result;

    if (cursor != null) {
      // Если курсор не нулевой, мы получили элемент.
      allNotes.push(cursor.value);
      cursor.continue();
    } else {
      // Если у нас нулевой курсор, это означает, что мы получили
      // все данные, поэтому отображаем заметки, которые мы получили.
      displayNotes(allNotes);
    }
  };

  req.onerror = (event) => {
    alert("error in cursor request " + event.target.errorCode);
  };
};

const displayNotes = (notes) => {
  let listHTML = "<ul>";
  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    listHTML +=
      "<li>" + note.text + " " + new Date(note.timestamp).toString() + "</li>";
  }
  document.getElementById("notes").innerHTML = listHTML;
};
