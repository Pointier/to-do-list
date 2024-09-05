import { ToDo } from "./to-do";

class Project {
  name: string;
  toDoList: ToDo[];

  constructor(name: string, toDoList: ToDo[]) {
    this.name = name;
    this.toDoList = toDoList;
  }
}

export { Project };
