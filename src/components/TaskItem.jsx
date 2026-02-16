function TaskItem({ taskName, isCompleted, onToggle }) {
  return (
    <div onClick={() => onToggle(taskName)}>
      <input 
        type="checkbox" 
        checked={isCompleted}
        readOnly
      />
      <span>{taskName}</span>
    </div>
  );
}

export default TaskItem;