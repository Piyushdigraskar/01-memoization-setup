import React,{useState, useCallback} from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import DemoList from './components/Demo/DemoList';


function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [order, setOrder] = useState(true);
  

  const changeTitleHandler = useCallback(() => {
    setListTitle('sorted');
}, []);

const orderChangeHandler = useCallback(() => {
    setOrder(prevOrder => !prevOrder);
}, []);


  const listItems = [5, 3, 1, 10, 9];
//change to descending order
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoList title={listTitle} items={listItems} order={order}></DemoList>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={orderChangeHandler}>{order ? 'Change to Descending Order' : 'Change to Ascending Order'}</Button>
    </div>
  );
}

export default App;
