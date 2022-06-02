// import React from "react";
// import { ITaskContent, IAlertContent } from "../components/Todo/Interfaces";

// export const TodosContext = React.createContext<ITaskContent>({
//   tasks: [],
//   setTasks: () => {},
// });

// export const AlertContext = React.createContext<IAlertContent>({
//   showAlert: {},
//   setter: () => {},
// });

import TodosContext from "./TodoContext";
import AlertContext from "./AlertContext";

export { TodosContext, AlertContext };
