import React, {useRef, useEffect} from 'react';
import cl from './Header.module.css';

const Header = ({ onCategorySelect, selectedCategory }) => {
  const sliderRef = useRef(null)
  const categories = ['Subscriptions', 'Game Currency', 'VPN'];

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  useEffect(() => {
    if (selectedCategory && sliderRef.current) {
      const selectedButton = sliderRef.current.querySelector(`.${cl.cat__selected}`);
      if (selectedButton) {
        selectedButton.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [selectedCategory]);

  return (
    <div className={cl.header}>
      <div className={cl.cat_slider}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${cl.cat_button} ${selectedCategory === cat ? cl.cat__selected : ''}`}
            onClick={() => handleCategoryClick(cat)}
            disabled={selectedCategory === cat}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
