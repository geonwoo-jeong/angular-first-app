import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-add-todo",
  template: `
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText" />
    <button (click)="addTodo(newText)">Add</button>
  `,
  styles: []
})
export class AddTodoComponent implements OnInit {
  @Output() onTodoAdded = new EventEmitter();
  newText: string;

  constructor() {}

  addTodo(newText: string) {
    console.log(newText);
    this.onTodoAdded.emit(newText);
    this.newText = "";
  }

  ngOnInit() {}
}
