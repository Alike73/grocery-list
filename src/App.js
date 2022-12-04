
import './App.css';
import image from './shopping2.png';
import imageTwo from './man1.png';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='App'>
      <h1>GROCERY LIST</h1>
      <img src={ image } alt="grocery" width="300px" />
      <GroceryList />
      <img src={ imageTwo } alt="shopping-man" width="300px" />
    </div>
  );
}

export default App;
