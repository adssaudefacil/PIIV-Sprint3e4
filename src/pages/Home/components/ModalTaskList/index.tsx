import React, { useContext, useState } from "react";
import Button from "../../../../components/Button";
import ModalTask from "../../../../components/Modal";
import { TaskContext } from "../../../../context/TaskContext";
import { Container, ContentTask, TaskList } from "./style";

const ToDoList: React.FC = () => {
  const [modal, setModal] = useState(false);
  const { tarefas } = useContext(TaskContext);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Container>
      <p>Adicione novos compromissos</p>
      <Button onClick={toggle}>Criar compromisso</Button>
      <div className="task-container"></div>
      {modal && <ModalTask toggle={toggle} />}
      <TaskList>
        {tarefas.map((task) => {
          return (
            <ContentTask>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </ContentTask>
          );
        })}
      </TaskList>
    </Container>
  );
};

export default ToDoList;
