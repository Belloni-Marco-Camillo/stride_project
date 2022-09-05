import React, { useState } from "react";
import { ITask } from "../Interfaces/Interfaces";
import { ReactComponent as Bin } from './../Icons/Bin.svg';
import { ReactComponent as Checkbox_Off } from './../Icons/Checkbox_Off.svg';
import { ReactComponent as Checkbox_On } from './../Icons/Checkbox_On.svg';
import './../scss/TodoTask.scss';

interface Props {
  task: ITask;
  deleteTask(taskName: string): void;
  checkTask(taskName: string): void;
}

const TodoTask = ({ task, deleteTask, checkTask }: Props) => {
  const [,toggleCheck] = useState(task.checked);
  
  return (
    <div className="task">
      <Bin
        className="itemSpace"
        onClick={() => deleteTask(task.name)}
      />
      { task.checked ? <Checkbox_On className="itemSpace" onClick={() => { checkTask(task.name); toggleCheck(task.checked = !task.checked); }}/>
      : <Checkbox_Off className="itemSpace" onClick={() => { checkTask(task.name); toggleCheck(task.checked = !task.checked); }}/>}
      <div className="content">
        <span className={task.checked ? 'label cw labelBarrato' : 'label cw'}>{task.name}</span>
      </div>
    </div>
  );
};

export default TodoTask;