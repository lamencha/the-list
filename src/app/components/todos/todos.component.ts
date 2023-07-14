import { Component } from '@angular/core';
import { Todo } from './../../models/Todo'
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/internal/operators/take';

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
  data: any;
  

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
public getJsonValue: any;

constructor(private http: HttpClient) {

}

ngOnInit(): void {
 this.getMethod();
 
}

httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'X-Api-Key': 'c/XqJges1/7MoqOf1YUJzw==o43291n0i9SyleXX'
  })
}

public getMethod() {
  this.http.get('https://api.api-ninjas.com/v1/quotes?category=success',{headers: this.httpOptions.headers}).pipe(take(1)).subscribe((data) => {
    console.log(data);
    this.getJsonValue = data;
    
  });

}

ngOnDestroy(){
  this.getJsonValue.unsubscribe();
}

}



