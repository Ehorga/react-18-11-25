import "./App.css";
import TextSizeWrapper from "./components/TextSizeWrapper/TextSizeWrapper";
import QuoteList from './components/QuoteList/QuoteList';
import MoodTracker from './components/MoodTracker/MoodTracker';



const App = () => {
  return (
    <>
    <TextSizeWrapper>
      <MoodTracker/>
      <QuoteList/>
     </TextSizeWrapper>
    </>
  );
};

export default App;
