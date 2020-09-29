const newTaskForm = document.querySelector("#newTaskForm")
const input = document.querySelector("#addNewTask")
const tasksList = document.querySelector("#list-group")
const emptyListItem = document.querySelector("#empty-list-item")

const tasks = JSON.parse(localStorage.getItem('todoTasks')) || []
let id = 1

renderTasks(tasks)

newTaskForm.addEventListener("submit", event => {
	event.preventDefault()

	const task = {
		id: tasks.length + 1,
		date: new Date().toLocaleString("ru"),
		text: input.value.trim(),
		status: "current"
	}

	tasks.push(task)

	localStorage.setItem("todoTasks", JSON.stringify(tasks))

	renderTasks(tasks)

	newTaskForm.reset()

	input.focus()
})

tasksList.addEventListener("click", event => {

	removeTask(event)

	readyTask(event)
})


function saveTasks() {
	localStorage.setItem("todoTasks", JSON.stringify(tasks))
}

function findTaskIndex(element, tasks) {
	const taskId = parseInt(element.closest(".list-group-item").dataset.id)
	const taskIndex = tasks.findIndex(task => task.id == taskId)

	return taskIndex
}

function readyTask(event) {
	if (event.target.dataset.action === "ready") {
		const taskIndex = findTaskIndex(event.target, tasks)

		if (tasks[taskIndex].status !== "ready") {
			const currentTasks = tasks[taskIndex]
			tasks[taskIndex].status = "ready"
			
			tasks.splice(taskIndex, 1)
			currentTasks.classReady = "task-title--done"
			tasks.unshift(currentTasks)
			
			saveTasks()
			renderTasks(tasks)
		}
		event.target.remove()
	}
}

function removeTask (event) {
	if (event.target.dataset.action === "delete-task") {
		const taskindexDeleted = findTaskIndex(event.target, tasks)
		
		tasks.splice(taskindexDeleted, 1)

		saveTasks()

		renderTasks(tasks)
	}
}

function renderNotification() {
	const notificationHTML = `
				<li id="empty-list-item" class="list-group-item text-center">
					Список дел пуст
				</li>`

	tasksList.insertAdjacentHTML("afterbegin", notificationHTML)
}

function renderTasks (taskList) {
	tasksList.innerHTML = ""
	if (taskList.length > 0) {
		taskList.forEach(task => {
			const classReady = task.hasOwnProperty("classReady") ? task.classReady : ""
			const isReady = task.hasOwnProperty("classReady")
			const taskHTML = `
				<li data-id="${task.id}" class="list-group-item d-flex justify-content-between">
					<span data-task-content class="task-title ${classReady}">${task.text}</span>
					<div>
						<button type="button" data-action="ready" class="btn btn-light align-self-end ${isReady ? "button--none" : ""}">Готово</button>
						<button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
					</div>
				</li>`

			tasksList.insertAdjacentHTML("afterbegin", taskHTML)
		})
	} else {
		renderNotification()
	}
}