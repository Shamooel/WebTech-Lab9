import './App.css';
import Counter from './components/counter'; 
import Calculator from './components/calculator';
import Form from './components/form'; 
import ShoppingCart from './components/ShoppingCart';
import './components/Tasks.css';
 

function App() {
  return (
    <div className="App">
       <Counter/>
      <Calculator/>
      <Form/>
      <ShoppingCart/>

    </div>
  );
}

export default App;
