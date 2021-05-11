import './App.css';
import Raylene from './images/Raylene.png'

function App() {
  return (
    <div className="App">
     <img src={Raylene} alt="Raylene" />
     <h1>Raylene Ann Jones</h1>
     <h2>April 6, 1956 - May 10, 2021</h2>
     <main>
       <p>Raylene passed away peacefully at home surrounded by family.</p>
       <p>She is survived by her husband Michael, children Amy, Adam, Peter, Stephen, Paul, Isaac, and Rebecca, and grandchildren Andrew, Jacob, Anne, Matthew, Flora, Brooks, and Heather</p>
       <p>The family is taking visitors outdoors on Saturday May 15 from 3:00-4:30.  Raylene had an amazing sense of humor and requested a bounce house to be there, so dress accordingly.</p>
       <p>60 E 1600 N St, Orem, UT 84057</p>
     </main>
    </div>
  );
}

export default App;
