import { useState , useCallback} from 'react';
import './App.css';
import Demo from './components/Demo/Demo';
import Button from './components/UI/Button/Button';

function App() {
  console.log('APP IS RUNNIG ');
  const [listTilte  , setListTitle] = useState('my List');
  const changeTitlehandler = useCallback(() =>{
    setListTitle('New title!')
  },[]); 
  return (
   
    <>
      <div className='app'>
          <Demo title={listTilte} items={[5,3,1,10,9]}/>
          <Button onClick={changeTitlehandler}>Allowed toggle</Button>
      </div>
    </>
  );
}

export default App;
  