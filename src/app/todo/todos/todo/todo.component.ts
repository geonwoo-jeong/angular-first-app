import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "../../share/todo.model";

@Component({
  selector: "app-todo",
  template: `
    <input type="checkbox" [checked]="todo.done" /> {{ todo.text }}
  `,
  styles: []
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}
}
