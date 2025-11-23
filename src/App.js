
import { useEffect, useState } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/UI/Header/Header';
import ProductCard from './components/UI/ProductCard/ProductCard';
import CartDrawerButton from './components/UI/CartDrawerButton/CartDrawerButton';
import CartDrawerModuleWindow from './components/UI/CartDrawerModuleWindow/CartDrawerModuleWindow';



function App() {



  //Кастомные Хуки
  const {tg} = useTelegram();

  //UseState only
  const [cards, setCards] = useState([
    {id: 1, title: 'test', price: 1234, cat: '1'},
    {id: 2, title: 'test', price: 1234, cat: '1'},
    {id: 3, title: 'test', price: 1234, cat: '1'},
    {id: 4, title: 'test', price: 1234, cat: '1'},
    {id: 1, title: 'test', price: 1234, cat: '1'},
    {id: 2, title: 'test', price: 1234, cat: '1'},
    {id: 3, title: 'test', price: 1234, cat: '1'},
    {id: 4, title: 'test', price: 1234, cat: '1'},
  ])

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)


  //Остальные хуки
  useEffect(() => {
    tg.ready()
  },[])



  
  //Функции
  const slide = () => {

  }



  
  
  
  return (
    <div className="App">
      <Header slider={slide}/>
      <div className='showcase'>
        {cards && (cards.map(item => (<ProductCard key={item.id} item={item}/>)))}
      </div>
      <CartDrawerButton onClick = {() => setIsDrawerOpen(true)}/>
      <CartDrawerModuleWindow 
      isOpen = {isDrawerOpen}
      onClose = {() => setIsDrawerOpen(false)}/>
    </div>
  );
}

export default App;
