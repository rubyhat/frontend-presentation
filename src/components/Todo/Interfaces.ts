export interface ITask {
  taskName: string;
  taskDescription: string;
  taskDeadline: string;
}

export interface IInputState {
  value: string;
  setter(text: string): void;
}

export interface IInput {
  title: string;
  hint: string;
  placeholder: string;
}

export interface ITodoForm {
  value: ITask[];
  setter(items: ITask[]): string;
}
