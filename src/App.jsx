import "./App.css";
import Playlist from "./components/Playlist/Playlist";
import QuoteList from "./components/QuoteList/quoteList";


const App = () => {
  return (
    <div>
      <QuoteList /> 
      <Playlist />
    </div>
  );
};

export default App;
