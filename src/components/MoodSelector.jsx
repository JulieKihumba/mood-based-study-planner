function MoodSelector({ moods, handleMoodSelect }) {
  return (
    <div className="mood-selector"> 
      <h3>How are you feeling today?</h3>
      
      <div className="mood-buttons">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => handleMoodSelect(mood)}
          >
            {mood}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MoodSelector;