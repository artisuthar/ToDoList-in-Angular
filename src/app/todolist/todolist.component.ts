import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

  taskArray=[{taskName:"brush teeth", isCompleted:false}];

  onSubmit(item:NgForm)
  {
    console.log(item);

    this.taskArray.push({
      taskName: item.controls['dataname'].value,
      isCompleted:false
    })
    item.reset();
  }
  onDelete(index:number)
  {
    console.log(index);
    this.taskArray.splice(index, 1);
  }

  onCheck(index:number)
  {
    console.log(this.taskArray);
    this.taskArray[index].isCompleted=!this.taskArray[index].isCompleted;
  }
}
