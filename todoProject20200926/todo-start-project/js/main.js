// Находим нужные элементы (теги) на странице
const form = document.querySelector('#newTaskForm');
const input = document.querySelector('#addNewTask');
const tasksList = document.querySelector('#list-group');
const emptyListItem = document.getElementsByName('emptyLi')[0];

// Загрузить данные
loadData();

// 1. ДОБАВЛЕНИЕ НОВОЙ ЗАДАЧИ
// Отслеживаем отправку формы
form.addEventListener('submit', function (event) {
	// Отменяем стандартное поведение при отправке формы (перезагрузку страницы)
	event.preventDefault();

	// Берем текст введенный пользователем в поле ввода
	const taskText = input.value;

	// Формируем разметку для новой задачи
	const taskHTML = `<li class="list-group-item d-flex justify-content-between">
						<span contenteditable="true" class="task-title">${taskText}</span>
						<div>
							<button type="button" data-action="ready" class="btn btn-light align-self-end">Готово</button>
							<button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
						</div>
                    </li>`;

	// Добавляем новую задачу на страницу
	// В тег ul добавляем новый тег li c текстом задачи
	tasksList.insertAdjacentHTML('afterbegin', taskHTML);

	// Скрываем или Показываем запись о том что список дел пуст
	toggleEmptyListItem();

	// Очищаем поле добавления новой задачи
	input.value = '';

    // Возвращаем фокус на поле ввода после добавления новой задачи
	input.focus();
	
	// Сохранить данные
	saveData();
})

// 2. КНОПКИ "ГОТОВО" и "УДАЛИТЬ"
// Прослушиваем клик внутри всего списка с задачами
tasksList.addEventListener('click', function(event){
	console.log(event.target);

	// Проверяем что клик произошел по кнопке "Удалить"
	if (event.target.getAttribute('data-action') == 'delete-task') {
		// Находим родительский тег <li> по классу .list-group-item и удаляем его
		event.target.closest('li.list-group-item').remove();

		// Скрываем или Показываем запись о том что список дел пуст
		toggleEmptyListItem();

		// Сохранить данные
		saveData();
	}
	// Проверяем что клик произошел по кнопке "Готово"
	else if (event.target.getAttribute('data-action') == 'ready') {
		// Находим родительский тег <li>
		const parentElement = event.target.closest('li.list-group-item');

		// Находим тег span и добавляем к нему дополнительный класс task-title--done
		parentElement.querySelector('span.task-title').classList.add('task-title--done');

		// Убираем у тега span атрибут contenteditable
		parentElement.querySelector('span.task-title').setAttribute('contenteditable', 'false');

		// Перемещаем запись в конец списка
		tasksList.insertAdjacentElement('beforeend', parentElement);

		// Удалить кнопку "Готово" и "Удалить"
		parentElement.querySelector('button[data-action="ready"]').remove();

		// Сохранить данные
		saveData();
	}
})

// Функция сокрытия или показа сообщения "список дел пуст"
function toggleEmptyListItem() {
    if (tasksList.children.length > 1) {
        emptyListItem.style.display = "none";
    } else {
        emptyListItem.style.display = 'block';
	}
}

function saveData() {
	localStorage.setItem('todoList', tasksList.innerHTML)
}

function loadData() {
	if (localStorage.getItem('todoList')) {
		tasksList.innerHTML = localStorage.getItem('todoList');
	}
}

// localStorage.setItem('name', 'Yurij');
// localStorage.getItem('name')