export interface ITask {
  id: string;
  taskName: string;
  taskDescription: string;
  taskDeadline: string;
}

export interface ITaskContent {
  tasks?: ITask[];
  setTasks(prev: any): void;
}

export interface IAlertContent {
  showAlert: ITodoAlert;
  setShowAlert(prevAlert: ITodoAlert): void;
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

export interface ITodoAlert {
  isShow: boolean;
  variant: string;
  text: string;
}
