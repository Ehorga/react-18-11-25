import { useState, useEffect } from "react";
import { moods } from "../../constants";
import styles from "./MoodTracker.module.scss";
const STORAGEKEY = "moodHistory";
function loadHistory() {
  try {
    const historyLoad = localStorage.getItem(STORAGEKEY);
    return historyLoad ? JSON.parse(historyLoad) : [];
  } catch  {
    return [];
  }
}
const MoodTracker = () => {
  const [moodSelect, setMoodSelect] = useState("");
  const [moodHistory, setMoodHistory] = useState(loadHistory);
  useEffect(() => {
    localStorage.setItem(STORAGEKEY, JSON.stringify(moodHistory));
  }, [moodHistory]);
  const selectMood = (mood) => {
    setMoodSelect(mood);
    const today = new Date().toLocaleString();
    const objectMood = { date: today, mood };
    setMoodHistory((prevHistory) => [...prevHistory, objectMood]);
  };
  const showMood = (mood) => (
    <span
      key={mood}
      onClick={() => {
        selectMood(mood);
      }}
    >
      {mood}
    </span>
  );
  const showHistory = (moodObject, index) => (
    <li key={index}>
      {moodObject.date}-{moodObject.mood}
    </li>
  );
  const clearHistory = () => {
    setMoodHistory([]);
    setMoodSelect("");
  };
  return (
    <section>
      <h2>Як ти сьогодні?</h2>
      <div className={styles.moods}>{moods.map(showMood)}</div>
      {moodSelect && <p>Твій вибір:{moodSelect}</p>}
      <h3>Історія:{}</h3>
      <ul>{moodHistory.map(showHistory)}</ul>
      <button onClick={clearHistory}>Очистити</button>
    </section>
  );
};

export default MoodTracker;
