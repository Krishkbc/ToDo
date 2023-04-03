'use strict'

const btn_submit = document.querySelector('#new-task-submit');
const input_new_task = document.querySelector('#add-new-task');

const form = document.querySelector('#new-task-form');
const list_elements = document.querySelector('#tasks');

const tasks = document.querySelector('.task');
const btn_delete = document.querySelector('.delete');


const renderList = function(taskToAdd){
    const html = `
    <div class="new-task">
                        <div class="content">
                            <input type="text" class="text" readonly value="${taskToAdd}" />
                        </div>
                        <div class="task-btns">
                            <button class="edit">Edit</button>
                            <button class="delete">Delete</button>
                        </div>
                    </div>
    `;
    list_elements.insertAdjacentHTML('beforeend', html);
    
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input_new_task.value;
    if (!task) {
        alert('please enter the task');
        return;
    }
    renderList(task);

    input_new_task.value = '';
})

btn_delete.addEventListener('click', function(e){
    e.preventDefault();
    console.log('gsd')
})