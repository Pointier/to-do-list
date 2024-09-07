import "./style.css";
import { ToDo, Priority, ChecklistItem } from "./module/to-do";
import { Project } from "./module/project";

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

const defaultProject = new Project("default", [toDo]);

const buttonTest = document.createElement("button");
buttonTest.innerText = "buttonTest";
buttonTest.addEventListener("click", () => {
  formToDo();
});

document.body.appendChild(buttonTest);

function formToDo() {
  const form = document.createElement("div");
  form.innerText = "Data needed to create a new form";

  const title = document.createElement("input");
  title.type = "text";

  const description = document.createElement("input");
  description.type = "text";

  const priorityDropdown = document.createElement("select");

  const priorities = ["Low", "Medium", "High"];

  priorities.forEach((prio) => {
    const option = document.createElement("option");
    option.value = prio;
    option.innerText = prio;
    priorityDropdown.appendChild(option);
  });
  let selectedPriority = "";
  priorityDropdown.addEventListener("change", (event) => {
    selectedPriority = (event.target as HTMLSelectElement).value;
  });

  form.appendChild(title);
  form.appendChild(description);
  form.appendChild(priorityDropdown);

  document.body.appendChild(form);

  const valid = document.createElement("button");
  valid.innerText = "ok";
  valid.addEventListener("click", () => {});
}

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

function displayProject(project: Project, appendTo: Element) {
  const projectElem = document.createElement("div");
  projectElem.innerText = project.name;

  appendTo.appendChild(projectElem);

  displayToDo(toDo, projectElem);
}

displayProject(defaultProject, document.body);
