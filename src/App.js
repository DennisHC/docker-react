import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a>
        <div class="cards-container">
          <Card title={"Gordon Ramsay"}
            imgSrc={"https://www.gannett-cdn.com/-mm-/9f4802f9ca15eb36f8b1b3c7b82670f5903ba52c/c=0-34-1974-2666/local/-/media/2017/05/26/Wilmington/Wilmington/636313954153472624-HK1603-DinServ-0060-hires2.jpg?width=660&height=880&fit=crop&format=pjpg&auto=webp"}
            bodyText={"The best chef."}/>
          <Card title={"Cooking"} 
            imgSrc={"https://www.cook2eatwell.com/wp-content/uploads/2019/03/Spaghetti-Aglio-e-Olio.jpg"}
            bodyText="Pasta Aglio e Olio"
          />
          <Card title={"JUST DO IT"}
            imgSrc={"https://images.genius.com/2b790e48bcd9779bce4dc5bc74a01118.563x1000x1.png"}
            bodyText={"Don't let your dreams just be dreams."}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
