import "./App.css";
import TextSizeWrapper from "./components/TextSizeWrapper/TextSizeWrapper";
import QuoteList from './components/QuoteList/QuoteList';
import MoodTracker from './components/MoodTracker/MoodTracker';
import { useState } from 'react';
import { ContextClick } from "./contexts";
import Playlist from './components/Playlist/Playlist';



const App = () => {
  const [amountClicks, setAmountClicks] = useState(0);

  return (
    
    <ContextClick.Provider value={{amountClicks , setAmountClicks}}>
    <TextSizeWrapper>
      <MoodTracker/>
      <QuoteList/>
      <Playlist/>
     </TextSizeWrapper>
    </ContextClick.Provider>
  );
};

export default App;
