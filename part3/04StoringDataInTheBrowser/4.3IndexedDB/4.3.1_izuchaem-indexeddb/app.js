let reverseOrder = false;

let db;
let dbReq = indexedDB.open("myDB", 2);
dbReq.onupgradeneeded = (event) => {
  db = event.target.result;
  // Создадим хранилище объектов notes или получим его, если оно уже существует.
  let notes;
  if (!db.objectStoreNames.contains("notes")) {
    notes = db.createObjectStore("notes", { autoIncrement: true });
  } else {
    notes = dbReq.transaction.objectStore("notes");
  }
  // Если в notes еще нет индекса timestamp создадим его
  if (!notes.indexNames.contains("timestamp")) {
    notes.createIndex("timestamp", "timestamp");
  }
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

  let index = store.index("timestamp");

  // Создать запрос курсора
  let req = index.openCursor(null, reverseOrder ? "prev" : "next");
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

flipNoteOrder = (notes) => {
  reverseOrder = !reverseOrder;
  getAndDisplayNotes(db);
};

const displayNotes = (notes) => {
  let listHTML = "<ul>";
  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    listHTML +=
      '<li><button onclick="deleteNote(event)" data-id="' +
      note.timestamp +
      '">X</button>';
    listHTML += note.text + " " + new Date(note.timestamp).toString() + "</li>";
  }
  document.getElementById("notes").innerHTML = listHTML;
};

//Далее добавим функцию удаления deleteNote
const deleteNote = (event) => {
  // получаем признак выбранной записи
  const valueTimestamp = parseInt(event.target.getAttribute("data-id"));

  // открываем транзакцию чтения/записи БД, готовую к удалению данных
  const tx = db.transaction(["notes"], "readwrite");
  // описываем обработчики на завершение транзакции
  tx.oncomplete = (event) => {
    console.log("Transaction completed.");
    getAndDisplayNotes(db);
  };
  tx.onerror = function (event) {
    alert("error in cursor request " + event.target.errorCode);
  };

  // создаем хранилище объектов по транзакции
  const store = tx.objectStore("notes");
  const index = store.index("timestamp");

  // получаем ключ записи
  const req = index.getKey(valueTimestamp);
  req.onsuccess = (event) => {
    const key = req.result;
    // выполняем запрос на удаление указанной записи из хранилища объектов
    let deleteRequest = store.delete(key);
    deleteRequest.onsuccess = (event) => {
      // обрабатываем успех нашего запроса на удаление
      console.log("Delete request successful");
    };
  };
};
