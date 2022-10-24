
import './scss/app.scss';
import Header from "./components/Header";
import Subscribe from "./page/Subscribe/Subscribe";
import Clients from "./page/Clients/Clients";

function App() {
  return (
    <div className="App">
      <Header/>
        <Subscribe/>
        <Clients/>
    </div>
  );
}

export default App;
