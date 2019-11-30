import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'taskmanager-form',
  templateUrl: './taskmanager-form.component.html',
  styleUrls: ['./taskmanager-form.component.css']
})
export class TaskmanagerFormComponent{

  form = new FormGroup({
    tasks : new FormArray([])
  });

  addTask(task: HTMLInputElement)
  {
    this.tasks.push(new FormControl(task.value));
    task.value = '';
  }

  removeTask(task: FormControl)
  {
    let index = this.tasks.controls.indexOf(task);
    this.tasks.removeAt(index);
  }

  get tasks()
  {
    return this.form.get('tasks') as FormArray;
  }
}
