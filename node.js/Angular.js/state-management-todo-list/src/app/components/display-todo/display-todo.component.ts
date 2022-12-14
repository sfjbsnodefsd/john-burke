import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Entity/Todo';
import { Store, select } from '@ngrx/store';
import { TodoReducer } from 'src/app/reducers/todo.reducer';
import { TodoRemove } from 'src/app/actions/todo.actions';
@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent implements OnInit {
todos:Todo[];
remove: Todo[]
removeTodo(index:number) {
  this.store.dispatch(new TodoRemove(index))
}



constructor(private store: Store<{todos:Todo[]}>) {
    store.pipe(select('todos')).subscribe((values) => {
      this.todos = values;
      console.log(values);
      
    })
   }





  ngOnInit(): void {
  }

}