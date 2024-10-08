import React, { useState } from 'react';

// COMPONENTES
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// CSS
import styles from './App.module.css';

// interface
import {ITask} from "./interfaces/Task";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar Tarefa' taskList={taskList} />
        </div>
        <div>
          <h2>Suas tarefas</h2>
          <TaskList taskList={taskList}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
