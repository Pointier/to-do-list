import { compareAsc, format } from "date-fns";

enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

type ChecklistItem = {
  description: string;
  completed: boolean;
};

class ToDo {
  title: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  notes: string;
  checklist: ChecklistItem[];

  constructor(
    title: string,
    description: string,
    dueDate: Date,
    priority: Priority,
    notes: string,
    checklist: ChecklistItem[],
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
}

export { ToDo, Priority, ChecklistItem };
