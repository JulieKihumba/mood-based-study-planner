import { useState } from 'react';
import MoodSelector from './components/MoodSelector';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [mood, setMood] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);

  const tasks = {
    Focused: [
      'Work on complex algorithm',
      'Debug challenging code',
      'Write technical documentation',
      'Code review for team'
    ],
    Tired: [
      'Review pull requests',
      'Update project README',
      'Organize code files',
      'Watch coding tutorial'
    ],
    Motivated: [
      'Start new feature',
      'Learn new technology',
      'Refactor old code',
      'Build side project'
    ],
    Distracted: [
      'Fix small bugs',
      'Update dependencies',
      'Write unit tests',
      'Clean up comments'
    ]
  };

  const handleMoodSelect = (mood) => {
    setMood(mood);
    setCompletedTasks([]);
  };

  const handleTaskToggle = (taskName) => {
    if (completedTasks.includes(taskName)) {
      setCompletedTasks(completedTasks.filter(task => task !== taskName));
    } else {
      setCompletedTasks([...completedTasks, taskName]);
    }
  };

  const handleReset = () => {
    setMood('');
    setCompletedTasks([]);
  };

  const selectedTasks = mood ? tasks[mood] : [];
  const allTasksCompleted = selectedTasks.length > 0 && completedTasks.length === selectedTasks.length;

  return (
    <div>
      <h1 className='heading'>Mood Based Developer Study Planner</h1>
      <p className='description'>Plan your coding tasks based on how you feel</p>

      <MoodSelector 
        moods={['Focused', 'Tired', 'Motivated', 'Distracted']}
        selectedMood={mood}
        handleMoodSelect={handleMoodSelect}
      />

      {mood && (
        <div className='moods'>
          <h2 className='moods_heading'>Your mood: {mood}</h2>

          <TaskList 
            tasks={selectedTasks}
            completedTasks={completedTasks}
            handleTaskToggle={handleTaskToggle}
          />

          {allTasksCompleted && (
            <div>
              <p>Great job! You completed all tasks!</p>
            </div>
          )}

          <button onClick={handleReset}>Reset</button>
        </div>
      )}

    
    </div>
  );
}

export default App;