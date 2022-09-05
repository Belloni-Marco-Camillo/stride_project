import React, { FC, useState } from "react";
/* importo il mio foglio di stile */
import './scss/App.scss';
/* importo la componente todoTask */
import TodoTask from "./Components/TodoTask";
/* importo l'interfaccia di task */
import { ITask } from "./Interfaces/Interfaces";
/* importo le mie modali */
import Modal from './Modals/Modal';
import ModalContent from './Modals/ModalContent';
/* importo un una componente immagine svg */
import { ReactComponent as Adds } from './Icons/Adds.svg';


const App: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  /* creo una funzione per crearmi una tasck */
  const addTask = (name: string): void => {
    if (name === "") return;
    const duplicate = todoList.find((task) => task.name === name);
    if (duplicate) return;
    const task = { name, checked: false };
    setTodoList([...todoList, task].sort((a, b) => Number(a.checked) - Number(b.checked)));
  };

  /* creo una funzione per cancellarmi una tasck */
  const deleteTask = (taskName: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.name !== taskName;
      })
    );
  };

  /* creo una funzione per checcarmi una tasck */
  const checkTask = (taskName: string): void => {
    let updatedList = todoList.map((task) => {
      return task.name !== taskName ? task : {...task, checked: !task.checked};
    });
    const sortedList = updatedList.sort((a, b) => Number(a.checked) - Number(b.checked));
    setTodoList(sortedList);
  };

  /* costruisco la mia interfaccia */
  return (
    <div className="App">
      <div className="main">
        <h1>Titolo</h1>
        <div className="inputContainer">
          <div className="todoList d-flex">
            {/* faccio il refactoring della mia lista*/}
            {todoList.map((task: ITask, key: number) => {
              return <TodoTask key={key} task={task} deleteTask={deleteTask} checkTask={checkTask} />;
            })}
          </div>
        </div>
        
      </div>
      <div className="footer shadow">
      {/* faccio il refactoring della modale per il mio popup */}
      <Modal modalOpen={modalOpen}>
        <ModalContent setModalOpen={setModalOpen} addTask={addTask} />
      </Modal>
      <Adds />
      
      <button
        type='button'
        className='labelMedium'
        onClick={() => setModalOpen(true)}> <span>Nuova voce</span></button>        
      </div>
      
    </div>
  );
};

export default App;