// Находим нужные элементы (теги) на странице
const form = document.querySelector('#newTaskForm');
const input = document.querySelector('#addNewTask');
const tasksList = document.querySelector('#list-group');
const emptyListItem = document.querySelector('#empty-list-item');

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
})

tasksList.addEventListener('click', function(event) {
    // console.log(event.target);

    if (event.target.getAttribute('data-action') === 'delete-task') {
        // console.log('DELETE!');

        event.target.closest('li.list-group-item').remove(); 

        toggleEmptyListItem()
    } else if (event.target.getAttribute('data-action') === 'ready') {

       const parentElement = event.target.closest('li.list-group-item');

       parentElement.querySelector('span.task-title').classList.add('task-title--done');

       tasksList.insertAdjacentElement('beforeend', parentElement);
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


