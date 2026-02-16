import TaskItem from './TaskItem';

function TaskList({ tasks, completedTasks, onTaskToggle }) {
  return (
    <div>
      <h3>Recommended Tasks:</h3>
      
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task}
            taskName={task}
            isCompleted={completedTasks.includes(task)}
            onToggle={onTaskToggle}
          />
        ))}
      </div>

      <p>Completed: {completedTasks.length} / {tasks.length}</p>
    </div>
  );
}

export default TaskList;