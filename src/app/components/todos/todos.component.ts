import { Component } from '@angular/core';
import { Todo } from './../../models/Todo'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent {
  todos:Todo[] | undefined;

  inputTodo:string =""

  todos1 = [
    {
      content: 'Hire The Guy That Created This App',
      completed: false
    },
    {
      content: 'Second To do',
      completed: true
    }
  ]

  toggleDone (id:number) {
    this.todos1.map((v, i) => {
      if (i == id) v.completed = !v.completed;
  
      return v;
    })
  }
  
  deleteTodo (id:number) {
    this.todos1 = this.todos1.filter((v, i) => i !== id);
  }
  
  addTodo () {    
    this.todos1.push({
      content: this.inputTodo,
      completed: false
      
    });
    this.inputTodo = "";
    
  }
  onSubmit(form: NgForm) {
    console.log(form);
    form.reset();
  }

}



