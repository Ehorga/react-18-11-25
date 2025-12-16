import "./App.css";
import RockPaperScissors from "./components/RockPaperScissors/RockPaperScissors";
import Playlist from "./components/Playlist/Playlist";
import QuoteList from "./components/QuoteList/QuoteList";

const App = () => {
  return (
    <>
      <QuoteList />
      <RockPaperScissors />
      <Playlist />
    </>
  );
};

export default App;
