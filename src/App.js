
import './scss/app.scss';
import Header from "./components/Header";
import Subscribe from "./page/Subscribe/Subscribe";
import Clients from "./page/Clients/Clients";
import Space from "./page/Space/Space";
import Cta from "./page/cta/Cta";

function App() {
  return (
    <div className="App">
      <Header/>
        <Subscribe/>
        <Clients/>
      <Space/>
        <Cta/>
    </div>
  );
}

export default App;
