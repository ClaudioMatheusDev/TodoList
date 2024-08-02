import React from 'react'

type Props = {
  btnText: string
}

const TaskForm = ({btnText}: Props) => {
  return (
    <div>
    <form>
      <div>
        <label htmlFor='title'>Título:</label>
        <input type='text' name='title' placeholder='Título da tarefa' />
      </div>
      <div>
        <label htmlFor='difficulty'>Dificuldade:</label>
        <input type='text' name='difficulty' placeholder='Dificuldade da tarefa' />
      </div>
      <input type='submit' value={btnText} />
    </form>
  </div>
  );
};

export default TaskForm;