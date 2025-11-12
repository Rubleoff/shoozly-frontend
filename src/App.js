
import { useEffect,useState } from 'react';
import './App.css';
import CartDrawerButton from './components/UI/CartDrawerButton/CartDrawerButton';
import Header from './components/UI/Header/Header';
import ProductCard from './components/UI/ProductCard/ProductCard';
import CartDrawer from './components/UI/CartDrawer/CartDrawer';
import {useTelegram} from './components/hooks/useTelegram'



function App() {
  const {tg, onClose} = useTelegram();

  const [cards, setCards] = useState([
    {id: 1, name: "JJJJ", price: 4990, cat: "Subscriptions"},
    {id: 2, name: "WWWW", price: 10990, cat: "Game Currency"},
    {id: 3, name: "FFFF", price: 14990, cat: "Game Currency"},
    {id: 4, name: "KKKK", price: 20990, cat: "Game Currency"},
    {id: 5, name: "YYYY", price: 4990, cat: "Subscriptions"},
    {id: 6, name: "SSSS", price: 10990, cat: "Game Currency"},
    {id: 7, name: "CCCC", price: 14990, cat: "Game Currency"},
    {id: 8, name: "BBBB", price: 20990, cat: "Subscriptions"},
    {id: 9, name: "AAAA", price: 4990, cat: "Subscriptions"},
    {id: 10, name: "MMMM", price: 10990, cat: "Game Currency"},
    {id: 11, name: "PPPP", price: 14990, cat: "VPN"},
    {id: 12, name: "XXXX", price: 20990, cat: "Subscriptions"},
  ])

  const [selectedCat,setSelectedCat] = useState(null)

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    tg.ready()
  },[])
  
  const filteredCards = 
  selectedCat
  ? cards.filter(card => card.cat === selectedCat)
  : cards

    const addToCart = (item) => {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(i => i.id === item.id);
        if (existingItem) {
          return prevItems.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prevItems, { ...item, quantity: 1 }];
      });
    };
    
  return (
    <div className="App">
      {/* You gotta work
      <button onClick = {onClose} 
      style={{backgroundColor: 'var(--tg-theme-button-color)', borderColor: 'transparent'}}>
        Close the app</button> */}
      <Header 
      onCategorySelect={setSelectedCat} 
      selectedCategory={selectedCat}
      />
      <div className="showcase">
        {filteredCards.map(card =>
          <ProductCard
            key={card.id}
            name={card.name}
            price={card.price}
            cat={card.cat}
            onAddToCart={addToCart}
            productData={{ id: card.id, name: card.name, price: card.price }}
          />
        )}
      </div>
      <CartDrawerButton 
        onClick={() => setIsDrawerOpen(true)} 
          cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />
      <CartDrawer 
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        cartItems={cartItems}
      />
    </div>
  );
}

export default App;
