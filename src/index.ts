import { ToDo, Priority, ChecklistItem } from "./module/to-do";
const testDate = new Date("December 17, 1995 03:24:00");
const checklist: ChecklistItem[] = [
  { description: "voili voilu", completed: false },
];
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
