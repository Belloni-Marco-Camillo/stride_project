import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import './../scss/ModalContent.scss';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  button {
    margin-bottom: 20px;
    color: #01001e;
  }
  
`;

/* dichiaro le propos che mi scambio con il file genitore (app.tsx) */
type Props = {
  setModalOpen: any;
  task?: string;
  addTask(name: string): void;
};

const ModalContent: React.FC<Props> = ({ setModalOpen, addTask }) => {
  const [task, setTask] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } 
  };

  return (<div className='nes-container is-dark with-title is-centered'>
  <Wrapper>
    <div className="container">
      <textarea 
      rows="5" cols="50"
      placeholder='Inserisci voce' 
      name="task"
      value={task}
      onChange={handleChange} />
      <button
        type='button'
        onClick={() => {
          setModalOpen(false);
          addTask(task);
        } }
      >
        <span>Salva</span>
      </button>
    </div>
  </Wrapper>
</div>);
}

export default ModalContent;
