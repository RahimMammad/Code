import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import UseFetchData from '../hooks/UseFetchData';
import { useNavigate } from 'react-router-dom';
import { WishlistContext } from '../context/WIshlistContext';
import { BasketContext } from '../context/basketContext';

const Home = () => {
  const { data } = UseFetchData();
  const navigate = useNavigate();
  const [inpValue, setInpValue] = useState('');
  const [sortOrder, setSortOrder] = useState('default');
  const {addToWishlist} = useContext(WishlistContext)
  const {addToBasket} = useContext(BasketContext)


  const filteredItems = data
    .filter(
      (item) =>
        item.description.toLowerCase().includes(inpValue) ||
        item.name.toLowerCase().includes(inpValue)
    )
    .sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (sortOrder === 'asc') {
        return nameA.localeCompare(nameB);
      } else if (sortOrder === 'desc') {
        return nameB.localeCompare(nameA);
      } else {
        return 0;
      }
    });

  const handleSortChange = (selectedOrder) => {
    setSortOrder(selectedOrder);
  };

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <div>
          <input
            type="text"
            placeholder="Search"
            value={inpValue}
            onChange={(e) => setInpValue(e.target.value.toLowerCase())}
          />
          <select value={sortOrder} onChange={(e) => handleSortChange(e.target.value)}>
            <option value="default">Default</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
        {filteredItems.map((item) => (
          <div key={item._id}>
            <span>
              <i className={`${item.image}`}></i>
            </span>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button onClick={() => navigate(`/${item._id}`)}>Detail</button>
            <button onClick={() => addToWishlist(item)}>Add To Wishlist</button>
            <button onClick={() => addToBasket(item)}>Add To Card</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
