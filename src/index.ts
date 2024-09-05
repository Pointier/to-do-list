import "./style.css";
import { ToDo, Priority, ChecklistItem } from "./module/to-do";
const testDate = new Date("December 17, 1995 03:24:00");
const checklist: ChecklistItem[] = [
  { description: "voili voilu", completed: false },
];
const checklist2: ChecklistItem[] = [];
const toDo = new ToDo(
  "test",
  "my first to do",
  testDate,
  Priority.High,
  "some notes",
  checklist,
);
const testDiv = document.createElement("div");
testDiv.innerText = toDo.description;
document.body.appendChild(testDiv);

function displayToDo(list: ToDo, appendTo: Element) {
  const listElem = document.createElement("div");
  listElem.classList.add("toDoElem");

  const title = document.createElement("div");
  title.innerText = "title : " + list.title;
  listElem.appendChild(title);

  const description = document.createElement("div");
  description.innerText = "description : " + list.description;
  listElem.appendChild(description);

  const date = document.createElement("div");
  date.innerText = "date : " + list.dueDate;
  listElem.appendChild(date);

  const priority = document.createElement("div");
  priority.innerText = "priority : " + list.priority;
  listElem.appendChild(priority);

  const notes = document.createElement("div");
  notes.innerText = "notes : " + list.notes;
  listElem.appendChild(notes);

  for (const elem of list.checklist) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = elem.completed;
    listElem.appendChild(checkbox);
    const checkDescription = document.createElement("span");
    checkDescription.innerText = elem.description;
    listElem.appendChild(checkDescription);
  }

  appendTo.appendChild(listElem);
}

displayToDo(toDo, document.body);
