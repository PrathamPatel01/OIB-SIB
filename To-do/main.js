window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	const listDone_el = document.querySelector("#tasks-completed");
   


	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
        input.focus();

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';    
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

        const task_done_el = document.createElement('button');
		task_done_el.classList.add('done');
		task_done_el.innerText = 'Done';


		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_done_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);
		
        // task done
        const taskdone_el = document.createElement('div');
		taskdone_el.classList.add('task-done');

		const taskdone_content_el = document.createElement('div');
		taskdone_content_el.classList.add('content-done');

		taskdone_el.appendChild(taskdone_content_el);


        const taskdone_input_el = document.createElement('input');
		taskdone_input_el.classList.add('text');
		taskdone_input_el.type = 'text';    
		taskdone_input_el.value = task_input_el.value;
		taskdone_input_el.setAttribute('readonly', 'readonly');

		taskdone_content_el.appendChild(taskdone_input_el);

		const taskdone_actions_el = document.createElement('div');
		taskdone_actions_el.classList.add('actions');

        const taskdone_delete_el = document.createElement('button');
		taskdone_delete_el.classList.add('delete');
		taskdone_delete_el.innerText = 'Delete';

        taskdone_actions_el.appendChild(taskdone_delete_el);

        taskdone_el.appendChild(taskdone_actions_el);
        // listDone_el.appendChild(taskdone_el);
        // khatam task done
        

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
        task_done_el.addEventListener('click', (e) => {
             listDone_el.appendChild(taskdone_el);
             list_el.removeChild(task_el);
		});

		taskdone_delete_el.addEventListener('click', (e) => {
			listDone_el.removeChild(taskdone_el);
		});
		
	});
});